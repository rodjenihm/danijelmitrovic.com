"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const timelineEvents = [
  {
    title: "Medior Backend Engineer",
    company: "Bloxico Software Solutions",
    date: "October 2022 - Present",
    description: "Advanced backend development and system architecture.",
  },
  {
    title: "Junior Backend Engineer",
    company: "Bloxico Software Solutions",
    date: "March 2021 - October 2022",
    description: "Full-stack development with a focus on Java and Spring Boot.",
  },
  {
    title: "Backend Developer Intern",
    company: "Bloxico Software Solutions",
    date: "December 2020 - February 2021",
    description:
      "Contributed to projects using Java and Spring Boot, learned version control with Git.",
  },
  // Add more career events as needed
];

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
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function CareerTimeline() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="max-w-screen-lg px-4 md:px-6 mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Professional Journey
        </motion.h2>
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="mb-8 flex justify-between items-center w-full"
              variants={itemVariants}
            >
              <Card
                className={`w-5/12 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">{event.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {event.company}
                  </p>
                  <p className="text-sm font-medium mb-2">{event.date}</p>
                </CardContent>
              </Card>
              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
