import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { translations, Lang, TranslationKey } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
  tList: (key: TranslationKey) => string[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "kathy-lang";

const detectDefault = (): Lang => {
  if (typeof window === "undefined") return "zh-CN";
  const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (saved === "zh-CN" || saved === "zh-TW" || saved === "en") return saved;
  const nav = window.navigator.language.toLowerCase();
  if (nav.startsWith("en")) return "en";
  if (nav.includes("tw") || nav.includes("hk") || nav.includes("hant")) return "zh-TW";
  return "zh-CN";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("zh-CN");

  useEffect(() => {
    setLangState(detectDefault());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const value = useMemo<LanguageContextValue>(() => {
    const dict = translations[lang];
    const fallback = translations["zh-CN"];
    const t = (key: TranslationKey) => {
      const v = dict[key] ?? fallback[key];
      return Array.isArray(v) ? v.join("") : (v as string);
    };
    const tList = (key: TranslationKey) => {
      const v = dict[key] ?? fallback[key];
      return Array.isArray(v) ? (v as string[]) : [v as string];
    };
    return { lang, setLang, t, tList };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

export const useT = () => useLanguage().t;
