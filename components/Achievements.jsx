"use client";

import { motion } from "framer-motion";

export default function Achievements() {

  const achievements = [

  {
    title: "Winner — Myntra Hacker Ramp",
    desc: "National Level WeForShe 2025 Winner",
    file: "/achievements/myntra.png",
  },

  {
    title: "Adobe India Hackathon",
    desc: "Round 1 Coding & MCQ Participant",
    file: "/achievements/adobe.pdf",
  },
  {
  title: "AlgoUniversity Technology Fellowship",

  desc: "Qualified Stage 1 and ranked in the Top 8% nationwide among 250,000 participants.",

  file: "/achievements/algouniversity.png",
},

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
        Achievements
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl">

        {achievements.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 flex flex-col justify-between min-h-[260px]"
          >

           <div className="flex flex-col gap-5">

  <h3 className="text-2xl font-bold">
    {item.title}
  </h3>

  <p className="text-gray-400">
    {item.desc}
  </p>

  <a
    href={item.file}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-3 rounded-full text-center font-semibold transition"
  >
    View Proof
  </a>

</div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}