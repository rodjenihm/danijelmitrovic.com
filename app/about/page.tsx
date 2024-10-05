"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Coffee,
  Server,
  Database,
  Briefcase,
  BookOpen,
  Award,
} from "lucide-react";
import Link from "next/link";

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

export default function AboutPage() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-12 md:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          variants={itemVariants}
        >
          About Me
        </motion.h1>

        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Who I Am</h2>
          <p className="text-muted-foreground">
            Hello! My name is Danijel Mitrovic, a passionate Backend Engineer
            with a focus on Java and the Spring Framework. With several years of
            experience in the field, I've developed a deep understanding of
            building robust, scalable, and efficient server-side applications.
          </p>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <Coffee className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-semibold">Java & Spring</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert in Java and Spring ecosystem
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <Server className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-semibold">Cloud Technologies</h3>
                  <p className="text-sm text-muted-foreground">
                    Experienced with AWS Cloud services
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <Database className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-semibold">Databases</h3>
                  <p className="text-sm text-muted-foreground">
                    Experience with PostgreSQL, MongoDB, and Redis
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Professional Journey</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Briefcase className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="font-semibold">
                      Bloxico Software Solutions
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      December 2020 - Present
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p className="text-justify hyphens-auto">
                    I began my journey at Bloxico as an intern, where I
                    contributed to the development of various projects using
                    Java and Spring Boot. This initial role helped me solidify
                    my technical foundation and gain hands-on experience with
                    Git for version control, as well as effective team
                    collaboration.
                  </p>
                  <p className="text-justify hyphens-auto">
                    Following the internship, I transitioned into a full-time
                    Backend Engineer position. In this capacity, I have been
                    involved in the full software development lifecycle,
                    focusing primarily on backend development. I have worked
                    extensively with technologies such as Java, Spring Boot,
                    PostgreSQL, and Apache Cassandra to deliver scalable and
                    high-performing solutions. One of my notable contributions
                    has been the development of an in-house Identity and Access
                    Management (IAM) solution leveraging the Spring Security
                    OAuth library, enhancing the security and efficiency of our
                    systems.
                  </p>
                  <p className="text-justify hyphens-auto">
                    Additionally, I have integrated KYC services from providers
                    like Onfido and SumSub, enabling seamless identity
                    verification within our applications. My role also involves
                    exploring and experimenting with new technologies, such as
                    Web3, to ensure that we stay at the forefront of
                    technological innovation. Throughout my time at Bloxico, I
                    have consistently sought to improve both the systems we
                    build and my own technical skills.
                  </p>
                </div>
                <div className="space-y-2 mt-4">
                  <div>
                    <h4 className="font-medium">Medior Backend Engineer</h4>
                    <p className="text-sm text-muted-foreground">
                      October 2022 - Present
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Junior Backend Engineer</h4>
                    <p className="text-sm text-muted-foreground">
                      March 2021 - October 2022
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Backend Developer Intern</h4>
                    <p className="text-sm text-muted-foreground">
                      December 2020 - February 2021
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Education & Certifications</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="flex items-center space-x-4 p-6">
                <BookOpen className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-semibold">
                    Electrical Engineering Studies
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    University of Belgrade School of Electrical Engineering |
                    October 2010 - September 2016
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-semibold">Continuous Learning</h2>
          <p className="text-muted-foreground">
            While I didn't complete my formal degree, my passion for technology
            has driven me to continuously learn and grow. I've honed my skills
            through hands-on experience, online courses, and industry
            certifications. This self-driven approach to learning has been
            instrumental in my professional success and keeps me at the
            forefront of backend development technologies.
          </p>
        </motion.section>

        <motion.div variants={itemVariants} className="text-center">
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
