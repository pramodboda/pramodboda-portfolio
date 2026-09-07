import { useEffect, useRef, useState } from "react";

/**
 * Replaces the default cursor with a small dot + trailing ring. The ring
 * lags slightly behind the dot (a cheap lerp), which gives it weight — and
 * it expands/relabels itself whenever it passes over anything tagged
 * data-cursor="link". No-ops entirely on touch devices and when the user
 * prefers reduced motion.
 */
export function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;
        let raf = 0;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            setHidden(false);

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
            }

            const target = (e.target as HTMLElement)?.closest("[data-cursor]");
            setActive(!!target);
        };

        const onLeaveWindow = () => setHidden(true);

        const tick = () => {
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
            }
            raf = requestAnimationFrame(tick);
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseleave", onLeaveWindow);
        raf = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseleave", onLeaveWindow);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className={`cursor-dot ${hidden ? "is-hidden" : ""}`} />
            <div
                ref={ringRef}
                className={`cursor-ring ${active ? "is-active" : ""} ${hidden ? "is-hidden" : ""
                    }`}
            />
        </>
    );
}
