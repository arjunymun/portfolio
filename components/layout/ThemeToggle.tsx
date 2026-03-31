"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  return (
    <button
      aria-label="Toggle color theme"
      className="secondary-button !h-11 !w-11 !p-0"
      onClick={() => {
        const root = document.documentElement;
        const nextIsDark = !root.classList.contains("dark");
        root.classList.toggle("dark", nextIsDark);

        try {
          window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
        } catch {
          // Ignore localStorage failures and keep the in-memory toggle behavior.
        }
      }}
      type="button"
    >
      <Moon className="h-4 w-4 dark:hidden" />
      <Sun className="hidden h-4 w-4 dark:block" />
    </button>
  );
}
