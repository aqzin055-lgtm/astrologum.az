'use client';
import { useState } from 'react';
export default function Home() {
  const [result, setResult] = useState<any>(null);
  const handleCalc = async () => {
    const res = await fetch('https://astro-backend.onrender.com/api/natal', { method: 'POST' });
    const data = await res.json();
    setResult(data);
  };
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#0B0F2A]">
      <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[32px] text-center border border-white/10 max-w-lg w-full">
        <h1 className="text-4xl font-bold text-amber-400 mb-6">Astro Cosmos</h1>
        <button onClick={handleCalc} className="bg-amber-500 text-black px-8 py-3 rounded-xl font-bold">Analiz Et</button>
        {result && <p className="mt-6 text-gray-300">{result.reading}</p>}
      </div>
    </main>
  );
}
