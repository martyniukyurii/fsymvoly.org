"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VolunteerModal } from "@/components/VolunteerModal";
import { projects } from "@/data/projects";

// Placeholder gallery items until real photos are provided
const galleryItems = [
  { slug: "fpv-drony", label: "FPV Дрони для ЗСУ", category: "drones", color: "#CC0000", emoji: "✈️" },
  { slug: "no-russia-content", label: "No Russia Content", category: "it", color: "#8844FF", emoji: "🛡️" },
  { slug: "vyshunka", label: "Вишунка AI", category: "it", color: "#4488FF", emoji: "🤖" },
  { slug: "artforpeaceua", label: "ArtForPeaceUA", category: "art", color: "#FFAA00", emoji: "🎨" },
  { slug: "ai-treninhy", label: "AI Тренінги", category: "education", color: "#44BB88", emoji: "📚" },
  { slug: "decoder", label: "Decoder", category: "drones", color: "#CC0000", emoji: "📡" },
  { slug: "zdorova-mentalnist", label: "Здорова Ментальність", category: "education", color: "#44BB88", emoji: "💚" },
  { slug: "cyberche", label: "CyberChe", category: "it", color: "#8844FF", emoji: "🔒" },
  { slug: "kharakterny\u043a", label: "Характерник", category: "it", color: "#FF6644", emoji: "🦾" },
  { slug: "media-hub-bukovyna", label: "Media Hub Bukovyna", category: "education", color: "#44BB88", emoji: "📺" },
  { slug: "ratsii", label: "Рації для ЗСУ", category: "drones", color: "#CC0000", emoji: "📻" },
  { slug: "tech-hub-bukovyna", label: "Tech Hub Bukovyna", category: "it", color: "#4488FF", emoji: "💡" },
];

// Masonry-like column layout
const cols = [
  galleryItems.filter((_, i) => i % 3 === 0),
  galleryItems.filter((_, i) => i % 3 === 1),
  galleryItems.filter((_, i) => i % 3 === 2),
];

const heights = [260, 200, 320, 240, 200, 280];

export default function GalleryPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onVolunteer={() => setModalOpen(true)} />
      <main className="min-h-screen bg-[#0A0A0A]">
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#CC0000] text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
                Наші проекти
              </span>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Галерея</h1>
              <p className="text-zinc-400 text-lg max-w-2xl">
                Візуальний огляд проектів Фонду Символи. Реальні фото з'являться найближчим часом.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-4 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cols.map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-4">
                  {col.map((item, rowIdx) => (
                    <motion.div
                      key={item.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (colIdx * col.length + rowIdx) * 0.05 }}
                    >
                      <Link href={`/projects/${item.slug}`}>
                        <div
                          className="relative rounded-2xl overflow-hidden cursor-pointer group"
                          style={{
                            height: `${heights[(colIdx * 4 + rowIdx) % heights.length]}px`,
                            background: `linear-gradient(135deg, ${item.color}20 0%, #111 100%)`,
                            border: "1px solid rgba(255,255,255,0.05)",
                          }}
                        >
                          {/* Colored glow */}
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: `radial-gradient(ellipse at center, ${item.color}20 0%, transparent 70%)` }}
                          />

                          {/* Content */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                            <span className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                              {item.emoji}
                            </span>
                            <span className="text-white font-semibold text-center text-sm">{item.label}</span>
                            <span
                              className="text-xs mt-2 px-3 py-1 rounded-full"
                              style={{ color: item.color, background: `${item.color}20` }}
                            >
                              {item.category === "it" ? "IT" : item.category === "drones" ? "Дрони" : item.category === "education" ? "Освіта" : "Мистецтво"}
                            </span>
                          </div>

                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-xs bg-black/50 px-3 py-1.5 rounded-full">
                              Детальніше →
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>

            <p className="text-zinc-600 text-sm text-center mt-10">
              🖼️ Реальні фотографії проектів будуть додані найближчим часом
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <VolunteerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
