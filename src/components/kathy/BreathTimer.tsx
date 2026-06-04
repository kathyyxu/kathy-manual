import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

interface BreathTimerProps {
  startSignal: number;
}

const TOTAL = 5;

const AFFIRMATION_KEYS: TranslationKey[] = [
  "bt.affirm.1",
  "bt.affirm.2",
  "bt.affirm.3",
  "bt.affirm.4",
  "bt.affirm.5",
  "bt.affirm.6",
  "bt.affirm.7",
];

interface SmashWord {
  id: number;
  text: string;
  x: number; // % within ring
  y: number; // % within ring
  rot: number; // deg
}

const BreathTimer = ({ startSignal }: BreathTimerProps) => {
  const { t, tList } = useLanguage();
  const [running, setRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(TOTAL);
  const [done, setDone] = useState(false);
  const [affirmation, setAffirmation] = useState("");
  const [smashWords, setSmashWords] = useState<SmashWord[]>([]);
  const [smashCount, setSmashCount] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const wordIdRef = useRef(0);
  const lastWordRef = useRef<string>("");
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playPunchSound = () => {
    try {
      if (!audioCtxRef.current) {
        const Ctx = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!Ctx) return;
        audioCtxRef.current = new Ctx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();
      const now = ctx.currentTime;

      // 1) Low thump (impact body)
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.18);
      oscGain.gain.setValueAtTime(0.0001, now);
      oscGain.gain.exponentialRampToValueAtTime(0.9, now + 0.005);
      oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
      osc.connect(oscGain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);

      // 2) Noise burst (slap / smack)
      const bufferSize = Math.floor(ctx.sampleRate * 0.15);
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
      }
      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = "lowpass";
      noiseFilter.frequency.setValueAtTime(2200, now);
      noiseFilter.frequency.exponentialRampToValueAtTime(400, now + 0.12);
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.6, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.13);
      noise.connect(noiseFilter).connect(noiseGain).connect(ctx.destination);
      noise.start(now);
      noise.stop(now + 0.15);
    } catch {
      // silent fail
    }
  };

  useEffect(() => {
    if (startSignal === 0) return;
    setSecondsLeft(TOTAL);
    setDone(false);
    setAffirmation("");
    setRunning(true);
    document.getElementById("timer")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [startSignal]);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (intervalRef.current) window.clearInterval(intervalRef.current);
          setRunning(false);
          setDone(true);
          const key = AFFIRMATION_KEYS[Math.floor(Math.random() * AFFIRMATION_KEYS.length)];
          setAffirmation(t(key));
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [running]);

  const progress = ((TOTAL - secondsLeft) / TOTAL) * 100;
  const phase = secondsLeft % 4 < 2 ? t("bt.inhale") : t("bt.exhale");

  const spawnSmashWord = () => {
    playPunchSound();
    const words = tList("bt.words");
    let text = words[Math.floor(Math.random() * words.length)];
    if (words.length > 1) {
      let guard = 0;
      while (text === lastWordRef.current && guard < 5) {
        text = words[Math.floor(Math.random() * words.length)];
        guard++;
      }
    }
    lastWordRef.current = text;

    const id = ++wordIdRef.current;
    const newWord: SmashWord = {
      id,
      text,
      x: 20 + Math.random() * 60,
      y: 20 + Math.random() * 60,
      rot: -15 + Math.random() * 30,
    };
    setSmashWords((prev) => [...prev, newWord]);
    setSmashCount((c) => c + 1);
    // Auto-remove after animation completes
    window.setTimeout(() => {
      setSmashWords((prev) => prev.filter((w) => w.id !== id));
    }, 1100);
  };

  return (
    <section id="timer" className="relative overflow-hidden border-y-2 border-pop-gold bg-cyber-purple-deep">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container relative z-10 grid items-center gap-10 py-20 md:grid-cols-[auto,1fr]">
        {/* Ring */}
        <div
          className="relative mx-auto h-56 w-56 cursor-pointer select-none sm:h-64 sm:w-64"
          onClick={spawnSmashWord}
          role="button"
          aria-label={t("bt.ringAria")}
        >
          <svg viewBox="0 0 200 200" className="pointer-events-none h-full w-full -rotate-90">
            <circle cx="100" cy="100" r="90" stroke="hsl(var(--muted))" strokeWidth="6" fill="none" />
            <circle
              cx="100"
              cy="100"
              r="90"
              stroke="hsl(var(--neon-pink))"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 90}
              strokeDashoffset={2 * Math.PI * 90 * (1 - progress / 100)}
              style={{ transition: "stroke-dashoffset 1s linear", filter: "drop-shadow(0 0 10px hsl(var(--neon-pink)))" }}
            />
          </svg>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            {!running && !done ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSecondsLeft(TOTAL);
                  setDone(false);
                  setAffirmation("");
                  setRunning(true);
                }}
                className="pointer-events-auto group flex flex-col items-center justify-center gap-1 rounded-full bg-neon-pink/10 px-6 py-4 transition-all hover:bg-neon-pink/20 hover:scale-105 active:scale-95"
                aria-label={t("bt.startAria")}
              >
                <div className="text-5xl transition-transform group-hover:scale-110">🥊</div>
                <div className="font-display text-base font-bold uppercase tracking-widest text-neon-pink text-glow-pink">
                  ▶ START
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {t("bt.tapToBegin")}
                </div>
              </button>
            ) : (
              <>
                <div className="text-6xl">🥊</div>
                <div className="mt-2 font-mono text-6xl font-bold text-neon-pink text-glow-pink tabular-nums">
                  {secondsLeft.toString().padStart(2, "0")}
                </div>
                <div className="mt-1 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {running ? phase : t("bt.activated")}
                </div>
              </>
            )}
          </div>

          {/* Smash words layer */}
          <div className="pointer-events-none absolute inset-0 overflow-visible">
            {smashWords.map((w) => (
              <span
                key={w.id}
                className="smash-word absolute whitespace-nowrap"
                style={{
                  left: `${w.x}%`,
                  top: `${w.y}%`,
                  ["--rot" as never]: `${w.rot}deg`,
                }}
              >
                <span className="smash-word-inner relative inline-block">
                  <span
                    className="relative z-10 inline-block border-2 border-ink bg-pop-gold px-3 py-1 font-display text-sm font-black uppercase tracking-wide text-ink shadow-[4px_4px_0_hsl(var(--ink))] sm:text-base"
                  >
                    {w.text}
                  </span>
                  <span className="smash-strike pointer-events-none absolute left-0 top-1/2 z-20 h-[4px] w-full -translate-y-1/2 bg-neon-pink shadow-[0_0_10px_hsl(var(--neon-pink))]" />
                </span>
              </span>
            ))}
          </div>

          {smashCount > 0 && (
            <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-acid-lime">
              SMASHED × {smashCount}
            </div>
          )}
        </div>

        {/* Copy */}
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-pop-gold">
            {t("bt.protocol")}
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-5xl">
            {t("bt.title1")}
            <span className="text-neon-pink text-glow-pink">{t("bt.title2")}</span>
          </h2>
          <p className="max-w-xl text-muted-foreground">{t("bt.desc")}</p>
          <p className="max-w-xl font-mono text-xs uppercase tracking-[0.25em] text-acid-lime">
            {t("bt.tip")}
          </p>

          {done && (
            <div className="mt-4 space-y-4">
              <div className="inline-flex items-center gap-3 border-2 border-acid-lime bg-acid-lime/10 px-5 py-3 font-mono text-sm uppercase tracking-widest text-acid-lime shadow-glow-lime">
                {t("bt.doneBadge")}
              </div>
              <blockquote className="relative max-w-xl border-l-4 border-neon-pink bg-card/60 p-6 backdrop-blur-sm">
                <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                  「{affirmation}」
                </p>
                <footer className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-pop-gold">
                  — FOR HER, FOR YOU, FOR US
                </footer>
              </blockquote>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BreathTimer;
