"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
<p className="text-gray-400 text-lg mb-14 text-center">
  Some of my featured work and projects
</p>
export default function Projects() {

  const projects = [

    {
  title: "Amazon Prime Video Analytics Dashboard",

  description:
    "An interactive analytics dashboard built using Power BI to analyze Amazon Prime Video content data, including genres, ratings, release years, countries, and show trends through advanced visualizations and business insights.",

  tech: [
    "Power BI",
    "Data Analytics",
    "Excel",
    "Dashboarding",
  ],

      github:
        "https://github.com/Chopra-14/amazon_prime.git",
    },

    {
      title: "Job Application Tracker",
      description:
        "A smart dashboard system to track job applications, interview progress, statuses, and analytics using automation and visualization tools.",

      tech: [
        "Excel",
        "Power Automate",
        "SharePoint",
        "Snowflake",
      ],

      github:
        "https://github.com/Chopra-14/job-application-tracker",
    },

    {
      title: "Customer Feedback Sentiment Analysis",
      description:
        "An NLP-based machine learning project that classifies customer feedback into positive, negative, and neutral sentiments for business insights.",

      tech: [
        "Python",
        "NLP",
        "Machine Learning",
      ],

      github:
        "https://github.com/Chopra-14/customer-feedback-sentiment-analysis",
    },

  ];

  return (
    <section
      id="projects"
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
  Projects
</motion.h2>

<p className="text-gray-400 text-lg mb-14 text-center">
  Some of my featured work and projects
</p>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">

        {projects.map((project, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}

            viewport={{ once: true }}

            whileHover={{
              scale: 1.03,
            }}

            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30 transition flex flex-col justify-between"
          >

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-7 mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-8">

              {project.tech.map((item, i) => (

                <span
                  key={i}
                  className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/20"
                >
                  {item}
                </span>

              ))}

            </div>

            {/* GitHub Button */}
            <a
              href={project.github}
              target="_blank"
               rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-2xl transition"
            >

              <FaGithub size={22} />

              View Project

            </a>

          </motion.div>

        ))}

      </div>
    </section>
  );
}