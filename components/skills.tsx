"use client";

import { motion } from "framer-motion";
import { FaJava, FaAws, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import {
  SiSpringboot,
  SiSpring,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSpringsecurity,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Spring MVC", icon: SiSpring },
  { name: "Spring Data", icon: SiSpring },
  { name: "Spring Security", icon: SiSpringsecurity },
  { name: "AWS", icon: FaAws },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "Git", icon: FaGitAlt },
  { name: "Github", icon: FaGithub },
  { name: "Docker", icon: FaDocker },
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-primary/10 hover:bg-primary/20 text-primary rounded-md md:px-4 md:py-2 md:text-sm px-2 py-1 text-xs font-medium shadow-sm hover:shadow-md transition duration-200 flex items-center gap-2"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <skill.icon size={20} />
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
