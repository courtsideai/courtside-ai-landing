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
  ai: "bg-lime-400 text-slate-900 shadow-[0_0_18px_-4px_rgba(163,230,53,0.8)]",
  clinic: "bg-sky-500 text-white shadow-[0_0_18px_-4px_rgba(14,165,233,0.8)]",
};
const COURTS = ["Court 1", "Court 2", "Court 3", "Court 4"];
const TIMES = ["5 PM", "6 PM", "7 PM", "8 PM", "9 PM"];
const BOOKINGS: [number, number, number, string, Kind][] = [
  [0, 0, 2, "Sam K. · Pickleball", "member"],
  [0, 3, 2, "Open play", "clinic"],
  [1, 1, 1, "Dre M.", "member"],
  [1, 2, 3, "Tue League", "league"],
  [2, 0, 1, "Priya S.", "member"],
  [2, 2, 2, "Booked by Maya", "ai"],
  [3, 1, 2, "Kids clinic", "clinic"],
  [3, 4, 1, "Jo T.", "member"],
];

export const ScheduleMock = ({ floating = true }: { floating?: boolean }) => {
  const revenue = useCountUp(8420, 1800, 600);
  return (
  <div className="relative">
    <div className={`${card} p-4 sm:p-5`}>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold">
          <CalendarDays className="h-4 w-4" /> Today · Court schedule
        </div>
        <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--muted)]">14 bookings · 82% full</span>
      </div>
      <div className="grid grid-cols-[52px_repeat(5,1fr)] gap-1.5 text-[11px]">
        <div />
        {TIMES.map((x) => (
          <div key={x} className="text-center text-[var(--muted)]">{x}</div>
        ))}
        {COURTS.map((c, r) => (
          <div key={c} className="contents">
            <div className="flex items-center text-[var(--muted)]">{c}</div>
            {TIMES.map((_, col) => ({ col, taken: BOOKINGS.some((b) => b[0] === r && col >= b[1] && col < b[1] + b[2]) }))
              .filter((x) => !x.taken)
              .map(({ col }) => (
                <div key={col} className="h-9 rounded-md border border-[var(--line)] bg-[var(--bg2)]/60" style={{ gridRow: r + 2, gridColumn: col + 2 }} />
              ))}
            {BOOKINGS.filter((b) => b[0] === r).map(([, s, span, label, kind]) => (
              <div
                key={label + s}
                className={`flex h-9 items-center truncate rounded-md px-2 font-semibold ${KIND[kind]} ${floating ? (kind === "ai" ? "anim-glow" : "anim-pop") : ""}`}
                style={{ gridRow: r + 2, gridColumn: `${s + 2} / span ${span}`, ...(floating ? { animationDelay: `${0.25 + BOOKINGS.findIndex((b) => b[3] === label) * 0.13}s` } : {}) }}
              >
                {label}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    {floating && (
      <>
        <div className={`${card} anim-rise absolute -bottom-14 -left-2 w-60 p-3 text-xs sm:-left-8 bg-[var(--bg)]`} style={{ animationDelay: "1.5s" }}>
          <div className="mb-1 flex items-center gap-2 font-semibold">
            <span className="relative grid h-6 w-6 place-items-center rounded-full bg-lime-400 text-slate-900"><span className="absolute inset-0 animate-ping rounded-full bg-lime-400/60 motion-reduce:hidden" /><Phone className="relative h-3 w-3" /></span>
            Maya · incoming call
          </div>
          <p className="text-[var(--muted)]">“Any courts open tonight at 7?”</p>
          <p className="mt-1 flex items-center gap-1 font-medium"><Check className="h-3 w-3 text-lime-400" /> Court 3 booked, code sent</p>
        </div>
        <div className={`${card} anim-rise absolute -right-2 -top-5 hidden px-3 py-2 text-xs sm:-right-6 sm:block bg-[var(--bg)]`} style={{ animationDelay: "0.5s" }}>
          <div className="text-[var(--muted)]">This week</div>
          <div className="text-lg font-bold tabular-nums">${revenue.toLocaleString("en-US")}</div>
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
        <span className="flex items-center gap-1 rounded-full bg-lime-400/20 px-2 py-0.5 text-[11px] font-medium text-lime-500"><Check className="h-3 w-3" />Waiver signed</span>
      </div>
    ))}
  </div>
);

export const PaymentsMock = () => (
  <div className={`${card} space-y-3 p-4 text-sm`}>
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 font-semibold"><CreditCard className="h-4 w-4" /> Court 2 · 7:00 PM</span>
      <span className="rounded-full bg-lime-400 px-2.5 py-0.5 text-xs font-bold text-slate-900">Paid</span>
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
      <span className="text-xs font-semibold text-lime-500">+12%</span>
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
          <span className="relative grid h-7 w-7 place-items-center rounded-full bg-lime-400 text-slate-900"><span className="absolute inset-0 animate-ping rounded-full bg-lime-400/50 motion-reduce:hidden" /><Phone className="relative h-3.5 w-3.5" /></span>
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
