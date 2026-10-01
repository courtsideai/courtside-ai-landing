import { CSSProperties, ReactNode } from "react";
import Footer from "@/components/Footer";
import { Nav } from "@/components/home/Sections";
import { themeStyle } from "@/components/home/theme";

// Dark themed wrapper; also re-points the shadcn colour tokens so text-foreground / text-primary read on dark.
const darkStyle = {
  ...themeStyle("dark"),
  "--background": "222 47% 6%",
  "--foreground": "0 0% 100%",
  "--muted-foreground": "215 20% 65%",
  "--primary": "199 90% 62%",
} as CSSProperties;

export const LegalPage = ({ title, updated, wide, children }: { title: string; updated?: string; wide?: boolean; children: ReactNode }) => (
  <div style={darkStyle} className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
    <Nav theme="dark" prefix="/" />
    <main className={`container mx-auto px-4 py-28 sm:px-6 ${wide ? "max-w-4xl" : "max-w-3xl"}`}>
      {title && <h1 className="mb-4 text-4xl font-bold">{title}</h1>}
      {updated && <p className="mb-8 text-[var(--muted)]">Last Updated: {updated}</p>}
      <div className="space-y-8 leading-relaxed text-foreground/90">{children}</div>
    </main>
    <Footer />
  </div>
);

export const LegalSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-3">
    <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
    {children}
  </section>
);

export const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="list-disc list-inside space-y-2 ml-4">
    {items.map((i, n) => (
      <li key={n}>{i}</li>
    ))}
  </ul>
);

export const SUPPORT_EMAIL = "support@court-side.ai";
export const CONTACT_EMAIL = "contact@court-side.ai";
export const APP_URL = "https://book.court-side.ai";

export const MailLink = ({ subject, email = SUPPORT_EMAIL }: { subject?: string; email?: string }) => (
  <a
    href={`mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`}
    className="text-primary underline hover:text-primary/80 transition-smooth"
  >
    {email}
  </a>
);
