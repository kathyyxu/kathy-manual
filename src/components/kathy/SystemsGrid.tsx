import { useLanguage } from "@/i18n/LanguageContext";

interface SystemCard {
  id: string;
  num: string;
  emoji: string;
  titleKey: "sg.1.title" | "sg.2.title" | "sg.3.title" | "sg.4.title";
  vibe: string;
  vibeKey?: "sg.3.vibe";
  gradient: string;
  badge: string;
  badgeKey?: "sg.4.badge";
  lineKeys: ["sg.1.line1" | "sg.2.line1" | "sg.3.line1" | "sg.4.line1", "sg.1.line2" | "sg.2.line2" | "sg.3.line2" | "sg.4.line2"];
  ctaKey: "sg.1.cta" | "sg.2.cta" | "sg.3.cta" | "sg.4.cta";
  href?: string;
  rotate: string;
}

const systems: SystemCard[] = [
  {
    id: "01", num: "SYSTEM 2", emoji: "💹",
    titleKey: "sg.1.title",
    vibe: "STRATEGIST MODE · 2014—NOW",
    gradient: "bg-gradient-system3",
    badge: "@kathy.capital",
    lineKeys: ["sg.1.line1", "sg.1.line2"],
    ctaKey: "sg.1.cta",
    href: "https://kathyhkmoney.lovable.app/",
    rotate: "-rotate-1",
  },
  {
    id: "02", num: "SYSTEM 2", emoji: "⚙️",
    titleKey: "sg.2.title",
    vibe: "BUILDER MODE · 2019—NOW",
    gradient: "bg-gradient-system2",
    badge: "cn.hk-ky.com",
    lineKeys: ["sg.2.line1", "sg.2.line2"],
    ctaKey: "sg.2.cta",
    href: "https://cn.hk-ky.com/",
    rotate: "rotate-1",
  },
  {
    id: "03", num: "SYSTEM 1", emoji: "🥊",
    titleKey: "sg.3.title",
    vibe: "",
    vibeKey: "sg.3.vibe",
    gradient: "bg-gradient-system1",
    badge: "@fighterkathy",
    lineKeys: ["sg.3.line1", "sg.3.line2"],
    ctaKey: "sg.3.cta",
    href: "https://xhslink.com/m/5sbtTZ4GS98",
    rotate: "-rotate-1",
  },
  {
    id: "04", num: "SYSTEM 1", emoji: "🎙️",
    titleKey: "sg.4.title",
    vibe: "CREATOR MODE",
    gradient: "bg-gradient-system4",
    badge: "",
    badgeKey: "sg.4.badge",
    lineKeys: ["sg.4.line1", "sg.4.line2"],
    ctaKey: "sg.4.cta",
    href: "https://open.spotify.com/show/2Zii8qwGFv2QmTWYYP4Zh2?si=1372812a612849cb",
    rotate: "rotate-1",
  },
];

const SystemsGrid = () => {
  const { t } = useLanguage();
  return (
    <section id="systems" className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container relative z-10">
        <div className="mb-16 flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-pop-gold">{t("sg.tag")}</p>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-6xl">
            {t("sg.title1")}<span className="text-neon-pink text-glow-pink">{t("sg.titleFour")}</span>{t("sg.title2")}
          </h2>
          <p className="max-w-xl text-muted-foreground">{t("sg.desc")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {systems.map((s) => (
            <article
              key={s.id}
              className={`group relative border-2 border-foreground/10 bg-card p-1 transition-all hover:border-neon-pink hover:shadow-glow-pink ${s.rotate} hover:rotate-0`}
            >
              <div className={`${s.gradient} relative flex items-center justify-between px-6 py-4`}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink">{s.num}</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/80">
                  {s.vibeKey ? t(s.vibeKey) : s.vibe}
                </span>
              </div>

              <div className="flex flex-col gap-5 p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <span className="text-6xl drop-shadow-lg sm:text-7xl">{s.emoji}</span>
                  <span className="font-mono text-xs text-muted-foreground">{s.id}/04</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{t(s.titleKey)}</h3>

                <div className="inline-flex w-fit items-center gap-2 border border-pop-gold/40 bg-pop-gold/10 px-3 py-1 font-mono text-xs text-pop-gold">
                  {s.badgeKey ? t(s.badgeKey) : s.badge}
                </div>

                <ul className="space-y-2 text-sm text-foreground/85">
                  {s.lineKeys.map((lk, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1 text-neon-pink">▸</span>
                      <span>{t(lk)}</span>
                    </li>
                  ))}
                </ul>

                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex w-fit items-center gap-2 border-b-2 border-neon-pink pb-1 font-mono text-sm uppercase tracking-wider text-neon-pink transition-all hover:gap-4 hover:text-glow-pink"
                  >
                    {t(s.ctaKey)}
                  </a>
                ) : (
                  <button className="mt-2 inline-flex w-fit items-center gap-2 border-b-2 border-neon-pink pb-1 font-mono text-sm uppercase tracking-wider text-neon-pink transition-all hover:gap-4 hover:text-glow-pink">
                    {t(s.ctaKey)}
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsGrid;
