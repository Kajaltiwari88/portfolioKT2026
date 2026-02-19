"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
  ];

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 🔥 If near top → activate Home
      if (scrollY < 100) {
        setActive("home");
        return;
      }

      const scrollPosition = scrollY + window.innerHeight / 2;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            className="text-xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent cursor-pointer"
          >
            tiwarikajal8898@gmail.com
          </motion.h1>

          <nav className="hidden md:flex gap-8">
            {navItems?.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1 }}
                className={`relative text-sm uppercase tracking-widest cursor-pointer ${
                  active === item.id ? "text-purple-400" : "text-gray-300"
                }`}
              >
                {item?.name}

                {active === item?.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-2 w-full h-0.5 bg-purple-500"
                  />
                )}
              </motion.button>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X
                size={28}
                className="transition-transform duration-300 rotate-180"
              />
            ) : (
              <Menu size={28} className="transition-transform duration-300" />
            )}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full bg-black/90 backdrop-blur-lg md:hidden z-40"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navItems?.map((item) => (
                <motion.button
                  key={item?.id}
                  onClick={() => scrollToSection(item?.id)}
                  whileHover={{ scale: 1.1 }}
                  className={`text-lg ${
                    active === item?.id ? "text-purple-400" : "text-gray-300"
                  }`}
                >
                  {item?.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
