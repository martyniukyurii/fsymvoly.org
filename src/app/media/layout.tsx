import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Медіа — Фонд Символи",
  description: "Відео репортажі, інтерв'ю та публікації у провідних українських ЗМІ про діяльність Фонду Символи.",
  openGraph: {
    title: "Медіа — Фонд Символи",
    description: "Відео репортажі та публікації про діяльність Фонду Символи",
  },
};

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
