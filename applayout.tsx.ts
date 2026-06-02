import React from 'react';
import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'AstroCosmos | Göksel Rehberiniz',
  description: 'Premium Doğum Haritası ve Günlük Burç Analizleri Platformu.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* Google AdSense - Sürəti bloklamadan arxa planda yüklənir */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className="bg-[#0B0F2A] text-[#E8E8F0] antialiased min-h-screen flex flex-col selection:bg-[#C9A84C] selection:text-[#0B0F2A]">
        
        {/* Kosmik Ulduz Arxa Fonu */}
        <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#131138] via-[#0b0f2a] to-[#020617] overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        {/* Premium Üst Menyubarı */}
        <header className="relative z-10 border-b border-purple-950/30 bg-[#0B0F2A]/60 backdrop-blur-md sticky top-0">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 font-serif text-xl font-bold text-[#C9A84C] tracking-widest">
              ✨ ASTROCOSMOS
            </div>
            <nav className="flex items-center gap-6 text-xs font-semibold tracking-wider uppercase text-gray-300">
              <a href="#horoscopes" className="hover:text-[#C9A84C] transition">Burçlar</a>
              <a href="#natal" className="hover:text-[#A78BFA] transition">Doğum Haritası</a>
            </nav>
          </div>
        </header>

        {/* Dinamik Səhifə Məzmunu */}
        <main className="relative z-10 flex-grow max-w-6xl w-full mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="relative z-10 border-t border-purple-950/20 py-6 text-center text-xs text-gray-600 bg-[#06091f]">
          © {new Date().getFullYear()} AstroCosmos Frontend. All rights reserved.
        </footer>
      </body>
    </html>
  );
}