import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const LegalPage = ({ title, updated, children }: { title: string; updated?: string; children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
      {updated && <p className="text-muted-foreground mb-8">Last Updated: {updated}</p>}
      <div className="space-y-8 text-foreground/90 leading-relaxed">{children}</div>
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
