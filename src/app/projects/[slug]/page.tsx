"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { use } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VolunteerModal } from "@/components/VolunteerModal";
import { projects, categoryLabels, type ProjectCategory } from "@/data/projects";

const MiniModel = dynamic(() => import("@/components/3d/MiniModel"), { ssr: false });

const categoryColors: Record<ProjectCategory, string> = {
  it: "#8844FF",
  drones: "#CC0000",
  education: "#44BB88",
  art: "#FFAA00",
};

function getYoutubeId(url: string) {
  const match = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return match?.[1];
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [modalOpen, setModalOpen] = useState(false);

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const color = categoryColors[project.category];
  const related = projects.filter((p) => p.category === project.category && p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Navbar onVolunteer={() => setModalOpen(true)} />
      <main className="min-h-screen bg-[#0A0A0A]">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 60% 0%, ${color}12 0%, transparent 60%)`,
            }}
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm mb-8"
              >
                ← Всі проекти
              </Link>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full border mb-4 inline-block"
                style={{ color, borderColor: `${color}40`, background: `${color}15` }}
              >
                {categoryLabels[project.category]}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">{project.longDescription}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-sm text-zinc-400 bg-zinc-800 border border-white/5 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 text-sm text-zinc-500">
                <span>📅 {project.year}</span>
                <span
                  style={{ color: project.status === "active" ? "#44BB88" : "#888" }}
                >
                  ● {project.status === "active" ? "Активний" : project.status === "completed" ? "Завершено" : "Триває"}
                </span>
              </div>
            </motion.div>

            {/* 3D model */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-80 lg:h-96"
            >
              <MiniModel type={project.model3d ?? "laptop"} />
            </motion.div>
          </div>
        </section>

        {/* Media: YouTube videos */}
        {project.media?.youtube && project.media.youtube.length > 0 && (
          <section className="py-16 px-4 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Відео</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.media.youtube.slice(0, 4).map((url) => {
                  const id = getYoutubeId(url);
                  if (!id) return null;
                  return (
                    <div key={id} className="aspect-video rounded-2xl overflow-hidden bg-zinc-900">
                      <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Media: Press */}
        {project.media?.press && project.media.press.length > 0 && (
          <section className="py-16 px-4 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">ЗМІ про проект</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.media.press.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-zinc-900 border border-white/5 rounded-xl p-4 hover:border-white/15 transition-all group"
                  >
                    <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-bold text-zinc-400 shrink-0 group-hover:bg-[#CC0000]/20 transition-colors">
                      {item.source.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium group-hover:text-[#CC0000] transition-colors line-clamp-1">
                        {item.title}
                      </div>
                      <div className="text-zinc-500 text-xs mt-0.5">{item.source}</div>
                    </div>
                    <span className="ml-auto text-zinc-600 group-hover:text-white transition-colors">→</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related projects */}
        {related.length > 0 && (
          <section className="py-16 px-4 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8">Схожі проекти</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="bg-zinc-900 border border-white/5 rounded-xl p-5 hover:border-white/15 transition-all group"
                  >
                    <span className="text-[#CC0000] text-xs font-semibold uppercase block mb-2">
                      {categoryLabels[p.category]}
                    </span>
                    <h3 className="text-white font-semibold group-hover:text-[#CC0000] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-zinc-500 text-sm mt-2 line-clamp-2">{p.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <VolunteerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
