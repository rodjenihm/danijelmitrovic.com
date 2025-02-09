"use client";

import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Github,
  X,
  Coffee,
  Database,
  Server,
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
      <div className="container px-4 md:px-6 mx-auto max-w-screen-lg">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Who I Am</h2>
            <p className="text-muted-foreground">
              Hello! My name is Danijel Mitrovic, a passionate Backend Engineer
              with a focus on Java and the Spring Framework. With several years
              of experience in the field, I've developed a deep understanding of
              building robust, scalable, and efficient server-side applications.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">My Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkExperience() {
  return (
    <section className="w-full bg-background">
      <div className="max-w-screen-lg px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute transform -translate-x-1/2 w-1 h-full bg-primary" />

          <div className="mb-10 flex justify-between items-start w-full last:mb-0">
            {/* Timeline node */}
            <div className="absolute transform -translate-x-1/2 translate-y-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-background" />
            </div>
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="px-6 bg-transparent border-none">
                <div className="flex items-center space-x-4 mb-4">
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
      <div className="container px-4 md:px-6 max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-primary/10 hover:bg-primary/20 text-primary rounded-md md:px-4 md:py-2 md:text-sm px-2 py-1 text-xs font-medium shadow-sm hover:shadow-md transition duration-200 flex items-center gap-2"
            >
              <skill.icon size={20} />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GetInTouch() {
  return (
    <section className="w-full bg-background max-w-screen-lg mx-auto">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a question or want to work together? Feel free to reach out!
          </p>
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
          </div>
        </div>
      </div>
    </section>
  );
}
