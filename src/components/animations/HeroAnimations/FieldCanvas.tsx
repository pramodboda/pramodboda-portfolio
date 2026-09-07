import { useEffect, useRef } from "react";

interface Dot {
    ox: number; // origin x (rest position)
    oy: number; // origin y
    x: number; // current x
    y: number; // current y
    vx: number;
    vy: number;
}

interface Ripple {
    x: number;
    y: number;
    born: number; // performance.now() timestamp
}

const BASE_COLOR: [number, number, number] = [139, 147, 166]; // muted slate
const ACCENT_COLOR: [number, number, number] = [255, 180, 84]; // signal amber

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * Full-bleed canvas that renders a grid of points behaving like a taut
 * surface: the cursor pushes points away from itself (a "bulge"), and fast
 * cursor movement launches a ripple that travels outward and nudges points
 * as it passes through them. Both effects settle back to rest via a simple
 * spring, so the whole thing feels physical rather than scripted.
 */
export function FieldCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const parent = canvas?.parentElement;
        if (!canvas || !parent) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        let dots: Dot[] = [];
        let ripples: Ripple[] = [];
        let width = 0;
        let height = 0;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        let raf = 0;
        let lastRippleAt = 0;

        const mouse = {
            x: -9999,
            y: -9999,
            prevX: -9999,
            prevY: -9999,
            active: false,
        };

        // Physics tuning — kept in one place so it's easy to taste-test.
        const MAX_PUSH = 16; // how far a point can bulge, in px
        const SPRING_K = 0.08; // how hard it pulls back to rest
        const DAMPING = 0.82; // velocity decay per frame
        const RIPPLE_SPEED = 0.55; // px per ms the ripple ring expands
        const RIPPLE_LIFE = 900; // ms
        const RIPPLE_WIDTH = 34; // px, thickness of the ring's effect zone

        const influenceRadius = () => Math.max(140, Math.min(width, height) * 0.22);

        function buildGrid() {
            const rect = parent!.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            canvas!.width = width * dpr;
            canvas!.height = height * dpr;
            canvas!.style.width = `${width}px`;
            canvas!.style.height = `${height}px`;
            ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

            const spacing = width < 640 ? 34 : width < 1024 ? 40 : 46;
            const cols = Math.ceil(width / spacing) + 1;
            const rows = Math.ceil(height / spacing) + 1;
            const offsetX = (width - (cols - 1) * spacing) / 2;
            const offsetY = (height - (rows - 1) * spacing) / 2;

            dots = [];
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const ox = offsetX + c * spacing;
                    const oy = offsetY + r * spacing;
                    dots.push({ ox, oy, x: ox, y: oy, vx: 0, vy: 0 });
                }
            }
        }

        function drawStatic() {
            ctx!.clearRect(0, 0, width, height);
            for (const dot of dots) {
                ctx!.beginPath();
                ctx!.fillStyle = "rgba(139, 147, 166, 0.16)";
                ctx!.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
                ctx!.fill();
            }
        }

        function registerPointer(clientX: number, clientY: number) {
            const rect = parent!.getBoundingClientRect();
            mouse.prevX = mouse.x;
            mouse.prevY = mouse.y;
            mouse.x = clientX - rect.left;
            mouse.y = clientY - rect.top;
            mouse.active = true;

            const speed = Math.hypot(mouse.x - mouse.prevX, mouse.y - mouse.prevY);
            const now = performance.now();
            if (speed > 38 && now - lastRippleAt > 220) {
                ripples.push({ x: mouse.x, y: mouse.y, born: now });
                lastRippleAt = now;
            }
        }

        const onMouseMove = (e: MouseEvent) => registerPointer(e.clientX, e.clientY);
        const onTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            if (touch) registerPointer(touch.clientX, touch.clientY);
        };
        const onLeave = () => {
            mouse.active = false;
            mouse.x = -9999;
            mouse.y = -9999;
        };

        function step() {
            const now = performance.now();
            const radius = influenceRadius();
            ripples = ripples.filter((r) => now - r.born < RIPPLE_LIFE);

            ctx!.clearRect(0, 0, width, height);

            for (const dot of dots) {
                // 1) Persistent bulge target while the cursor is nearby.
                let targetX = dot.ox;
                let targetY = dot.oy;

                if (mouse.active) {
                    const dx = dot.ox - mouse.x;
                    const dy = dot.oy - mouse.y;
                    const dist = Math.hypot(dx, dy);
                    if (dist < radius) {
                        const falloff = 1 - dist / radius;
                        const angle = Math.atan2(dy, dx);
                        targetX += Math.cos(angle) * falloff * MAX_PUSH;
                        targetY += Math.sin(angle) * falloff * MAX_PUSH;
                    }
                }

                // 2) Transient ripple impulses passing through this point.
                for (const ripple of ripples) {
                    const age = now - ripple.born;
                    const ringRadius = age * RIPPLE_SPEED;
                    const ddx = dot.ox - ripple.x;
                    const ddy = dot.oy - ripple.y;
                    const dist = Math.hypot(ddx, ddy);
                    const diff = Math.abs(dist - ringRadius);
                    if (diff < RIPPLE_WIDTH) {
                        const strength =
                            (1 - diff / RIPPLE_WIDTH) * (1 - age / RIPPLE_LIFE) * 5.5;
                        const angle = Math.atan2(ddy, ddx);
                        dot.vx += Math.cos(angle) * strength;
                        dot.vy += Math.sin(angle) * strength;
                    }
                }

                // Spring toward the target, integrate velocity.
                const ax = (targetX - dot.x) * SPRING_K;
                const ay = (targetY - dot.y) * SPRING_K;
                dot.vx = (dot.vx + ax) * DAMPING;
                dot.vy = (dot.vy + ay) * DAMPING;
                dot.x += dot.vx;
                dot.y += dot.vy;

                // Color / size respond to proximity so the glow reads clearly.
                const distToMouse = mouse.active
                    ? Math.hypot(dot.ox - mouse.x, dot.oy - mouse.y)
                    : radius;
                const t = mouse.active ? Math.max(0, 1 - distToMouse / radius) : 0;

                const r = lerp(BASE_COLOR[0], ACCENT_COLOR[0], t) | 0;
                const g = lerp(BASE_COLOR[1], ACCENT_COLOR[1], t) | 0;
                const b = lerp(BASE_COLOR[2], ACCENT_COLOR[2], t) | 0;
                const alpha = lerp(0.14, 0.75, t);
                const size = lerp(1.4, 3.2, t);

                ctx!.beginPath();
                ctx!.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                ctx!.arc(dot.x, dot.y, size, 0, Math.PI * 2);
                ctx!.fill();
            }

            raf = requestAnimationFrame(step);
        }

        buildGrid();

        const resizeObserver = new ResizeObserver(() => buildGrid());
        resizeObserver.observe(parent);

        if (reduceMotion) {
            // No physics, no listeners — a calm, static field.
            drawStatic();
        } else {
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("touchmove", onTouchMove, { passive: true });
            window.addEventListener("mouseleave", onLeave);
            raf = requestAnimationFrame(step);
        }

        return () => {
            cancelAnimationFrame(raf);
            resizeObserver.disconnect();
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    return <canvas ref={canvasRef} className="field-canvas" aria-hidden="true" />;
}
