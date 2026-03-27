import Link from "next/link";

const links = [
  { href: "/projects", label: "Проекти" },
  { href: "/media", label: "Медіа" },
  { href: "/about", label: "Про нас" },
  { href: "/documents", label: "Документи" },
  { href: "/collaboration", label: "Співпраця" },
  { href: "/gallery", label: "Галерея" },
];

export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-white/5 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#CC0000] rounded-lg flex items-center justify-center font-bold text-white text-sm">
                ФС
              </div>
              <span className="text-white font-semibold text-lg">Фонд Символи</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Громадська організація «Фонд Символи» — підтримуємо інновації, оборонні технології та освіту для перемоги України.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold mb-4">Навігація</h4>
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="text-zinc-500 hover:text-white transition-colors text-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакти</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.facebook.com/fsymvoly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-500 hover:text-white transition-colors text-sm group"
              >
                <span className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:bg-[#1877F2]/20 transition-colors">f</span>
                Facebook
              </a>
              <div className="text-zinc-500 text-sm">Чернівці, Україна</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} ГО «Фонд Символи». Всі права захищено.
          </p>
          <p className="text-zinc-700 text-xs">Чернівці · Буковина · Україна 🇺🇦</p>
        </div>
      </div>
    </footer>
  );
}
