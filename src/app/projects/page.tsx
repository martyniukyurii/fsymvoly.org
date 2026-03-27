"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VolunteerModal } from "@/components/VolunteerModal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, categoryLabels, type ProjectCategory } from "@/data/projects";

const tabs: { key: ProjectCategory | "all"; label: string; count: number }[] = [
  { key: "all", label: "Всі", count: projects.length },
  { key: "it", label: "IT та Кіберзахист", count: projects.filter((p) => p.category === "it").length },
  { key: "drones", label: "Дрони та Радіо", count: projects.filter((p) => p.category === "drones").length },
  { key: "education", label: "Освіта та Медіа", count: projects.filter((p) => p.category === "education").length },
  { key: "art", label: "Мистецтво", count: projects.filter((p) => p.category === "art").length },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Navbar onVolunteer={() => setModalOpen(true)} />
      <main className="min-h-screen bg-[#0A0A0A]">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(204,0,0,0.1)_0%,_transparent_70%)]" />
          </div>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#CC0000] text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
                Наша діяльність
              </span>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Проекти</h1>
              <p className="text-zinc-400 text-lg max-w-2xl">
                IT-інструменти, дрони для ЗСУ, освітні програми та мистецтво — понад 50 ініціатив Фонду Символи.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tabs */}
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    active === tab.key
                      ? "bg-[#CC0000] text-white"
                      : "bg-zinc-900 text-zinc-400 hover:text-white border border-white/5 hover:border-white/15"
                  }`}
                >
                  {tab.label}
                  <span
                    className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                      active === tab.key ? "bg-white/20 text-white" : "bg-zinc-800 text-zinc-500"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="px-4 pb-24">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
      <VolunteerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
