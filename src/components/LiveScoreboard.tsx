import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Plus, Minus, Trophy, Sparkles, Volume2, ShieldAlert } from 'lucide-react';

interface LiveScoreboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveScoreboard: React.FC<LiveScoreboardProps> = ({ isOpen, onClose }) => {
  const [player1Name, setPlayer1Name] = useState('Pemain 1');
  const [player2Name, setPlayer2Name] = useState('Pemain 2');
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player1Fouls, setPlayer1Fouls] = useState(0);
  const [player2Fouls, setPlayer2Fouls] = useState(0);
  const [raceTo, setRaceTo] = useState(5);
  const [activeTurn, setActiveTurn] = useState<1 | 2>(1);

  // Shot clock
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [hasExtension, setHasExtension] = useState(true);

  // Ball pocket tracking (9 balls for 9-ball)
  const [pocketedBalls, setPocketedBalls] = useState<number[]>([]);

  // Shot clock timer tick
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      // Play brief synthesized beep
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.value = 880;
        gain.gain.value = 0.2;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        setTimeout(() => {
          osc.stop();
          ctx.close();
        }, 300);
      } catch {
        // ignore
      }
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  if (!isOpen) return null;

  const resetShotClock = () => {
    setTimeLeft(30);
    setIsTimerRunning(false);
    setHasExtension(true);
  };

  const addExtension = () => {
    if (hasExtension) {
      setTimeLeft((prev) => prev + 30);
      setHasExtension(false);
    }
  };

  const toggleBallPocket = (ballNum: number) => {
    if (pocketedBalls.includes(ballNum)) {
      setPocketedBalls(pocketedBalls.filter((b) => b !== ballNum));
    } else {
      setPocketedBalls([...pocketedBalls, ballNum]);
    }
  };

  const resetRack = () => {
    setPocketedBalls([]);
    resetShotClock();
  };

  const resetMatch = () => {
    if (confirm('Reset seluruh skor pertandingan?')) {
      setPlayer1Score(0);
      setPlayer2Score(0);
      setPlayer1Fouls(0);
      setPlayer2Fouls(0);
      resetRack();
    }
  };

  const ballColors = [
    '#eab308', // 1 Yellow
    '#2563eb', // 2 Blue
    '#dc2626', // 3 Red
    '#9333ea', // 4 Purple
    '#f97316', // 5 Orange
    '#16a34a', // 6 Green
    '#991b1b', // 7 Maroon
    '#0f172a', // 8 Black
    '#fde047', // 9 Yellow stripe
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0d0f17] border border-orange-500/40 shadow-2xl shadow-orange-500/20 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Scoreboard Top Bar */}
        <div className="px-5 py-4 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 fill-current" />
            <h3 className="font-extrabold text-base sm:text-lg tracking-tight">
              Scoreboard & Shot Clock Bening4D
            </h3>
            <span className="text-[10px] uppercase font-black bg-slate-950 text-orange-400 px-2 py-0.5 rounded ml-2">
              WPA 30s Rules
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-slate-950/20 hover:bg-slate-950/40 text-slate-950 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-100">
          
          {/* Target Race to Selector */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
            <span className="font-bold text-slate-300">Format Target Race to:</span>
            <div className="flex items-center gap-1.5">
              {[3, 5, 7, 9, 11].map((r) => (
                <button
                  key={r}
                  onClick={() => setRaceTo(r)}
                  className={`px-3 py-1 rounded-lg font-extrabold transition ${
                    raceTo === r ? 'bg-orange-500 text-slate-950 shadow' : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  Race {r}
                </button>
              ))}
            </div>
          </div>

          {/* Player Cards Split */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Player 1 */}
            <div
              onClick={() => setActiveTurn(1)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                activeTurn === 1
                  ? 'bg-slate-900 border-orange-500 ring-2 ring-orange-500/40 shadow-lg shadow-orange-500/20'
                  : 'bg-slate-900/60 border-slate-800 opacity-75'
              }`}
            >
              {activeTurn === 1 && (
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-orange-500 text-slate-950 text-[10px] font-black uppercase">
                  Giliran Main
                </div>
              )}
              <input
                type="text"
                value={player1Name}
                onChange={(e) => setPlayer1Name(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-transparent border-b border-slate-700 pb-1 font-bold text-sm sm:text-base text-orange-400 focus:border-orange-400 focus:outline-none"
              />

              <div className="my-4 text-center">
                <span className="text-5xl sm:text-7xl font-black font-mono text-white tracking-tight">
                  {player1Score}
                </span>
                <span className="block text-[11px] text-slate-400 mt-1">Rack Menang</span>
              </div>

              {/* Score Adjuster Buttons */}
              <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-800" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setPlayer1Score(Math.max(0, player1Score - 1))}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPlayer1Score(player1Score + 1)}
                  className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold transition flex items-center gap-1 text-xs"
                >
                  <Plus className="w-4 h-4" /> Tambah Rack
                </button>
              </div>

              {/* Fouls Counter */}
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80" onClick={(e) => e.stopPropagation()}>
                <span className="flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-red-400" /> Foul: {player1Fouls}
                </span>
                <button
                  onClick={() => setPlayer1Fouls((prev) => (prev >= 3 ? 0 : prev + 1))}
                  className="text-[10px] px-2 py-0.5 rounded bg-red-950/80 text-red-400 border border-red-800/60"
                >
                  + Foul
                </button>
              </div>
            </div>

            {/* Player 2 */}
            <div
              onClick={() => setActiveTurn(2)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                activeTurn === 2
                  ? 'bg-slate-900 border-orange-500 ring-2 ring-orange-500/40 shadow-lg shadow-orange-500/20'
                  : 'bg-slate-900/60 border-slate-800 opacity-75'
              }`}
            >
              {activeTurn === 2 && (
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-orange-500 text-slate-950 text-[10px] font-black uppercase">
                  Giliran Main
                </div>
              )}
              <input
                type="text"
                value={player2Name}
                onChange={(e) => setPlayer2Name(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-transparent border-b border-slate-700 pb-1 font-bold text-sm sm:text-base text-orange-400 focus:border-orange-400 focus:outline-none"
              />

              <div className="my-4 text-center">
                <span className="text-5xl sm:text-7xl font-black font-mono text-white tracking-tight">
                  {player2Score}
                </span>
                <span className="block text-[11px] text-slate-400 mt-1">Rack Menang</span>
              </div>

              {/* Score Adjuster Buttons */}
              <div className="flex items-center justify-center gap-2 pt-2 border-t border-slate-800" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setPlayer2Score(Math.max(0, player2Score - 1))}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setPlayer2Score(player2Score + 1)}
                  className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-slate-950 font-bold transition flex items-center gap-1 text-xs"
                >
                  <Plus className="w-4 h-4" /> Tambah Rack
                </button>
              </div>

              {/* Fouls Counter */}
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80" onClick={(e) => e.stopPropagation()}>
                <span className="flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-red-400" /> Foul: {player2Fouls}
                </span>
                <button
                  onClick={() => setPlayer2Fouls((prev) => (prev >= 3 ? 0 : prev + 1))}
                  className="text-[10px] px-2 py-0.5 rounded bg-red-950/80 text-red-400 border border-red-800/60"
                >
                  + Foul
                </button>
              </div>
            </div>

          </div>

          {/* Shot Clock Bar */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black font-mono shadow-inner ${
                  timeLeft <= 5
                    ? 'bg-red-600 text-white animate-pulse'
                    : 'bg-slate-950 text-orange-400 border border-orange-500/50'
                }`}
              >
                {timeLeft}
              </div>
              <div>
                <span className="font-extrabold text-sm text-slate-200 block">Shot Clock (30s)</span>
                <span className="text-[11px] text-slate-400">
                  {timeLeft <= 5 ? 'PERINGATAN WAKTU HABIS!' : isTimerRunning ? 'Berjalan...' : 'Dihentikan'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition ${
                  isTimerRunning
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                }`}
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isTimerRunning ? 'Jeda' : 'Mulai'}
              </button>

              <button
                onClick={resetShotClock}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                title="Reset ke 30 Detik"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={addExtension}
                disabled={!hasExtension}
                className={`px-3 py-2.5 rounded-xl text-xs font-bold transition ${
                  hasExtension
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40 hover:bg-orange-500/30'
                    : 'bg-slate-800/40 text-slate-500 border border-slate-800 cursor-not-allowed'
                }`}
              >
                +30s Extension
              </button>
            </div>
          </div>

          {/* 9-Ball Pocket Status Tracker */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-bold text-slate-300">Tracking Bola Masuk (Klik untuk menandai):</span>
              <button
                onClick={resetRack}
                className="text-[11px] text-orange-400 hover:underline"
              >
                Reset Rack Bola
              </button>
            </div>

            <div className="grid grid-cols-9 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
                const isPocketed = pocketedBalls.includes(num);
                return (
                  <button
                    key={num}
                    onClick={() => toggleBallPocket(num)}
                    className={`aspect-square rounded-full font-black text-xs sm:text-sm flex items-center justify-center transition transform active:scale-90 border-2 shadow ${
                      isPocketed
                        ? 'opacity-25 grayscale line-through border-slate-700 bg-slate-800 text-slate-500'
                        : 'border-white/50 text-slate-900'
                    }`}
                    style={{
                      backgroundColor: isPocketed ? undefined : ballColors[num - 1],
                      color: num === 8 ? '#ffffff' : '#0f172a',
                    }}
                  >
                    {num}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Match Actions */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={resetMatch}
              className="text-xs text-red-400 hover:text-red-300 font-semibold"
            >
              Reset Semua Skor
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-orange-500 text-slate-950 font-bold text-xs"
            >
              Selesai & Tutup
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
