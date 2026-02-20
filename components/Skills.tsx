'use client';

import {
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiNestjs,
  SiSpring,
  SiPostgresql,
  SiOracle,
  SiMysql,
  SiMongodb,
  SiGit,
  SiPostman,
  SiApachejmeter,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiTypescript,
  SiTailwindcss,
  SiFigma
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "Node.js", level: "Expert", icon: <SiNodedotjs /> },
    { name: "Nest.js", level: "Expert", icon: <SiNestjs /> },
    { name: "Express.js", level: "Expert", icon: <SiExpress /> },
    { name: "React.js", level: "Expert", icon: <SiReact /> },
    { name: "Next.js", level: "Expert", icon: <SiNextdotjs /> },
    { name: "TypeScript", level: "Expert", icon: <SiTypescript /> },
    { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss /> },
    { name: "Figma", level: "Intermediate", icon: <SiFigma /> },
    { name: "Java", level: "Expert", icon: <FaJava /> },
    { name: "JavaScript", level: "Expert", icon: <SiJavascript /> },
    { name: "JSP", level: "Expert", icon: <FaJava /> },
    { name: "HTML", level: "Expert", icon: <SiHtml5 /> },
    { name: "CSS", level: "Advanced", icon: <SiCss3 /> },
    { name: "EJS", level: "Expert", icon: <SiJavascript /> },
    { name: "Spring", level: "Expert", icon: <SiSpring /> },
    { name: "PostgreSQL", level: "Expert", icon: <SiPostgresql /> },
    { name: "OracleDB", level: "Expert", icon: <SiOracle /> },
    { name: "MySQL", level: "Expert", icon: <SiMysql /> },
    { name: "MongoDB", level: "Advanced", icon: <SiMongodb /> },
    { name: "Git", level: "Expert", icon: <SiGit /> },
    { name: "SVN", level: "Expert", icon: <SiGit /> },
    { name: "Postman", level: "Expert", icon: <SiPostman /> },
    { name: "Apache JMeter", level: "Advanced", icon: <SiApachejmeter /> },
    { name: "GraphQL", level: "Beginner", icon: <SiGraphql /> },
    { name: "Docker", level: "Beginner", icon: <SiDocker /> },
    { name: "Kubernetes", level: "Beginner", icon: <SiKubernetes /> },
    { name: "Google Cloud", level: "Beginner", icon: <SiGooglecloud /> },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#0a0f1c] text-white"
      style={{ fontFamily: '"IBM Plex Mono", monospace' }}
    >
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-cyan-400">
          {"<Tech Stack />"}
        </h1>
        <p className="mt-4 text-zinc-400">
          // A collection of tools and technologies I use to build things.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#111827] border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center 
            hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 
            hover:scale-105 transition-all duration-300"
          >
            <div className="text-4xl text-cyan-400 mb-4">
              {skill.icon}
            </div>

            <h3 className="text-lg font-semibold">
              {skill.name}
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              {skill.level}
            </p>
          </div>
        ))}
      </div>

      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
}
