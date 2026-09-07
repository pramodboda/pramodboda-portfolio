// // Hero.tsx
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

// export default function Hero() {
//   return (
//     <Box id="top" component="section" sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 10 } }}>
//       <Grid container spacing={{ xs: 6, md: 4 }} sx={{ alignItems: "center" }}>
//         <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 2, md: 1 } }}>
//           <HeroLeft />
//         </Grid>
//         <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 1, md: 2 } }}>
//           <HeroRight />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { FieldCanvas } from "../../components/animations/HeroAnimations/FieldCanvas";
import { CustomCursor } from "../../components/animations/HeroAnimations/CustomCursor";
import { useMagnetic } from "../../components/animations/HeroAnimations/useMagnetic";
import "../../components/animations/HeroAnimations/HeroSection.css";

/**
 * Hero section for a Senior Frontend / Full-Stack portfolio.
 *
 * The mouse doesn't just move a cursor — it presses into a field of light
 * points behind the content (they bulge away and glow), and fast movement
 * sends a physical ripple through the grid. The CTAs are magnetic, and a
 * live coordinate readout ties the whole thing to "an instrument that
 * responds to you" rather than a passive background effect.
 *
 * Swap the copy in the JSX below for your own name / role / statement.
 */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Each CTA gets its own subtle magnetic pull toward the cursor.
  const workRef = useMagnetic<HTMLAnchorElement>({ strength: 0.4, radius: 90 });
  const contactRef = useMagnetic<HTMLAnchorElement>({ strength: 0.35, radius: 80 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    // Skip the readout on touch devices — there's no hovering cursor to report.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let pending: { x: number; y: number } | null = null;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      pending = {
        x: Math.round(e.clientX - rect.left),
        y: Math.round(e.clientY - rect.top),
      };
      // Throttle React state updates to one per frame.
      if (!raf) {
        raf = requestAnimationFrame(() => {
          if (pending) setCoords(pending);
          raf = 0;
        });
      }
    };

    section.addEventListener("mousemove", onMove);
    return () => {
      section.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" ref={sectionRef}>
      <FieldCanvas />
      <CustomCursor />

      {/* <div className="hero-content">
        <p className="hero-kicker">Frontend engineering, made tactile</p>
        <h1 className="hero-title">Alex Rivera</h1>
        <p className="hero-role">Senior Frontend &amp; Full-Stack Engineer</p>
        <p className="hero-statement">
          I build interfaces where motion carries meaning — spending as much
          care on how something feels to touch as on how it's built
          underneath.
        </p>

        <div className="hero-actions">
          <a
            ref={workRef}
            href="#work"
            data-cursor="link"
            className="hero-cta hero-cta--primary"
          >
            View selected work
          </a>
          <a
            ref={contactRef}
            href="#contact"
            data-cursor="link"
            className="hero-cta hero-cta--ghost"
          >
            Get in touch
          </a>
        </div>
      </div> */}

      <div className="hero-content">
        <Box id="top" component="section" sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 10 } }}>
          <Grid container spacing={{ xs: 6, md: 4 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }} sx={{ order: { xs: 2, md: 1 } }}>
              <HeroLeft />
            </Grid>
            <Grid size={{ xs: 12, md: 5 }} sx={{ order: { xs: 1, md: 2 } }}>
              <HeroRight />
            </Grid>
          </Grid>
        </Box>
      </div>

      <div className="hero-readout" aria-hidden="true">
        <span>x {coords.x.toString().padStart(4, "0")}</span>
        <span>y {coords.y.toString().padStart(4, "0")}</span>
      </div>
    </section>
  );
}

export default HeroSection;

