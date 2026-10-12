/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TableShowcase } from './components/TableShowcase';
import { TournamentSection } from './components/TournamentSection';
import { LoungeSection } from './components/LoungeSection';
import { FaqSection } from './components/FaqSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { RainEffect } from './components/RainEffect';
import { BookingModal } from './components/BookingModal';
import { LiveScoreboard } from './components/LiveScoreboard';
import { AuthModal } from './components/AuthModal';
import { TableItem } from './data/billiardData';
import { MessageCircle, CalendarCheck } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState<TableItem | null>(null);
  const [isScoreboardOpen, setIsScoreboardOpen] = useState(false);
  
  // Auth state
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const handleOpenBooking = (table?: TableItem) => {
    setSelectedTable(table || null);
    setIsBookingOpen(true);
  };

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-slate-100 flex flex-col relative selection:bg-orange-500 selection:text-slate-950 font-sans">
      {/* Interactive Rain Effect Overlay */}
      <RainEffect />

      {/* Main Top Navigation with LOGIN & DAFTAR */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenScoreboard={() => setIsScoreboardOpen(true)}
        onOpenLogin={() => handleOpenAuth('login')}
        onOpenRegister={() => handleOpenAuth('register')}
      />

      {/* Main Page Sections */}
      <main className="flex-1 relative z-10">
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenScoreboard={() => setIsScoreboardOpen(true)}
          onOpenLogin={() => handleOpenAuth('login')}
          onOpenRegister={() => handleOpenAuth('register')}
        />

        <TableShowcase
          onSelectTable={(table) => handleOpenBooking(table)}
        />

        <TournamentSection />

        <LoungeSection />

        <FaqSection />

        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action CTA for WhatsApp in bottom-right */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href="https://akseslink.com/wa-bening4d"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-bold text-xs shadow-xl shadow-orange-500/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Booking Meja Bening4D</span>
        </a>

        <a
          href="https://akseslink.com/wa-bening4d"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 transition transform hover:scale-105 active:scale-95 flex items-center justify-center group"
          title="Chat WhatsApp 24 Jam Bening4D"
          aria-label="WhatsApp Hotline 24 Jam"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out pl-0 group-hover:pl-2 text-xs font-bold">
            Chat WhatsApp 24 Jam
          </span>
        </a>
      </div>

      {/* Interactive Booking & Price Calculator Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialTable={selectedTable}
      />

      {/* Interactive Billiard Scoreboard & 30s Shot Clock Modal */}
      <LiveScoreboard
        isOpen={isScoreboardOpen}
        onClose={() => setIsScoreboardOpen(false)}
      />

      {/* Interactive Login & Register Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
        onLoginSuccess={(userName) => setCurrentUser(userName)}
      />
    </div>
  );
}
