"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiGit,
  SiThreedotjs,
  SiNodedotjs,
  SiPython,
  SiDotnet,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" />, color: "#3178C6" },
  { name: "React", icon: <SiReact className="w-8 h-8" />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" />, color: "#000000" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" />, color: "#06B6D4" },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" />, color: "#4169E1" },
  { name: "React Native", icon: <TbBrandReactNative className="w-8 h-8" />, color: "#61DAFB" },
  { name: "Three.js", icon: <SiThreedotjs className="w-8 h-8" />, color: "#000000" },
  { name: "Git", icon: <SiGit className="w-8 h-8" />, color: "#F05032" },
  { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8" />, color: "#339933" },
  { name: "Python", icon: <SiPython className="w-8 h-8" />, color: "#3776AB" },
  { name: ".NET", icon: <SiDotnet className="w-8 h-8" />, color: "#512BD4" },
];

function SkillBadge({ skill }: { skill: typeof skills[number] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm border border-cream-dark/30 hover:shadow-lg transition-shadow duration-300 mx-3"
    >
      <span style={{ color: skill.color }}>{skill.icon}</span>
      <span className="text-sm font-semibold text-text-primary whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-cream/50 relative overflow-hidden">
      <div ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-6"
        >
          <span className="text-sm font-semibold text-green-light tracking-widest uppercase">
            Tech Stack
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-text-primary mt-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Skills & <span className="text-green-dark">Technologies</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Marquee Row 1 */}
        <div className="relative mb-6">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cream/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cream/80 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {[...skills, ...skills].map((skill, i) => (
              <SkillBadge key={`row1-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Marquee Row 2 - reverse */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cream/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cream/80 to-transparent z-10 pointer-events-none" />

          <div
            className="flex animate-marquee"
            style={{ animationDirection: "reverse", animationDuration: "30s" }}
          >
            {[...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, i) => (
              <SkillBadge key={`row2-${i}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
