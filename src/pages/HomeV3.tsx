import { CSSProperties, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, Plug, BarChart3, Bot, CircleDollarSign, Code2, Users, Workflow, CalendarDays, Check, ClipboardList, CreditCard, FileSignature, KeyRound, Phone } from "lucide-react";
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

// A court floor drawn in perspective behind the hero, with drifting teal light. Static under reduced motion.
const CourtFloor = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="orb absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#1cabb0]/20 blur-[110px]" />
    <div className="orb absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#3fd6d6]/10 blur-[100px]" style={{ animationDelay: "-7s" }} />
    <div
      className="absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage: "linear-gradient(rgba(63,214,214,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(63,214,214,0.07) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(70% 60% at 50% 30%, black, transparent)",
        WebkitMaskImage: "radial-gradient(70% 60% at 50% 30%, black, transparent)",
      }}
    />
    <svg
      viewBox="0 0 940 540"
      className="absolute bottom-[-6%] left-1/2 w-[230%] max-w-none -translate-x-1/2 sm:w-[140%] lg:w-[115%]"
      style={{ transform: "translateX(-50%) perspective(900px) rotateX(62deg)", transformOrigin: "50% 100%", maskImage: "linear-gradient(to top, black 30%, transparent 95%)", WebkitMaskImage: "linear-gradient(to top, black 30%, transparent 95%)" }}
      fill="none"
      stroke="rgba(63,214,214,0.45)"
      strokeWidth="2"
    >
      {[
        "M20 20H920V520H20Z",
        "M470 20V520",
        "M410 270a60 60 0 1 0 120 0a60 60 0 1 0 -120 0",
        "M20 190H210V350H20",
        "M150 270a60 60 0 1 0 120 0a60 60 0 1 0 -120 0",
        "M920 190H730V350H920",
        "M670 270a60 60 0 1 0 120 0a60 60 0 1 0 -120 0",
        "M20 50H160A245 245 0 0 1 160 490H20",
        "M920 50H780A245 245 0 0 0 780 490H920",
      ].map((d, i) => (
        <path key={i} d={d} pathLength={1} className="court-line" style={{ animationDelay: `${0.15 * i}s` }} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />
  </div>
);

const CHECKS = ["3-month free trial", "Free migration", "No setup fees", "Month to month", "Open API"];

const Hero = () => (
  <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pb-28 sm:pt-44">
    <CourtFloor />
    <div className="container relative mx-auto grid items-center gap-9 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
      <div className="space-y-5 text-center sm:space-y-7 sm:text-left">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#1cabb0]/40 bg-[#1cabb0]/10 px-3 py-1.5 text-xs font-medium text-[#bff3f3] backdrop-blur">
          <span className="relative flex h-2 w-2"><span className="absolute inset-0 animate-ping rounded-full bg-[#3fd6d6] motion-reduce:hidden" /><span className="relative h-2 w-2 rounded-full bg-[#3fd6d6]" /></span>
          <span className="sm:hidden">First FMS with a live AI receptionist</span>
          <span className="hidden sm:inline">The first facility management software with a live AI receptionist</span>
        </span>
        <h1 className="text-[3.1rem] font-bold leading-[0.98] tracking-tight sm:text-6xl xl:text-[5.25rem]">
          Your facility<br />on <span className="bg-[linear-gradient(90deg,#1cabb0,#3fd6d6,#1cabb0)] bg-clip-text text-transparent text-shimmer">autopilot.</span>
        </h1>
        <p className="mx-auto max-w-sm text-base leading-relaxed text-[var(--muted)] sm:hidden">
          Bookings, members, payments and waivers in one platform. Maya answers every call, 24/7.
        </p>
        <p className="hidden max-w-xl text-lg leading-relaxed text-[var(--muted)] sm:block">
          Facility management software for courts and sports facilities: bookings, members, payments and waivers in one platform. Add Maya, our AI receptionist, and every call gets answered and booked, 24/7.
        </p>
        <div className="hidden flex-wrap gap-3 sm:flex">
          <a href="#early-access" className={`group ${tealBtn} shadow-[0_0_40px_-8px_rgba(28,171,176,0.8)]`}>Get started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={ghostBtn}>Book a demo</a>
        </div>
        <ul className="hidden flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)] sm:flex">
          {CHECKS.map((x) => (
            <li key={x} className="flex items-center gap-1.5"><Check className={`h-4 w-4 ${accent}`} />{x}</li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[#1cabb0]/15 blur-3xl" aria-hidden="true" />
        <div className="relative"><ScheduleMock /></div>
        <ul className="relative mt-6 flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs text-[var(--muted)] sm:hidden">
          {CHECKS.map((x) => (
            <li key={x} className="flex items-center gap-1"><Check className={`h-3.5 w-3.5 ${accent}`} />{x}</li>
          ))}
        </ul>
      </div>
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
  [CalendarDays, "Built for multi-sport courts", "Basketball, volleyball and pickleball on the same floor, full or split, kept in sync on one calendar. No double bookings, with rules per court."],
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
        <div className="flex flex-wrap justify-center gap-2 pb-2 text-xs sm:text-sm">
          {["No more ringing phone", "No more spreadsheet", "No more empty courts"].map((t) => (
            <span key={t} className="rounded-full border border-[var(--line)] bg-white px-3 py-1 font-medium text-[var(--muted)]"><span className="text-[#0e7c80]">✓</span> {t}</span>
          ))}
        </div>
        <p className="hidden text-lg text-[var(--muted)] sm:block">Everything you're used to from facility software, and more. One platform replaces the booking app, the payment tool and the waiver forms, and AI takes the phone.</p>
      </div>
      <div className="stagger grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {FEATURES.map(([Icon, t, d]) => (
          <div key={t} className="rounded-2xl border border-[var(--line)] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(10,15,28,0.25)] sm:p-7">
            <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[#dff5f5] sm:mb-5 sm:h-11 sm:w-11"><Icon className="h-5 w-5 text-[#0a0f1c]" /></span>
            <h3 className="text-sm font-semibold leading-snug sm:mb-2 sm:text-lg">{t}</h3>
            <p className="hidden leading-relaxed text-[var(--muted)] sm:block">{d}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-[var(--muted)]"><Code2 className="h-4 w-4" />Open API and webhooks included, so your data is never locked in.</p>
      <div className="mt-8 text-center">
        <a href="#early-access" className={tealBtn}>Start your 3-month free trial <ArrowRight className="ml-2 h-4 w-4" /></a>
      </div>
    </div>
  </section>
);

const ADDONS: [typeof Phone, string, string, string][] = [
  [Plug, "Integrations", "Connect door locks, accounting, CRM and the tools you already run, so bookings flow straight into them.", "Add-on"],
  [Workflow, "Custom automations", "Your own rules for follow-ups, setup notes and member messages, running on your live schedule.", "Add-on"],
  [CircleDollarSign, "Revenue recovery", "Chases failed payments and no-shows and wins back members who've gone quiet.", "Coming soon"],
  [Bot, "AI operator", "Handles the day-to-day: answers messages, updates the schedule, flags problems and sends you a daily briefing.", "Coming soon"],
];

const AddOnsIntro = () => (
  <section id="autopilot" className="pt-24">
    <div className="container mx-auto max-w-3xl space-y-4 px-4 text-center sm:px-6">
      <Eyebrow>Upgrades</Eyebrow>
      <h2 className="text-3xl font-bold sm:text-5xl">Turn on <span className={accent}>autopilot</span> when you're ready.</h2>
      <p className="text-[var(--muted)] sm:text-lg">The platform runs your facility. Autopilot takes the work off your plate.</p>
    </div>
  </section>
);

const AddOns = () => (
  <section className="pb-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="stagger -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
        {ADDONS.map(([Icon, t, d, tag]) => (
          <div key={t} className="w-[78%] shrink-0 snap-start rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 sm:w-auto transition duration-300 hover:-translate-y-1 hover:border-[#1cabb0]">
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
  <section className="pb-12 sm:pb-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div style={DARK} className="grid gap-8 rounded-3xl bg-[var(--bg)] p-6 text-[var(--fg)] sm:gap-10 sm:p-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          <Eyebrow>For operators, by operators</Eyebrow>
          <h2 className="text-3xl font-bold sm:text-5xl">We're our own first customer.</h2>
          <p className="leading-relaxed text-[var(--muted)] sm:hidden">Courtside started inside Kings Court Markham. Every feature survives a busy Saturday at our courts before it ships to yours.</p>
          <p className="hidden text-lg leading-relaxed text-[var(--muted)] sm:block">Courtside started inside Kings Court Markham. We own and run sports facilities across the GTA, and every feature has to survive a busy Saturday at our own courts before it ships to yours.</p>
          <a href="/about" className="inline-flex items-center gap-1 font-semibold text-[#3fd6d6] hover:underline">Our story <ArrowRight className="h-4 w-4" /></a>
        </div>
        <dl className="grid grid-cols-3 gap-3 border-t border-[var(--line)] pt-6 lg:block lg:divide-y lg:divide-[var(--line)] lg:border-0 lg:pt-0">
          {[["2", "Facilities we own and operate"], ["24/7", "Call coverage with the AI front desk"], ["1", "Platform for bookings, members and calls"]].map(([n, l]) => (
            <div key={l} className="lg:py-5 lg:first:pt-0 lg:last:pb-0">
              <dt className={`text-3xl font-bold sm:text-5xl ${accent}`} style={{ fontFamily: '"Space Grotesk", sans-serif' }}>{n}</dt>
              <dd className="mt-1 text-xs leading-snug text-[var(--muted)] sm:text-base">{l}</dd>
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
