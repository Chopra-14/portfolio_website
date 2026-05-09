"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {

  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);

  const y2 = useTransform(scrollY, [0, 1000], [0, -300]);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">

      {/* Purple Layer */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"
      />

      {/* Cyan Layer */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full"
      />

      {/* Center Glow */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-fuchsia-500 opacity-10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"
      />

    </div>
  );
}