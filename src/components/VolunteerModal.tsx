"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillOptions = [
  { value: "it", label: "IT / Розробка" },
  { value: "drones", label: "Дрони / Електроніка" },
  { value: "education", label: "Освіта / Тренінги" },
  { value: "media", label: "Медіа / Контент" },
  { value: "design", label: "Дизайн" },
  { value: "psychology", label: "Психологія" },
  { value: "other", label: "Інше" },
];

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggleSkill = (val: string) =>
    setSkills((prev) => prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]);

  const handleSubmit = async () => {
    if (!name.trim() || !contact.trim()) {
      setError("Заповни імʼя та контакт");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, skills, comment }),
      });
      if (res.ok) setSuccess(true);
      else setError("Щось пішло не так. Спробуй ще раз.");
    } catch {
      setError("Помилка мережі. Спробуй пізніше.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setName(""); setContact(""); setSkills([]); setComment("");
    setSuccess(false); setError("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {success ? (
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-white text-xl font-bold mb-2">Дякуємо!</h3>
                  <p className="text-zinc-400 mb-8">Ми звʼяжемося з тобою найближчим часом.</p>
                  <button
                    onClick={handleClose}
                    className="px-8 py-3 bg-[#CC0000] text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
                  >
                    Закрити
                  </button>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="flex items-start justify-between p-6 border-b border-white/10">
                    <div>
                      <h2 className="text-white text-xl font-bold">Хочу долучитися</h2>
                      <p className="text-zinc-400 text-sm mt-1">Фонд Символи шукає небайдужих</p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="text-zinc-500 hover:text-white transition-colors text-2xl leading-none mt-1"
                    >
                      ×
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col gap-4">
                    <div>
                      <label className="block text-zinc-400 text-sm mb-1.5">Імʼя</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Як тебе звати?"
                        className="w-full bg-zinc-800 border border-white/10 text-white rounded-xl px-4 py-3 text-sm placeholder-zinc-600 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 text-sm mb-1.5">Telegram або email</label>
                      <input
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="@username або email@example.com"
                        className="w-full bg-zinc-800 border border-white/10 text-white rounded-xl px-4 py-3 text-sm placeholder-zinc-600 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-400 text-sm mb-2">Твої навички</label>
                      <div className="grid grid-cols-2 gap-2">
                        {skillOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => toggleSkill(opt.value)}
                            className={`text-left px-4 py-2.5 rounded-xl text-sm border transition-all ${
                              skills.includes(opt.value)
                                ? "bg-[#CC0000]/20 border-[#CC0000]/50 text-white"
                                : "bg-zinc-800 border-white/10 text-zinc-400 hover:border-white/20"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-zinc-400 text-sm mb-1.5">
                        Коментар <span className="text-zinc-600">(необовʼязково)</span>
                      </label>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Розкажи трохи про себе або що тебе цікавить"
                        rows={3}
                        className="w-full bg-zinc-800 border border-white/10 text-white rounded-xl px-4 py-3 text-sm placeholder-zinc-600 focus:outline-none focus:border-[#CC0000]/50 transition-colors resize-none"
                      />
                    </div>
                    {error && <p className="text-red-400 text-sm">{error}</p>}
                  </div>

                  {/* Footer */}
                  <div className="flex justify-end gap-3 p-6 border-t border-white/10">
                    <button
                      onClick={handleClose}
                      className="px-6 py-2.5 text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Скасувати
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="px-8 py-2.5 bg-[#CC0000] text-white font-semibold text-sm rounded-full hover:bg-red-700 transition-colors disabled:opacity-50"
                    >
                      {loading ? "Надсилаємо..." : "Надіслати заявку"}
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
