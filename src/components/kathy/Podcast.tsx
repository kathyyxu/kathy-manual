import podcastEp01 from "@/assets/podcast-ep01.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const PODCAST_URL = "https://open.spotify.com/show/2Zii8qwGFv2QmTWYYP4Zh2?si=1ea47b976a1e4585";

const Podcast = () => {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-24">
      <div className="absolute inset-0 bg-scanlines animate-scanline" />
      <div className="container relative z-10 grid items-center gap-12 md:grid-cols-[1.2fr,1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-acid-lime text-glow-lime">{t("pod.tag")}</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
            {t("pod.title1")}<span className="text-neon-pink text-glow-pink">8</span>{t("pod.title2")}
          </h2>
          <p className="mt-4 font-display text-lg text-pop-gold text-glow-gold">{t("pod.subtitle")}</p>
          <p className="mt-6 max-w-lg text-muted-foreground">{t("pod.desc")}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="border border-neon-pink px-3 py-1 font-mono text-xs uppercase tracking-widest text-neon-pink">EP01</span>
            <span className="border border-acid-lime px-3 py-1 font-mono text-xs uppercase tracking-widest text-acid-lime">Spotify</span>
          </div>

          <a
            href={PODCAST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-pop-gold px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-ink shadow-brutal transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_hsl(var(--neon-pink))]"
          >
            {t("pod.cta")}
          </a>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-neon opacity-40 blur-2xl" />
          <div className="relative border-2 border-neon-pink bg-card p-6 shadow-glow-pink">
            <div className="flex items-center gap-2 border-b border-border pb-3 font-mono text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-destructive" />
              <span className="h-2 w-2 rounded-full bg-pop-gold" />
              <span className="h-2 w-2 rounded-full bg-acid-lime" />
              <span className="ml-auto">timezone-8h.fm</span>
            </div>
            <div className="mt-5 flex gap-4">
              <div className="relative shrink-0">
                <div
                  className="relative rotate-[-4deg] bg-pop-gold p-[5px] shadow-[6px_6px_0_hsl(var(--ink)),12px_12px_0_hsl(var(--neon-pink))]"
                  style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))" }}
                >
                  <div className="bg-ink p-[2px]">
                    <div className="bg-[hsl(40_30%_94%)] p-2">
                      <div className="relative h-24 w-24 overflow-hidden bg-ink">
                        <img src={podcastEp01} alt="EP01" className="h-full w-full object-cover" style={{ filter: "contrast(1.05) saturate(1.1)" }} />
                        <div className="absolute left-0 top-0 bg-neon-pink px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-widest text-primary-foreground">EP01</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-pop-gold">EP.01</p>
                <h3 className="mt-1 truncate font-display text-lg font-bold">{t("pod.epTitle")}</h3>
                <p className="mt-1 text-xs text-muted-foreground">32:08</p>
              </div>
            </div>
            <div className="mt-5 flex h-14 items-end gap-[3px]">
              {Array.from({ length: 48 }).map((_, i) => {
                const h = 20 + Math.abs(Math.sin(i * 0.7)) * 80;
                const active = i < 18;
                return <div key={i} className={`flex-1 ${active ? "bg-neon-pink shadow-glow-pink" : "bg-muted"}`} style={{ height: `${h}%` }} />;
              })}
            </div>
            <div className="mt-3 flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span>12:04</span>
              <a
                href={PODCAST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neon-pink text-primary-foreground shadow-glow-pink"
                aria-label={t("pod.listenAria")}
              >
                ▶
              </a>
              <span>32:08</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
