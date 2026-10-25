"use client";

import { DURATION, EASE_OUT } from "@constants/motion";
import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  style?: React.CSSProperties;
};

// Fades + slides content up once when it scrolls into view
const Reveal = ({ children, delay = 0, y = 24, style }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      // Trigger as soon as the block's top edge is ~60px into view. A percentage threshold
      // never fires for blocks taller than the screen (e.g. long sections on phones).
      viewport={{ once: true, amount: "some", margin: "0px 0px -60px 0px" }}
      transition={{ duration: DURATION.base, ease: EASE_OUT, delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
