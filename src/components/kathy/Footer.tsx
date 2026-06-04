import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const rows: [string, string, string][] = [
    ["INSTAGRAM", "@fighterkathy", "#"],
    [t("ft.podcast"), t("ft.podcastVal"), "#"],
    [t("ft.trade"), "cn.hk-ky.com", "https://cn.hk-ky.com/"],
    [t("ft.collab"), "math314s@gmail.com", "mailto:math314s@gmail.com"],
  ];
  return (
    <footer className="border-t-2 border-neon-pink bg-ink py-12">
      <div className="container mb-12 border-b-2 border-acid-lime pb-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3 font-mono text-sm text-foreground sm:text-base">
            <p>
              <span className="text-acid-lime">Wechat ID:</span> Kathyyxu
            </p>
            <p>
              <span className="text-pop-gold">Email:</span> math314s@gmail.com
            </p>
          </div>
          <a
            href="mailto:math314s@gmail.com?subject=Deep%20Talk"
            className="group relative inline-flex w-fit items-center gap-3 bg-neon-pink px-8 py-4 font-display text-base font-bold uppercase tracking-wider text-primary-foreground shadow-brutal-gold transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_hsl(var(--pop-gold))] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            <span className="text-xl">▶</span>
            {t("ft.cta")}
          </a>
        </div>
      </div>

      <div className="container flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="glitch font-display text-5xl font-bold text-glow-pink" data-text="KATHY">KATHY</div>
          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">{t("ft.tagline")}</p>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-3 font-mono text-sm">
          {rows.map(([k, v, href]) => (
            <a
              key={k}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-6 border-b border-border pb-1 text-foreground transition-colors hover:border-neon-pink hover:text-neon-pink"
            >
              <span className="text-muted-foreground group-hover:text-pop-gold">{k}</span>
              <span>{v} ↗</span>
            </a>
          ))}
        </div>
      </div>
      <div className="container mt-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>{t("ft.copyright")}</span>
        <span className="text-acid-lime">{t("ft.online")}</span>
      </div>
    </footer>
  );
};

export default Footer;
