// src/components/animations/SplitTextAnimation/SplitTextAnimation


import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
};

// ====== Animation Timing Config ======
const enter = 0.4;
const hold = 2;
const exit = 0.4;

const total = enter + hold + exit;

const times = [
  0,
  enter / total,
  (enter + hold) / total,
  1,
];

const SplitTextAnimation = ({ text }: Props) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const resize = () => {
      if (!textRef.current) return;

      const textWidth = textRef.current.scrollWidth;

      if (!textWidth) return;

      // Small safety margin so the text never touches the edge.
      const availableWidth = window.innerWidth * 0.98;

      const newScale = Math.min(

        2, availableWidth / textWidth
      );

      setScale(newScale);
    };

    // Measure immediately
    resize();

    // Measure again after fonts have loaded
    document.fonts.ready.then(() => {
      resize();
    });

    // Recalculate whenever the element's size changes
    const observer = new ResizeObserver(() => {
      resize();
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    window.addEventListener("resize", resize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [text]);

  const letters = text.split("");

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        fontFamily: "BBH Bartle, sans-serif",
      }}
    >
      <motion.div
        ref={textRef}
        style={{
          display: "inline-flex",
          width: "max-content",
          transform: `scale(${scale})`,
          transformOrigin: "left center",
          whiteSpace: "nowrap",
          fontSize: "80px",
          fontWeight: 700,
        }}
      >
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{
              y: 40,
              opacity: 0,
            }}
            animate={{
              y: [40, 0, 0, -40],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: total,
              times,
              delay: i * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
              repeat: Infinity,
              repeatDelay: 0.2,
            }}
            style={{
              display: "inline-block",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default SplitTextAnimation;
