import { useLanguage } from "@/i18n/LanguageContext";

const Manifesto = () => {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl border-2 border-neon-pink bg-cyber-purple-deep p-8 shadow-glow-pink sm:p-14">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-pop-gold">{t("mf.tag")}</p>
          <blockquote className="mt-6 font-display text-2xl font-bold leading-snug text-foreground sm:text-4xl">
            {t("mf.quote1")}<span className="text-neon-pink text-glow-pink">{t("mf.quoteWin")}</span>{t("mf.quote2")}<span className="text-pop-gold text-glow-gold">{t("mf.quoteKeep")}</span>{t("mf.quote3")}
          </blockquote>
          <p className="mt-8 font-mono text-sm text-muted-foreground">{t("mf.quoteAttrib")}</p>

          <div className="mt-10 space-y-5 border-t border-border pt-8 text-foreground/90">
            <p className="font-display text-lg leading-relaxed sm:text-xl">
              {t("mf.p1a")}<span className="text-neon-pink text-glow-pink">Deep Connection</span>{t("mf.p1b")}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">{t("mf.p2")}</p>

            <div className="inline-flex flex-wrap items-center gap-2 border-2 border-acid-lime bg-acid-lime/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-acid-lime shadow-glow-lime">
              <span>{t("mf.status")}</span>
              <span className="text-muted-foreground">{t("mf.notSeeking")}</span>
              <span className="text-acid-lime">|</span>
              <span>{t("mf.seeking")}</span>
              <span className="text-pop-gold">{t("mf.resonance")}</span>
            </div>

            <p className="text-base leading-relaxed">{t("mf.p3")}</p>
            <p className="text-base leading-relaxed text-muted-foreground">{t("mf.p4")}</p>

            <ul className="space-y-2 border-l-2 border-pop-gold pl-5 font-mono text-sm text-foreground/90">
              <li>{t("mf.filter.1")}</li>
              <li>{t("mf.filter.2")}</li>
              <li>{t("mf.filter.3")}</li>
            </ul>

            <div className="space-y-4 border-t border-border pt-6">
              <p className="text-base leading-relaxed text-foreground/90">{t("mf.p5")}</p>
              <ul className="space-y-3 border-l-2 border-neon-pink pl-5 text-base text-foreground/90">
                <li>{t("mf.q1")}</li>
                <li>{t("mf.q2")}</li>
              </ul>
              <p className="text-base leading-relaxed text-foreground/90">{t("mf.p6")}</p>
            </div>

            <p className="font-display text-xl font-bold text-foreground">{t("mf.sayhi")}</p>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-pop-gold">{t("mf.onlyWant")}</p>
              <ol className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  { n: "01", k: "mf.want.1" as const },
                  { n: "02", k: "mf.want.2" as const },
                  { n: "03", k: "mf.want.3" as const },
                  { n: "04", k: "mf.want.4" as const },
                ].map((it) => (
                  <li key={it.n} className="flex items-center gap-3 border border-border bg-card/40 px-4 py-3 backdrop-blur-sm">
                    <span className="font-display text-2xl font-bold text-acid-lime text-glow-lime tabular-nums">{it.n}</span>
                    <span className="font-display text-lg font-bold text-foreground">{t(it.k)}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {[
              { k: "04", vk: "mf.stat.1" as const },
              { k: "∞", vk: "mf.stat.2" as const },
              { k: "08", vk: "mf.stat.3" as const },
            ].map((s) => (
              <div key={s.vk}>
                <div className="font-display text-5xl font-bold text-acid-lime text-glow-lime tabular-nums">{s.k}</div>
                <div className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">{t(s.vk)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
