"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "about",
    "skills",
    "projects",
    "contact",
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10"
    >

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-purple-500 cursor-pointer"
        >
          Sathvika
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">

          {navItems.map((item, index) => (

            <motion.li
              key={index}
              whileHover={{
                scale: 1.1,
                color: "#22d3ee",
              }}
            >

              <a
  href={`#${item}`}
  className="capitalize relative group"
>
  {item}

  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
</a>

            </motion.li>

          ))}

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6">

          <ul className="flex flex-col gap-6 text-lg text-gray-300">

            {navItems.map((item, index) => (

              <li key={index}>

                <a
                  href={`#${item}`}
                  className="capitalize"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>

              </li>

            ))}

          </ul>

        </div>

      )}

    </motion.nav>
  );
}