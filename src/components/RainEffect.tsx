import React, { useEffect, useRef, useState } from 'react';
import { CloudRain, Volume2, VolumeX, Eye, EyeOff, Sliders } from 'lucide-react';

interface RainEffectProps {
  onRainStateChange?: (active: boolean) => void;
}

export const RainEffect: React.FC<RainEffectProps> = ({ onRainStateChange }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [intensity, setIntensity] = useState<'light' | 'medium' | 'heavy'>('medium');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  // Web Audio API ambient rain sound synthesis
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    onRainStateChange?.(isActive);
  }, [isActive, onRainStateChange]);

  // Rain canvas animation
  useEffect(() => {
    if (!isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const countMap = {
      light: 80,
      medium: 180,
      heavy: 320,
    };
    const dropCount = countMap[intensity];

    // Drops definition
    interface Drop {
      x: number;
      y: number;
      length: number;
      speedY: number;
      speedX: number;
      opacity: number;
      thickness: number;
      isAmber: boolean;
    }

    interface Splash {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      opacity: number;
      color: string;
    }

    const drops: Drop[] = [];
    for (let i = 0; i < dropCount; i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 22 + 10,
        speedY: Math.random() * 12 + 14,
        speedX: -1.2, // slight wind drift
        opacity: Math.random() * 0.4 + 0.15,
        thickness: Math.random() * 1.2 + 0.8,
        isAmber: Math.random() > 0.75, // some drops reflect the glowing orange lounge light!
      });
    }

    const splashes: Splash[] = [];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render splashes
      for (let i = splashes.length - 1; i >= 0; i--) {
        const s = splashes[i];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.strokeStyle = s.color.replace('OPACITY', s.opacity.toFixed(2));
        ctx.lineWidth = 1;
        ctx.stroke();

        s.radius += 0.8;
        s.opacity -= 0.04;

        if (s.opacity <= 0 || s.radius >= s.maxRadius) {
          splashes.splice(i, 1);
        }
      }

      // Render raindrops
      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];

        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x + d.speedX * (d.length / 5), d.y + d.length);

        if (d.isAmber) {
          // Ambient orange reflective raindrop
          ctx.strokeStyle = `rgba(251, 146, 60, ${d.opacity * 0.85})`;
        } else {
          // Crisp atmospheric raindrop
          ctx.strokeStyle = `rgba(203, 213, 225, ${d.opacity * 0.65})`;
        }

        ctx.lineWidth = d.thickness;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Update positions
        d.x += d.speedX;
        d.y += d.speedY;

        // When drop hits bottom or random floor plane
        if (d.y > height) {
          // create occasional ripple splash
          if (Math.random() > 0.7) {
            splashes.push({
              x: d.x,
              y: height - Math.random() * 15,
              radius: 1,
              maxRadius: Math.random() * 8 + 4,
              opacity: 0.5,
              color: d.isAmber ? 'rgba(249, 115, 22, OPACITY)' : 'rgba(226, 232, 240, OPACITY)',
            });
          }

          d.y = -d.length;
          d.x = Math.random() * (width + 100);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive, intensity]);

  // Handle ambient rain audio synthesis using Web Audio API pink/white noise
  useEffect(() => {
    if (!soundEnabled || !isActive) {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.suspend();
        } catch {
          // ignore
        }
      }
      return;
    }

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Generate brown/pink noise buffer for rain
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Low-pass brown noise approximation for soothing rain sound
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5; // Gain factor
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Filter to simulate soft raindrops hitting roof & ground
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = intensity === 'light' ? 650 : intensity === 'medium' ? 950 : 1300;

      const gain = ctx.createGain();
      gain.gain.value = 0.12;

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      whiteNoise.start(0);

      noiseNodeRef.current = whiteNoise;
      gainNodeRef.current = gain;

      return () => {
        try {
          whiteNoise.stop();
          whiteNoise.disconnect();
        } catch {
          // ignore
        }
      };
    } catch {
      // Audio might be blocked until user gesture
    }
  }, [soundEnabled, isActive, intensity]);

  return (
    <>
      {isActive && (
        <canvas
          ref={canvasRef}
          className="rain-canvas-container"
          style={{ pointerEvents: 'none' }}
          aria-hidden="true"
        />
      )}

      {/* Floating Rain Controls Badge in bottom-left */}
      <div className="fixed bottom-5 left-5 z-40">
        <div className="relative">
          {showSettings && (
            <div className="absolute bottom-14 left-0 w-64 bg-slate-900/95 backdrop-blur-md border border-orange-500/40 rounded-2xl p-4 shadow-2xl text-xs text-slate-200 transition-all duration-200 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="font-bold text-orange-400 flex items-center gap-1.5">
                  <CloudRain className="w-4 h-4" /> Pengaturan Efek Hujan
                </span>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="mt-3 space-y-3">
                <div className="flex items-center justify-between">
                  <span>Status Animasi:</span>
                  <button
                    onClick={() => setIsActive(!isActive)}
                    className={`px-2.5 py-1 rounded-md font-semibold text-xs flex items-center gap-1 transition ${
                      isActive
                        ? 'bg-orange-500 text-white shadow-sm'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    {isActive ? 'Aktif' : 'Mati'}
                  </button>
                </div>

                <div>
                  <span className="block mb-1.5 text-slate-400">Intensitas Curah Hujan:</span>
                  <div className="grid grid-cols-3 gap-1 bg-slate-800/80 p-1 rounded-lg">
                    {(['light', 'medium', 'heavy'] as const).map((level) => (
                      <button
                        key={level}
                        onClick={() => {
                          setIntensity(level);
                          if (!isActive) setIsActive(true);
                        }}
                        className={`py-1 text-center capitalize rounded-md transition ${
                          intensity === level
                            ? 'bg-orange-500 text-white font-bold'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        {level === 'light' ? 'Gerimis' : level === 'medium' ? 'Sedang' : 'Deras'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
                  <span className="flex items-center gap-1">
                    Suara Ambient Hujan:
                  </span>
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 transition ${
                      soundEnabled
                        ? 'bg-orange-500 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {soundEnabled ? (
                      <>
                        <Volume2 className="w-3.5 h-3.5" /> Hidup
                      </>
                    ) : (
                      <>
                        <VolumeX className="w-3.5 h-3.5" /> Bisu
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Quick toggle pill */}
          <button
            onClick={() => setShowSettings(!showSettings)}
            aria-label="Pengaturan Efek Hujan Bening4D"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800/95 border border-orange-500/50 shadow-lg shadow-orange-500/10 backdrop-blur-md text-xs font-medium text-slate-200 transition group hover:border-orange-400"
          >
            <CloudRain className={`w-4 h-4 ${isActive ? 'text-orange-400 animate-pulse' : 'text-slate-500'}`} />
            <span>Efek Hujan: <strong className="text-orange-400 capitalize">{isActive ? (intensity === 'light' ? 'Gerimis' : intensity === 'medium' ? 'Sedang' : 'Deras') : 'Nonaktif'}</strong></span>
            <Sliders className="w-3 h-3 text-slate-400 group-hover:text-orange-400 ml-0.5" />
          </button>
        </div>
      </div>
    </>
  );
};
