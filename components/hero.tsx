"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, BookOpen } from "lucide-react";

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

  return (
    <section className="w-full py-6 md:py-12 lg:py-16 xl:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0" />
      <motion.div
        className="px-4 md:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center space-y-8 text-left md:items-center md:text-center">
          <div className="flex justify-center overflow-visible">
            <Image
              src="https://dgblq0ba7cx3huq6.public.blob.vercel-storage.com/profile.jpg"
              alt="Danijel Mitrović"
              className="rounded-full w-32 h-32 sm:w-48 sm:h-48 z-50 shadow-lg"
              sizes="(max-width: 640px) 100vw, 192px"
              width={128}
              height={128}
            />
          </div>
          <motion.h1
            className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl/none"
            variants={nameVariants}
          >
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-purple-500 to-pink-500">
              Danijel Mitrović
            </span>
          </motion.h1>
          <motion.p
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl font-semibold text-center"
            variants={itemVariants}
          >
            Backend Engineer | Java & Spring Developer | Cloud Enthusiast
          </motion.p>
          <motion.div className="space-x-4" variants={itemVariants}>
            <Button className="rounded-full" asChild>
              <Link href="/portfolio" className="flex items-center gap-x-1">
                <Briefcase className="h-4 w-4" />
                Portfolio
              </Link>
            </Button>
            <Button
              className="bg-secondary rounded-full"
              variant="outline"
              asChild
            >
              <Link href="/blog" className="flex items-center gap-x-1">
                <BookOpen className="h-4 w-4" />
                Tech Blog
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
