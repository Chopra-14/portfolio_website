"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiSnowflake,
} from "react-icons/si";

export default function Skills() {

  const skills = [

    {
      name: "Excel",
      icon: <FaMicrosoft size={50} />,
    },

    {
      name: "Power BI",
      icon: <FaDatabase size={50} />,
    },

    {
      name: "PowerApps",
      icon: <FaMicrosoft size={50} />,
    },

    {
      name: "SharePoint",
      icon: <FaMicrosoft size={50} />,
    },

    {
      name: "Snowflake",
      icon: <SiSnowflake size={50} />,
    },

    {
      name: "React",
      icon: <FaReact size={50} />,
    },

    {
      name: "Next.js",
      icon: <SiNextdotjs size={50} />,
    },

    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={50} />,
    },

    {
      name: "JavaScript",
      icon: <FaJs size={50} />,
    },

    {
      name: "Python",
      icon: <FaPython size={50} />,
    },

    {
      name: "MySQL",
      icon: <SiMysql size={50} />,
    },

    {
      name: "Git",
      icon: <FaGitAlt size={50} />,
    },

    {
      name: "HTML",
      icon: <FaHtml5 size={50} />,
    },

    {
      name: "CSS",
      icon: <FaCss3Alt size={50} />,
    },

  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center"
    >

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-purple-400 mb-16"
      >
        Skills
      </motion.h2>
      <p className="text-gray-400 text-lg mb-14 text-center">
  Technologies and tools I work with
</p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.08,
            }}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30 transition"
          >

            {/* Icon */}
            <div className="text-cyan-400">
              {skill.icon}
            </div>

            {/* Skill Name */}
            <h3 className="text-lg font-semibold text-center">
              {skill.name}
            </h3>

          </motion.div>

        ))}

      </div>
    </section>
  );
}