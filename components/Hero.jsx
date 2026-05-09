"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Animated Purple Glow */}
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20"
      />

      {/* Animated Cyan Glow */}
      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl"
      >

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-purple-400 text-lg mb-4"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          Konakalla Chopra <br />
          Lakshmi Sathvika
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-4xl text-gray-300 mb-6"
        >
          Frontend Developer & Data Enthusiast
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 text-lg md:text-xl leading-8 mb-10 max-w-3xl mx-auto"
        >
          Passionate about building modern responsive websites,
          creating interactive user experiences, and solving
          real-world problems through technology and data.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >

          {/* Projects Button */}
          <motion.a
            whileHover={{
              scale: 1.08,
            }}

            whileTap={{
              scale: 0.95,
            }}

  aria-label="View Projects"
  href="#projects"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full transition duration-300 text-lg font-semibold"
          >
            View Projects
          </motion.a>

          {/* Contact Button */}
          <motion.a
            whileHover={{
              scale: 1.08,
            }}

            whileTap={{
              scale: 0.95,
            }}

  aria-label="Contact Me"
  href="#contact"
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full transition duration-300 text-lg font-semibold"
          >
            Contact Me
          </motion.a>

        </motion.div>
      </motion.div>
    </section>
  );
}