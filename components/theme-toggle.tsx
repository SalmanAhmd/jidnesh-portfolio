"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggleTheme() {
    const current =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const next = current === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = next;

    try {
      window.localStorage.setItem("jidnesh-theme", next);
    } catch {
      // Storage may be unavailable; the theme still changes for this visit.
    }
  }

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <Sun className="theme-icon theme-icon-dark" aria-hidden="true" />
      <Moon className="theme-icon theme-icon-light" aria-hidden="true" />
    </button>
  );
}
