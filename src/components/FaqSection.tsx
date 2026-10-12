import React, { useState } from 'react';
import { FAQS } from '../data/billiardData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-[#0d0e14] border-b border-orange-500/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            PERTANYAAN UMUM & INFORMASI RESMI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            FAQ <span className="text-orange-500">BENING4D BILLIARD</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Temukan jawaban lengkap seputar spesifikasi meja, tarif sewa, cara reservasi, turnamen, dan fasilitas VIP lounge kami.
          </p>

          {/* Search bar */}
          <div className="relative mt-6 max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Cari pertanyaan (misal: tarif, stik, bola, reservasi)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:border-orange-500 focus:outline-none placeholder-slate-500"
            />
          </div>
        </div>

        {/* 10 FAQ Accordion Items */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all duration-200 hover:border-orange-500/40"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-200 hover:text-orange-400 transition"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs flex items-center justify-center font-mono flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-orange-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 bg-slate-950/30 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Masih memiliki pertanyaan lain yang belum terjawab?{' '}
          <a
            href="https://wa.me/6287874016047?text=Halo%20Admin%20Bening4D,%20saya%20ingin%20bertanya%20mengenai%20layanan%20biliar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 font-bold hover:underline"
          >
            Hubungi Customer Support 24 Jam
          </a>
        </div>

      </div>
    </section>
  );
};
