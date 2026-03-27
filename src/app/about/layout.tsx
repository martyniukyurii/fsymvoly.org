import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Про нас — Фонд Символи",
  description: "ГО «Фонд Символи» — громадська організація з Чернівців, заснована у 2022 році. IT, дрони, освіта, культура.",
  openGraph: {
    title: "Про нас — Фонд Символи",
    description: "Громадська організація з Чернівців — IT, дрони, освіта, культура",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
