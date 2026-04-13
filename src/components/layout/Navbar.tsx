"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const sidebarVariants = {
    closed: {
      x: "100%" as const,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
    open: {
      x: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 py-5 sticky top-0 z-9999 bg-black border-b border-white/10">
      {/* Left Navigation - Desktop */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="hidden lg:flex gap-8"
      >
        {["Home", "Gallery", "Event"].map((item) => (
          <motion.div key={item} variants={navItemVariants}>
            <Link
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="font-medium text-sm uppercase tracking-widest text-white hover:text-[#C9A051] transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A051] transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Center Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="shrink-0"
      >
        <Link
          href="/"
          className="font-bold text-xl tracking-tighter hover:text-[#C9A051] transition-colors text-white uppercase"
        >
          Kampung Kemasan
        </Link>
      </motion.div>

      {/* Right Navigation - Desktop */}
      <div className="hidden lg:flex gap-8 items-center">
        {["About", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="font-medium text-sm uppercase tracking-widest text-white hover:text-[#C9A051] transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A051] transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border border-zinc-700 rounded-none px-3 py-1 text-[10px] uppercase tracking-wider bg-black text-white focus:border-[#C9A051] outline-none transition-colors cursor-pointer"
        >
          <option value="en">EN</option>
          <option value="id">ID</option>
        </select>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-white z-10000 p-2"
      >
        <div className="space-y-1.5">
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white"
          />
        </div>
      </button>

      {/* Sidebar - Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 lg:hidden bg-zinc-950 w-[70vw] h-screen p-10 flex flex-col gap-8 shadow-2xl z-9999"
            >
              <div className="mt-10 flex flex-col gap-6">
                {["Home", "Gallery", "About", "Contact"].map((item, i) => (
                  <motion.div key={item} custom={i} variants={linkVariants}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="text-2xl font-bold text-white hover:text-[#C9A051] transition-colors uppercase tracking-tighter"
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={linkVariants}
                custom={4}
                className="mt-auto"
              >
                <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] mb-4">
                  Language
                </p>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-transparent border border-zinc-800 text-white p-3 rounded-none outline-none focus:border-[#C9A051]"
                >
                  <option value="en">English</option>
                  <option value="id">Bahasa Indonesia</option>
                </select>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
