import { useEffect, useRef, useState } from "react";
import { CalendarDays, Check, Phone, Users, CreditCard, TrendingUp } from "lucide-react";
import { card } from "./theme";

const reducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Count up to a number once (used for the hero revenue chip).
export const useCountUp = (target: number, ms = 1600, delay = 0) => {
  const [v, setV] = useState(reducedMotion() ? target : 0);
  useEffect(() => {
    if (reducedMotion()) return;
    let raf = 0;
    const t0 = performance.now() + delay;
    const tick = (now: number) => {
      const p = Math.min(1, Math.max(0, (now - t0) / ms));
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms, delay]);
  return v;
};

// True once the element has been on screen (falls back to true if the API is missing).
const useInView = <T extends Element>() => {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || !("IntersectionObserver" in window)) return setSeen(true);
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.3 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, seen] as const;
};

// Vibrant booking colours that pop on both dark and light backgrounds.
type Kind = "member" | "league" | "ai" | "clinic";
const KIND: Record<Kind, string> = {
  member: "bg-orange-500 text-white shadow-[0_0_18px_-4px_rgba(249,115,22,0.8)]",
  league: "bg-fuchsia-500 text-white shadow-[0_0_18px_-4px_rgba(217,70,239,0.8)]",
  ai: "bg-[#1cabb0] text-[#04211f] shadow-[0_0_18px_-4px_rgba(28,171,176,0.9)]",
  clinic: "bg-sky-500 text-white shadow-[0_0_18px_-4px_rgba(14,165,233,0.8)]",
};
const COURTS = ["Court 1", "Court 2", "Court 3", "Court 4"];
const TIMES = ["5 PM", "6 PM", "7 PM", "8 PM", "9 PM"];

type Booking = { id: string; court: number; start: number; span: number; label: string; kind: Kind };

const BASE: Booking[] = [
  { id: "sam", court: 0, start: 0, span: 2, label: "Sam K. · Pickleball", kind: "member" },
  { id: "open", court: 0, start: 3, span: 2, label: "Open play", kind: "clinic" },
  { id: "dre", court: 1, start: 1, span: 1, label: "Dre M.", kind: "member" },
  { id: "league", court: 1, start: 2, span: 3, label: "Tue League", kind: "league" },
  { id: "priya", court: 2, start: 0, span: 1, label: "Priya S.", kind: "member" },
  { id: "clinic", court: 3, start: 1, span: 2, label: "Kids clinic", kind: "clinic" },
  { id: "jo", court: 3, start: 3, span: 1, label: "Jo T.", kind: "member" },
];

// Each call Maya handles changes the schedule, so the pop-up and the calendar always agree.
const CALLS: { who: string; q: string; a: string; pos: string; focus: string; revenue: number; apply: (b: Booking[]) => Booking[] }[] = [
  {
    who: "Alex R.",
    q: "Any courts open tonight at 8, for two hours?",
    a: "Court 3 booked 8–10 PM, code sent",
    pos: "-bottom-16 -left-2 sm:-left-8",
    focus: "maya1",
    revenue: 96,
    apply: (b) => [...b, { id: "maya1", court: 2, start: 3, span: 2, label: "Alex R. · Booked by Maya", kind: "ai" }],
  },
  {
    who: "Jo T.",
    q: "Can I move my 8 PM to 9?",
    a: "Moved to 9 PM, players notified",
    pos: "-bottom-16 right-0 sm:-right-6",
    focus: "jo",
    revenue: 0,
    apply: (b) => b.map((x) => (x.id === "jo" ? { ...x, start: 4 } : x)),
  },
  {
    who: "Marcus D.",
    q: "Half court for basketball at 7?",
    a: "Court 1 half court booked and paid",
    pos: "-top-20 left-0 sm:left-1/4",
    focus: "maya2",
    revenue: 40,
    apply: (b) => [...b, { id: "maya2", court: 0, start: 2, span: 1, label: "Marcus D. · Half court, by Maya", kind: "ai" }],
  },
  {
    who: "Priya S.",
    q: "What's the door code again?",
    a: "Code texted to Priya S.",
    pos: "-top-20 right-1/4",
    focus: "priya",
    revenue: 0,
    apply: (b) => b,
  },
  {
    who: "Nina K.",
    q: "Any spots left in tonight's kids clinic?",
    a: "Last spot booked, waiver sent",
    pos: "-bottom-16 left-0 sm:left-16",
    focus: "clinic",
    revenue: 25,
    apply: (b) => b.map((x) => (x.id === "clinic" ? { ...x, label: "Kids clinic · full" } : x)),
  },
];

