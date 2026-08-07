"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type MotionSurfaceProps = {
  children: ReactNode;
  className?: string;
};

export default function MotionSurface({ children, className }: MotionSurfaceProps) {
  return (
    <motion.article
      className={className}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      {children}
    </motion.article>
  );
}
