import React, { useState } from 'react';
import { BILLIARD_TABLES, TableItem } from '../data/billiardData';
import { CheckCircle2, Clock, Sparkles, Shield, ChevronRight, Layers } from 'lucide-react';

interface TableShowcaseProps {
  onSelectTable: (table: TableItem) => void;
}

export const TableShowcase: React.FC<TableShowcaseProps> = ({ onSelectTable }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Tournament' | 'VIP Lounge' | 'Snooker' | 'Regular'>('All');

  const filteredTables = selectedFilter === 'All' 
    ? BILLIARD_TABLES 
    : BILLIARD_TABLES.filter(t => t.type === selectedFilter);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="tables" className="py-20 bg-[#0d0e14] border-b border-orange-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold mb-3">
            <Layers className="w-3.5 h-3.5" />
            STANDAR TURNAMEN INTERNASIONAL & VIP SUITE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pilihan Meja Biliar <span className="text-orange-500">BENING4D</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Setiap meja dirawat rutin dengan leveling presisi mikrometer, vacuum brush harian, dan laken Simonis original untuk perputaran bola paling murni.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {(['All', 'Tournament', 'VIP Lounge', 'Snooker', 'Regular'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow-lg shadow-orange-500/25 scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-orange-400 hover:border-orange-500/40'
                }`}
              >
                {filter === 'All' ? 'Semua Meja' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Table Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTables.map((table) => (
            <div
              key={table.id}
              className="group rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-orange-500/10 flex flex-col"
            >
              {/* Image & Badges Header */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={table.image}
                  alt={table.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                
                {/* Type Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-orange-500 text-slate-950 shadow-md">
                  {table.type}
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold border backdrop-blur-md flex items-center gap-1.5 ${
                      table.status === 'Tersedia'
                        ? 'bg-emerald-950/80 border-emerald-500/40 text-emerald-400'
                        : table.status === 'Sedang Main'
                        ? 'bg-amber-950/80 border-amber-500/40 text-amber-400'
                        : 'bg-red-950/80 border-red-500/40 text-red-400'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        table.status === 'Tersedia' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                      }`}
                    />
                    {table.status}
                  </span>
                </div>

                {/* Code Pill */}
                <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-slate-950/80 text-[11px] font-mono font-bold text-orange-400 border border-slate-700">
                  ID: {table.id}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {table.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{table.specs}</p>

                  {/* Specifications Details */}
                  <div className="mt-4 p-3 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-orange-400" /> Laken Cloth:
                      </span>
                      <span className="text-slate-200 font-semibold">{table.cloth}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5 text-orange-400" /> Bola Resmi:
                      </span>
                      <span className="text-slate-200 font-semibold">{table.balls}</span>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="mt-4 space-y-1.5">
                    {table.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Action footer */}
                <div className="pt-4 border-t border-slate-800">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold block">Siang (Promo)</span>
                      <span className="text-base font-extrabold text-white">
                        {formatRupiah(table.hourlyRateDay)}
                      </span>
                      <span className="text-[10px] text-slate-400">/jam</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-orange-400 uppercase font-semibold block">Malam (18:00+)</span>
                      <span className="text-base font-extrabold text-orange-400">
                        {formatRupiah(table.hourlyRateNight)}
                      </span>
                      <span className="text-[10px] text-slate-400">/jam</span>
                    </div>
                  </div>

                  <a
                    href="https://billiardbening4d.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-orange-500/10 hover:bg-orange-500 border border-orange-500/40 hover:border-orange-500 text-orange-400 hover:text-slate-950 font-bold text-xs tracking-wide transition flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-orange-500/20"
                  >
                    <span>Pilih & Reservasi Meja</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
