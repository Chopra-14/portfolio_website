"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center"
    >

      <motion.h2
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="text-4xl md:text-5xl font-bold text-purple-400 mb-16"
>
  Experience
</motion.h2>

<p className="text-gray-400 text-lg mb-14 text-center">
  My professional internship experience
</p>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-lg shadow-purple-500/10"
      >

        <h3 className="text-3xl font-bold mb-4">
          Data Specialist Intern
        </h3>

        <p className="text-cyan-400 mb-6">
          Technical Hub Private Limited | May 2025 – June 2025
        </p>

        <ul className="space-y-4 text-gray-400 leading-8">

          <li>
            • Performed data analysis and reporting using Excel dashboards and pivot tables.
          </li>

          <li>
            • Developed workflow automation using Power Automate.
          </li>

          <li>
            • Utilized SharePoint for collaboration and document management.
          </li>

          <li>
            • Built integrated data tracking and visualization systems.
          </li>

        </ul>

      </motion.div>
    </section>
  );
}