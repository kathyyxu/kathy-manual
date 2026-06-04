import kathyPortrait from "@/assets/kathy-portrait.jpg";
import kathyPortrait2 from "@/assets/kathy-portrait-2.jpg";
import kathyPortrait3 from "@/assets/kathy-portrait-3.jpg";
import kathyPortrait4 from "@/assets/kathy-portrait-4.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

interface HeroProps {
  onActivate: () => void;
}

const Hero = ({ onActivate }: HeroProps) => {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-scanlines animate-scanline" />
      <div
        className="pointer-events-none absolute -left-20 top-32 h-72 w-72 rounded-full bg-neon-pink/30 blur-3xl animate-float-slow"
        style={{ ["--r" as string]: "0deg" }}
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-pop-gold/20 blur-3xl animate-float-slow"
        style={{ ["--r" as string]: "0deg", animationDelay: "1.5s" }}
      />

      <div className="container relative z-10 flex min-h-screen flex-col justify-center py-24">
        <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.4em] text-neon-pink">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-neon-pink shadow-glow-pink" />
          {t("hero.nowPlaying")}
          <span className="ml-auto hidden text-muted-foreground sm:inline">{t("hero.chapter")}</span>
        </div>

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-start sm:gap-5 md:gap-6">
          <div className="relative z-20 min-w-0 sm:max-w-[430px] md:max-w-[460px] lg:max-w-none">
            <h1
              data-text="KATHY"
              className="glitch font-display text-[18vw] font-bold leading-none tracking-tighter text-foreground text-glow-pink sm:text-[14vw] md:text-[150px] lg:text-[180px]"
            >
              KATHY
            </h1>

            <div className="mt-1 flex flex-wrap items-baseline gap-x-5 gap-y-1">
              <span className="font-display text-2xl font-bold text-pop-gold text-glow-gold sm:text-4xl">
                {t("hero.multiverse")}
              </span>
              <span className="text-muted-foreground">／</span>
              <span className="font-display text-2xl font-bold text-acid-lime text-glow-lime sm:text-4xl">
                {t("hero.infiniteGame")}
              </span>
            </div>

            <div className="mt-5 max-w-2xl space-y-2 border-l-2 border-neon-pink pl-5">
              <p className="text-lg text-foreground sm:text-xl">
                {t("hero.iAm")} <span className="font-bold text-neon-pink">Kathy</span>
                {t("hero.intro")}
                <br />
                <span className="text-sm opacity-80">{t("hero.subIntro")}</span>
              </p>
              <p className="font-mono text-sm text-muted-foreground">{t("hero.line1")}</p>
              <p className="font-mono text-sm text-muted-foreground">
                <span className="text-acid-lime">System 1</span> {t("hero.system1")}
              </p>
              <p className="font-mono text-sm text-muted-foreground">
                <span className="text-acid-lime">System 2</span> {t("hero.system2")}
              </p>
              <p className="text-base text-foreground/90">
                {t("hero.line2")}
                <br />
                <span className="text-sm text-neon-pink">{t("hero.line3")}</span>
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={onActivate}
                className="group relative inline-flex items-center gap-3 bg-neon-pink px-8 py-4 font-display text-base font-bold uppercase tracking-wider text-primary-foreground shadow-brutal-gold transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_hsl(var(--pop-gold))] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                <span className="text-xl">▶</span>
                {t("hero.cta")}
              </button>
              <a
                href="#systems"
                className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground underline-offset-4 hover:text-neon-pink hover:underline"
              >
                {t("hero.explore")}
              </a>
            </div>
          </div>

          <div className="relative z-10 shrink-0 self-center sm:mt-16 sm:self-start md:mt-20">
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <div className="flex items-end gap-4 sm:gap-6">
                <div className="relative">
                  <div
                    className="relative -rotate-6 bg-neon-pink p-[6px] shadow-[8px_8px_0_hsl(var(--ink)),16px_16px_0_hsl(var(--pop-gold))]"
                    style={{ clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))" }}
                  >
                    <div className="bg-ink p-[3px]">
                      <div className="bg-[hsl(40_30%_94%)] p-3 pb-12">
                        <div className="relative h-44 w-36 overflow-hidden bg-ink sm:h-52 sm:w-44">
                          <img src={kathyPortrait} alt="Kathy" className="h-full w-full object-cover" style={{ filter: "contrast(1.05) saturate(1.1)" }} />
                          <div className="absolute left-0 top-0 bg-neon-pink px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-primary-foreground">REBEL</div>
                        </div>
                        <p className="mt-2 text-center font-display text-sm font-bold uppercase tracking-wider text-ink">{t("hero.polaroid1")}</p>
                      </div>
                    </div>
                    <div className="absolute -right-3 -top-3 flex h-10 w-10 rotate-12 items-center justify-center bg-pop-gold font-display text-xl font-black text-ink shadow-[3px_3px_0_hsl(var(--ink))]">★</div>
                  </div>
                  <div className="absolute -left-4 -top-2 h-5 w-16 rotate-[-20deg] bg-acid-lime/70 shadow-md" />
                </div>

                <div className="relative hidden sm:block">
                  <div
                    className="relative rotate-6 bg-acid-lime p-[6px] shadow-[8px_8px_0_hsl(var(--ink)),16px_16px_0_hsl(var(--neon-pink))]"
                    style={{ clipPath: "polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px)" }}
                  >
                    <div className="bg-ink p-[3px]">
                      <div className="bg-[hsl(40_30%_94%)] p-3 pb-12">
                        <div className="relative h-44 w-36 overflow-hidden bg-ink sm:h-52 sm:w-44">
                          <img src={kathyPortrait2} alt="Kathy" className="h-full w-full object-cover" style={{ filter: "contrast(1.05) saturate(1.1)" }} />
                          <div className="absolute right-0 top-0 bg-pop-gold px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-ink">ROAM</div>
                        </div>
                        <p className="mt-2 text-center font-display text-sm font-bold uppercase tracking-wider text-ink">{t("hero.polaroid2")}</p>
                      </div>
                    </div>
                    <div className="absolute -left-3 -top-3 flex h-10 w-10 -rotate-12 items-center justify-center bg-neon-pink font-display text-xl font-black text-primary-foreground shadow-[3px_3px_0_hsl(var(--ink))]">✦</div>
                  </div>
                  <div className="absolute -right-4 -top-2 h-5 w-16 rotate-[20deg] bg-pop-gold/70 shadow-md" />
                </div>
              </div>

              <div className="flex items-end gap-4 sm:gap-6">
                <div className="relative">
                  <div
                    className="relative rotate-3 bg-pop-gold p-[6px] shadow-[8px_8px_0_hsl(var(--ink)),16px_16px_0_hsl(var(--neon-pink))]"
                    style={{ clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))" }}
                  >
                    <div className="bg-ink p-[3px]">
                      <div className="bg-[hsl(40_30%_94%)] p-3 pb-12">
                        <div className="relative h-44 w-36 overflow-hidden bg-ink sm:h-52 sm:w-44">
                          <img src={kathyPortrait3} alt="Kathy" className="h-full w-full object-cover" style={{ filter: "contrast(1.05) saturate(1.1)" }} />
                          <div className="absolute left-0 top-0 bg-acid-lime px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-ink">DREAM</div>
                        </div>
                        <p className="mt-2 text-center font-display text-sm font-bold uppercase tracking-wider text-ink">{t("hero.polaroid3")}</p>
                      </div>
                    </div>
                    <div className="absolute -right-3 -top-3 flex h-10 w-10 rotate-12 items-center justify-center bg-neon-pink font-display text-xl font-black text-primary-foreground shadow-[3px_3px_0_hsl(var(--ink))]">✺</div>
                  </div>
                  <div className="absolute -left-4 -top-2 h-5 w-16 rotate-[-15deg] bg-neon-pink/70 shadow-md" />
                </div>

                <div className="relative hidden sm:block">
                  <div
                    className="relative -rotate-3 bg-neon-pink p-[6px] shadow-[8px_8px_0_hsl(var(--ink)),16px_16px_0_hsl(var(--acid-lime))]"
                    style={{ clipPath: "polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px)" }}
                  >
                    <div className="bg-ink p-[3px]">
                      <div className="bg-[hsl(40_30%_94%)] p-3 pb-12">
                        <div className="relative h-44 w-36 overflow-hidden bg-ink sm:h-52 sm:w-44">
                          <img src={kathyPortrait4} alt="Kathy" className="h-full w-full object-cover" style={{ filter: "contrast(1.05) saturate(1.1)" }} />
                          <div className="absolute right-0 top-0 bg-pop-gold px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-ink">BUILD</div>
                        </div>
                        <p className="mt-2 text-center font-display text-sm font-bold uppercase tracking-wider text-ink">{t("hero.polaroid4")}</p>
                      </div>
                    </div>
                    <div className="absolute -left-3 -top-3 flex h-10 w-10 -rotate-12 items-center justify-center bg-acid-lime font-display text-xl font-black text-ink shadow-[3px_3px_0_hsl(var(--ink))]">⚙</div>
                  </div>
                  <div className="absolute -right-4 -top-2 h-5 w-16 rotate-[15deg] bg-acid-lime/70 shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
