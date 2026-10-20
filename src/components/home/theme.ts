import type { CSSProperties } from "react";

export type HomeTheme = "dark" | "blue";

// Colour tokens as CSS variables so every section can switch look without code changes.
const TOKENS: Record<HomeTheme, Record<string, string>> = {
  dark: {
    "--bg": "#0a0f1c",
    "--bg2": "#111a2b",
    "--fg": "#f4f6f1",
    "--muted": "#9aa4b8",
    "--card": "rgba(255,255,255,0.045)",
    "--line": "rgba(255,255,255,0.10)",
    "--a": "#1cabb0",
    "--b": "#3fd6d6",
    "--on-primary": "#0a0f1c",
    "--glow": "rgba(28,171,176,0.22)",
  },
  blue: {
    "--bg": "#ffffff",
    "--bg2": "#eef5ff",
    "--fg": "#0f172a",
    "--muted": "#475569",
    "--card": "#ffffff",
    "--line": "#dbeafe",
    "--a": "#0066e6",
    "--b": "#19b2e6",
    "--on-primary": "#ffffff",
    "--glow": "rgba(0,102,255,0.18)",
  },
};

export const themeStyle = (t: HomeTheme): CSSProperties => TOKENS[t] as CSSProperties;

export const SANDBOX_URL = "https://book.court-side.ai/kings-court-markham-2";
// Demo booking page (Google Calendar appointment schedule).
export const DEMO_URL = "https://calendar.app.google/tfcHwc6zAmuhpAw6A";

export const btnPrimary =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-[var(--on-primary)] bg-gradient-to-r from-[var(--a)] to-[var(--b)] hover:opacity-90 transition";
export const btnSecondary =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-[var(--fg)] border border-[var(--line)] bg-[var(--card)] hover:border-[var(--a)] transition";
export const card = "rounded-2xl border border-[var(--line)] bg-[var(--card)] backdrop-blur";
export const gradText = "bg-gradient-to-r from-[var(--a)] to-[var(--b)] bg-clip-text text-transparent";
