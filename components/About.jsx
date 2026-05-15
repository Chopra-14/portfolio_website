"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >

        {/* Left Side Image */}
<div className="flex justify-center items-center">
  <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20">

    <Image
      src="/profile.jpg"
      alt="Konakalla Chopra Lakshmi Sathvika Profile Picture"
      fill
      priority
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover object-[center_20%]"
    />

  </div>
</div>

        {/* Right Side Content */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-purple-400">
            About Me
          </h2>

          <p className="text-gray-400 text-lg leading-8">

  I am a passionate Data Analytics enthusiast and AI & ML student with a strong interest in transforming data into meaningful insights through visualization and intelligent solutions.
</p>

          <p className="text-gray-400 text-lg leading-8 mb-6">
            I enjoy working on modern web applications, analytics dashboards, machine learning projects, and enterprise technologies. My experience includes Power BI, Excel dashboards, SharePoint integration, workflow automation, and frontend development using React and Next.js.
          </p>

          <p className="text-gray-400 text-lg leading-8">
            I continuously explore new technologies and strive to build impactful, user-friendly, and data-driven solutions that solve real-world problems.
          </p>

        </div>
      </motion.div>
    </section>
  );
}