
import { motion } from "motion/react";

import { GoHeartFill } from "react-icons/go";


export default function HeartRotate() {
  return (<motion.div
    animate={{ rotateY: 360 }}
    transition={{
      duration: 0.70,
      repeat: Infinity,
      ease: [0.87, 0, 0.13, 1] // easeInOutExpo from https://easings.net/easings.net
    }}
    style={{
      //   fontSize: "50px",
      fontSize: "1.2rem",
      display: "inline-block",
      color: "red"
    }}
  >
    {/* ❤️ */}
    <GoHeartFill />

  </motion.div>)

}