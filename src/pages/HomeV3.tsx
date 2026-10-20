import { CSSProperties, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, BarChart3, Bot, CircleDollarSign, Code2, Users, Workflow, CalendarDays, Check, ClipboardList, CreditCard, FileSignature, KeyRound, Phone } from "lucide-react";
import Footer from "@/components/Footer";
import { Nav, Maya, Compare, HowItWorks, Faqs, EarlyAccess, Sports, ProofStrip as StatsStrip } from "@/components/home/Sections";
import { MissedCallCalculator, MobileCta, useReveal } from "@/components/home/Extras";
import { ScheduleMock } from "@/components/home/Mocks";
import { DEMO_URL, themeStyle } from "@/components/home/theme";

// v3 design system (structure from the Figma draft): navy + brand teal (#1cabb0, from the logo), light "paper" sections for rhythm.
const DARK = themeStyle("dark");
const LIGHT = {
  "--bg": "#f5f6f2",
  "--bg2": "#ffffff",
  "--fg": "#0a0f1c",
  "--muted": "#5a6375",
  "--card": "#ffffff",
  "--line": "#e2e5de",
  "--a": "#0e7c80",
  "--b": "#1cabb0",
  "--on-primary": "#ffffff",
  "--glow": "rgba(28,171,176,0.10)",
} as CSSProperties;

const tealBtn = "inline-flex items-center justify-center rounded-lg bg-[#1cabb0] px-6 py-3 font-semibold text-[#0a0f1c] transition hover:bg-[#3fd6d6]";
const ghostBtn = "inline-flex items-center justify-center rounded-lg border border-[var(--line)] px-6 py-3 font-semibold text-[var(--fg)] transition hover:border-[var(--fg)]";
const accent = "text-[#3fd6d6]";

const Tone = ({ style, children }: { style: CSSProperties; children: React.ReactNode }) => (
  <div style={style} className="bg-[var(--bg)] text-[var(--fg)]">{children}</div>
);

