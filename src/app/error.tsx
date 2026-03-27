"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">⚠️</div>
        <h2 className="text-2xl font-bold text-white mb-3">Щось пішло не так</h2>
        <p className="text-zinc-400 mb-8">Виникла помилка при завантаженні сторінки. Спробуйте ще раз.</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#CC0000] text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
        >
          Спробувати знову
        </button>
      </div>
    </div>
  );
}
