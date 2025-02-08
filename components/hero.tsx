"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        ease: "easeInOut",
        delay: 0.4,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        delay: 0.4,
      },
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
      <motion.div
        className="px-4 md:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center space-y-4 text-left md:items-center md:text-center">
          <motion.p
            className="text-sm uppercase tracking-wide text-muted-foreground"
            variants={itemVariants}
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h1
            className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none"
            variants={nameVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
              Danijel Mitrović
            </span>
          </motion.h1>
          <motion.p
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl font-semibold text-center"
            variants={itemVariants}
          >
            Java & Spring Expert | Backend Engineer | Cloud Enthusiast
          </motion.p>
          <motion.div className="space-x-4" variants={itemVariants}>
            <Button asChild>
              <Link href="/blog">Blog</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/resume.pdf">Resume</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
