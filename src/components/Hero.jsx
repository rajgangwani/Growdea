// src/components/Hero.jsx
import React from "react";
import R3FScene from "./R3FScene";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas (3d scene) — sits behind everything */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <R3FScene />
      </div>

      {/* neon blobs are optional, keep them above canvas but behind text */}
      <div className="absolute -left-24 -top-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-teal-400 to-transparent animate-pulse z-5" />
      <div className="absolute -right-24 -bottom-24 w-[380px] h-[380px] rounded-full blur-3xl opacity-30 bg-gradient-to-bl from-purple-500 to-transparent animate-pulse z-5" />

      {/* Content (text/buttons) — elevated above canvas */}
      <div className="relative z-20 max-w-6xl px-6 text-center pt-28 md:pt-32 lg:pt-36">
        <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:0.7}}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
          Innovating <span className="text-teal-400">Insilico Drug Discovery</span>
        </motion.h1>

        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2,duration:0.6}} className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
          Analogue — a silicon-accelerated platform that simulates molecular interactions and ranks candidates with lab-grade confidence.
        </motion.p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <motion.a whileHover={{scale:1.03}} className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-[#7B5CFF] text-black font-semibold">
            Explore Analogue Platform
          </motion.a>

          <motion.a whileHover={{scale:1.02}} className="inline-block px-5 py-3 rounded-lg border border-gray-700 text-gray-300">
            See Benchmarks
          </motion.a>
        </div>
      </div>
    </section>
  );
}
