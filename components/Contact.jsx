"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-center"
    >

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-purple-400 mb-8"
      >
        Contact Me
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-400 text-lg md:text-xl max-w-3xl leading-8 mb-12"
      >
        I’m always open to discussing new opportunities,
        collaborations, creative ideas, and exciting projects.
        Feel free to connect with me anytime.
      </motion.p>

      {/* Social Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-6"
      >

        {/* Email */}
        <a
  aria-label="Send Email"
  href="mailto:sathvikakonakalla14@gmail.com"
          className="flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl transition text-lg font-semibold"
        >
          <FaEnvelope size={22} />
          Email Me
        </a>

        {/* GitHub */}
        <a
         aria-label="Visit GitHub Profile"
          href="https://github.com/Chopra-14"
          target="_blank"
           rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-white/10 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 px-8 py-4 rounded-2xl transition text-lg font-semibold"
        >
          <FaGithub size={22} />
          GitHub
        </a>

        {/* LinkedIn */}
        <a
  aria-label="Visit LinkedIn Profile"
          href="https://www.linkedin.com/in/chopra-lakshmi-sathvika-konakalla-884071291/"
          target="_blank"
           rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-4 rounded-2xl transition text-lg font-semibold"
        >
          <FaLinkedin size={22} />
          LinkedIn
        </a>

      </motion.div>
    </section>
  );
}