const BASE_REVENUE = 8420;
const BASE_BOOKINGS = 12;

// Smoothly animate a number toward its target.
const useTweened = (target: number, ms = 700, delay = 0) => {
  const [v, setV] = useState(reducedMotion() ? target : 0);
  const from = useRef(reducedMotion() ? target : 0);
  useEffect(() => {
    if (reducedMotion()) return setV(target);
    const start = from.current;
    let raf = 0;
    const t0 = performance.now() + delay;
    const tick = (now: number) => {
      const p = Math.min(1, Math.max(0, (now - t0) / ms));
      const next = Math.round(start + (target - start) * (1 - Math.pow(1 - p, 3)));
      from.current = next;
      setV(next);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, ms, delay]);
  return v;
};

export const ScheduleMock = ({ floating = true }: { floating?: boolean }) => {
  const live = floating && !reducedMotion();
  const [bookings, setBookings] = useState<Booking[]>(BASE);
  const [step, setStep] = useState(0);
  const [stage, setStage] = useState<"wait" | "ring" | "done" | "hide">(live ? "wait" : "done");
  const [revenue, setRevenue] = useState(BASE_REVENUE);
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIntro(false), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!live) return;
    const call = CALLS[step];
    const delays = { wait: step === 0 ? 2200 : 700, ring: 1700, done: 3000, hide: 500 };
    const t = setTimeout(() => {
      if (stage === "wait") setStage("ring");
      else if (stage === "ring") {
        setBookings((b) => call.apply(b));
        setRevenue((r) => r + call.revenue);
        setStage("done");
      } else if (stage === "done") setStage("hide");
      else if (step === CALLS.length - 1) {
        // End of the loop: back to the start of the evening.
        setBookings(BASE);
        setRevenue(BASE_REVENUE);
        setStep(0);
        setStage("wait");
      } else {
        setStep(step + 1);
        setStage("wait");
      }
    }, delays[stage]);
    return () => clearTimeout(t);
  }, [stage, step, live]);

  const shownRevenue = useTweened(revenue, 900, intro ? 600 : 0);
  const count = BASE_BOOKINGS + bookings.length - BASE.length;
  const filled = bookings.reduce((n, b) => n + b.span, 0);
  const pct = Math.round((filled / (COURTS.length * TIMES.length)) * 100);
  const call = CALLS[step];
  const focus = live && stage === "done" ? call.focus : "";

  return (
    <div className="relative">
      <div className={`${card} p-4 sm:p-5`}>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <CalendarDays className="h-4 w-4" /> Today · Court schedule
          </div>
          <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-xs tabular-nums text-[var(--muted)]">{count} bookings · {pct}% full</span>
        </div>
        {/* Same layout as the booking app: courts across the top, time running down. */}
        <div className="grid grid-cols-[40px_repeat(4,minmax(0,1fr))] gap-1.5 text-[11px]" style={{ gridTemplateRows: `auto repeat(${TIMES.length}, 2.6rem)` }}>
          <div />
          {COURTS.map((c) => (
            <div key={c} className="truncate pb-0.5 text-center font-medium text-[var(--muted)]">{c}</div>
          ))}
          {TIMES.map((t, row) => (
            <div key={t} className="flex items-start pt-1 text-[var(--muted)]" style={{ gridRow: row + 2, gridColumn: 1 }}>{t}</div>
          ))}
          {COURTS.map((_, court) =>
            TIMES.map((__, row) => ({ row, taken: bookings.some((b) => b.court === court && row >= b.start && row < b.start + b.span) }))
              .filter((x) => !x.taken)
              .map(({ row }) => (
                <div key={`e-${court}-${row}`} className="rounded-md border border-[var(--line)] bg-[var(--bg2)]/60" style={{ gridRow: row + 2, gridColumn: court + 2 }} />
              )),
          )}
          {bookings.map((b) => {
            const [name, ...rest] = b.label.split(" · ");
            const sport = rest.join(" · ");
            return (
              <div
                key={`${b.id}-${b.start}`}
                className={`flex min-w-0 flex-col justify-start overflow-hidden rounded-md px-2 py-1.5 leading-tight transition-[transform,box-shadow] duration-300 ${KIND[b.kind]} ${floating ? "anim-pop" : ""} ${focus === b.id ? "z-10 scale-[1.04] ring-2 ring-white/90" : ""}`}
                style={{ gridColumn: b.court + 2, gridRow: `${b.start + 2} / span ${b.span}`, ...(floating && intro ? { animationDelay: `${0.25 + BASE.findIndex((x) => x.id === b.id) * 0.13}s` } : {}) }}
              >
                <span className="line-clamp-2 break-words font-semibold">{name}</span>
                {sport && <span className="truncate opacity-85">{sport}</span>}
              </div>
            );
          })}
        </div>
      </div>
      {floating && (
        <>
          {(stage !== "wait" || !live) && (
            <div
              key={step}
              className={`${card} anim-rise absolute z-20 w-64 p-3 text-xs shadow-[0_18px_40px_-12px_rgba(0,0,0,0.7)] transition-opacity duration-500 bg-[var(--bg)] ${call.pos} ${stage === "hide" ? "opacity-0" : "opacity-100"}`}
              aria-live="polite"
            >
              <div className="mb-1 flex items-center gap-2 font-semibold">
                <span className="relative grid h-6 w-6 place-items-center rounded-full bg-[var(--b)] text-[#0a0f1c]">
                  {stage === "ring" && <span className="absolute inset-0 animate-ping rounded-full bg-[var(--b)]/60 motion-reduce:hidden" />}
                  <Phone className="relative h-3 w-3" />
                </span>
                Maya · {stage === "ring" ? "incoming call" : "call handled"}
              </div>
              <p className="text-[var(--muted)]"><span className="font-semibold text-[var(--fg)]">{call.who}:</span> “{call.q}”</p>
              <p className={`mt-1 flex items-center gap-1 font-medium transition-opacity duration-300 ${stage === "ring" ? "opacity-0" : "opacity-100"}`}>
                <Check className="h-3 w-3 text-[var(--b)]" /> {call.a}
              </p>
            </div>
          )}
          <div className={`${card} anim-rise absolute -top-16 right-0 hidden px-3 py-2 text-xs sm:-right-4 sm:block bg-[var(--bg)]`} style={{ animationDelay: "0.5s" }}>
            <div className="text-[var(--muted)]">This week</div>
            <div className="text-lg font-bold tabular-nums">${shownRevenue.toLocaleString("en-US")}</div>
          </div>
        </>
      )}
    </div>
  );
};

