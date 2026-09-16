import { useEffect, useRef } from "react";

/**
 * Interactive character with:
 *  - cursor-tracking eyes (pupils move inside eye sockets, clamped)
 *  - subtle head/body tilt toward the cursor
 *  - looping "wind" hair sway (independent of the cursor)
 *  - fully transparent background
 *
 * Drop the 4 PNGs from /character-layers into your public/ folder
 * (e.g. public/character/hair.png, body.png, pupil_left.png, pupil_right.png)
 * and update the src paths below if you place them elsewhere.
 *
 * Source image was 735 x 976 px. All coordinates below are taken
 * directly from that image, then converted to % so the whole thing
 * stays responsive at any render size.
 */

const IMG_W = 735;
const IMG_H = 976;

// Pupil socket centers, measured directly from the source art
const EYES = {
  // left: { cx: 299, cy: 291 }, -old
  // right: { cx: 409, cy: 292 },

  left: { cx: 295, cy: 292 },
  right: { cx: 409, cy: 292 },
};
// const PUPIL_CROP = 68; // each pupil PNG is 68x68, centered on its socket
const PUPIL_CROP = 42; // each pupil PNG is 48x48, centered on its socket

// How far the pupil is allowed to travel inside the socket (px, in source-image space)
// const PUPIL_RANGE = 6;
const PUPIL_RANGE = 5;


function toPct(px, total) {
  return (px / total) * 100;
}

export default function Character() {
  const containerRef = useRef(null);
  const bodyRef = useRef(null);
  const pupilLRef = useRef(null);
  const pupilRRef = useRef(null);
  const rafRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Normalize cursor position relative to the character's own box, -1..1
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetRef.current = {
        x: Math.max(-1, Math.min(1, nx)),
        y: Math.max(-1, Math.min(1, ny)),
      };
    };

    window.addEventListener("mousemove", handleMove);

    // Smooth (lerped) animation loop so motion has a little natural lag
    const tick = () => {
      const cur = currentRef.current;
      const tgt = targetRef.current;
      cur.x += (tgt.x - cur.x) * 0.08;
      cur.y += (tgt.y - cur.y) * 0.08;


      if (pupilLRef.current) {
        pupilLRef.current.style.transform =
          `translate(${cur.x * PUPIL_RANGE}px, ${cur.y * PUPIL_RANGE}px)`;
      }
      if (pupilRRef.current) {
        pupilRRef.current.style.transform =
          `translate(${cur.x * PUPIL_RANGE}px, ${cur.y * PUPIL_RANGE}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const pupilStyle = (eye) => ({
    position: "absolute",
    width: `${toPct(PUPIL_CROP, IMG_W)}%`,
    left: `${toPct(eye.cx - PUPIL_CROP / 2, IMG_W)}%`,
    top: `${toPct(eye.cy - PUPIL_CROP / 2, IMG_H)}%`,
    pointerEvents: "none",
  });

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 420,
        aspectRatio: `${IMG_W} / ${IMG_H}`,
        margin: "0 auto",
        background: "transparent",
      }}
    >
      {/* Body + head + face (hair and pupils already cut out) — tilts toward cursor */}
      <div
        ref={bodyRef}
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: "50% 30%",
          willChange: "transform",
        }}
      >
        <img
          src="/character/body.png"
          alt=""
          style={{ width: "100%", height: "100%", display: "block" }}
          draggable={false}
        />

        {/* Pupils — move independently within the socket */}
        <img
          ref={pupilLRef}
          src="/character/pupil_left.png"
          alt=""
          style={pupilStyle(EYES.left)}
          draggable={false}
        />
        <img
          ref={pupilRRef}
          src="/character/pupil_right.png"
          alt=""
          style={pupilStyle(EYES.right)}
          draggable={false}
        />
      </div>

   
    </div>
  );
}
