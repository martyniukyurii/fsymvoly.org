import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Галерея — Фонд Символи",
  description: "Візуальний огляд проектів Фонду Символи — дрони, IT, освіта, мистецтво.",
  openGraph: {
    title: "Галерея — Фонд Символи",
    description: "Візуальний огляд проектів Фонду Символи",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