const Eyebrow = ({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) => (
  <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${dark ? accent : "text-[#0e7c80]"}`}>{children}</p>
);

const Hero = () => (
  <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
    <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "radial-gradient(50% 45% at 75% 20%, rgba(28,171,176,0.16), transparent)" }} />
    <div className="container relative mx-auto grid items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr]">
      <div className="space-y-7">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]">
          <span className="h-2 w-2 rounded-full bg-[#3fd6d6]" />
          The first facility management software with a live AI receptionist
        </span>
        <h1 className="text-5xl font-bold leading-[1.02] sm:text-6xl xl:text-7xl">
          Your facility<br />on <span className="bg-[linear-gradient(90deg,#1cabb0,#3fd6d6,#1cabb0)] bg-clip-text text-transparent text-shimmer">autopilot.</span>
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          Facility management software for courts and sports facilities: bookings, members, payments and waivers in one platform. Add Maya, our AI receptionist, and every call gets answered and booked, 24/7.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#early-access" className={`group ${tealBtn}`}>Get started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={ghostBtn}>Book a demo</a>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
          {["3-month free trial", "Free migration", "No setup fees", "Month to month"].map((x) => (
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
        <a href="/venues/kings-court-markham-2" className="hover:text-[#3fd6d6]">Kings Court Markham</a>
        <span>Kings Court Oakville</span>
      </div>
    </div>
  </section>
);

const FEATURES: [typeof Phone, string, string][] = [
  [CalendarDays, "Live court scheduling", "Every court, sport and half-court on one calendar, with booking rules and cancellation windows per court. No double bookings."],
  [Users, "Members, memberships and passes", "Player profiles, recurring memberships, passes and gift cards, with booking history in one place."],
  [CreditCard, "Payments at checkout", "Everything paid through Stripe straight to your account, with refunds handled from the same screen."],
  [FileSignature, "E-signed waivers", "Players sign on their phone before their first visit, stored with the exact version they agreed to."],
  [KeyRound, "Door codes and reminders", "Access codes by email and text the moment a booking is made, reminders before play, and court-prep notes to staff."],
  [BarChart3, "Reporting and refills", "Revenue and court utilization at a glance, and cancelled slots offered to the waitlist first."],
];

const Platform = () => (
  <section id="platform" className="py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center">
        <Eyebrow dark={false}>The platform</Eyebrow>
        <h2 className="text-3xl font-bold sm:text-5xl">Everything your front desk does, without being chained to the desk.</h2>
        <div className="flex flex-wrap justify-center gap-2 pb-2 text-sm">
          {["No more ringing phone", "No more spreadsheet", "No more empty courts"].map((t) => (
            <span key={t} className="rounded-full border border-[var(--line)] bg-white px-3 py-1 font-medium text-[var(--muted)]"><span className="text-[#0e7c80]">✓</span> {t}</span>
          ))}
        </div>
        <p className="text-lg text-[var(--muted)]">Everything you're used to from facility software, and more. One platform replaces the booking app, the payment tool and the waiver forms, and AI takes the phone.</p>
      </div>
      <div className="stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(([Icon, t, d]) => (
          <div key={t} className="rounded-2xl border border-[var(--line)] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(10,15,28,0.25)]">
            <span className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-[#dff5f5]"><Icon className="h-5 w-5 text-[#0a0f1c]" /></span>
            <h3 className="mb-2 text-lg font-semibold">{t}</h3>
            <p className="leading-relaxed text-[var(--muted)]">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a href="#early-access" className={tealBtn}>Start your 3-month free trial <ArrowRight className="ml-2 h-4 w-4" /></a>
      </div>
    </div>
  </section>
);

const ADDONS: [typeof Phone, string, string, string][] = [
  [Code2, "Open API and integrations", "Connect door locks, accounting, CRM and the tools you already run. Webhooks on every booking, so your data is never locked in.", "Add-on"],
  [Workflow, "Custom automations", "Your own rules for follow-ups, setup notes and member messages, running on your live schedule.", "Add-on"],
  [CircleDollarSign, "Revenue recovery", "Chases failed payments and no-shows and wins back members who've gone quiet.", "Coming soon"],
  [Bot, "AI operator", "Handles the day-to-day: answers messages, updates the schedule, flags problems and sends you a daily briefing.", "Coming soon"],
];

const AddOnsIntro = () => (
  <section id="addons" className="pt-24">
    <div className="container mx-auto max-w-3xl space-y-4 px-4 text-center sm:px-6">
      <Eyebrow>Add-ons</Eyebrow>
      <h2 className="text-3xl font-bold sm:text-5xl">Turn on <span className={accent}>autopilot</span> when you're ready.</h2>
      <p className="text-lg text-[var(--muted)]">The platform runs your facility. Add-ons take the work off your plate, starting with an AI receptionist that answers every call.</p>
    </div>
  </section>
);

const AddOns = () => (
  <section className="pb-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ADDONS.map(([Icon, t, d, tag]) => (
          <div key={t} className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1cabb0]">
            <div className="mb-4 flex items-center justify-between">
              <Icon className="h-6 w-6 text-[#3fd6d6]" />
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${tag === "Add-on" ? "bg-[#1cabb0]/15 text-[#3fd6d6]" : "border border-[var(--line)] text-[var(--muted)]"}`}>{tag}</span>
            </div>
            <h3 className="mb-2 font-semibold">{t}</h3>
            <p className="text-sm leading-relaxed text-[var(--muted)]">{d}</p>
          </div>
        ))}
      </div>
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
          <a href="/about" className="inline-flex items-center gap-1 font-semibold text-[#3fd6d6] hover:underline">Our story <ArrowRight className="h-4 w-4" /></a>
        </div>
        <dl className="divide-y divide-[var(--line)]">
          {[["2", "Facilities we own and operate"], ["24/7", "Call coverage with the AI front desk"], ["1", "Platform for bookings, members and calls"]].map(([n, l]) => (
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
    setReady(true);
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
        <ProofStrip />
        <StatsStrip />
        <Tone style={LIGHT}><Platform /><Sports /></Tone>
        <Tone style={DARK}><AddOnsIntro /><Maya /><AddOns /><MissedCallCalculator /></Tone>
        <Tone style={LIGHT}><Compare /><HowItWorks /><OperatorStory /><Faqs /></Tone>
        <Tone style={DARK}><EarlyAccess /></Tone>
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
};

export default HomeV3;
