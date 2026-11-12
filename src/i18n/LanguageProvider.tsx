import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, LOCALES, STORAGE_KEY, type Dict, type Locale } from "./types";
import fr from "./fr";
import sw from "./sw";
import en from "./en";

const dictionaries: Record<Locale, Dict> = { fr, sw, en };

type I18nValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Translated string, falling back to French then to the key itself. */
  t: (key: string) => string;
  /** True when the active locale really holds this key. */
  has: (key: string) => boolean;
  /** Number of French keys the active locale has not translated yet. */
  missingCount: number;
};

const I18nContext = createContext<I18nValue | null>(null);

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return LOCALES.some((l) => l.code === stored) ? (stored as Locale) : DEFAULT_LOCALE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<I18nValue>(() => {
    const dict = dictionaries[locale];
    const t = (key: string) => dict[key] ?? fr[key] ?? key;
    const has = (key: string) => locale === DEFAULT_LOCALE || key in dict;
    const missingCount =
      locale === DEFAULT_LOCALE ? 0 : Object.keys(fr).filter((key) => !(key in dict)).length;
    return { locale, setLocale, t, has, missingCount };
  }, [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside LanguageProvider");
  return context;
}

export { LOCALES, DEFAULT_LOCALE };
export type { Locale };
