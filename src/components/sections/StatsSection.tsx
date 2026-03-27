"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { NumberTicker } from "@/components/ui/NumberTicker";

const stats = [
  { value: 50, suffix: "+", label: "Проектів реалізовано", description: "IT, дрони, освіта, медіа" },
  { value: 2022, suffix: "", label: "Рік заснування", description: "Чернівці, Буковина" },
  { value: 270, suffix: "+", label: "Медіа матеріалів", description: "Відео, статті, репортажі" },
  { value: 2000, suffix: "+", label: "Учасників програм", description: "Психосоціальна підтримка" },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#CC0000] text-xs font-semibold tracking-[0.3em] uppercase">
            Наші результати
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0 divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 text-center group"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-[#CC0000] transition-colors duration-300">
                <NumberTicker value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/80 font-medium mb-1">{stat.label}</div>
              <div className="text-zinc-500 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
