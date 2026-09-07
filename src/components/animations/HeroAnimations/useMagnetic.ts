import { useEffect, useRef } from "react";

interface MagneticOptions {
  /** How much of the cursor offset the element follows, 0–1. */
  strength?: number;
  /** Distance in px from the element's center at which the pull kicks in. */
  radius?: number;
  /** Smoothing factor for the trailing motion, 0–1 (higher = snappier). */
  ease?: number;
}

/**
 * Attach to any element ref to give it a magnetic pull toward the cursor
 * when the pointer comes within `radius`, and a smooth spring back to rest
 * when it leaves. Disabled automatically for touch input and reduced-motion
 * preferences.
 */
export function useMagnetic<T extends HTMLElement>({
  strength = 0.35,
  radius = 110,
  ease = 0.15,
}: MagneticOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist < radius) {
        targetX = dx * strength;
        targetY = dy * strength;
      } else {
        targetX = 0;
        targetY = 0;
      }
    };

    const tick = () => {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      el.style.transform = `translate(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      el.style.transform = "";
    };
  }, [strength, radius, ease]);

  return ref;
}
