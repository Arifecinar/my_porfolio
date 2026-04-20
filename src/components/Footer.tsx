"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Contact Section */}
      <div className="py-24 md:py-32 bg-green-dark relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-green-light/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-yellow-warm/10 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10" ref={ref}>
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
            <p className="mt-6 text-green-muted text-lg max-w-xl mx-auto mb-16">
              Have a project in mind or just want to say hi? Feel free to reach out to me via email or connect on social media.
            </p>
          </motion.div>

          {/* Contact Details Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto bg-green-deeper/40 p-8 rounded-3xl backdrop-blur-sm border border-white/5 shadow-2xl"
          >
            {/* Email */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-yellow-warm mb-2 border border-white/10">
                <HiMail className="w-6 h-6" />
              </div>
              <p className="text-white font-medium text-lg">Email</p>
              <a href="mailto:arifecinar226@gmail.com" className="text-green-muted hover:text-yellow-warm transition-colors">
                arifecinar226@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-yellow-warm mb-2 border border-white/10">
                <HiPhone className="w-6 h-6" />
              </div>
              <p className="text-white font-medium text-lg">Phone</p>
              <a href="tel:+905342017761" className="text-green-muted hover:text-yellow-warm transition-colors">
                +90 534 201 77 61
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-yellow-warm mb-2 border border-white/10">
                <HiLocationMarker className="w-6 h-6" />
              </div>
              <p className="text-white font-medium text-lg">Location</p>
              <p className="text-green-muted">
                Antalya, Turkey
              </p>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex items-center justify-center gap-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/arife-cinar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white/5 hover:bg-yellow-warm hover:text-green-deeper text-white flex items-center justify-center transition-all border border-white/10 hover:border-transparent shadow-lg"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedinIn className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/Arifecinar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-white/5 hover:bg-yellow-warm hover:text-green-deeper text-white flex items-center justify-center transition-all border border-white/10 hover:border-transparent shadow-lg"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-green-deeper py-6 border-t border-white/5">
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
