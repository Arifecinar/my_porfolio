"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiDeviceMobile, HiServer } from "react-icons/hi";

const services = [
  {
    icon: <HiCode className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Modern, responsive and performant web applications built with React, Next.js, and Node.js. Pixel-perfect UI with smooth animations.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    color: "from-green-dark to-green-light",
  },
  {
    icon: <HiDeviceMobile className="w-8 h-8" />,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications with native feel and performance using React Native. Beautiful UI, seamless UX.",
    tags: ["React Native", "Expo", "Mobile UI"],
    color: "from-yellow-warm to-accent",
  },
  {
    icon: <HiServer className="w-8 h-8" />,
    title: "Full-Stack Solutions",
    description:
      "End-to-end development with robust backends, RESTful APIs, and PostgreSQL databases. Scalable architecture for growing businesses.",
    tags: ["PostgreSQL", "REST API", ".NET", "Full-Stack"],
    color: "from-green-light to-green-muted",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-green-light tracking-widest uppercase">
            What I Do
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-text-primary mt-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Services I <span className="text-green-dark">Offer</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
            Transforming ideas into digital reality with modern tools and
            creative solutions.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-cream-dark/50 overflow-hidden"
            >
              {/* Gradient top bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3
                className="text-xl font-bold text-text-primary mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-cream text-green-dark border border-cream-dark/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-cream to-cream-dark opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
