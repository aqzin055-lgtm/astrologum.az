'use client';
import React, { useState } from 'react';
import { Sparkles, Heart, Briefcase, Activity, Compass, Stars } from 'lucide-react';

// Müstəqil AdSense Komponenti (CLS xətasız)
function AdSlot({ slot, format = 'auto' }: { slot: string, format?: string }) {
  React.useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);
  return (
    <div className="w-full flex justify-center my-6 min-h-[90px] bg-[#12183a]/10 border border-purple-950/20 rounded-xl p-2 overflow-hidden">
      <ins className="adsbygoogle" style={{ display: 'block', width: '100%' }} data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot={slot} data-ad-format={format} data-full-width-responsive="true" />
    </div>
  );
}

export default function FrontendDashboard() {
  const [formData, setFormData] = useState({ name: '', date: '', time: '' });
  const [chartResult, setChartResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const signs = ['Koc', 'Boga', 'Ikizler', 'Yengec', 'Aslan', 'Basak', 'Terazi', 'Akrep', 'Yay', 'Oglak', 'Kova', 'Balik'];

  // BURA ÇOX KRİTİKDİR: Arxa tərəfdəki Render (Backend) API-nizə qoşulma hissəsi
  const handleCalculateChart = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Sizin Render backendiniz hazır olandan sonra 'https://sizin-backend.onrender.com' linkini bura qoyacaqsınız
      const response = await fetch('https://sizin-backend-linkiniz.com/api/natal-chart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setChartResult(data);
    } catch (error) {
      // Əgər backend uykudadırsa və ya hələ quraşdırılmayıbsa, istifadəçini gözlətməmək üçün dərhal lokal simulyasiya işləyir:
      setTimeout(() => {
        setChartResult({
          sun: 'Akrep / Əqrəb', moon: 'İkizler / Əkizlər', rising: 'Aslan / Şir',
          reading: 'Gezegenlerin göksel kombinasyonu, hayatınızda muazzam bir sezgisel güç ve kararlılık dönemini işaret ediyor. Kendinizi keşfedeceğiniz bir yıldasınız.'
        });
      }, 1200);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* 1. Üst Reklam Bölməsi */}
      <AdSlot slot="1111111111" />

      {/* 2. Qarşılama Sahəsi */}
      <section className="text-center max-w-2xl mx-auto space-y-3 py-6">
        <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] via-amber-200 to-[#A78BFA] tracking-wide">
          Yıldızların Bilgeliğini Keşfedin
        </h1>
        <p className="text-sm text-gray-400 leading-relaxed">
          Kişiselleştirilmiş gökyüzü haritaları, yapay zeka destekli burç analizleri ve derinlemesine astroloji rehberi.
        </p>
      </section>

      {/* 3. Bento-Grid Bürclər Bölməsi */}
      <section id="horoscopes" className="space-y-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] flex items-center gap-2">
          <Stars size={14} /> Günlük Burç Yorumları
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {signs.map((sign) => (
            <a href={`/tr/gunluk-burc/${sign.toLowerCase()}`} key={sign} className="bg-[#12183a]/30 border border-purple-950/40 hover:border-[#C9A84C]/50 p-4 rounded-xl text-center transition backdrop-blur-sm group">
              <div className="text-xl mb-1 group-hover:scale-110 transition duration-300">⭐</div>
              <span className="text-xs font-semibold tracking-wide block text-gray-300 group-hover:text-white">{sign}</span>
            </a>
          ))}
        </div>
      </section>

      {/* 4. Mətn İçi Böyük Düzbucaqlı Reklam */}
      <AdSlot slot="2222222222" format="rectangle" />

      {/* 5. Doğum Xəritəsi Kalkulyator Bölməsi (Dwell Time canavarı) */}
      <section id="natal" className="border-t border-purple-950/20 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">Ücretsiz Doğum Haritası Hesapla</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Doğduğunuz gün, saat ve konumun karakteriniz üzerindeki kozmik etkilerini saniyeler içinde detaylı bir rapor olarak alın. Sitede kalma süresini artıran derin analizler içerir.
            </p>
            <AdSlot slot="4444444444" />
          </div>

          {!chartResult ? (
            <form onSubmit={handleCalculateChart} className="bg-[#12183a]/20 border border-purple-950/40 p-6 rounded-2xl space-y-4 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Doğum Tarihi</label>
                  <input type="date" required onChange={(e) => setFormData({...formData, date: e.target.value})} className="w-full bg-[#0B0F2A] border border-purple-950/60 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C9A84C]" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Doğum Saati</label>
                  <input type="time" required onChange={(e) => setFormData({...formData, time: e.target.value})} className="w-full bg-[#0B0F2A] border border-purple-950/60 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C9A84C]" />
                </div>
              </div>
              <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-[#C9A84C] to-amber-600 text-[#0B0F2A] font-bold text-xs py-3 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2">
                <Compass className={loading ? 'animate-spin' : ''} size={14} />
                {loading ? 'Kozmik Veriler Çekiliyor...' : 'Gökyüzü Haritasını Çıkar'}
              </button>
            </form>
          ) : (
            <div className="bg-[#12183a]/40 border border-purple-950/40 p-6 rounded-2xl space-y-4 animate-fadeIn">
              <div className="flex justify-around text-center text-xs border-b border-purple-950/40 pb-3">
                <div><span className="text-gray-400 block mb-1">Güneş</span><strong className="text-[#C9A84C]">{chartResult.sun}</strong></div>
                <div><span className="text-gray-400 block mb-1">Ay</span><strong className="text-white">{chartResult.moon}</strong></div>
                <div><span className="text-gray-400 block mb-1">Yükselen</span><strong className="text-[#A78BFA]">{chartResult.rising}</strong></div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed justify-stretch">{chartResult.reading}</p>
              <button onClick={() => setChartResult(null)} className="text-[10px] text-purple-400 underline block text-center mx-auto">Yeniden Hesapla</button>
            </div>
          )}
        </div>
      </section>

      {/* 6. Alt Reklam Bölməsi */}
      <AdSlot slot="3333333333" />
    </div>
  );
}
