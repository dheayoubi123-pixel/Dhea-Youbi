import React, { useState } from 'react';
import { BILLIARD_TABLES, TableItem } from '../data/billiardData';
import { X, Calendar, Clock, User, Phone, CheckCircle, Coffee, Sparkles, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTable?: TableItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialTable }) => {
  const [selectedTableId, setSelectedTableId] = useState<string>(
    initialTable ? initialTable.id : BILLIARD_TABLES[0].id
  );
  const [sessionTime, setSessionTime] = useState<'day' | 'night'>('night');
  const [durationHours, setDurationHours] = useState<number>(2);
  const [name, setName] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [playDate, setPlayDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [playTime, setPlayTime] = useState<string>('20:00');
  
  // Add-ons
  const [includeSnack, setIncludeSnack] = useState<boolean>(false);
  const [includeCarbonCue, setIncludeCarbonCue] = useState<boolean>(false);
  const [includeCoach, setIncludeCoach] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentTable = BILLIARD_TABLES.find((t) => t.id === selectedTableId) || BILLIARD_TABLES[0];
  const ratePerHour = sessionTime === 'day' ? currentTable.hourlyRateDay : currentTable.hourlyRateNight;
  
  const baseTableTotal = ratePerHour * durationHours;
  const snackTotal = includeSnack ? 75000 : 0;
  const cueTotal = includeCarbonCue ? 45000 : 0;
  const coachTotal = includeCoach ? 90000 : 0;
  const grandTotal = baseTableTotal + snackTotal + cueTotal + coachTotal;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) {
      alert('Silakan isi Nama dan Nomor WhatsApp Anda.');
      return;
    }

    const message = 
`*RESERVASI MEJA BENING4D BILLIARD*
Nama Pemesan: ${name}
No. WhatsApp: ${whatsapp}
Meja: ${currentTable.name} (${currentTable.id})
Tanggal Main: ${playDate}
Jam Main: ${playTime} WIB
Durasi: ${durationHours} Jam (${sessionTime === 'day' ? 'Tarif Siang' : 'Tarif Malam'})
Tambahan:
- Paket F&B Snack & Drink: ${includeSnack ? 'Ya (+Rp 75.000)' : 'Tidak'}
- Rental Stik Carbon Predator: ${includeCarbonCue ? 'Ya (+Rp 45.000)' : 'Tidak'}
- Instruktur / Sparring Coach: ${includeCoach ? 'Ya (+Rp 90.000)' : 'Tidak'}
*Total Estimasi Biaya:* ${formatRupiah(grandTotal)}

Halo Admin Bening4D, mohon konfirmasi ketersediaan meja untuk pesanan saya di atas. Terima kasih!`;

    const waUrl = 'https://akseslink.com/wa-bening4d';

    setIsSuccess(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-orange-500/40 shadow-2xl shadow-orange-500/20 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-5 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-slate-950 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 fill-current" />
              <h3 className="font-extrabold text-lg tracking-tight">Kalkulator & Booking Meja Bening4D</h3>
            </div>
            <p className="text-xs text-slate-900/80 font-medium">Reservasi instan terhubung ke WhatsApp hotline 24 jam</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-950/20 hover:bg-slate-950/40 text-slate-950 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleBookingSubmit} className="p-6 overflow-y-auto space-y-5 text-slate-200 text-xs">
          {/* Pilih Meja */}
          <div>
            <label className="block text-slate-300 font-bold mb-1.5">Pilih Meja Biliar:</label>
            <select
              value={selectedTableId}
              onChange={(e) => setSelectedTableId(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 font-semibold focus:border-orange-500 focus:outline-none"
            >
              {BILLIARD_TABLES.map((t) => (
                <option key={t.id} value={t.id}>
                  [{t.id}] {t.name} - {formatRupiah(sessionTime === 'day' ? t.hourlyRateDay : t.hourlyRateNight)}/jam
                </option>
              ))}
            </select>
          </div>

          {/* Sesi & Jam Siang/Malam */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-bold mb-1.5">Waktu Sesi:</label>
              <div className="grid grid-cols-2 gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  type="button"
                  onClick={() => setSessionTime('day')}
                  className={`py-2 text-center rounded-lg font-bold transition ${
                    sessionTime === 'day' ? 'bg-orange-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Siang (Promo)
                </button>
                <button
                  type="button"
                  onClick={() => setSessionTime('night')}
                  className={`py-2 text-center rounded-lg font-bold transition ${
                    sessionTime === 'night' ? 'bg-orange-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Malam (18+)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1.5">
                Durasi Main: <span className="text-orange-400 font-extrabold">{durationHours} Jam</span>
              </label>
              <div className="flex items-center gap-2 pt-1.5">
                {[1, 2, 3, 4, 5].map((hr) => (
                  <button
                    key={hr}
                    type="button"
                    onClick={() => setDurationHours(hr)}
                    className={`flex-1 py-1.5 rounded-lg font-bold border transition ${
                      durationHours === hr
                        ? 'bg-orange-500 text-slate-950 border-orange-400'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {hr}j
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tanggal & Waktu Kedatangan */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-bold mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-orange-400" /> Tanggal Main:
              </label>
              <input
                type="date"
                value={playDate}
                onChange={(e) => setPlayDate(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-bold mb-1.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-orange-400" /> Jam Kedatangan:
              </label>
              <input
                type="time"
                value={playTime}
                onChange={(e) => setPlayTime(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Identitas Pemesan */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-bold mb-1.5 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-orange-400" /> Nama Pemesan:
              </label>
              <input
                type="text"
                placeholder="Contoh: Rian Gunawan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-bold mb-1.5 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-orange-400" /> No. WhatsApp:
              </label>
              <input
                type="tel"
                placeholder="Contoh: 081234567890"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                required
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Add-on Packages */}
          <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
            <span className="block font-bold text-slate-300 mb-1">Paket Tambahan Rekomendasi:</span>
            
            <label className="flex items-center justify-between p-2 rounded-xl bg-slate-900/80 cursor-pointer hover:bg-slate-900 transition">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={includeSnack}
                  onChange={(e) => setIncludeSnack(e.target.checked)}
                  className="rounded text-orange-500 focus:ring-0"
                />
                <Coffee className="w-4 h-4 text-amber-400" />
                <span>Paket F&B Lounge (2 Mocktail + 1 Platter Snack)</span>
              </span>
              <span className="font-bold text-orange-400">+Rp 75.000</span>
            </label>

            <label className="flex items-center justify-between p-2 rounded-xl bg-slate-900/80 cursor-pointer hover:bg-slate-900 transition">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={includeCarbonCue}
                  onChange={(e) => setIncludeCarbonCue(e.target.checked)}
                  className="rounded text-orange-500 focus:ring-0"
                />
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>Sewa Stik Carbon Predator REVO</span>
              </span>
              <span className="font-bold text-orange-400">+Rp 45.000</span>
            </label>

            <label className="flex items-center justify-between p-2 rounded-xl bg-slate-900/80 cursor-pointer hover:bg-slate-900 transition">
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={includeCoach}
                  onChange={(e) => setIncludeCoach(e.target.checked)}
                  className="rounded text-orange-500 focus:ring-0"
                />
                <User className="w-4 h-4 text-emerald-400" />
                <span>Instruktur Sparring / Pelatih Privat 1 Jam</span>
              </span>
              <span className="font-bold text-orange-400">+Rp 90.000</span>
            </label>
          </div>

          {/* Total Breakdown */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-950 to-orange-950/40 border border-orange-500/40">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
              <span>Sewa Meja ({durationHours} jam x {formatRupiah(ratePerHour)}):</span>
              <span className="font-semibold text-slate-200">{formatRupiah(baseTableTotal)}</span>
            </div>
            {(includeSnack || includeCarbonCue || includeCoach) && (
              <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
                <span>Tambahan Paket:</span>
                <span className="font-semibold text-slate-200">{formatRupiah(snackTotal + cueTotal + coachTotal)}</span>
              </div>
            )}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-sm font-extrabold">
              <span className="text-white">Estimasi Total Biaya:</span>
              <span className="text-lg text-orange-400">{formatRupiah(grandTotal)}</span>
            </div>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isSuccess}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-sm shadow-xl shadow-orange-500/30 transition flex items-center justify-center gap-2"
          >
            {isSuccess ? (
              <>
                <CheckCircle className="w-4 h-4 text-slate-950 animate-bounce" />
                <span>Membuka WhatsApp Booking...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Kirim Booking via WhatsApp Resmi</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
};
