"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface NewsPost {
  _id: string;
  postId: string;
  message: string;
  createdTime: string;
  fullPicture?: string;
  permalink: string;
  likes?: number;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("uk-UA", { day: "numeric", month: "long", year: "numeric" });
}

const placeholderPosts: NewsPost[] = [
  {
    _id: "1",
    postId: "1",
    message: "Фонд Символи продовжує підтримку FPV дронів для Збройних Сил України. Дякуємо всім волонтерам та донорам за допомогу!",
    createdTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    permalink: "https://www.facebook.com/fsymvoly",
  },
  {
    _id: "2",
    postId: "2",
    message: "Завершено черговий AI-тренінг для молоді Чернівців. 30 учасників опанували основи штучного інтелекту та машинного навчання.",
    createdTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    permalink: "https://www.facebook.com/fsymvoly",
  },
  {
    _id: "3",
    postId: "3",
    message: "Розширення No Russia Content набрало понад 10,000 активних користувачів. Дякуємо за підтримку та поширення!",
    createdTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 8).toISOString(),
    permalink: "https://www.facebook.com/fsymvoly",
  },
  {
    _id: "4",
    postId: "4",
    message: "Програма психосоціальної підтримки «Здорова ментальність» надала допомогу вже понад 2000 учасникам.",
    createdTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12).toISOString(),
    permalink: "https://www.facebook.com/fsymvoly",
  },
  {
    _id: "5",
    postId: "5",
    message: "Проект Характерник — наш AI-робот для тактичної розвідки отримав нові можливості. Слава Україні!",
    createdTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15).toISOString(),
    permalink: "https://www.facebook.com/fsymvoly",
  },
  {
    _id: "6",
    postId: "6",
    message: "Media Hub Bukovyna випустив вже 270 медіа-матеріалів та 21 авторську програму. Продовжуємо інформувати!",
    createdTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 18).toISOString(),
    permalink: "https://www.facebook.com/fsymvoly",
  },
];

export function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [posts, setPosts] = useState<NewsPost[]>(placeholderPosts);

  useEffect(() => {
    fetch("/api/news?limit=6")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.posts) && data.posts.length > 0) {
          setPosts(data.posts);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section ref={ref} className="py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <span className="text-[#CC0000] text-xs font-semibold tracking-[0.3em] uppercase block mb-2">
              Актуально
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Новини</h2>
          </div>
          <a
            href="https://www.facebook.com/fsymvoly"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            Facebook
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.slice(0, 6).map((post, i) => (
            <motion.a
              key={post._id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group block bg-zinc-900 border border-white/5 rounded-2xl p-6 hover:border-[#CC0000]/30 hover:bg-zinc-800/50 transition-all duration-300"
            >
              {post.fullPicture && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.fullPicture}
                  alt=""
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
              )}
              <p className="text-zinc-300 text-sm leading-relaxed line-clamp-4 mb-4">
                {post.message}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500 text-xs">{formatDate(post.createdTime)}</span>
                <span className="text-[#CC0000] text-xs group-hover:underline">Читати →</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
