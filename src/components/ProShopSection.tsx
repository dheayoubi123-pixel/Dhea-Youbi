import React, { useState } from 'react';
import { PRO_SHOP_ITEMS, ProShopItem } from '../data/billiardData';
import { ShoppingBag, Star, Wrench, ShieldCheck, ChevronRight } from 'lucide-react';

export const ProShopSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Cue Stick' | 'Shaft' | 'Accessories' | 'Case'>('All');

  const items = filter === 'All' ? PRO_SHOP_ITEMS : PRO_SHOP_ITEMS.filter((i) => i.category === filter);

  return (
    <section id="proshop" className="py-20 bg-[#0d0e14] border-b border-orange-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            BENING4D PRO SHOP & CUE WORKSHOP
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Peralatan Biliar Kelas Dunia <span className="text-orange-500">100% Original</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Distributor stik ternama dunia dengan bengkel servis presisi. Pasang tip Kamui/Zan dalam 15 menit menggunakan mesin bubut bubut presisi.
          </p>

          {/* Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {(['All', 'Cue Stick', 'Shaft', 'Accessories', 'Case'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  filter === cat
                    ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-orange-400'
                }`}
              >
                {cat === 'All' ? 'Semua Produk' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/40 p-5 flex flex-col justify-between group transition shadow-lg"
            >
              <div>
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-950/80 text-orange-400 border border-slate-700">
                    {item.brand}
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-slate-950/80 px-2 py-0.5 rounded text-amber-400 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                <h3 className="font-bold text-white text-base group-hover:text-orange-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">{item.description}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold">Harga Resmi:</span>
                  <span className="text-base font-extrabold text-orange-400">{item.price}</span>
                </div>

                <a
                  href={`https://wa.me/6287874016047?text=Halo%20Admin%20Bening4D,%20saya%20tertarik%20membeli%20${encodeURIComponent(item.name)}%20(${item.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-orange-500 text-slate-300 hover:text-slate-950 font-bold text-xs transition flex items-center gap-1.5"
                >
                  <span>Pesan</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Workshop Service Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-orange-950/40 via-slate-900 to-slate-950 border border-orange-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
              <Wrench className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Workshop & Servis Stik Presisi BENING4D</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Pemasangan Tip Kamui/Zan/Taom (15 Menit), Ganti Ferrule Juma/Ivorine, Re-clean Shaft Micro-mesh, dan Pasang Grip Kulit Lizard/Irish Linen.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/6287874016047?text=Halo%20Bengkel%20Bening4D,%20saya%20ingin%20servis%20stik%20biliar%20(pasang%20tip/shaft)"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold text-xs whitespace-nowrap transition shadow-md shadow-orange-500/20"
          >
            Konsultasi Servis Stik
          </a>
        </div>

      </div>
    </section>
  );
};
