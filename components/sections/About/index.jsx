"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 bg-linear-to-b from-black via-[#0f0f1a] to-black text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I am a passionate Frontend Developer focused on creating immersive,
            high-performance, and visually engaging web experiences. I
            specialize in React, Next.js, animations, and modern UI systems.
          </p>

          <p className="text-gray-400 leading-relaxed">
            My goal is to blend design and development to build premium digital
            products that feel smooth, interactive, and unforgettable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl"
        >
          <div className="grid grid-cols-2 gap-8 text-center">
            <Stat number="1+" label="Years Professional Experience" />
            <Stat number="6" label="Months Industry Internship" />
            <Stat number="20+" label="UI Features Built" />
            <Stat number="100+" label="Commits & Improvements Delivered" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (!startAnimation) return;

    const end = parseInt(number);
    const duration = 800; 
    const incrementTime = 10; // faster update
    const totalSteps = duration / incrementTime;
    const step = end / totalSteps;

    let current = 0;

    const timer = setInterval(() => {
      current += step;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [number, startAnimation]);

  return (
    <motion.div
      onViewportEnter={() => setStartAnimation(true)}
      viewport={{ once: false }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <h3 className="text-3xl font-bold text-purple-400 mb-2">
        {count}
        {number.toString().includes("+") && "+"}
      </h3>
      <p className="text-gray-400 text-sm">{label}</p>
    </motion.div>
  );
}
