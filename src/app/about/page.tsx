"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VolunteerModal } from "@/components/VolunteerModal";

const timeline = [
  { year: "2022", title: "Заснування Фонду Символи", desc: "Чернівці. Початок волонтерської діяльності — FPV дрони для ЗСУ, рації, OSINT інструменти." },
  { year: "2022", title: "IT-фронт розгортається", desc: "Запуск Інфо Армії, CyberChe, Tech Hub Bukovyna та Чернівецьких інформаційних військ." },
  { year: "2023", title: "Розширення проектів", desc: "No Russia Content набирає 10k+ користувачів. Вишунка AI, AI тренінги, Decoder." },
  { year: "2023", title: "Медіа та культура", desc: "Media Hub Bukovyna: 270 медіа-продуктів. ArtForPeaceUA — серії патріотичних плакатів." },
  { year: "2024", title: "Соціальні програми", desc: "Грантовий проект «Здорова ментальність» — 2000+ учасників у 4 громадах." },
  { year: "2025+", title: "Характерник та майбутнє", desc: "Розробка AI тактичних наземних роботів. Продовження всіх активних напрямків." },
];

const values = [
  { icon: "🛡️", title: "Захист України", desc: "Кожен проект — крок до перемоги. Від дронів до IT-інструментів." },
  { icon: "💡", title: "Інновації", desc: "AI, кібербезпека, роботика — сучасні технології на службі держави." },
  { icon: "🤝", title: "Спільнота", desc: "Ми — волонтери, ентузіасти та фахівці, об'єднані спільною метою." },
  { icon: "📚", title: "Освіта", desc: "Навчаємо нових фахівців, проводимо тренінги та воркшопи." },
];

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true });

  return (
    <>
      <Navbar onVolunteer={() => setModalOpen(true)} />
      <main className="min-h-screen bg-[#0A0A0A]">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#CC0000] text-xs font-semibold tracking-[0.3em] uppercase block mb-4">Хто ми</span>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Про нас</h1>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                ГО «Фонд Символи» — громадська організація з Чернівців, заснована у 2022 році на початку повномасштабного вторгнення.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Ми об'єднуємо IT-фахівців, інженерів, педагогів та творчих людей навколо спільної мети — підтримки України через технології, освіту та культуру.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-[#CC0000]/20 transition-colors"
                >
                  <span className="text-3xl mb-3 block">{v.icon}</span>
                  <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                  <p className="text-zinc-500 text-sm">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section ref={timelineRef} className="py-24 px-4 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <span className="text-[#CC0000] text-xs font-semibold tracking-[0.3em] uppercase block mb-4">Наш шлях</span>
              <h2 className="text-4xl font-bold text-white">Хронологія</h2>
            </motion.div>

            <div className="relative">
              {/* Line */}
              <div className="absolute left-[60px] top-0 bottom-0 w-px bg-white/5" />

              <div className="flex flex-col gap-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex gap-8 items-start"
                  >
                    <div className="shrink-0 text-right w-[52px]">
                      <span className="text-[#CC0000] font-bold text-sm">{item.year}</span>
                    </div>
                    {/* Dot */}
                    <div className="shrink-0 w-3 h-3 rounded-full bg-[#CC0000] mt-1.5 border-2 border-[#0A0A0A] z-10" />
                    <div className="flex-1 pb-2">
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team placeholder */}
        <section className="py-24 px-4 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <span className="text-[#CC0000] text-xs font-semibold tracking-[0.3em] uppercase block mb-4">Люди</span>
              <h2 className="text-4xl font-bold text-white">Команда</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["IT-відділ", "Дрони та техніка", "Освіта та тренінги", "Медіа та контент"].map((dept) => (
                <div key={dept} className="bg-zinc-900 border border-white/5 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 bg-zinc-800 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div className="text-zinc-400 text-sm">{dept}</div>
                  <div className="text-zinc-600 text-xs mt-1">Волонтери</div>
                </div>
              ))}
            </div>
            <p className="text-zinc-600 text-sm mt-6 text-center">
              Фото команди з'являться найближчим часом
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <VolunteerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
