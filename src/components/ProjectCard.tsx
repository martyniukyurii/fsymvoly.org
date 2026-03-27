"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { Project } from "@/data/projects";

const MiniModel = dynamic(() => import("@/components/3d/MiniModel"), { ssr: false });

const categoryColors: Record<string, string> = {
  it: "#8844FF",
  drones: "#CC0000",
  education: "#44BB88",
  art: "#FFAA00",
};

const categoryLabels: Record<string, string> = {
  it: "IT",
  drones: "Дрони",
  education: "Освіта",
  art: "Мистецтво",
};

const statusLabels: Record<string, string> = {
  active: "Активний",
  completed: "Завершено",
  ongoing: "Триває",
};

export function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const color = categoryColors[project.category] || "#CC0000";

  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden h-72 flex flex-col cursor-pointer hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
        style={{ boxShadow: hovered ? `0 0 40px ${color}15` : "none" }}
      >
        {/* 3D model background */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: hovered ? 0.35 : 0.15 }}
        >
          <MiniModel type={project.model3d ?? "laptop"} />
        </div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-transparent" />

        {/* Content */}
        <div className="relative z-10 p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-auto">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full border"
              style={{ color, borderColor: `${color}40`, background: `${color}15` }}
            >
              {categoryLabels[project.category]}
            </span>
            <span className="text-xs text-zinc-500">{project.year}</span>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm line-clamp-2 mb-4">{project.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-xs text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <span
                className="text-xs"
                style={{ color: project.status === "active" ? "#44BB88" : "#888" }}
              >
                ● {statusLabels[project.status]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
