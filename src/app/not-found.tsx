import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-[#CC0000] mb-4">404</div>
        <h2 className="text-2xl font-bold text-white mb-3">Сторінку не знайдено</h2>
        <p className="text-zinc-400 mb-8">Цієї сторінки не існує або вона була переміщена.</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#CC0000] text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
        >
          На головну
        </Link>
      </div>
    </div>
  );
}
