"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-light/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-muted/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cream-dark/40 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream border border-cream-dark mb-6"
            >
              <span className="w-2 h-2 bg-green-light rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-dark">
                Available for freelance work
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-text-primary">Hey There,</span>
              <br />
              <span className="text-text-primary">I&apos;m </span>
              <span className="relative inline-block">
                <span className="relative z-10 text-green-dark">Arife</span>
                <motion.span
                  className="absolute bottom-1 left-0 w-full h-3 bg-yellow-warm/40 -z-0 rounded-sm"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  style={{ originX: 0 }}
                />
              </span>
              <span className="text-yellow-warm">.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg md:text-xl text-gray-dark font-medium mb-4"
            >
              Computer Engineering Student |{" "}
              <span className="text-green-dark font-semibold">
                Frontend & Full-Stack Developer
              </span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg text-text-secondary max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I build user-centric web applications and AI-powered projects
              that blend clean design with cutting-edge technology. Let&apos;s
              craft something extraordinary together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-green-dark text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-green-dark text-green-dark font-semibold rounded-full hover:bg-green-dark hover:text-white transition-all"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { number: "10+", label: "Projects" },
                { number: "4+", label: "Experience" },
                { number: "5+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-2xl md:text-3xl font-bold text-green-dark"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-sm text-gray-dark">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Abstract shapes / avatar area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-green-muted/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border-2 border-dashed border-yellow-warm/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Center circle with initials */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-green-dark to-green-light flex items-center justify-center shadow-2xl">
                <span
                  className="text-6xl md:text-7xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  AÇ
                </span>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-2 right-8 px-3 py-1.5 bg-white rounded-full shadow-lg text-sm font-medium text-green-dark"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                React.js ⚛️
              </motion.div>
              <motion.div
                className="absolute bottom-8 -left-4 px-3 py-1.5 bg-white rounded-full shadow-lg text-sm font-medium text-green-dark"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Next.js 🚀
              </motion.div>
              <motion.div
                className="absolute bottom-0 right-4 px-3 py-1.5 bg-white rounded-full shadow-lg text-sm font-medium text-green-dark"
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                TypeScript 💻
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-green-dark/40 flex items-start justify-center p-1.5"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-green-dark/60 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
