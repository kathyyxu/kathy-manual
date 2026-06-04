import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "zh-CN", label: "简" },
  { code: "zh-TW", label: "繁" },
  { code: "en", label: "EN" },
];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-0 border-2 border-neon-pink bg-ink/90 p-1 font-mono text-xs uppercase tracking-widest shadow-brutal-gold backdrop-blur-sm sm:right-6 sm:top-6">
      {OPTIONS.map((o) => {
        const active = lang === o.code;
        return (
          <button
            key={o.code}
            onClick={() => setLang(o.code)}
            aria-pressed={active}
            className={cn(
              "px-2 py-1 transition-colors sm:px-3",
              active
                ? "bg-neon-pink text-primary-foreground shadow-glow-pink"
                : "text-foreground hover:text-neon-pink",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
