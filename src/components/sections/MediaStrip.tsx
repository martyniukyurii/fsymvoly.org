"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pressItems = [
  { name: "Molbuk.ua", tag: "IT" },
  { name: "DOU.ua", tag: "IT" },
  { name: "Dev.ua", tag: "IT" },
  { name: "Espreso.tv", tag: "Дрони" },
  { name: "Суспільне", tag: "Дрони" },
  { name: "Focus.ua", tag: "Дрони" },
  { name: "MilUkraine", tag: "Волонтери" },
  { name: "Чернівецький Промінь", tag: "Медіа" },
];

// Duplicate for seamless loop
const items = [...pressItems, ...pressItems];

export function MediaStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-[#0F0F0F] border-y border-white/5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <span className="text-zinc-500 text-xs font-semibold tracking-[0.3em] uppercase">
          Про нас писали
        </span>
      </motion.div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0F0F0F] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0F0F0F] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex gap-6 w-max"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-zinc-900 border border-white/5 rounded-full px-6 py-3 whitespace-nowrap"
            >
              <span className="text-white font-medium">{item.name}</span>
              <span className="text-[#CC0000] text-xs font-semibold bg-[#CC0000]/10 px-2 py-0.5 rounded-full">
                {item.tag}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
