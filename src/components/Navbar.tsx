"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/projects", label: "Проекти" },
  { href: "/media", label: "Медіа" },
  { href: "/about", label: "Про нас" },
  { href: "/documents", label: "Документи" },
  { href: "/collaboration", label: "Співпраця" },
];

interface NavbarProps {
  onVolunteer: () => void;
}

export function Navbar({ onVolunteer }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[#CC0000] rounded-lg flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform">
              ФС
            </div>
            <span className="text-white font-semibold text-lg">Фонд Символи</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onVolunteer}
              className="hidden md:block px-5 py-2.5 bg-[#CC0000] text-white font-semibold text-sm rounded-full hover:bg-red-700 transition-all hover:scale-105"
            >
              Хочу долучитися
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-2"
            >
              <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
              <div className={`w-5 h-0.5 bg-white mt-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <div className={`w-5 h-0.5 bg-white mt-1 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] pt-20 px-4 md:hidden"
          >
            <div className="flex flex-col gap-6 pt-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-2xl font-semibold border-b border-white/10 pb-4"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onVolunteer();
                }}
                className="mt-4 px-8 py-4 bg-[#CC0000] text-white font-bold text-lg rounded-full"
              >
                Хочу долучитися
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
