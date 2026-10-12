import React from 'react';
import { Phone, MapPin, Clock, Mail, Shield, Trophy, Disc } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08090d] border-t border-orange-500/30 text-slate-400 text-xs pt-16 pb-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-400 p-0.5 shadow-lg shadow-orange-500/30">
                <div className="w-full h-full bg-[#0b0c10] rounded-[14px] flex items-center justify-center p-1">
                  <img
                    src="https://ik.imagekit.io/iiz37iwr7/iconbening4d.png?updatedAt=1791745927237"
                    alt="BENING4D Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span className="text-xl font-black text-white tracking-wider">
                BENING<span className="text-orange-500">4D</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              BENING4D Billiard adalah arena biliar modern dan lounge terpercaya dengan meja standar turnamen internasional 9-ft, pro shop stik biliar, turnamen mingguan, dan suasana eksklusif bernuansa oranye hangat.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://akseslink.com/wa-bening4d"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-full bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-orange-400 font-bold text-[10px] transition"
              >
                WPA Certified Equipment
              </a>
              <a
                href="https://akseslink.com/wa-bening4d"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold text-[10px] transition"
              >
                24/7 Operational
              </a>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider text-xs mb-4 text-orange-400">
              Navigasi Arena
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#tables" className="hover:text-orange-400 transition">Meja & Tarif Sewa</a>
              </li>
              <li>
                <a href="#tournaments" className="hover:text-orange-400 transition">Jadwal Turnamen Handicap</a>
              </li>
              <li>
                <a href="#lounge" className="hover:text-orange-400 transition">Orange Lounge & Cafe Menu</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400 transition">FAQ Pertanyaan Umum</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-orange-400 transition">Testimoni Pengunjung (4.9/5.0)</a>
              </li>
            </ul>
          </div>

          {/* Fasilitas Meja Col */}
          <div>
            <h4 className="font-extrabold text-white uppercase tracking-wider text-xs mb-4 text-orange-400">
              Spesifikasi Meja
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Disc className="w-3.5 h-3.5 text-orange-400" />
                <span>Rasson OX 9-ft Tournament Slate</span>
              </li>
              <li className="flex items-center gap-2">
                <Disc className="w-3.5 h-3.5 text-orange-400" />
                <span>Diamond Pro-Am 9-ft WPA Tables</span>
              </li>
              <li className="flex items-center gap-2">
                <Disc className="w-3.5 h-3.5 text-orange-400" />
                <span>Iwan Simonis 860 Tournament Cloth</span>
              </li>
              <li className="flex items-center gap-2">
                <Disc className="w-3.5 h-3.5 text-orange-400" />
                <span>Super Aramith Pro-Cup Belgian Balls</span>
              </li>
              <li className="flex items-center gap-2">
                <Disc className="w-3.5 h-3.5 text-orange-400" />
                <span>Shadowless 5000K Arena Lighting</span>
              </li>
            </ul>
          </div>

          {/* Kontak & Lokasi Col */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-xs mb-4 text-orange-400">
              Kontak & Operasional
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
              <span>Grand Arena Boulevard No. 88, Pusat Olahraga Biliar, DKI Jakarta, 12950</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <span>Buka 24 Jam Nonstop (Senin - Minggu)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <a
                href="https://akseslink.com/wa-bening4d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 font-bold hover:underline"
              >
                +62 878-7401-6047 (WhatsApp 24 Jam)
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <span>info@bening4d-billiard.com</span>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <div>
            <p>© {new Date().getFullYear()} BENING4D BILLIARD. Hak Cipta Dilindungi Undang-Undang.</p>
            <p className="mt-1 text-[10px] text-slate-600">
              Portal olahraga biliar resmi. Mengedepankan sportivitas, etika bermain, dan standar kejuaraan internasional.
            </p>
          </div>

          <div className="flex items-center gap-4 text-[10px]">
            <a href="https://bening4d-billiard.vercel.app/" className="hover:text-orange-400 transition">
              Vercel App
            </a>
            <span>•</span>
            <a href="https://billiard-bening4d.pages.dev/" className="hover:text-orange-400 transition">
              Cloudflare Mirror
            </a>
            <span>•</span>
            <span className="text-orange-500 font-semibold">Tema Orange & Ambient Rain</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
