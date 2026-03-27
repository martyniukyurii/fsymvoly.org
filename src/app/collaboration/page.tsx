"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VolunteerModal } from "@/components/VolunteerModal";

type FormType = "contact" | "partner";

function ContactForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setError("Заповни всі обов'язкові поля");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message, type: "contact" }),
      });
      if (res.ok) setSuccess(true);
      else setError("Помилка. Спробуй ще раз.");
    } catch {
      setError("Помилка мережі.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-white text-xl font-bold mb-2">Повідомлення надіслано!</h3>
        <p className="text-zinc-400">Ми відповімо найближчим часом.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="block text-zinc-400 text-sm mb-1.5">Ім'я *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше ім'я"
          className="w-full bg-zinc-800 border border-white/10 text-white rounded-xl px-4 py-3 text-sm placeholder-zinc-600 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
        />
      </div>
      <div>
        <label className="block text-zinc-400 text-sm mb-1.5">Email або Telegram *</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="@username або email"
          className="w-full bg-zinc-800 border border-white/10 text-white rounded-xl px-4 py-3 text-sm placeholder-zinc-600 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
        />
      </div>
      <div>
        <label className="block text-zinc-400 text-sm mb-1.5">Повідомлення *</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Опишіть ваш запит або питання"
          rows={5}
          className="w-full bg-zinc-800 border border-white/10 text-white rounded-xl px-4 py-3 text-sm placeholder-zinc-600 focus:outline-none focus:border-[#CC0000]/50 transition-colors resize-none"
        />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="px-8 py-3 bg-[#CC0000] text-white font-semibold rounded-full hover:bg-red-700 transition-colors disabled:opacity-50 w-fit"
      >
        {loading ? "Надсилаємо..." : "Надіслати"}
      </button>
    </div>
  );
}

function PartnerForm() {
  const [org, setOrg] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [proposal, setProposal] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!org.trim() || !contact.trim() || !proposal.trim()) {
      setError("Заповни всі обов'язкові поля");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message: `Організація: ${org}\n\n${proposal}`, type: "partner" }),
      });
      if (res.ok) setSuccess(true);
      else setError("Помилка. Спробуй ще раз.");
    } catch {
      setError("Помилка мережі.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">🤝</div>
        <h3 className="text-white text-xl font-bold mb-2">Пропозицію отримано!</h3>
        <p className="text-zinc-400">Розглянемо та зв'яжемося з вами.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label className="block text-zinc-400 text-sm mb-1.5">Організація / Компанія *</label>
        <input
          type="text"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
          placeholder="Назва організації"
          className="w-full bg-zinc-800 border border-white/10 text-white rounded-xl px-4 py-3 text-sm placeholder-zinc-600 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
        />
      </div>
      <div>
        <label className="block text-zinc-400 text-sm mb-1.5">Контактна особа</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ім'я та посада"
          className="w-full bg-zinc-800 border border-white/10 text-white rounded-xl px-4 py-3 text-sm placeholder-zinc-600 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
        />
      </div>
      <div>
        <label className="block text-zinc-400 text-sm mb-1.5">Email *</label>
        <input
          type="email"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="email@organization.ua"
          className="w-full bg-zinc-800 border border-white/10 text-white rounded-xl px-4 py-3 text-sm placeholder-zinc-600 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
        />
      </div>
      <div>
        <label className="block text-zinc-400 text-sm mb-1.5">Пропозиція партнерства *</label>
        <textarea
          value={proposal}
          onChange={(e) => setProposal(e.target.value)}
          placeholder="Опишіть мету партнерства, що пропонуєте і чого очікуєте"
          rows={5}
          className="w-full bg-zinc-800 border border-white/10 text-white rounded-xl px-4 py-3 text-sm placeholder-zinc-600 focus:outline-none focus:border-[#CC0000]/50 transition-colors resize-none"
        />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="px-8 py-3 bg-[#CC0000] text-white font-semibold rounded-full hover:bg-red-700 transition-colors disabled:opacity-50 w-fit"
      >
        {loading ? "Надсилаємо..." : "Надіслати пропозицію"}
      </button>
    </div>
  );
}

export default function CollaborationPage() {
  const [formType, setFormType] = useState<FormType>("contact");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onVolunteer={() => setModalOpen(true)} />
      <main className="min-h-screen bg-[#0A0A0A]">
        <section className="pt-32 pb-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left info */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <span className="text-[#CC0000] text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
                  Зв'язок
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Співпраця</h1>

                <div className="flex flex-col gap-6">
                  {[
                    { icon: "💻", title: "IT-волонтерам", desc: "Розробка, кібербезпека, DevOps — ти потрібен нам" },
                    { icon: "✈️", title: "Дронобудівникам", desc: "FPV пілоти, електронники, механіки" },
                    { icon: "🎓", title: "Педагогам та тренерам", desc: "Освітні програми, AI тренінги" },
                    { icon: "🏢", title: "Організаціям", desc: "Партнерство, гранти, спільні проекти" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="text-white font-semibold">{item.title}</div>
                        <div className="text-zinc-500 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-10 border-t border-white/5">
                  <div className="text-zinc-500 text-sm mb-2">Facebook</div>
                  <a
                    href="https://www.facebook.com/fsymvoly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#CC0000] transition-colors"
                  >
                    facebook.com/fsymvoly →
                  </a>
                </div>
              </motion.div>

              {/* Right form */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8">
                  {/* Tabs */}
                  <div className="flex gap-2 mb-8">
                    <button
                      onClick={() => setFormType("contact")}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                        formType === "contact" ? "bg-[#CC0000] text-white" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Написати нам
                    </button>
                    <button
                      onClick={() => setFormType("partner")}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                        formType === "partner" ? "bg-[#CC0000] text-white" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Партнерство
                    </button>
                  </div>

                  {formType === "contact" ? <ContactForm /> : <PartnerForm />}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <VolunteerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
