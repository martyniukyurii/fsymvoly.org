"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VolunteerModal } from "@/components/VolunteerModal";
import { youtubeVideos, pressArticles } from "@/data/media";

type Tab = "video" | "press";

export default function MediaPage() {
  const [tab, setTab] = useState<Tab>("video");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onVolunteer={() => setModalOpen(true)} />
      <main className="min-h-screen bg-[#0A0A0A]">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(204,0,0,0.08)_0%,_transparent_70%)]" />
          </div>
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="text-[#CC0000] text-xs font-semibold tracking-[0.3em] uppercase block mb-4">Висвітлення</span>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Медіа</h1>
              <p className="text-zinc-400 text-lg max-w-2xl">
                Відео репортажі, інтерв'ю та публікації у провідних українських ЗМІ про діяльність Фонду Символи.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tabs */}
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto flex gap-2">
            <button
              onClick={() => setTab("video")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                tab === "video" ? "bg-[#CC0000] text-white" : "bg-zinc-900 text-zinc-400 border border-white/5 hover:text-white"
              }`}
            >
              Відео ({youtubeVideos.length})
            </button>
            <button
              onClick={() => setTab("press")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                tab === "press" ? "bg-[#CC0000] text-white" : "bg-zinc-900 text-zinc-400 border border-white/5 hover:text-white"
              }`}
            >
              Преса ({pressArticles.length})
            </button>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 pb-24">
          <div className="max-w-6xl mx-auto">
            {tab === "video" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {youtubeVideos.map((video, i) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden"
                  >
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-semibold mb-1">{video.title}</h3>
                      <p className="text-zinc-500 text-sm">{video.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {tab === "press" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pressArticles.map((article, i) => (
                  <motion.a
                    key={article.url}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-4 bg-zinc-900 border border-white/5 rounded-2xl p-5 hover:border-[#CC0000]/30 transition-all group"
                  >
                    <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-xs font-bold text-zinc-300 shrink-0 group-hover:bg-[#CC0000]/20 transition-colors">
                      {article.source.slice(0, 3).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium text-sm line-clamp-2 mb-1 group-hover:text-[#CC0000] transition-colors">
                        {article.title}
                      </div>
                      <div className="text-zinc-500 text-xs mb-2">{article.source}</div>
                      <p className="text-zinc-600 text-xs line-clamp-2">{article.description}</p>
                    </div>
                    <span className="text-zinc-600 group-hover:text-white transition-colors self-center shrink-0">→</span>
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <VolunteerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
