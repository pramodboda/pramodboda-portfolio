import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
};

// ====== Animation Timing Config - START ======
const enter = 0.4;
const hold = 2;
const exit = 0.4;

const total = enter + hold + exit;

const times = [0, enter / total, (enter + hold) / total, 1];
// ====== Animation Timing Config - END ======

const SplitTextAnimation = ({ text }: Props) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const resize = () => {
      if (!textRef.current) return;

      const parentWidth = window.innerWidth;
      const textWidth = textRef.current.scrollWidth;

      const newScale = parentWidth / textWidth;
      setScale(newScale);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [text]);

  const letters = text.split("");

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        // fontFamily: "'Fraunces', serif",
        // fontStyle: "italic",
        fontFamily: "BBH Bartle, sans-serif",
      }}
    >
      <motion.div
        ref={textRef}
        style={{
          display: "inline-flex",
          transform: `scale(${scale})`,
          transformOrigin: "left center",
          whiteSpace: "nowrap",
          fontSize: "80px", // base size (will scale)
          fontWeight: 700,
        }}
      >
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 40, opacity: 0 }}
            animate={{
              y: [40, 0, 0, -40],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              // duration: 3.8, // total cycle
              duration: total, // total cycle
              // times: [0, 0.25, 0.75, 1],  // 👈 HOLD happens between 0.25 → 0.75
              // times: [0, 0.105, 0.895, 1], // 👈 3 sec HOLD

              times: times,
              delay: i * 0.08,

              // ease: "easeInOut",
              ease: [0.25, 0.1, 0.25, 1], // custom cubic-bezier
              repeat: Infinity, // 👈 LOOP
              repeatDelay: 0.2, // small gap before restart (optional)
            }}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default SplitTextAnimation;
