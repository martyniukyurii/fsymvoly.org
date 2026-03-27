"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VolunteerModal } from "@/components/VolunteerModal";

const documents = [
  {
    name: "Статут ГО «Фонд Символи»",
    description: "Установчий документ громадської організації",
    type: "PDF",
    category: "Установчі",
  },
  {
    name: "Стратегічний план розвитку 2024–2026",
    description: "Стратегія розвитку організації на 3 роки",
    type: "DOCX",
    category: "Стратегія",
  },
  {
    name: "Звіт про діяльність 2022",
    description: "Річний звіт за перший рік роботи",
    type: "PDF",
    category: "Звіти",
  },
  {
    name: "Звіт про діяльність 2023",
    description: "Річний звіт за 2023 рік",
    type: "PDF",
    category: "Звіти",
  },
  {
    name: "Проект «Здорова ментальність» — опис",
    description: "Детальний опис грантового проекту психосоціальної підтримки",
    type: "PDF",
    category: "Проекти",
  },
  {
    name: "Програма AI тренінгів",
    description: "Навчальна програма тренінгів зі штучного інтелекту",
    type: "PDF",
    category: "Освіта",
  },
];

const categories = ["Всі", "Установчі", "Стратегія", "Звіти", "Проекти", "Освіта"];

export default function DocumentsPage() {
  const [activeCategory, setActiveCategory] = useState("Всі");
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = activeCategory === "Всі" ? documents : documents.filter((d) => d.category === activeCategory);

  return (
    <>
      <Navbar onVolunteer={() => setModalOpen(true)} />
      <main className="min-h-screen bg-[#0A0A0A]">
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#CC0000] text-xs font-semibold tracking-[0.3em] uppercase block mb-4">Прозорість</span>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Документи</h1>
              <p className="text-zinc-400 text-lg max-w-2xl">
                Установчі документи, звіти та матеріали проектів Фонду Символи.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-4 mb-8">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#CC0000] text-white"
                    : "bg-zinc-900 text-zinc-400 border border-white/5 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="px-4 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-3">
              {filtered.map((doc, i) => (
                <motion.div
                  key={doc.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-5 bg-zinc-900 border border-white/5 rounded-xl p-5 hover:border-white/10 transition-all group"
                >
                  <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-[#CC0000]">{doc.type}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-medium">{doc.name}</div>
                    <div className="text-zinc-500 text-sm mt-0.5">{doc.description}</div>
                  </div>
                  <span className="text-xs text-zinc-600 bg-zinc-800 px-2 py-1 rounded-full shrink-0">
                    {doc.category}
                  </span>
                  <button className="text-zinc-600 hover:text-[#CC0000] transition-colors shrink-0 text-sm border border-zinc-700 hover:border-[#CC0000]/40 px-4 py-2 rounded-full">
                    Запросити
                  </button>
                </motion.div>
              ))}
            </div>
            <p className="text-zinc-600 text-sm mt-8 text-center">
              Для отримання документів зверніться через форму{" "}
              <a href="/collaboration" className="text-[#CC0000] hover:underline">
                Співпраця
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <VolunteerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
