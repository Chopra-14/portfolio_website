"use client";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Purple Glow */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20"
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-purple-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Konakalla Chopra <br />
            Lakshmi Sathvika
          </h1>

          <h2 className="text-2xl md:text-4xl text-gray-300 mb-6">
            AI & ML Student | Frontend Developer
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            Passionate about frontend development, data analytics,
            enterprise technologies, and building modern responsive
            applications with impactful user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mb-8">

            {/* Projects */}
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-semibold transition"
            >
              View Projects
            </motion.a>

            {/* Resume */}
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="flex items-center gap-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full font-semibold transition"
            >
              <FaDownload />
              Resume
            </motion.a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-3xl text-gray-300">

            <a
              href="https://github.com/Chopra-14"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/chopra-lakshmi-sathvika-konakalla-884071291/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30">

            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}