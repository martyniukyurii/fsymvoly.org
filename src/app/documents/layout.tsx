import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Документи — Фонд Символи",
  description: "Установчі документи, звіти та матеріали проектів Фонду Символи. Прозорість та відкритість.",
  openGraph: {
    title: "Документи — Фонд Символи",
    description: "Установчі документи, звіти та матеріали проектів",
  },
};

export default function DocumentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
