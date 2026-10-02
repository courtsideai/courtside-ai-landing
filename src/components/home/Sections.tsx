import { useEffect, useState } from "react";
import { toast } from "sonner";
import { type LucideIcon, CalendarDays, MapPin, Phone, Bot, CircleDollarSign, FileSignature, KeyRound, ClipboardList, BellRing, RotateCcw, UserPlus, ListChecks, Lightbulb, ArrowRight, Check, X, PhoneMissed, CalendarX, Layers, Plug, Webhook, Database, Menu } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/courtside-logo-horizontal-light.svg";
import kcLogo from "@/assets/logos/kc-markham-logo.png";
import { FEATURED_SPORTS, SPORTS } from "@/data/sports";
import { PROOF } from "@/data/proof";
import { btnPrimary, btnSecondary, card, gradText, SANDBOX_URL, DEMO_URL, HomeTheme } from "./theme";
import { CallMock, CourtsMock, MembersMock, PaymentsMock, ReportsMock, ScheduleMock } from "./Mocks";

const Wrap = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`container mx-auto px-4 sm:px-6 ${className}`}>{children}</div>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--muted)]">{children}</span>
);

const SectionHead = ({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) => (
  <div className="mx-auto mb-14 max-w-3xl space-y-4 text-center">
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
    {sub && <p className="text-lg text-[var(--muted)]">{sub}</p>}
  </div>
);

export const Nav = ({ theme, prefix = "" }: { theme: HomeTheme; prefix?: string }) => {
  const [open, setOpen] = useState(false);
  const links = [
    ["Automation", "#automation"],
    ["Maya AI", "#maya"],
    ["Platform", "#platform"],
    ["Compare", "#compare"],
    ["FAQ", "#faqs"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-lg">
      <Wrap className="flex h-16 items-center justify-between">
        <a href={`${prefix || "#"}${prefix ? "" : "top"}`}><img src={theme === "dark" ? "/lovable-uploads/aef6f963-0b6d-481b-bc94-2a5efd80b3c2.png" : logo} alt="Courtside AI" className={theme === "dark" ? "h-11" : "h-9"} /></a>
        <nav className="hidden gap-8 text-sm text-[var(--muted)] lg:flex">
          {links.map(([l, h]) => <a key={h} href={prefix + h} className="hover:text-[var(--fg)] transition">{l}</a>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="/venues" className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--fg)]/35 px-4 py-2 text-sm font-medium text-[var(--fg)] transition hover:border-[var(--fg)]/70 hover:bg-[var(--fg)]/5"><MapPin className="h-4 w-4" />Book a court</a>
          <a href={`${prefix}#early-access`} className={`${btnPrimary} !py-2 text-sm`}>Get started</a>
        </div>
        <button className="lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}><Menu /></button>
      </Wrap>
      {open && (
        <div className="space-y-3 border-t border-[var(--line)] bg-[var(--bg)] px-4 py-4 lg:hidden">
          {links.map(([l, h]) => <a key={h} href={prefix + h} onClick={() => setOpen(false)} className="block text-[var(--muted)]">{l}</a>)}
          <a href="/venues" className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-[var(--fg)]/35 px-4 py-2.5 font-medium text-[var(--fg)]"><MapPin className="h-4 w-4" />Book a court</a>
          <a href={`${prefix}#early-access`} onClick={() => setOpen(false)} className={`${btnPrimary} w-full`}>Get started</a>
        </div>
      )}
    </header>
  );
};

export const Hero = ({ theme }: { theme: HomeTheme }) => (
  <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
    <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(60% 50% at 70% 10%, var(--glow), transparent), radial-gradient(40% 40% at 10% 90%, var(--glow), transparent)" }} />
    {theme === "dark" && <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(90deg, var(--fg) 1px, transparent 1px)", backgroundSize: "64px 64px", maskImage: "radial-gradient(70% 60% at 50% 0%, #000, transparent)" }} />}
    <Wrap className="relative grid items-center gap-16 pb-32 lg:grid-cols-[1.05fr_1fr]">
      <div className="space-y-7">
        <Eyebrow>AI-powered facility management · built by people who run courts</Eyebrow>
        <h1 className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl xl:text-7xl">
          Your facility <span className={gradText}>on autopilot.</span>
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)]">
          Courtside automates the front desk. AI answers every call, books courts, takes payment and sends door codes around the clock, on top of one platform for bookings, members and payments. We run a facility ourselves, so it's built for how courts actually work.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#early-access" className={`group ${btnPrimary}`}>Get started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Book a demo</a>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
          <a href="#maya" className="inline-flex items-center gap-1 hover:text-[var(--fg)]">Hear Maya answer a call <ArrowRight className="h-3.5 w-3.5" /></a>
          <a href="/venues" className="inline-flex items-center gap-1 hover:text-[var(--fg)]">Looking to play? Book a court <ArrowRight className="h-3.5 w-3.5" /></a>
        </div>
      </div>
      <ScheduleMock />
    </Wrap>
  </section>
);

export const OperatorStrip = () => (
  <section className="border-y border-[var(--line)] bg-[var(--bg2)] py-12">
    <Wrap className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
      <div className="max-w-2xl">
        <p className="text-xl font-semibold sm:text-2xl">We run a court facility. Every feature exists because we needed it at our own front desk.</p>
        <p className="mt-2 text-[var(--muted)]">Not another tool built by people who've never unlocked a gym at 6 a.m.</p>
      </div>
      <a href={SANDBOX_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl border border-[var(--line)] bg-white px-5 py-3">
        <img src={kcLogo} alt="Kings Court Markham" className="h-10 w-auto" />
        <span className="text-left text-sm font-semibold text-slate-800">Live at Kings Court<br /><span className="font-normal text-slate-500">Open the booking page →</span></span>
      </a>
    </Wrap>
  </section>
);

// Hidden until src/data/proof.ts has at least 3 real stats.
export const ProofStrip = () =>
  PROOF.length >= 3 ? (
    <section className="border-y border-[var(--line)] bg-[var(--bg2)] py-10">
      <Wrap className={`grid gap-8 text-center ${["", "", "sm:grid-cols-2", "sm:grid-cols-3", "sm:grid-cols-4"][Math.min(PROOF.length, 4)]}`}>
        {PROOF.slice(0, 4).map((p) => (
          <div key={p.label}>
            <div className={`text-4xl font-bold ${gradText}`}>{p.value}</div>
            <div className="mt-1 text-sm text-[var(--muted)]">{p.label}</div>
          </div>
        ))}
      </Wrap>
    </section>
  ) : null;

type Status = "Live" | "Coming soon";

// A booking's life, automated end to end. Keep statuses honest: flip to "Live" only when it ships.
const LIFECYCLE: [LucideIcon, string, string, Status][] = [
  [CalendarDays, "Booked and paid", "Players book online or Maya books by phone. Payment is taken at checkout, so courts are never held on a promise.", "Live"],
  [FileSignature, "Waiver signed", "Liability waivers are e-signed before the first visit and stored with the version they agreed to. No clipboards.", "Live"],
  [KeyRound, "Access sent", "Door codes and booking details go out by email and text the moment the booking is made, to everyone on the booking.", "Live"],
  [ClipboardList, "Court prepped", "Setup instructions go out before the booking starts, to staff or straight to players at self-serve facilities: volleyball net up, half-court divider down.", "Live"],
  [BellRing, "Reminded", "Players get a reminder before they play. Cancellations follow your refund and credit rules automatically.", "Live"],
  [RotateCcw, "Slot refilled", "Receipts go out, cancelled slots reopen instantly and the waitlist hears about it first.", "Live"],
];

const BEYOND: [LucideIcon, string, string, Status][] = [
  [UserPlus, "Member onboarding", "New members get a welcome email, their login and your facility rules, without anyone sending them.", "Coming soon"],
  [ListChecks, "Staff checklists", "Opening, closing and cleaning checklists go to the right staff member for each shift.", "Coming soon"],
  [Lightbulb, "Lights and HVAC", "Court lights and HVAC switch on before a booking and off when the facility is empty.", "Coming soon"],
  [Phone, "AI receptionist", "Maya answers every call 24/7 and books from your live schedule. Hear her in action just below.", "Live"],
  [CircleDollarSign, "Revenue recovery", "Chases failed payments and no-shows and wins back members who've gone quiet.", "Coming soon"],
  [Bot, "Agentic operator", "Handles the day-to-day: answers messages, updates the schedule, flags problems and sends you a daily briefing.", "Coming soon"],
];

const StatusBadge = ({ status }: { status: Status }) => (
  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${status === "Live" ? "bg-lime-400/15 text-lime-400" : "border border-[var(--line)] text-[var(--muted)]"}`}>{status}</span>
);

export const Automation = () => (
  <section id="automation" className="bg-[var(--bg2)] py-24">
    <Wrap>
      <SectionHead eyebrow="Automation" title={<>Every booking, <span className={gradText}>handled end to end.</span></>} sub="Booking software records what happened. Courtside does the work, from the first call to the empty slot after a cancellation, 24/7 and with no one at the desk." />
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {LIFECYCLE.map(([Icon, t, d, status], i) => (
          <li key={t} className={`${card} p-6`}>
            <div className="mb-4 flex items-center justify-between">
              <span className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[var(--a)] to-[var(--b)] text-sm font-bold text-[var(--on-primary)]">{i + 1}</span>
                <Icon className="h-6 w-6 text-[var(--b)]" />
              </span>
              <StatusBadge status={status} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{t}</h3>
            <p className="text-[var(--muted)]">{d}</p>
          </li>
        ))}
      </ol>
      <h3 className="mb-5 mt-16 text-center text-2xl font-bold tracking-tight sm:text-3xl">Beyond the booking, <span className={gradText}>with AI on top.</span></h3>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {BEYOND.map(([Icon, t, d, status]) => (
          <div key={t} className={`${card} p-6`}>
            <div className="mb-4 flex items-center justify-between">
              <Icon className="h-7 w-7 text-[var(--b)]" />
              <StatusBadge status={status} />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{t}</h3>
            <p className="text-[var(--muted)]">{d}</p>
          </div>
        ))}
      </div>
    </Wrap>
  </section>
);

export const Problem = () => (
  <section className="py-24">
    <Wrap>
      <SectionHead eyebrow="The problem" title={<>Your front desk shouldn't run on a <span className={gradText}>spreadsheet and a ringing phone.</span></>} />
      <div className="grid gap-5 md:grid-cols-3">
        {([
          [PhoneMissed, "Missed calls are missed bookings", "Nobody answers at 9 p.m. or mid-game. The caller books somewhere else."],
          [CalendarX, "Double bookings and no-shows", "Texts, DMs and sticky notes don't agree. Courts sit empty while people get turned away."],
          [Layers, "Five tools that don't talk", "Scheduling here, payments there, waivers somewhere else. You become the integration."],
        ] as [LucideIcon, string, string][]).map(([Icon, t, d]) => (
          <div key={t} className={`${card} p-6`}>
            <Icon className="mb-4 h-7 w-7 text-[var(--b)]" />
            <h3 className="mb-2 text-lg font-semibold">{t}</h3>
            <p className="text-[var(--muted)]">{d}</p>
          </div>
        ))}
      </div>
    </Wrap>
  </section>
);

export const Platform = () => (
  <section id="platform" className="bg-[var(--bg2)] py-24">
    <Wrap>
      <SectionHead eyebrow="The platform" title={<>One dashboard to <span className={gradText}>run it all.</span></>} sub="The automation runs on its own. This is where you set the rules, see every booking and member, and track the money." />
      <div className="grid gap-6 md:grid-cols-2">
        {([
          ["Courts and rules", "Set up every court and the sports it supports, split full courts into halves, and set booking rules and cancellation windows per court.", <CourtsMock key="c" />],
          ["Members", "Profiles, memberships, passes and gift cards, with every signed waiver one click away.", <MembersMock key="m" />],
          ["Payments", "Bookings, memberships, passes and add-ons, all paid through Stripe straight to your account, with refunds handled from the same place.", <PaymentsMock key="p" />],
          ["Reporting", "See revenue, court utilization and your busiest hours without exporting anything.", <ReportsMock key="r" />],
        ] as [string, string, React.ReactNode][]).map(([t, d, mock]) => (
          <div key={t} className={`${card} flex flex-col gap-5 p-6`}>
            <div>
              <h3 className="mb-2 text-xl font-semibold">{t}</h3>
              <p className="text-[var(--muted)]">{d}</p>
            </div>
            <div className="mt-auto">{mock}</div>
          </div>
        ))}
      </div>
    </Wrap>
  </section>
);

const formatPhone = (v: string) => {
  const n = v.replace(/\D/g, "").slice(0, 10);
  if (n.length <= 3) return n;
  if (n.length <= 6) return `(${n.slice(0, 3)}) ${n.slice(3)}`;
  return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6)}`;
};

const inputCls = "w-full rounded-lg border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--fg)] placeholder:text-[var(--muted)] focus:border-[var(--a)] focus:outline-none";

const MayaForm = () => {
  const N8N = "https://courtsideai.app.n8n.cloud/webhook/dba8ef39-8b35-4b6f-8374-957a39571cb8";
  const KEY = "6LeWjhUsAAAAAHfvT9c2w1T80WX9PbejFrPqQFdG";
  const [f, setF] = useState({ name: "", phone: "", email: "", facilityName: "" });
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${KEY}`;
    s.async = true;
    s.onload = () => setReady(true);
    document.head.appendChild(s);
    return () => {
      document.head.removeChild(s);
    };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ready) return toast.error("Security check is loading. Try again in a moment.");
    setBusy(true);
    try {
      const { grecaptcha } = window as unknown as { grecaptcha: { execute: (key: string, o: { action: string }) => Promise<string> } };
      const token = await grecaptcha.execute(KEY, { action: "submit" });
      const res = await fetch(N8N, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, phone: `+1${f.phone.replace(/\D/g, "")}`, recaptchaToken: token, timestamp: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error("failed");
      toast.success("Maya will call you shortly.");
      setF({ name: "", phone: "", email: "", facilityName: "" });
    } catch {
      toast.error("Couldn't send that. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} className={`${card} space-y-3 p-5`}>
      <h4 className="font-semibold">Get a call from Maya</h4>
      <input required className={inputCls} placeholder="Your name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
      <input required inputMode="tel" className={inputCls} placeholder="Phone number" value={f.phone} onChange={(e) => setF({ ...f, phone: formatPhone(e.target.value) })} />
      <input required type="email" className={inputCls} placeholder="Email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
      <input required className={inputCls} placeholder="Facility name" value={f.facilityName} onChange={(e) => setF({ ...f, facilityName: e.target.value })} />
      <button disabled={busy} className={`${btnPrimary} w-full disabled:opacity-60`}>{busy ? "Sending…" : "Call me"}</button>
    </form>
  );
};

export const Maya = () => (
  <section id="maya" className="py-24">
    <Wrap className="grid items-center gap-14 lg:grid-cols-2">
      <div className="space-y-6">
        <Eyebrow>AI receptionist · add-on</Eyebrow>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Meet Maya. She <span className={gradText}>never misses a call.</span></h2>
        <p className="text-lg text-[var(--muted)]">Maya picks up every call to your facility, checks real court availability, books the court, takes payment and texts the door code. She works from your live schedule, so she never double-books.</p>
        <ul className="space-y-2.5">
          {["Answers 24/7, including when you're mid-game", "Books, changes and cancels from your real calendar", "Shares door codes and answers your FAQs", "Hands off to a person or takes a message when needed"].map((x) => (
            <li key={x} className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0 text-lime-400" />{x}</li>
          ))}
        </ul>
        <p className="text-sm text-[var(--muted)]">Callers are told they're speaking with an AI assistant and that the call is recorded.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-[1.2fr_1fr] lg:grid-cols-1 xl:grid-cols-[1.2fr_1fr]">
        <CallMock />
        <MayaForm />
      </div>
    </Wrap>
  </section>
);

export const OpenApi = () => (
  <section id="api" className="py-24">
    <Wrap className="grid items-center gap-14 lg:grid-cols-2">
      <div className="space-y-6">
        <Eyebrow>Open API</Eyebrow>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Your data. <span className={gradText}>Your stack. No lock-in.</span></h2>
        <p className="text-lg text-[var(--muted)]">Most facility software keeps your bookings behind a wall. Courtside is open, so you can connect door locks, accounting, CRM or anything else you already run.</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {([[Plug, "Connect anything"], [Webhook, "Webhooks on every event"], [Database, "Your data stays yours"]] as [LucideIcon, string][]).map(([Icon, t]) => (
            <div key={t} className={`${card} p-4`}><Icon className="mb-2 h-5 w-5 text-[var(--b)]" /><div className="text-sm font-semibold">{t}</div></div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[#0a0f1c] font-mono text-[13px] leading-relaxed text-slate-300 shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400" /><span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-3 text-xs text-slate-500">illustrative example</span>
        </div>
        <pre className="overflow-x-auto p-5"><code>{`// A booking was made. Tell your own systems.
POST https://your-app.com/hooks/courtside

{
  "event": "booking.created",
  "court": "Court 3",
  "starts_at": "2026-10-01T19:00:00-04:00",
  "source": "maya",
  "player": { "name": "Priya S." }
}`}</code></pre>
      </div>
    </Wrap>
  </section>
);

export const Compare = () => {
  const rows: [string, boolean, boolean][] = [
    ["Built by facility operators", true, false],
    ["Booking, members, waivers and payments in one platform", true, false],
    ["AI receptionist built into the platform", true, false],
    ["24/7 automation: booking, payments and access with no one at the desk", true, false],
    ["Open API and webhooks", true, false],
    ["Help moving over from your current system", true, false],
  ];
  return (
    <section id="compare" className="py-24">
      <Wrap>
        <SectionHead eyebrow="Compare" title={<>Not another <span className={gradText}>booking tool.</span></>} />
        <div className={`${card} mx-auto max-w-3xl overflow-hidden`}>
          <div className="grid grid-cols-[1fr_90px_110px] border-b border-[var(--line)] bg-[var(--bg2)] px-5 py-3 text-sm font-semibold sm:grid-cols-[1fr_120px_160px]">
            <span /><span className="text-center">Courtside</span><span className="text-center text-[var(--muted)]">Typical booking tools</span>
          </div>
          {rows.map(([t, a, b]) => (
            <div key={t} className="grid grid-cols-[1fr_90px_110px] items-center border-b border-[var(--line)] px-5 py-4 last:border-0 sm:grid-cols-[1fr_120px_160px]">
              <span>{t}</span>
              <span className="grid place-items-center">{a ? <Check className="h-5 w-5 text-lime-400" /> : <X className="h-5 w-5 text-[var(--muted)]" />}</span>
              <span className="grid place-items-center">{b ? <Check className="h-5 w-5 text-lime-400" /> : <X className="h-5 w-5 text-[var(--muted)]" />}</span>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

export const HowItWorks = () => (
  <section id="how-it-works" className="py-24">
    <Wrap>
      <SectionHead eyebrow="Getting started" title={<>Live in <span className={gradText}>three steps.</span></>} sub="No long projects. We set it up with you, on your courts and your rules." />
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["1", "Demo", "A short walkthrough on your own courts, pricing and rules. You see exactly how it would run your facility."],
          ["2", "Go live", "We set up your courts, pricing, waivers and booking page. Coming from AllBooked, CourtReserve or a spreadsheet? We'll move your members and bookings over with you."],
          ["3", "Grow", "Players book online, Maya covers the phone, and reports show what's filling and what isn't."],
        ].map(([n, t, d]) => (
          <div key={t} className={`${card} p-6`}>
            <span className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--a)] to-[var(--b)] font-bold text-[var(--on-primary)]">{n}</span>
            <h3 className="mb-2 text-xl font-semibold">{t}</h3>
            <p className="text-[var(--muted)]">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={btnPrimary}>Book a demo <ArrowRight className="ml-2 h-4 w-4" /></a>
      </div>
    </Wrap>
  </section>
);

// One consolidated "any facility" section: a single row of pills (sports link to their pages).
const OTHER_SPACES = ["Golf simulators", "Futsal", "Gyms", "Studios"];

export const Sports = ({ current }: { current?: string }) => (
  <section id="sports" className="bg-[var(--bg2)] py-20">
    <Wrap>
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for any facility <span className={gradText}>with spaces to book.</span></h2>
        <p className="text-[var(--muted)]">Segmented spaces, bookings, memberships and more, whatever your business model.</p>
      </div>
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
        {FEATURED_SPORTS.filter((s) => s.slug !== current).map((s) => (
          <a key={s.slug} href={`/sports/${s.slug}`} className="rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-2 font-medium transition hover:border-[var(--a)]">{s.name}</a>
        ))}
        {SPORTS.filter((s) => !s.featured && s.slug !== current).map((s) => (
          <a key={s.slug} href={`/sports/${s.slug}`} className="rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-2 text-[var(--muted)] transition hover:border-[var(--a)] hover:text-[var(--fg)]">{s.name}</a>
        ))}
        {OTHER_SPACES.map((t) => (
          <span key={t} className="rounded-full border border-dashed border-[var(--line)] px-5 py-2 text-[var(--muted)]">{t}</span>
        ))}
        <span className="rounded-full border border-dashed border-[var(--line)] px-5 py-2 text-[var(--muted)]">and more</span>
      </div>
    </Wrap>
  </section>
);

export const Faqs = () => {
  const faqs: [string, React.ReactNode][] = [
    ["Which AI features are live today?", "Maya, the AI receptionist, and 24/7 booking, payment and access automation are live. Revenue recovery and the agentic operator are coming soon, and early access customers get them first."],
    ["Who is Courtside for?", "Court-sport facilities: pickleball, tennis, basketball, badminton, squash, volleyball and multi-sport venues."],
    ["Do I need Maya to use the platform?", "No. Maya is an add-on. The booking, member, payment and reporting platform works on its own."],
    ["How long does setting up Maya take?", "About 72 hours. We collect your pricing, rules and scripts, configure Maya, test her on real scenarios and take her live."],
    ["Can it connect to the tools I already use?", "Yes. Courtside has an open API and webhooks, so it can connect to your door locks, accounting and other systems."],
    ["Is the AI bilingual?", "English is standard. Most other languages are supported."],
    ["What about privacy?", <>We follow Canadian privacy law (PIPEDA). Read the <a className="underline" href="/privacy">Privacy Policy</a> for what we collect and how long we keep it.</>],
    ["How much does it cost?", "Pricing depends on your facility. Book a demo and we'll walk you through it."],
  ];
  return (
    <section id="faqs" className="bg-[var(--bg2)] py-24">
      <Wrap>
        <SectionHead eyebrow="FAQ" title="Questions owners ask" />
        <Accordion type="single" collapsible className="mx-auto max-w-3xl space-y-3">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`i${i}`} className="rounded-xl border border-[var(--line)] bg-[var(--card)] px-5">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-[var(--muted)]">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Wrap>
    </section>
  );
};

export const EarlyAccess = () => {
  const [f, setF] = useState({ name: "", email: "", company: "", phone: "" });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.from("courtside_waitlist").insert({ name: f.name.trim(), email: f.email.trim(), company: f.company.trim() || null, phone: f.phone.trim() || null });
    setBusy(false);
    if (error) return toast.error("Couldn't submit. Please try again.");
    setDone(true);
    setF({ name: "", email: "", company: "", phone: "" });
  };
  return (
    <section id="early-access" className="relative overflow-hidden py-24">
      <span id="contact" className="absolute -top-20" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(50% 60% at 50% 0%, var(--glow), transparent)" }} />
      <Wrap className="relative">
        <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Your facility <span className={gradText}>on autopilot.</span></h2>
          <p className="text-lg text-[var(--muted)]">Get early access, or talk it through with us first. We run courts too.</p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[1.2fr_1fr]">
          {done ? (
            <div className={`${card} flex flex-col gap-4 p-6`}>
              <Check className="h-7 w-7 text-lime-400" />
              <h3 className="text-lg font-semibold">You're on the list.</h3>
              <p className="flex-1 text-[var(--muted)]">Want to skip the wait? Pick a time and we'll walk you through Courtside on your own courts and rules.</p>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} w-full`}>Book your demo <ArrowRight className="ml-2 h-4 w-4" /></a>
            </div>
          ) : (
          <form onSubmit={submit} className={`${card} space-y-3 p-6`}>
            <h3 className="text-lg font-semibold">Get started</h3>
            <p className="text-sm text-[var(--muted)]">Tell us about your facility and we'll set you up with early access.</p>
            <input required maxLength={100} className={inputCls} placeholder="Full name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
            <input required type="email" maxLength={255} className={inputCls} placeholder="Email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
            <input maxLength={100} className={inputCls} placeholder="Facility name" value={f.company} onChange={(e) => setF({ ...f, company: e.target.value })} />
            <input maxLength={20} className={inputCls} placeholder="Phone (optional)" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />
            <button disabled={busy} className={`${btnPrimary} w-full disabled:opacity-60`}>{busy ? "Sending…" : "Get started"}</button>
          </form>
          )}
          <div className={`${card} flex flex-col gap-4 p-6`}>
            <CalendarDays className="h-7 w-7 text-[var(--b)]" />
            <h3 className="text-lg font-semibold">Rather talk it through?</h3>
            <p className="flex-1 text-[var(--muted)]">Book a walkthrough on your own courts, pricing and rules. See exactly how Courtside would run your facility.</p>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={`${btnSecondary} w-full`}>Book a demo <ArrowRight className="ml-2 h-4 w-4" /></a>
            <p className="text-sm text-[var(--muted)]">Questions? <a className="underline hover:text-[var(--fg)]" href="mailto:support@court-side.ai">support@court-side.ai</a></p>
          </div>
        </div>
      </Wrap>
    </section>
  );
};
