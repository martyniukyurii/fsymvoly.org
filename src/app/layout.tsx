import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Фонд Символи — Інновації для України",
  description: "ГО «Фонд Символи» — підтримуємо IT-проекти, оборонні технології, освіту та медіа. Чернівці, Україна.",
  keywords: ["Фонд Символи", "NGO", "Ukraine", "IT", "drones", "Chernivtsi", "volunteers"],
  metadataBase: new URL("https://fsymvoly.org"),
  openGraph: {
    title: "Фонд Символи",
    description: "Громадська організація що підтримує інновації та оборону України",
    locale: "uk_UA",
    type: "website",
    siteName: "Фонд Символи",
    url: "https://fsymvoly.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${geist.variable} h-full antialiased dark`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
