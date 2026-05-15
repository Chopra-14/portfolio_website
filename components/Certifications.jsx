"use client";

import { motion } from "framer-motion";

export default function Certifications() {

  const certs = [
    {
      name: "Snowflake Snow Pro Associate",
      file: "/certificates/snowflake.pdf",
    },

    {
      name: "AWS Certified AI Practitioner",
      file: "/certificates/aws.pdf",
    },

    {
      name: "Microsoft Power Platform PL-600",
      file: "/certificates/microsoft.pdf",
    },

    {
      name: "IBM Introduction to Data Science",
      file: "/certificates/ibm.pdf",
    },

    {
      name: "Cisco Programming Essentials",
      file: "/certificates/cisco.pdf",
    },

    {
      name: "Oracle Gen AI",
      file: "/certificates/gen_ai_oracle.pdf",
    },

    {
      name: "Google Cloud Data Analytics",
      file: "/certificates/google_cloud_data_analytics.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center"
    >

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-purple-400 mb-6"
      >
        Certifications
      </motion.h2>

      {/* Subtitle */}
      <p className="text-gray-400 text-lg mb-14 text-center">
        Certifications and technical achievements
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">

        {certs.map((cert, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
          >

            <div className="flex flex-col gap-5">

              <h3 className="text-lg font-semibold">
                {cert.name}
              </h3>

              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-3 rounded-full text-center font-semibold transition"
              >
                View Certificate
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}