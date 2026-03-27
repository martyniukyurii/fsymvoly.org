import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Проекти — Фонд Символи",
  description: "IT-інструменти, дрони для ЗСУ, освітні програми та мистецтво — понад 50 ініціатив Фонду Символи.",
  openGraph: {
    title: "Проекти — Фонд Символи",
    description: "IT-інструменти, дрони для ЗСУ, освітні програми та мистецтво",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
