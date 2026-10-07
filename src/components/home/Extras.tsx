import { useEffect, useState } from "react";
import { ArrowRight, Lock, ShieldCheck, CreditCard } from "lucide-react";
import { btnPrimary, btnSecondary, card, DEMO_URL, gradText } from "./theme";

const money = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const Slider = ({ label, value, min, max, step, suffix = "", prefix = "", onChange }: { label: string; value: number; min: number; max: number; step: number; suffix?: string; prefix?: string; onChange: (v: number) => void }) => (
  <label className="block space-y-2">
    <span className="flex items-baseline justify-between text-sm">
      <span className="text-[var(--muted)]">{label}</span>
      <span className="font-semibold tabular-nums">{prefix}{value}{suffix}</span>
    </span>
    <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-[var(--b)]" />
  </label>
);

// Missed-call revenue calculator (the on-page version of a missed revenue audit). Inputs are the visitor's own.
export const MissedCallCalculator = () => {
  const [calls, setCalls] = useState(15);
  const [share, setShare] = useState(40);
  const [value, setValue] = useState(50);
  const monthly = Math.round(calls * 4.33 * (share / 100) * value);

  return (
    <section id="calculator" className="bg-[var(--bg2)] py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="space-y-5">
          <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--muted)]">Missed revenue</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Every missed call is <span className={gradText}>a court you didn't book.</span></h2>
          <p className="text-lg text-[var(--muted)]">Callers who reach voicemail book somewhere else. Plug in your own numbers to see what that costs you each month. Maya answers every one of those calls.</p>
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Get a free missed-revenue audit <ArrowRight className="ml-2 h-4 w-4" /></a>
        </div>
        <div className={`${card} space-y-6 p-6 sm:p-8`}>
          <Slider label="Missed calls per week" value={calls} min={0} max={100} step={1} onChange={setCalls} />
          <Slider label="Callers who would have booked" value={share} min={0} max={100} step={5} suffix="%" onChange={setShare} />
          <Slider label="Average booking value" value={value} min={10} max={300} step={5} prefix="$" onChange={setValue} />
          <div className="rounded-xl border border-[var(--line)] bg-[var(--bg2)] p-5 text-center">
            <p className="text-sm text-[var(--muted)]">Revenue you could be missing</p>
            <p className={`text-5xl font-bold tabular-nums ${gradText}`}>{money(monthly)}</p>
            <p className="mt-1 text-sm text-[var(--muted)]">per month · {money(monthly * 12)} a year</p>
          </div>
          <p className="text-xs text-[var(--muted)]">An estimate from your inputs, not a guarantee.</p>
        </div>
      </div>
    </section>
  );
};

export const TrustStrip = () => (
  <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[var(--muted)]">
    <span className="flex items-center gap-2"><CreditCard className="h-4 w-4" />Payments by Stripe</span>
    <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" />Built in Canada, PIPEDA privacy</span>
    <span className="flex items-center gap-2"><Lock className="h-4 w-4" />Encrypted in transit and at rest</span>
  </div>
);

// Phone-only sticky CTA: appears after the hero, hides near the sign-up section.
export const MobileCta = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const form = document.getElementById("early-access");
      const nearForm = form ? form.getBoundingClientRect().top < window.innerHeight : false;
      setShow(window.scrollY > 600 && !nearForm);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_94%,transparent)] p-3 backdrop-blur-lg transition-transform duration-300 lg:hidden ${show ? "translate-y-0" : "translate-y-full"}`}>
      <div className="flex gap-2">
        <a href="#early-access" className={`${btnPrimary} flex-1 !py-2.5`}>Get started</a>
        <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={`${btnSecondary} flex-1 !py-2.5`}>Book a demo</a>
      </div>
    </div>
  );
};

// Fade sections in as they scroll into view. Falls back to visible if anything goes wrong.
export const useReveal = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const els = [...document.querySelectorAll<HTMLElement>("main > section:not(#top)")];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("reveal-in");
          obs.unobserve(e.target);
        }
      }),
      { rootMargin: "0px 0px -10% 0px" },
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return; // already on screen
      el.classList.add("reveal");
      obs.observe(el);
    });
    // Safety net: never leave a section hidden (e.g. anchor jumps, background tabs).
    const reveal = () => els.forEach((el) => el.classList.add("reveal-in"));
    window.addEventListener("hashchange", reveal);
    const t = setTimeout(() => {
      if (document.visibilityState !== "visible") reveal();
    }, 3000);
    return () => {
      obs.disconnect();
      clearTimeout(t);
      window.removeEventListener("hashchange", reveal);
    };
  }, []);
};

// Inline CTA row repeated after key sections (pattern from AllBooked).
export const SectionCta = ({ className = "" }: { className?: string }) => (
  <div className={`mt-12 flex flex-wrap justify-center gap-3 ${className}`}>
    <a href="#early-access" className={btnPrimary}>Get started <ArrowRight className="ml-2 h-4 w-4" /></a>
    <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Book a demo</a>
  </div>
);
