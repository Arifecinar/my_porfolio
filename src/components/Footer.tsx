"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiMail, HiArrowRight } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* CTA Section */}
      <div className="py-24 md:py-32 bg-green-dark relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-green-light/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-yellow-warm/10 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-green-muted tracking-widest uppercase">
              Get in Touch
            </span>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s make something{" "}
              <span className="text-yellow-warm">amazing</span> together.
            </h2>
            <p className="mt-6 text-green-muted text-lg max-w-xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s
              discuss how I can help bring your ideas to life.
            </p>
          </motion.div>

          {/* Contact actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="mailto:arifecinar226@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-yellow-warm text-green-deeper font-bold rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiMail className="w-5 h-5" />
              Say Hello
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Email display */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-green-muted/80 text-sm"
          >
            arifecinar226@gmail.com
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <motion.a
              href="https://www.linkedin.com/in/arife-%C3%A7%C4%B1nar-35a6a5233/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedinIn className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com/Arifecinar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-green-deeper py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-green-muted/60 text-sm">
            © {new Date().getFullYear()} Arife Çınar. All rights reserved.
          </p>
          <p className="text-green-muted/60 text-sm">
            Crafted with 💛 and lots of coffee ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
