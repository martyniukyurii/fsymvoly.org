"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface VolunteerCTAProps {
  onVolunteer: () => void;
}

export function VolunteerCTA({ onVolunteer }: VolunteerCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section ref={ref} className="py-24 bg-[#0F0F0F]">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ perspective: 1000 }}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative bg-gradient-to-br from-[#CC0000] to-[#880000] rounded-3xl p-12 md:p-16 text-center overflow-hidden cursor-default"
          >
            {/* Glow noise texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_white_0%,_transparent_50%)]" />
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_right,_white_0%,_transparent_50%)]" />

            <div className="relative z-10">
              <span className="text-white/70 text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
                Долучайся до змін
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Стань частиною
                <br />
                Фонду Символи
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                IT-волонтери, фахівці з дронів, педагоги, медіники — ми шукаємо небайдужих. Разом будуємо сильнішу Україну.
              </p>
              <button
                onClick={onVolunteer}
                className="px-10 py-5 bg-white text-[#CC0000] font-bold text-lg rounded-full hover:bg-zinc-100 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Хочу долучитися
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
