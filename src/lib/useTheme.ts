"use client";

import { useEffect, useState, useCallback } from "react";

function getInitialTheme(): boolean {
  if (typeof window === "undefined") return true;
  const stored = window.localStorage.getItem("theme");
  return stored ? stored === "dark" : true;
}

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Sunucu ile istemci arasındaki hydration uyuşmazlığını önlemek için
    // ikon yalnızca istemcide mount olduktan sonra gösterilir.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  }, []);

  return { isDark, toggle, mounted };
}
