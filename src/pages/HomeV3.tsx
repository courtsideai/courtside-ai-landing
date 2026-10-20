import { CSSProperties, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, BellRing, CalendarDays, Check, ClipboardList, CreditCard, FileSignature, KeyRound, Phone } from "lucide-react";
import Footer from "@/components/Footer";
import { Nav, Maya, Compare, HowItWorks, Faqs, EarlyAccess } from "@/components/home/Sections";
import { MissedCallCalculator, MobileCta, useReveal } from "@/components/home/Extras";
import { ScheduleMock } from "@/components/home/Mocks";
import { DEMO_URL } from "@/components/home/theme";

// v3 design system (from the Figma draft): navy + one lime accent, light "paper" sections for rhythm.
const LIME = "#c8f135";
const DARK = {
  "--bg": "#0a0f1c",
  "--bg2": "#121a2b",
  "--fg": "#f4f6f1",
  "--muted": "#9aa4b8",
  "--card": "#121a2b",
  "--line": "#2a3550",
  "--a": LIME,
  "--b": LIME,
  "--on-primary": "#0a0f1c",
  "--glow": "rgba(200,241,53,0.10)",
} as CSSProperties;
const DARK2 = { ...DARK, "--bg": "#0f1625", "--card": "#172036" } as CSSProperties;
const LIGHT = {
  "--bg": "#f5f6f2",
  "--bg2": "#ffffff",
  "--fg": "#0a0f1c",
  "--muted": "#5a6375",
  "--card": "#ffffff",
  "--line": "#e2e5de",
  "--a": "#4d7c0f",
  "--b": "#65a30d",
  "--on-primary": "#ffffff",
  "--glow": "rgba(101,163,13,0.08)",
} as CSSProperties;

const limeBtn = "inline-flex items-center justify-center rounded-lg bg-[#c8f135] px-6 py-3 font-semibold text-[#0a0f1c] transition hover:bg-[#d8f86a]";
const ghostBtn = "inline-flex items-center justify-center rounded-lg border border-[var(--line)] px-6 py-3 font-semibold text-[var(--fg)] transition hover:border-[var(--fg)]";
const accent = "text-[#c8f135]";

const Tone = ({ style, children }: { style: CSSProperties; children: React.ReactNode }) => (
  <div style={style} className="bg-[var(--bg)] text-[var(--fg)]">{children}</div>
);

