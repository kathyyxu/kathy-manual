import { useLanguage } from "@/i18n/LanguageContext";

const Marquee = () => {
  const { t } = useLanguage();
  const items = [
    "FIGHTER",
    "BUILDER",
    "CREATOR",
    "SOUL",
    "INFINITE GAME",
    t("marquee.timezone"),
    "MULTIVERSE",
    t("marquee.rebel"),
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y-2 border-neon-pink bg-ink py-3">
      <div className="flex w-max animate-marquee whitespace-nowrap font-mono text-sm uppercase tracking-[0.3em] text-neon-pink">
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8">
            <span className="text-glow-pink">{item}</span>
            <span aria-hidden className="text-pop-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
