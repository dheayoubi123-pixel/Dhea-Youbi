import React from 'react';
import { Sparkles, Calendar, Trophy, ShieldCheck, ChevronRight, Star, Clock, Flame, LogIn, UserPlus, CalendarCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenScoreboard: () => void;
  onOpenLogin?: () => void;
  onOpenRegister?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenScoreboard,
  onOpenLogin,
  onOpenRegister,
}) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:py-24 border-b border-orange-500/20 felt-pattern">
      {/* Background radial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-600/20 via-amber-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-bold tracking-wide shadow-sm shadow-orange-500/20">
              <Flame className="w-4 h-4 text-orange-500 animate-bounce" />
              <span>ARENA & LOUNGE BILIAR EKSKLUSIF BERKELAS DUNIA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Main Biliar Presisi di{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 orange-text-glow">
                BENING4D
              </span>{' '}
              Billiard Arena & Lounge
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Rasakan sensasi break dan pot sempurna di atas meja resmi 9-ft <strong>Rasson OX & Diamond</strong> berlaken original <strong>Iwan Simonis 860</strong>. Dilengkapi lampu turnamen <em>shadowless</em> bebas bayangan, ruang VIP oranye eksklusif, dan suasana santai dengan alunan hujan ambient 24 jam nonstop.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://billiardbening4d.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5"
              >
                <Calendar className="w-5 h-5" />
                Booking Meja Sekarang
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="https://billiardbening4d.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-orange-500/40 text-orange-400 hover:text-orange-300 font-bold text-sm transition flex items-center gap-2.5 backdrop-blur-md"
              >
                <Trophy className="w-5 h-5 text-orange-400" />
                Buka Scoreboard Digital
              </a>
            </div>

            {/* Key Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-orange-400 font-bold text-sm">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>24 Jam</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">Nonstop Setiap Hari</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-orange-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                  <span>Simonis 860</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">Laken Belgia Asli</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-orange-400 font-bold text-sm">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>4.9 / 5.0</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">1.480+ Ulasan Puas</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-orange-400 font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  <span>Rp 35.000</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">Promo Happy Hour/Jam</p>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card with 1:1 Image Button, Booking CTA, LOGIN & DAFTAR buttons */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-1 bg-gradient-to-b from-orange-500/60 via-amber-500/30 to-slate-800 shadow-2xl shadow-orange-500/20 orange-glow">
              <div className="relative rounded-[22px] overflow-hidden bg-slate-950 p-4 space-y-4">
                
                {/* 1:1 Aspect Ratio Image Button (Booking Sekarang) */}
                <a
                  href="https://billiardbening4d.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square w-full rounded-2xl overflow-hidden group cursor-pointer block border-2 border-orange-500/40 hover:border-orange-400 transition-all duration-300 shadow-2xl shadow-orange-500/20 transform hover:scale-[1.01] active:scale-[0.99] text-left"
                  title="Klik untuk Booking Meja Bening4D Sekarang"
                >
                  {/* Image 1:1 */}
                  <img
                    src="https://ik.imagekit.io/iiz37iwr7/arenabilliardbening4.png"
                    alt="BENING4D BILLIARD Arena - Booking Sekarang"
                    className="w-full h-full object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Top-down gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/30 group-hover:via-slate-950/10 transition-colors" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-slate-950/85 border border-orange-500/60 backdrop-blur-md flex items-center gap-2 shadow-lg">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[11px] font-black text-emerald-400">12 MEJA READY</span>
                  </div>

                  {/* Ball 8 Badge in corner */}
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-tr from-orange-600 to-amber-400 p-0.5 shadow-lg shadow-orange-500/40">
                    <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center font-black text-xs text-orange-400 font-mono">
                      8
                    </div>
                  </div>

                  {/* Bottom Image Callout Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-slate-900/90 border border-orange-500/40 backdrop-blur-md flex items-center justify-between group-hover:bg-orange-500 group-hover:text-slate-950 transition-colors duration-300">
                    <div className="flex items-center gap-2">
                      <CalendarCheck className="w-5 h-5 text-orange-400 group-hover:text-slate-950 transition-colors" />
                      <div>
                        <span className="text-xs font-black text-white group-hover:text-slate-950 block transition-colors">
                          KLIK UNTUK BOOKING SEKARANG
                        </span>
                        <span className="text-[10px] text-slate-300 group-hover:text-slate-900 transition-colors">
                          Standar Turnamen 9-ft & VIP Lounge
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-orange-400 group-hover:text-slate-950 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                {/* Primary Button BOOKING SEKARANG */}
                <a
                  href="https://billiardbening4d.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-sm tracking-wider uppercase shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-5 h-5" />
                  <span>BOOKING SEKARANG</span>
                  <ChevronRight className="w-4 h-4 ml-0.5" />
                </a>

                {/* Buttons LOGIN dan DAFTAR */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href="https://billiardbening4d.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border-2 border-orange-500/50 hover:border-orange-400 text-orange-400 hover:text-orange-300 font-black text-xs tracking-wider uppercase transition shadow-md shadow-orange-500/10 flex items-center justify-center gap-2 transform active:scale-95"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>LOGIN</span>
                  </a>

                  <a
                    href="https://billiardbening4d.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs tracking-wider uppercase transition shadow-md shadow-amber-500/25 flex items-center justify-center gap-2 transform active:scale-95"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>DAFTAR</span>
                  </a>
                </div>

                {/* Quick Status Bar */}
                <div className="pt-2 border-t border-slate-800/80">
                  <div className="flex items-center justify-between mb-2 text-[11px]">
                    <span className="font-bold text-slate-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                      Status Meja Saat Ini:
                    </span>
                    <span className="text-orange-400 font-semibold">24 Jam Nonstop</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-bold">
                    <div className="p-1.5 rounded-lg bg-emerald-950/70 border border-emerald-700/50 text-emerald-400">
                      T-01: Ready
                    </div>
                    <div className="p-1.5 rounded-lg bg-amber-950/70 border border-amber-700/50 text-amber-400">
                      T-02: Main
                    </div>
                    <div className="p-1.5 rounded-lg bg-emerald-950/70 border border-emerald-700/50 text-emerald-400">
                      VIP-1: Ready
                    </div>
                    <div className="p-1.5 rounded-lg bg-emerald-950/70 border border-emerald-700/50 text-emerald-400">
                      SNK-1: Ready
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
