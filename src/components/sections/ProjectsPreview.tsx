"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { projects } from "@/data/projects";

const MiniModel = dynamic(() => import("@/components/3d/MiniModel"), { ssr: false });

const featured = projects.filter((p) => p.featured).slice(0, 4);

const cardSizes = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

export function ProjectsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-[#CC0000] text-xs font-semibold tracking-[0.3em] uppercase block mb-2">
              Що ми робимо
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Наші проекти</h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            Всі проекти
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${cardSizes[i]} group`}
            >
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <div className="h-full bg-zinc-900 border border-white/5 rounded-2xl p-6 flex flex-col overflow-hidden relative hover:border-[#CC0000]/30 transition-all duration-300 hover:bg-zinc-900/80">
                  {/* 3D model bg */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <MiniModel type={project.model3d ?? "drone"} />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />

                  <div className="relative z-10 mt-auto">
                    <span className="text-[#CC0000] text-xs font-semibold tracking-wider uppercase mb-2 block">
                      {project.category === "it" ? "IT" : project.category === "drones" ? "Дрони" : project.category === "education" ? "Освіта" : "Мистецтво"}
                    </span>
                    <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-zinc-400 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center md:hidden"
        >
          <Link href="/projects" className="text-zinc-400 hover:text-white transition-colors">
            Всі проекти →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
