"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
