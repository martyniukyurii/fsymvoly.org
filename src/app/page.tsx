"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { MediaStrip } from "@/components/sections/MediaStrip";
import { NewsSection } from "@/components/sections/NewsSection";
import { VolunteerCTA } from "@/components/sections/VolunteerCTA";
import { VolunteerModal } from "@/components/VolunteerModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onVolunteer={() => setModalOpen(true)} />
      <main>
        <HeroSection onVolunteer={() => setModalOpen(true)} />
        <StatsSection />
        <ProjectsPreview />
        <MediaStrip />
        <NewsSection />
        <VolunteerCTA onVolunteer={() => setModalOpen(true)} />
      </main>
      <Footer />
      <VolunteerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
