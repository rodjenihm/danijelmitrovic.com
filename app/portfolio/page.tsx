"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Github,
  X,
  Coffee,
  Database,
  Server,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FaJava, FaAws, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import {
  SiSpringboot,
  SiSpring,
  SiSpringsecurity,
  SiPostgresql,
  SiMongodb,
  SiRedis,
} from "react-icons/si";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BentoCard } from "@/components/bento-card";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  return (
    <>
      <div id="about-me" className="py-8 scroll-mt-20">
        <AboutMe />
      </div>
      <div id="work-experience" className="py-8 scroll-mt-20">
        <WorkExperience />
      </div>
      <div id="tech-stack" className="py-8 scroll-mt-20">
        <TechStack />
      </div>
      <div id="get-in-touch" className="py-8 scroll-mt-20">
        <GetInTouch />
      </div>
    </>
  );
}

function AboutMe() {
  return (
    <section className="w-full bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="space-y-12">
          <ScrollReveal>
            <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Who I Am</h2>
              <p className="text-muted-foreground">
                Hello! My name is Danijel Mitrovic, a passionate Backend
                Engineer with a focus on Java and the Spring Framework. With
                several years of experience in the field, I've developed a deep
                understanding of building robust, scalable, and efficient
                server-side applications.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">My Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <BentoCard
                  className="md:col-span-2"
                  icon={<Coffee className="h-6 w-6" />}
                  title="Java & Spring"
                  description="Expert in Java and the entire Spring ecosystem including Spring Boot, Spring MVC, Spring Data, and Spring Security."
                >
                  <div />
                </BentoCard>
                <BentoCard
                  icon={<Server className="h-6 w-6" />}
                  title="Cloud"
                  description="Experienced with AWS services including ECS, Lambda, S3, and RDS."
                >
                  <div />
                </BentoCard>
                <BentoCard
                  icon={<Database className="h-6 w-6" />}
                  title="Databases"
                  description="Proficient in PostgreSQL, MongoDB, Redis, and Cassandra."
                >
                  <div />
                </BentoCard>
                <BentoCard className="md:col-span-2">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-lg font-bold">
                      5+
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Years of Experience</p>
                      <p className="text-sm text-muted-foreground">
                        Building scalable backend systems for production workloads
                      </p>
                    </div>
                  </div>
                </BentoCard>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

const experiences = [
  {
    id: "twognation",
    company: "TwogNation",
    initials: "TN",
    color: "bg-purple-500",
    period: "June 2025 - Present",
    summary:
      "Senior Backend Engineer responsible for payment integrations, anti-fraud systems, and performance optimizations.",
    description: `As a Senior Backend Engineer at TwogNation, I develop and maintain backend services using Java, Spring Boot, and the Spring ecosystem. My main focus has been a high-traffic iGaming platform that I joined when it was just getting off the ground. My responsibilities include deploying and managing applications on AWS ECS with Fargate, ensuring high availability and scalability. I utilize Amazon Aurora for managing and persisting application data, and Redis for caching to improve performance.

I am responsible for integrating multiple payment processors into the platform, enabling seamless deposits and withdrawals. I also implemented integrations with KYC providers to ensure secure transactions and compliance with AML regulations. A key area of my work has been developing the anti-fraud system that validates withdrawal and redemption requests—analyzing user details and risk signals to either approve payouts or flag them for manual review.

I am also heavily involved in performance optimizations across the platform, including integrating read replicas into our Aurora database architecture to distribute query load and reduce latency, as well as targeted query optimizations for high-traffic endpoints. To maintain system health and identify bottlenecks, I utilize Prometheus and Grafana for monitoring and log analysis.

Beyond the core platform, I also contribute to internal tools and services. These projects have allowed me to step outside my main tech stack. I've worked with TypeScript and Node.js, and even tackled front-end tasks for internal dashboards.`,
    technologies: ["Java", "Spring", "AWS", "Aurora", "Redis", "Prometheus"],
    roles: [{ title: "Senior Backend Engineer", period: "June 2025 - Present" }],
  },
  {
    id: "bloxico",
    company: "Bloxico Software Solutions",
    initials: "BX",
    color: "bg-blue-500",
    period: "December 2020 - April 2025",
    summary:
      "Backend Engineer working on various projects with Java and Spring ecosystem.",
    description: `I began my journey at Bloxico as an intern, where I contributed to the development of various projects using Java and Spring Boot. This initial role helped me solidify my technical foundation and gain hands-on experience with Git for version control, as well as effective team collaboration.

Following the internship, I transitioned into a full-time Backend Engineer position. In this capacity, I have been involved in the full software development lifecycle, focusing primarily on backend development. I have worked extensively with technologies such as Java, Spring Boot, PostgreSQL, and Apache Cassandra to deliver scalable and high-performing solutions. One of my notable contributions has been the development of an in-house Identity and Access Management (IAM) solution leveraging the Spring Security OAuth library, enhancing the security and efficiency of our systems.

Additionally, I have integrated KYC services from providers like Onfido and SumSub, enabling seamless identity verification within our applications. My role also involves exploring and experimenting with new technologies, such as Web3, to ensure that we stay at the forefront of technological innovation. Throughout my time at Bloxico, I have consistently sought to improve both the systems we build and my own technical skills.`,
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Cassandra",
      "OAuth",
      "Web3",
    ],
    roles: [
      { title: "Medior Backend Engineer", period: "October 2022 - April 2025" },
      { title: "Junior Backend Engineer", period: "March 2021 - October 2022" },
      {
        title: "Backend Developer Intern",
        period: "December 2020 - February 2021",
      },
    ],
  },
];

function WorkExperience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="w-full bg-background">
      <div className="max-w-5xl px-4 md:px-6 mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-12">
            Work Experience
          </h2>
        </ScrollReveal>

        <div className="relative pl-8">
          <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.15}>
              <div className="mb-24 relative last:mb-0 group">
                <div className="absolute left-[-3px] top-2 w-2 h-2 rounded-full bg-primary shadow-md shadow-primary/50" />
                <Card className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <CardContent className="relative p-8">
                    <div className="flex items-center gap-5 mb-4">
                      <div
                        className={`h-14 w-14 rounded-xl ${exp.color} flex items-center justify-center text-white font-bold text-sm ring-1 ring-white/20 shadow-lg transition-transform group-hover:scale-105`}
                      >
                        {exp.initials}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{exp.company}</h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.period}
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setExpandedId(expandedId === exp.id ? null : exp.id)
                        }
                        className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                        aria-label={
                          expandedId === exp.id
                            ? "Collapse details"
                            : "Expand details"
                        }
                      >
                        <motion.div
                          animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-5 w-5" />
                        </motion.div>
                      </button>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/10 hover:border-primary/30 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <AnimatePresence>
                      {expandedId === exp.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-border">
                            <div className="space-y-4 text-sm text-muted-foreground mb-4">
                              {exp.description.split("\n\n").map((p, i) => (
                                <p key={i} className="text-justify hyphens-auto">
                                  {p}
                                </p>
                              ))}
                            </div>
                            <div className="space-y-2">
                              {exp.roles.map((role, i) => (
                                <div key={i}>
                                  <h4 className="font-medium">{role.title}</h4>
                                  <p className="text-sm text-muted-foreground">
                                    {role.period}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

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

function TechStack() {
  return (
    <section className="">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
        </ScrollReveal>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="group bg-primary/10 hover:bg-primary/20 text-primary rounded-md md:px-4 md:py-2 md:text-sm px-2 py-1 text-xs font-medium shadow-xs hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-default">
                <skill.icon
                  size={20}
                  className="transition-transform duration-200 group-hover:scale-110"
                />
                {skill.name}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GetInTouch() {
  return (
    <section className="w-full bg-background max-w-5xl mx-auto">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-lg">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <Button
                asChild
                className="text-lg py-4 px-6 border-2 border-primary"
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
                    className="group hover:text-primary transition-colors duration-200"
                  >
                    <a
                      href={href}
                      target="_blank"
                      rel="me noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon
                        className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
