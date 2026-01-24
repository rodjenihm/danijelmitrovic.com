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
      "Senior Backend Engineer developing high-traffic iGaming platform services.",
    description: `I continued my professional growth by joining TwogNation as a Senior Backend Engineer. In this role, I am developing and maintaining the backend services for a high-traffic iGaming platform using Java and the Spring Framework. My responsibilities include deploying and managing applications on AWS ECS with Fargate, ensuring high availability and scalability. I utilize Amazon Aurora for managing and persisting application data, and Redis for caching to improve performance. My role also involves integrating with various payment processors and KYC providers to ensure secure transactions and compliance with Anti-Money Laundering (AML) regulations. To maintain system health and performance, I utilize Prometheus and Grafana for monitoring and log analysis, allowing for proactive issue resolution and system optimization.`,
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
          <div className="absolute left-0 top-0 w-1 h-full bg-primary" />

          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.15}>
              <div className="mb-10 relative last:mb-0">
                <div className="absolute left-[-17px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-background" />
                </div>
                <Card className="bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`h-12 w-12 rounded-full ${exp.color} flex items-center justify-center text-white font-bold text-sm`}
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
                        className="p-2 hover:bg-muted rounded-full transition-colors"
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
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
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
