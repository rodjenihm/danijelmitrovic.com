"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBlobs() {
  const shouldReduce = useReducedMotion();

  const blobs = [
    {
      className:
        "absolute -top-40 -left-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl",
      animate: shouldReduce
        ? {}
        : {
            x: [0, 30, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          },
      duration: 20,
    },
    {
      className:
        "absolute -top-20 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl",
      animate: shouldReduce
        ? {}
        : {
            x: [0, -40, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          },
      duration: 25,
    },
    {
      className:
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl",
      animate: shouldReduce
        ? {}
        : {
            x: [0, 50, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.05, 0.95, 1],
          },
      duration: 22,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={blob.className}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
