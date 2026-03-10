"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function Projects() {
  const projects = [
    {
      title: "3D Portfolio Website",
      description: "Interactive portfolio built using Next.js and Three.js.",
      tech: "Next.js • Three.js • Framer Motion",
      link: null,
    },
    {
      title: "Smart Travel – AI Trip Planner",
      description:
        "An intelligent travel planning system that generates optimized itineraries using AI. Includes expense tracking, map-based checkpoints, and real-time route visualization.",
      tech: "React.js with Vite • AI API • Google Maps • Tailwind",
      link: null,
    },
    {
      title: "AI Meal Generator",
      description:
        "A smart meal planning application that generates personalized dietary and regular meal plans based on user preferences and nutrition goals.",
      tech: "React • API Integration • State Management",
      link: null,
    },
    {
      title: "Bubble Game",
      description:
        "A fast-paced interactive browser game built using core JavaScript logic focusing on DOM manipulation, event handling, and real-time scoring mechanics.",
      tech: "JavaScript • HTML • CSS",
      link: "https://bubblegame-kajaltiwari88s-projects.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-24 bg-linear-to-b from-black via-[#0f0f1a] to-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.05}
                className="h-full"
              >
                <div className="flex flex-col h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-purple-800/30 transition duration-300">
                  <h3 className="text-2xl font-semibold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 grow">
                    {project.description}
                  </p>

                  <p className="text-sm text-purple-400 mb-6">{project.tech}</p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block text-center px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300"
                  >
                   {project.link ? "View Project" : "Coming Soon !"}
                  </a>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
