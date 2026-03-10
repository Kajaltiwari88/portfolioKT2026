"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Scene from "@/components/three/Scene";

export default function Hero() {
  const name = "Kajal";

  return (
    <section className="relative h-screen w-full bg-[radial-gradient(ellipse_at_top,#1e1b4b,#000000)] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Scene />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1 className="text-6xl md:text-7xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          {name.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-xl text-gray-300"
        >
          <TypeAnimation
            sequence={[
              "Creative Frontend Developer",
              2000,
              "React & Next.js Specialist",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          className="mt-10 px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-lg shadow-purple-800/50 cursor-pointer"
          onClick={() => {
            const section = document.getElementById("projects");
            section?.scrollIntoView({ behavior: "smooth" });
            window.history.replaceState(null, "", "/");
          }}

        >
          View My Work
        </motion.button>
      </div>
    </section>
  );
}
