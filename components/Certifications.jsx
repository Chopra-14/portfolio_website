"use client";

import { motion } from "framer-motion";

export default function Certifications() {

  const certs = [
    "Snowflake Snow Pro Associate",
    "AWS Certified AI Practitioner",
    "Microsoft Power Platform PL-600",
    "IBM Introduction to Data Science",
    "Cisco Programming Essentials in C & Python",
  ];

  return (
    <section
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center"
    >

      <motion.h2
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="text-4xl md:text-5xl font-bold text-purple-400 mb-16"
>
  Certifications
</motion.h2>

<p className="text-gray-400 text-lg mb-14 text-center">
  Certifications and technical achievements
</p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl">

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
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-lg"
          >

            {cert}

          </motion.div>

        ))}

      </div>
    </section>
  );
}