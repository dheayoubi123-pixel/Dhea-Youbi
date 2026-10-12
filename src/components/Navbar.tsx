import React, { useState } from 'react';
import { Phone, CalendarCheck, Menu, X, Trophy, Sparkles, Disc, LogIn, UserPlus } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (tableId?: string) => void;
  onOpenScoreboard: () => void;
  onOpenLogin?: () => void;
  onOpenRegister?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenScoreboard,
  onOpenLogin,
  onOpenRegister,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Meja & Tarif', href: '#tables' },
    { label: 'Live Scoreboard', onClick: onOpenScoreboard },
    { label: 'Turnamen', href: '#tournaments' },
    { label: 'Lounge & Cafe', href: '#lounge' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Testimoni', href: '#reviews' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0b0c10]/90 backdrop-blur-md border-b border-orange-500/25 transition-all">
      {/* Top Banner Ticker */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 text-slate-950 font-bold text-xs py-1 px-4 text-center tracking-wide flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5 animate-pulse">
          <Disc className="w-3.5 h-3.5 fill-current" />
          ARENA BILIAR BENING4D BUKA 24 JAM SETIAP HARI
        </span>
        <span className="hidden md:inline">•</span>
        <span className="hidden md:inline">Turnamen Mingguan Total Hadiah Rp 6.500.000+!</span>
        <span className="hidden lg:inline">•</span>
        <span className="hidden lg:inline">Promo Happy Hour Siang Rp 35rb/jam</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-500 to-orange-400 p-0.5 shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition">
              <div className="w-full h-full bg-[#0b0c10] rounded-[14px] flex items-center justify-center relative overflow-hidden p-1">
                <img
                  src="https://ik.imagekit.io/iiz37iwr7/iconbening4d.png?updatedAt=1791745927237"
                  alt="BENING4D Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-wider text-white">
                  BENING<span className="text-orange-500 text-shadow-sm">4D</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] uppercase font-extrabold bg-orange-500/20 text-orange-400 border border-orange-500/40 rounded">
                  PRO
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                ARENA & LOUNGE BILIAR EKSKLUSIF
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <React.Fragment key={idx}>
                {link.onClick ? (
                  <button
                    onClick={link.onClick}
                    className="text-sm font-semibold text-slate-300 hover:text-orange-400 transition flex items-center gap-1.5"
                  >
                    <Trophy className="w-4 h-4 text-orange-500" />
                    {link.label}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-slate-300 hover:text-orange-400 transition"
                  >
                    {link.label}
                  </a>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* LOGIN & DAFTAR in Navbar */}
            <a
              href="https://billiardbening4d.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl text-xs font-black tracking-wide border border-orange-500/40 hover:border-orange-400 text-orange-400 hover:text-white transition flex items-center gap-1"
            >
              <LogIn className="w-3.5 h-3.5" />
              LOGIN
            </a>

            <a
              href="https://billiardbening4d.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl text-xs font-black tracking-wide bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/60 text-orange-300 hover:text-white transition flex items-center gap-1"
            >
              <UserPlus className="w-3.5 h-3.5" />
              DAFTAR
            </a>

            <a
              href="https://billiardbening4d.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 transition flex items-center gap-1.5 transform active:scale-95"
            >
              <CalendarCheck className="w-4 h-4" />
              Booking Meja
            </a>

            <a
              href="https://akseslink.com/wa-bening4d"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700/80 text-orange-400 hover:text-orange-300 transition"
              title="Hotline WhatsApp 24 Jam"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={onOpenLogin}
              className="sm:hidden px-2.5 py-1.5 rounded-lg text-[11px] font-bold border border-orange-500/50 text-orange-400"
            >
              Login
            </button>
            <a
              href="https://billiardbening4d.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-1.5 rounded-lg text-[11px] font-bold bg-orange-500 text-slate-950"
            >
              Booking
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0b0c10]/95 border-b border-orange-500/30 px-5 py-4 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <a
              href="https://billiardbening4d.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl text-center text-xs font-black border border-orange-500/50 text-orange-400 flex items-center justify-center gap-1.5"
            >
              <LogIn className="w-4 h-4" /> LOGIN
            </a>
            <a
              href="https://billiardbening4d.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl text-center text-xs font-black bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 flex items-center justify-center gap-1.5"
            >
              <UserPlus className="w-4 h-4" /> DAFTAR
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl text-center text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center gap-1.5"
            >
              <CalendarCheck className="w-4 h-4 text-orange-400" /> Booking Meja
            </button>
            <button
              onClick={() => {
                onOpenScoreboard();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl text-center text-xs font-bold border border-slate-800 text-slate-300 flex items-center justify-center gap-1.5"
            >
              <Trophy className="w-4 h-4 text-orange-400" /> Scoreboard
            </button>
          </div>

          {navLinks.map((link, idx) => (
            <div key={idx}>
              {link.onClick ? (
                <button
                  onClick={() => {
                    link.onClick?.();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-sm font-semibold text-slate-300 hover:text-orange-400"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-semibold text-slate-300 hover:text-orange-400"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}

          <a
            href="https://akseslink.com/wa-bening4d"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold mt-2"
          >
            <Phone className="w-3.5 h-3.5" /> WhatsApp Hotline 24 Jam (+62 878-7401-6047)
          </a>
        </div>
      )}
    </header>
  );
};
