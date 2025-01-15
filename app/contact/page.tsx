"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, X } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 lg:py-32 bg-background min-h-[calc(100vh-12rem)]"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="max-w-2xl mx-auto text-center space-y-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            variants={itemVariants}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            variants={itemVariants}
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
          <motion.div className="space-y-6" variants={itemVariants}>
            <Button
              asChild
              className="w-full sm:w-auto text-lg py-6 px-8 border-2 border-primary"
            >
              <a
                href="mailto:danijel.mitrovic.1991@gmail.com"
                aria-label="Send email"
              >
                <Mail className="mr-3 h-5 w-5" aria-hidden="true" />
                Email Me
              </a>
            </Button>
            <div className="flex justify-center space-x-6 mt-8">
              {[
                {
                  icon: Github,
                  href: "https://github.com/rodjenihm",
                  label: "GitHub profile",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/danijel-mitrović",
                  label: "LinkedIn profile",
                },
                {
                  icon: X,
                  href: "https://x.com/dan_mitrovic_91",
                  label: "X profile",
                },
              ].map(({ icon: Icon, href, label }) => (
                <Button
                  key={href}
                  variant="ghost"
                  size="lg"
                  asChild
                  className="hover:text-primary transition-colors duration-200"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon
                      className="h-5 w-5 md:h-6 md:w-6"
                      aria-hidden="true"
                    />
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
