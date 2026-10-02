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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: DURATION.base, ease: EASE_OUT, delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
