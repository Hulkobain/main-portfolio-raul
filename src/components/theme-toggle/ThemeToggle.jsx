"use client";

import { HalfMoon, SunLight } from "iconoir-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("portfolio-theme", nextTheme);
    setIsDark(nextTheme === "dark");
  };

  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="inline-flex size-10 items-center justify-center rounded-full border border-line/80 bg-surface/70 text-muted transition hover:border-brand/50 hover:text-ink"
      onClick={toggleTheme}
      type="button"
    >
      {isDark ? (
        <SunLight className="size-5" />
      ) : (
        <HalfMoon className="size-5" />
      )}
    </button>
  );
}
