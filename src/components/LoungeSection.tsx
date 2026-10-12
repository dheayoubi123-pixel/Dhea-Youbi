import React from 'react';
import { Coffee, Utensils, Music, Wind, Wine, Sparkles } from 'lucide-react';

export const LoungeSection: React.FC = () => {
  const menuHighlights = [
    {
      name: 'Sunset Orange Mocktail',
      category: 'Signature Drinks',
      price: 'Rp 38.000',
      desc: 'Perpaduan jeruk segar, passion fruit, soda dingin, dan hint rosemary aromatik.',
    },
    {
      name: 'Bening4D Cold Brew Latte',
      category: 'Artisan Coffee',
      price: 'Rp 35.000',
      desc: 'Ekstraksi 18 jam biji kopi arabika single origin dengan susu krim lembut.',
    },
    {
      name: 'Crispy Wings with Sweet Spicy Orange Glaze',
      category: 'Finger Food',
      price: 'Rp 48.000',
      desc: 'Sayap ayam renyah berlumur saus pedas manis citrus spesial chef.',
    },
    {
      name: 'Truffle Parmesan Fries Platter',
      category: 'Sharing Snack',
      price: 'Rp 42.000',
      desc: 'Kentang goreng tebal dengan minyak truffle putih dan parutan keju parmesan impor.',
    },
    {
      name: 'Wagyu Beef Burger with Caramelized Onions',
      category: 'Main Course',
      price: 'Rp 78.000',
      desc: 'Patty wagyu melt-in-the-mouth, brioche bun bakar, keju cheddar, dan kentang renyah.',
    },
    {
      name: 'Nasi Goreng Bening4D Spesial Babat & Telur',
      category: 'Main Course',
      price: 'Rp 52.000',
      desc: 'Nasi goreng harum rempah nusantara dengan topping daging empuk, acar, dan kerupuk.',
    },
  ];

  return (
    <section id="lounge" className="py-20 bg-[#0b0c10] border-b border-orange-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold mb-3">
            <Wine className="w-3.5 h-3.5" />
            BENING4D LOUNGE, BAR & CAFE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sensasi Kuliner & Rileks di <span className="text-orange-500">Orange Lounge</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Nikmati hidangan lezat dan minuman segar sambil bersantai di sofa empuk dengan alunan melodi santai dan efek rintik hujan yang menenangkan.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Visual Gallery */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-orange-500/30 shadow-2xl h-80 group">
              <img
                src="https://ik.imagekit.io/iiz37iwr7/vipclassbening4d.png"
                alt="BENING4D Lounge Area"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800">
                <span className="text-xs font-bold text-orange-400 block">Atmospheric Orange Glow & Ambient Sound</span>
                <span className="text-[11px] text-slate-300">Tempat nongkrong premium pemain biliar dan rekan bisnis</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
                <Music className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-slate-200 block">Hi-Fi Audio</span>
                <span className="text-[9px] text-slate-400">Harman Sound</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
                <Wind className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-slate-200 block">Cold AC</span>
                <span className="text-[9px] text-slate-400">HEPA Air Purifier</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
                <Sparkles className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-slate-200 block">Free Wi-Fi</span>
                <span className="text-[9px] text-slate-400">High-Speed 200Mbps</span>
              </div>
            </div>
          </div>

          {/* Right Menu Items */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {menuHighlights.map((menu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-orange-500/40 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">
                        {menu.category}
                      </span>
                      <span className="text-xs font-black text-white">{menu.price}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white mt-2">{menu.name}</h4>
                    <p className="text-xs text-slate-400 mt-1">{menu.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-slate-900/90 border border-orange-500/30 flex items-center justify-between">
              <div className="text-xs">
                <span className="font-bold text-slate-200 block">Pesan Menu Langsung ke Meja Biliar Anda</span>
                <span className="text-slate-400">Waiter siap mengantar makanan dan minuman favorit Anda</span>
              </div>
              <a
                href="https://billiardbening4d.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-xs whitespace-nowrap transition"
              >
                Lihat Menu Lengkap
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
