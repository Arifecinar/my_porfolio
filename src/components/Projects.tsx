"use client";

import { useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce web application with product management, cart functionality, and secure checkout. Built with React frontend and .NET backend API.",
    tags: ["React", ".NET", "REST API", "SQL"],
    gradient: "from-green-dark to-green-light",
    emoji: "🛒",
  },
  {
    title: "Diabetic Retinopathy Detection",
    description:
      "AI-powered medical imaging system that detects diabetic retinopathy from retinal images using computer vision and deep learning techniques.",
    tags: ["Python", "Computer Vision", "Deep Learning", "TensorFlow"],
    gradient: "from-yellow-warm to-accent",
    emoji: "👁️",
  },
  {
    title: "Mobile Object Counter",
    description:
      "Real-time object counting mobile application using YOLO model for accurate product detection and counting via camera feed.",
    tags: ["React Native", "YOLO", "Python", "Mobile"],
    gradient: "from-green-light to-green-muted",
    emoji: "📱",
  },
  {
    title: "Blog & CMS Platform",
    description:
      "Modern blog platform with content management system, markdown support, SEO optimization, and responsive design for writers and readers.",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "CMS"],
    gradient: "from-green-dark to-yellow-warm",
    emoji: "✍️",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="card-3d"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 border border-cream-dark/30 cursor-pointer"
      >
        {/* Card Header / Image Area */}
        <div
          className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
        >
          <motion.span
            className="text-6xl"
            animate={isHovered ? { scale: 1.3, rotate: 10 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.emoji}
          </motion.span>

          {/* Overlay pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white rounded-lg rotate-45" />
          </div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white text-green-dark flex items-center justify-center shadow-lg"
            >
              <HiExternalLink className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white text-green-dark flex items-center justify-center shadow-lg"
            >
              <HiCode className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3
            className="text-xl font-bold text-text-primary mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full bg-cream text-green-dark border border-cream-dark/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-green-light tracking-widest uppercase">
            Portfolio
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-text-primary mt-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            My Latest <span className="text-green-dark">Works</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
            A curated selection of projects that showcase my skills in web
            development, AI, and mobile applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
