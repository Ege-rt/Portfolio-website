"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type Locale = "tr" | "en" | "de";

const SUPPORTED_LOCALES: Locale[] = ["tr", "en", "de"];
const STORAGE_KEY = "locale";

function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") return "tr";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && SUPPORTED_LOCALES.includes(stored)) return stored;

  const navigatorLangs = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language];

  for (const lang of navigatorLangs) {
    const short = lang.slice(0, 2).toLowerCase() as Locale;
    if (SUPPORTED_LOCALES.includes(short)) return short;
  }

  return "tr";
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  mounted: boolean;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocaleState(detectBrowserLocale());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
