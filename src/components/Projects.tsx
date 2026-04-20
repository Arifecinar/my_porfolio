"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Taş Hukuk & Danışmanlık",
    description:
      "Kurumsal bir hukuk bürosu için tasarımı ve geliştirmesi yapılan, SEO performansı yüksek, premium kurumsal web sitesi.",
    tags: ["Next.js", "Tailwind CSS", "Corporate UI"],
    image: "/taslawfirm_mockup.png",
    githubUrl: "",
    liveUrl: "https://www.taslawfirm.com.tr/tr",
  },
  {
    title: "Full-Stack E-Ticaret Sitesi",
    description:
      "Premium kullanıcı deneyimine sahip, güvenli ödeme altyapısı ve gelişmiş ürün filtreleme seçenekleri sunan modern e-ticaret platformu.",
    tags: ["React", ".NET API", "PostgreSQL", "Tailwind CSS"],
    image: "/ecommerce_mockup.png",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "AI Tabanlı Tıbbi Görüntüleme",
    description:
      "Retina taramaları üzerinden diyabetik retinopati tespiti yapabilen, medikal verileri analiz eden yüksek doğruluk oranlı yapay zeka sistemi.",
    tags: ["Python", "Görüntü İşleme", "Deep Learning"],
    image: "/medical_ai_mockup.png",
    githubUrl: "#",
    liveUrl: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-background">
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

        {/* Projects Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -10 }}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-cream-dark/40"
            >
              {/* Image Area */}
              <div className="relative h-56 w-full overflow-hidden bg-cream flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover origin-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Fallback gradient overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cream-dark/40 text-green-dark text-xs font-bold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3
                  className="text-xl font-bold text-text-primary mb-2 line-clamp-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-cream-dark/30">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      className="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 bg-gray-light hover:bg-cream-dark text-text-primary text-sm font-semibold rounded-xl transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FaGithub className="text-lg" />
                      <span>GitHub</span>
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      className="flex flex-1 items-center justify-center gap-2 px-4 py-2.5 bg-green-dark hover:bg-green-light text-white text-sm font-semibold rounded-xl shadow-md transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span>Live Demo</span>
                      <HiExternalLink className="text-xl" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