const Eyebrow = ({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) => (
  <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${dark ? accent : "text-[#4d7c0f]"}`}>{children}</p>
);

const Hero = () => (
  <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
    <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(50% 45% at 75% 20%, rgba(200,241,53,0.10), transparent)" }} />
    <div className="container relative mx-auto grid items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr]">
      <div className="space-y-7">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]">
          <span className="h-2 w-2 rounded-full bg-[#c8f135]" />
          The first facility management software with a live AI receptionist
        </span>
        <h1 className="text-5xl font-bold leading-[1.02] sm:text-6xl xl:text-7xl">
          Your facility<br />on <span className={accent}>autopilot.</span>
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          Bookings, members, payments and phone calls in one platform, built by people who own and run sports facilities. AI answers every call and books courts, 24/7.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#early-access" className={`group ${limeBtn}`}>Get started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={ghostBtn}>Book a demo</a>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
          {["3-month free trial", "Free migration", "No setup fees", "Open API"].map((x) => (
            <li key={x} className="flex items-center gap-1.5"><Check className={`h-4 w-4 ${accent}`} />{x}</li>
          ))}
        </ul>
      </div>
      <ScheduleMock />
    </div>
  </section>
);

const ProofStrip = () => (
  <section className="border-y border-[var(--line)] py-7">
    <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 lg:flex-row lg:text-left">
      <p className="text-sm text-[var(--muted)]">Built inside facilities we own and operate</p>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-lg font-semibold" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
        <span>Kings Court Markham</span>
        <span>Kings Court Oakville</span>
        <span>FitCourts Brampton</span>
      </div>
    </div>
  </section>
);

const FEATURES: [typeof Phone, string, string][] = [
  [CalendarDays, "Live court scheduling", "Every court, sport and half-court on one calendar. Rentals, leagues, clinics and parties with no double bookings."],
  [Phone, "AI front desk, 24/7", "Maya answers every call, checks real availability, books the court and takes payment, even at 10 PM on a Friday."],
  [CreditCard, "Payments at checkout", "Bookings, memberships, passes and gift cards paid through Stripe straight to your account."],
  [FileSignature, "E-signed waivers", "Players sign on their phone before their first visit, stored with the exact version they agreed to."],
  [KeyRound, "Door codes, automatically", "Access codes go out by email and text the moment a booking is made, to everyone on it."],
  [ClipboardList, "Court prep and reminders", "Setup instructions to staff or players before each booking, reminders before play, and cancellations that follow your rules."],
];

const Platform = () => (
  <section id="platform" className="py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center">
        <Eyebrow dark={false}>Platform</Eyebrow>
        <h2 className="text-3xl font-bold sm:text-5xl">Everything your front desk does, without being chained to the desk.</h2>
        <p className="text-lg text-[var(--muted)]">One system for courts, players, payments and calls, built for the reality of busy facilities.</p>
      </div>
      <div className="stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(([Icon, t, d]) => (
          <div key={t} className="rounded-2xl border border-[var(--line)] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(10,15,28,0.25)]">
            <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-[#eef8cf]"><Icon className="h-5 w-5 text-[#0a0f1c]" /></span>
            <h3 className="mb-2 text-lg font-semibold">{t}</h3>
            <p className="leading-relaxed text-[var(--muted)]">{d}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-[var(--muted)]">
        <BellRing className="h-4 w-4" />
        Coming soon: revenue recovery, an AI operator, member onboarding, staff checklists, and lights and HVAC on a schedule.
      </p>
    </div>
  </section>
);

const OperatorStory = () => (
  <section className="pb-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div style={DARK} className="grid gap-10 rounded-3xl bg-[var(--bg)] p-8 text-[var(--fg)] sm:p-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          <Eyebrow>For operators, by operators</Eyebrow>
          <h2 className="text-3xl font-bold sm:text-5xl">We're our own first customer.</h2>
          <p className="text-lg leading-relaxed text-[var(--muted)]">Courtside started inside Kings Court Markham. We own and run sports facilities across the GTA, and every feature has to survive a busy Saturday at our own courts before it ships to yours.</p>
          <a href="/about" className="inline-flex items-center gap-1 font-semibold text-[#c8f135] hover:underline">Our story <ArrowRight className="h-4 w-4" /></a>
        </div>
        <dl className="divide-y divide-[var(--line)]">
          {[["3", "Facilities we own and operate"], ["24/7", "Call coverage with the AI front desk"], ["1", "Platform for bookings, members and calls"]].map(([n, l]) => (
            <div key={l} className="py-5 first:pt-0 last:pb-0">
              <dt className={`text-5xl font-bold ${accent}`} style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{n}</dt>
              <dd className="mt-1 text-[var(--muted)]">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

const HomeV3 = () => {
  const { hash } = useLocation();
  const [ready, setReady] = useState(false);
  useReveal("main section:not(#top)");

  useEffect(() => {
    document.title = "Courtside AI | Your facility on autopilot";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    setReady(true);
    return () => {
      document.head.removeChild(robots);
    };
  }, []);

  useEffect(() => {
    if (!hash || !ready) return;
    const el = document.getElementById(decodeURIComponent(hash.slice(1)));
    document.querySelectorAll("main section").forEach((sec) => sec.classList.add("reveal-in"));
    el?.scrollIntoView({ block: "start" });
  }, [hash, ready]);

  return (
    <div style={DARK} className="v3 min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Nav theme="dark" />
      <main>
        <Hero />
        <Tone style={DARK2}><ProofStrip /></Tone>
        <Tone style={LIGHT}><Platform /></Tone>
        <Tone style={DARK}><Maya /></Tone>
        <Tone style={LIGHT}><MissedCallCalculator /></Tone>
        <Tone style={DARK}><Compare /></Tone>
        <Tone style={LIGHT}><HowItWorks /><OperatorStory /></Tone>
        <Tone style={DARK2}><Faqs /></Tone>
        <Tone style={DARK}><EarlyAccess /></Tone>
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
};

export default HomeV3;
