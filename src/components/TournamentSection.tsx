import React from 'react';
import { TOURNAMENTS } from '../data/billiardData';
import { Trophy, Calendar, Award, Users, ChevronRight, Flame, ShieldCheck } from 'lucide-react';

export const TournamentSection: React.FC = () => {
  return (
    <section id="tournaments" className="py-20 bg-[#0b0c10] border-b border-orange-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold mb-3">
            <Trophy className="w-3.5 h-3.5 text-orange-500" />
            KOMPETISI RESMI & HANDICAP FAIR PLAY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Jadwal Turnamen Biliar <span className="text-orange-500">BENING4D</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Uji kemampuan Anda di turnamen mingguan dan bulanan dengan sistem handicap transparan, wasit bersertifikasi, dan hadiah langsung cair tanpa potongan.
          </p>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOURNAMENTS.map((trn) => (
            <div
              key={trn.id}
              className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl relative group overflow-hidden"
            >
              {/* Tournament Image Banner */}
              <div className="relative h-44 rounded-2xl overflow-hidden mb-4 border border-orange-500/30">
                <img
                  src="https://ik.imagekit.io/iiz37iwr7/arenabilliardbening4.png"
                  alt={trn.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-500 text-slate-950 shadow-md">
                  {trn.category}
                </div>
                <div className="absolute top-2.5 right-2.5">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-950/80 border border-emerald-500/40 text-emerald-400 flex items-center gap-1 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {trn.status}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  {trn.title}
                </h3>

                {/* Prize Highlight Box */}
                <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-orange-950/60 to-slate-950 border border-orange-500/30">
                  <span className="text-[10px] text-orange-400 uppercase font-extrabold tracking-wider block">
                    TOTAL HADIAH (PRIZE POOL)
                  </span>
                  <span className="text-2xl font-black text-white orange-text-glow">
                    {trn.totalPrize}
                  </span>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-300">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Juara 1: <strong className="text-amber-300">{trn.firstPrize}</strong></span>
                  </div>
                </div>

                {/* Tournament Specs */}
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    <span>{trn.date} ({trn.time})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-400" />
                    <span>Format: {trn.format}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span>Biaya Pendaftaran: <strong className="text-white">{trn.entryFee}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-400">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>{trn.quota}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800">
                <a
                  href="https://billiardbening4d.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-black text-xs tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                >
                  <span>Daftar Slot Turnamen</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
