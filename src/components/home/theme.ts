import type { CSSProperties } from "react";

export type HomeTheme = "dark" | "blue";

// Colour tokens as CSS variables so every section can switch look without code changes.
const TOKENS: Record<HomeTheme, Record<string, string>> = {
  dark: {
    "--bg": "#070b14",
    "--bg2": "#0b1322",
    "--fg": "#ffffff",
    "--muted": "#94a3b8",
    "--card": "rgba(255,255,255,0.045)",
    "--line": "rgba(255,255,255,0.10)",
    "--a": "#3b82f6",
    "--b": "#22d3ee",
    "--on-primary": "#04101f",
    "--glow": "rgba(37,99,235,0.35)",
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
export const DEMO_MAILTO = "mailto:contact@court-side.ai?subject=Courtside%20demo";

export const btnPrimary =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-[var(--on-primary)] bg-gradient-to-r from-[var(--a)] to-[var(--b)] hover:opacity-90 transition";
export const btnSecondary =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-[var(--fg)] border border-[var(--line)] bg-[var(--card)] hover:border-[var(--a)] transition";
export const card = "rounded-2xl border border-[var(--line)] bg-[var(--card)] backdrop-blur";
export const gradText = "bg-gradient-to-r from-[var(--a)] to-[var(--b)] bg-clip-text text-transparent";
