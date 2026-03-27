import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Співпраця — Фонд Символи",
  description: "Зв'яжіться з Фондом Символи — волонтерство, партнерство, гранти, спільні проекти.",
  openGraph: {
    title: "Співпраця — Фонд Символи",
    description: "Волонтерство, партнерство та спільні проекти",
  },
};

export default function CollaborationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
