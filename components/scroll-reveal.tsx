"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  className,
}: ScrollRevealProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: shouldReduce ? 0 : delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
