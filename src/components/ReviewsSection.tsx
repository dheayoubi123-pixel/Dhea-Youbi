import React, { useState } from 'react';
import { REVIEWS } from '../data/billiardData';
import { Star, MessageSquareQuote, CheckCircle2, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | '5Star'>('All');

  return (
    <section id="reviews" className="py-20 bg-[#0b0c10] border-b border-orange-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Aggregate Rating */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            TESTIMONI & ULASAN PENGUNJUNG TERVERIFIKASI
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Review Pengunjung <span className="text-orange-500">BENING4D BILLIARD</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Kepuasan ribuan pemain biliar dari pemain kasual, atlet kejuaraan daerah, hingga pengunjung VIP lounge.
          </p>

          {/* Rating Summary Scorecard */}
          <div className="mt-8 inline-flex items-center gap-6 p-4 rounded-2xl bg-slate-900 border border-orange-500/30 shadow-xl">
            <div className="flex items-center gap-3 pr-6 border-r border-slate-800">
              <span className="text-4xl font-black text-white">4.9</span>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-400 mt-0.5 block">1.480+ Ulasan Google & Offline</span>
              </div>
            </div>

            <div className="text-left text-xs space-y-1">
              <div className="text-slate-300 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 98.7% Pengunjung Puas
              </div>
              <span className="text-slate-400 block text-[11px]">Terpercaya di Komunitas Biliar</span>
            </div>
          </div>
        </div>

        {/* 10 Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-orange-500/40 transition duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Author Info & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium">{review.date}</span>
                </div>

                {/* Comment Text */}
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    {review.name}
                    <CheckCircle2 className="w-3 h-3 text-orange-400" />
                  </h4>
                  <span className="text-[10px] text-slate-400">{review.location}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded">
                  <ThumbsUp className="w-3 h-3 text-emerald-400" /> Verified
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
