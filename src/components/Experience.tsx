"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOfficeBuilding, HiAcademicCap } from "react-icons/hi";

const experiences = [
  {
    role: "Frontend / Full-Stack Intern",
    company: "MSE Teknoloji",
    period: "2024",
    description:
      "Developed modern web interfaces and full-stack solutions. Worked with React, Next.js and backend API integrations.",
    icon: <HiOfficeBuilding className="w-5 h-5" />,
    side: "right" as const,
  },
  {
    role: "Software Intern",
    company: "Erikoğlu Teknoloji",
    period: "2023",
    description:
      "Gained hands-on experience in software development lifecycle. Built internal tools and contributed to team projects.",
    icon: <HiOfficeBuilding className="w-5 h-5" />,
    side: "left" as const,
  },
  {
    role: "Part-Time IT Staff",
    company: "Pamukkale University IT Department",
    period: "2022 - Present",
    description:
      "Providing technical support and maintaining university systems. Managing web infrastructure and user services.",
    icon: <HiAcademicCap className="w-5 h-5" />,
    side: "right" as const,
  },
  {
    role: "CS Committee Team Lead",
    company: "IEEE Pamukkale University",
    period: "2022 - 2023",
    description:
      "Led the Computer Science committee, organized workshops and hackathons. Mentored junior members in web development.",
    icon: <HiAcademicCap className="w-5 h-5" />,
    side: "left" as const,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-cream/50 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-green-light tracking-widest uppercase">
            My Journey
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-text-primary mt-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Work <span className="text-green-dark">Experience</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
            A timeline of my professional journey and the experiences that shaped me.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-dark via-green-light to-yellow-warm md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: exp.side === "left" ? -80 : 80, y: 30 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 * i }}
              className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                exp.side === "left" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-green-dark rounded-full border-4 border-background -translate-x-1/2 z-10 mt-8 md:mt-0 md:top-1/2 md:-translate-y-1/2" />

              {/* Content */}
              <div
                className={`ml-14 md:ml-0 md:w-[45%] ${
                  exp.side === "left" ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-cream-dark/30"
                >
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      exp.side === "left" ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-dark/10 text-green-dark flex items-center justify-center">
                      {exp.icon}
                    </div>
                    <span className="text-sm font-semibold text-yellow-warm bg-yellow-warm/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold text-text-primary"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-green-dark font-semibold text-sm mt-1">
                    {exp.company}
                  </p>
                  <p className="text-text-secondary mt-3 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