export const MembersMock = () => (
  <div className={`${card} space-y-2 p-4 text-sm`}>
    {[
      ["Sam K.", "Monthly member", "bg-orange-500"],
      ["Priya S.", "10-game pass", "bg-sky-500"],
      ["Tue League", "Team · 12 players", "bg-fuchsia-500"],
    ].map(([n, t, c]) => (
      <div key={n} className="flex items-center gap-3 rounded-lg border border-[var(--line)] bg-[var(--bg2)]/60 px-3 py-2">
        <span className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold text-white ${c}`}>{n[0]}</span>
        <div className="flex-1">
          <div className="font-semibold">{n}</div>
          <div className="text-xs text-[var(--muted)]">{t}</div>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-[color-mix(in_srgb,var(--b)_18%,transparent)] px-2 py-0.5 text-[11px] font-medium text-[var(--b)]"><Check className="h-3 w-3" />Waiver signed</span>
      </div>
    ))}
  </div>
);

export const PaymentsMock = () => (
  <div className={`${card} space-y-3 p-4 text-sm`}>
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 font-semibold"><CreditCard className="h-4 w-4" /> Court 2 · 7:00 PM</span>
      <span className="rounded-full bg-[var(--b)] px-2.5 py-0.5 text-xs font-bold text-[#0a0f1c]">Paid</span>
    </div>
    <div className="space-y-1 text-[var(--muted)]">
      <div className="flex justify-between"><span>Court rental (1h)</span><span>$48.00</span></div>
      <div className="flex justify-between"><span>Paddle rental</span><span>$6.00</span></div>
      <div className="flex justify-between border-t border-[var(--line)] pt-1 font-semibold text-[var(--fg)]"><span>Total</span><span>$54.00</span></div>
    </div>
    <p className="text-xs text-[var(--muted)]">Paid through Stripe to your account · refund from this screen</p>
  </div>
);

export const ReportsMock = () => (
  <div className={`${card} p-4`}>
    <div className="mb-3 flex items-center justify-between text-sm">
      <span className="flex items-center gap-2 font-semibold"><TrendingUp className="h-4 w-4" /> Revenue · last 7 days</span>
      <span className="text-xs font-semibold text-[var(--b)]">+12%</span>
    </div>
    <div className="flex h-28 items-end gap-2">
      {[40, 55, 35, 70, 62, 90, 78].map((h, i) => (
        <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-[var(--a)] to-[var(--b)]" style={{ height: `${h}%` }} />
      ))}
    </div>
    <div className="mt-2 flex justify-between text-[11px] text-[var(--muted)]">
      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => <span key={i}>{d}</span>)}
    </div>
  </div>
);

const CALL: [string, string][] = [
  ["Caller", "Hey, any pickleball courts open tonight?"],
  ["Maya", "Court 3 is free at 7 and 8. Want me to book one?"],
  ["Caller", "7 works."],
  ["Maya", "Done. Court 3 at 7, and I just texted your door code."],
];

export const CallMock = () => {
  const [ref, seen] = useInView<HTMLDivElement>();
  const [shown, setShown] = useState(reducedMotion() ? CALL.length : 0);
  useEffect(() => {
    if (!seen || reducedMotion()) return;
    const t = setTimeout(() => setShown((n) => (n >= CALL.length ? 0 : n + 1)), shown >= CALL.length ? 4500 : shown === 0 ? 500 : 1500);
    return () => clearTimeout(t);
  }, [seen, shown]);
  const typing = shown < CALL.length && CALL[shown][0] === "Maya" && shown > 0;
  const secs = 30 + shown * 4;
  return (
    <div ref={ref} className={`${card} space-y-3 p-5 text-sm`}>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-semibold">
          <span className="relative grid h-7 w-7 place-items-center rounded-full bg-[var(--b)] text-[#0a0f1c]"><span className="absolute inset-0 animate-ping rounded-full bg-[var(--b)]/50 motion-reduce:hidden" /><Phone className="relative h-3.5 w-3.5" /></span>
          Maya · live call
        </span>
        <span className="text-xs tabular-nums text-[var(--muted)]">0:{String(secs).padStart(2, "0")}</span>
      </div>
      <div className="min-h-[188px] space-y-3">
        {CALL.slice(0, shown).map(([who, line], i) => (
          <div key={i} className={`anim-pop max-w-[88%] rounded-xl px-3 py-2 ${who === "Maya" ? "ml-auto bg-gradient-to-r from-[var(--a)] to-[var(--b)] text-[var(--on-primary)]" : "border border-[var(--line)] bg-[var(--bg2)]/60"}`}>
            {line}
          </div>
        ))}
        {typing && (
          <div className="ml-auto flex w-14 items-center justify-center gap-1 rounded-xl bg-[color-mix(in_srgb,var(--a)_25%,transparent)] px-3 py-2.5" aria-hidden="true">
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[var(--fg)]" /><span className="typing-dot h-1.5 w-1.5 rounded-full bg-[var(--fg)]" /><span className="typing-dot h-1.5 w-1.5 rounded-full bg-[var(--fg)]" />
          </div>
        )}
      </div>
      <div className={`flex items-center gap-2 pt-1 text-xs text-[var(--muted)] transition-opacity duration-500 ${shown >= CALL.length ? "opacity-100" : "opacity-0"}`}><Users className="h-3.5 w-3.5" /> Booking added to your schedule automatically</div>
    </div>
  );
};

// Courts set up in the dashboard, each with the sports it supports (mirrors the real app's court headers).
export const CourtsMock = () => (
  <div className={`${card} space-y-2 p-4 text-sm`}>
    {[
      ["Main court", [["Basketball", "bg-orange-500/20 text-orange-300"], ["Volleyball", "bg-fuchsia-500/20 text-fuchsia-300"], ["Pickleball", "bg-lime-400/20 text-lime-300"]], "Full or 2 halves"],
      ["Half court", [["Basketball", "bg-orange-500/20 text-orange-300"]], "1 hr min"],
      ["Court 3", [["Pickleball", "bg-lime-400/20 text-lime-300"], ["Tennis", "bg-sky-500/20 text-sky-300"]], "Members book 14 days out"],
    ].map(([name, sports, rule]) => (
      <div key={name as string} className="flex items-center justify-between gap-3 rounded-lg border border-[var(--line)] bg-[var(--bg2)]/60 px-3 py-2">
        <div>
          <div className="font-semibold">{name as string}</div>
          <div className="mt-1 flex flex-wrap gap-1">
            {(sports as string[][]).map(([sp, c]) => <span key={sp} className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${c}`}>{sp}</span>)}
          </div>
        </div>
        <span className="text-right text-xs text-[var(--muted)]">{rule as string}</span>
      </div>
    ))}
  </div>
);
