import React, { useState } from 'react';
import { X, LogIn, UserPlus, Lock, Phone, User, CheckCircle2, ShieldCheck, Sparkles, KeyRound } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
  onLoginSuccess?: (userName: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
  onLoginSuccess,
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  
  // Login fields
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Register fields
  const [regFullName, setRegFullName] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regReferral, setRegReferral] = useState('');

  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginIdentifier || !loginPassword) {
      alert('Mohon isi Username / No. HP dan Password.');
      return;
    }

    setNotification(`Selamat datang kembali di BENING4D, ${loginIdentifier}!`);
    setTimeout(() => {
      onLoginSuccess?.(loginIdentifier);
      setNotification(null);
      onClose();
    }, 1200);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regFullName || !regPhone || !regUsername || !regPassword) {
      alert('Mohon lengkapi formulir pendaftaran member.');
      return;
    }

    setNotification(`Pendaftaran Berhasil! Akun Member ${regUsername} telah aktif.`);
    setTimeout(() => {
      onLoginSuccess?.(regUsername);
      setNotification(null);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-[#0d0f17] border border-orange-500/40 shadow-2xl shadow-orange-500/20 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Tabs: LOGIN & DAFTAR */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-white tracking-wide">
                MEMBER VIP BENING4D
              </h3>
              <p className="text-[10px] text-slate-400">Akses turnamen & diskon sewa meja 30%</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div className="grid grid-cols-2 p-2 bg-slate-950 gap-2 border-b border-slate-800">
          <button
            onClick={() => setMode('login')}
            className={`py-2.5 rounded-xl text-xs font-black tracking-wider transition flex items-center justify-center gap-1.5 ${
              mode === 'login'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow-md shadow-orange-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <LogIn className="w-4 h-4" />
            LOGIN
          </button>
          <button
            onClick={() => setMode('register')}
            className={`py-2.5 rounded-xl text-xs font-black tracking-wider transition flex items-center justify-center gap-1.5 ${
              mode === 'register'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow-md shadow-orange-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            DAFTAR
          </button>
        </div>

        {/* Success Alert Banner */}
        {notification && (
          <div className="m-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{notification}</span>
          </div>
        )}

        {/* Content Form */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          {mode === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-300 font-bold mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-orange-400" />
                  Username / No. WhatsApp:
                </label>
                <input
                  type="text"
                  placeholder="Masukkan username atau no. WhatsApp"
                  value={loginIdentifier}
                  onChange={(e) => setLoginIdentifier(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1.5 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-orange-400" />
                  Password:
                </label>
                <input
                  type="password"
                  placeholder="Masukkan password Anda"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-orange-500 focus:ring-0" />
                  <span>Ingat Saya</span>
                </label>
                <a
                  href="https://wa.me/6287874016047?text=Halo%20Admin%20Bening4D,%20saya%20lupa%20password%20akun%20member"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:underline"
                >
                  Lupa Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-sm tracking-wider shadow-lg shadow-orange-500/25 transition transform active:scale-98 flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                MASUK KE AKUN SEKARANG
              </button>

              <div className="text-center pt-2">
                <span className="text-slate-400 text-[11px]">Belum memiliki akun member? </span>
                <button
                  type="button"
                  onClick={() => setMode('register')}
                  className="text-orange-400 font-bold hover:underline text-[11px]"
                >
                  Daftar Sekarang
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
              <div>
                <label className="block text-slate-300 font-bold mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-orange-400" />
                  Nama Lengkap:
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Rian Gunawan"
                  value={regFullName}
                  onChange={(e) => setRegFullName(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-orange-400" />
                  Nomor WhatsApp Aktif:
                </label>
                <input
                  type="tel"
                  placeholder="0812xxxxxxxx"
                  value={regPhone}
                  onChange={(e) => setRegPhone(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1 flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-orange-400" />
                  Pilih Username:
                </label>
                <input
                  type="text"
                  placeholder="Minimal 4 karakter (tanpa spasi)"
                  value={regUsername}
                  onChange={(e) => setRegUsername(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-orange-400" />
                  Buat Password:
                </label>
                <input
                  type="password"
                  placeholder="Minimal 6 karakter"
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-orange-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-400 font-medium mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                  Kode Referral (Opsional):
                </label>
                <input
                  type="text"
                  placeholder="BENINGVIP"
                  value={regReferral}
                  onChange={(e) => setRegReferral(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-600 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/30 text-[11px] text-orange-300">
                ⭐ Keuntungan Member: Diskon meja 30%, free loker stik, gratis voucher minuman setiap booking.
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-sm tracking-wider shadow-lg shadow-orange-500/25 transition transform active:scale-98 flex items-center justify-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                DAFTAR MEMBER VIP SEKARANG
              </button>

              <div className="text-center pt-1">
                <span className="text-slate-400 text-[11px]">Sudah punya akun? </span>
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-orange-400 font-bold hover:underline text-[11px]"
                >
                  Login di sini
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
