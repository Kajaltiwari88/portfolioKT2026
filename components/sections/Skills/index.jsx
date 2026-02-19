"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Three.js", level: 70 },
    { name: "Framer Motion", level: 70 },
  ];

  const tools = [
    "Git & GitHub",
    "Vercel",
    "Redux Toolkit",
    "API Integration",
    "Responsive Design",
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 py-24 bg-linear-to-b from-black via-[#0f0f1a] to-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

        <div className="space-y-10 mb-20">
          {skills?.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-lg">{skill?.name}</span>
                <span className="text-sm text-purple-400">{skill?.level}%</span>
              </div>

              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill?.level}%` }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {tools?.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center shadow-lg hover:shadow-purple-700/30 transition"
            >
              {tool}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
