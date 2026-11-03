import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock, CreditCard, KeyRound, LayoutGrid, MapPin, Plus } from "lucide-react";
import Footer from "@/components/Footer";
import { Nav, Sports } from "@/components/home/Sections";
import { btnPrimary, btnSecondary, card, DEMO_URL, gradText, themeStyle } from "@/components/home/theme";
import { CourtFloor } from "@/components/home/CourtFloor";
import { useReveal } from "@/components/home/Extras";
import { getVenue } from "@/data/venues";
import { SPORTS } from "@/data/sports";
import NotFound from "@/pages/NotFound";

const VenuePage = () => {
  const { slug } = useParams();
  const v = getVenue(slug);
  useReveal("main section:not(:first-child)");

  useEffect(() => {
    if (!v) return;
    document.title = v.demo ? `Try the booking flow: ${v.name} | Courtside AI` : `Book a court at ${v.name} | Courtside AI`;
    if (v.demo) return;
    // Structured data so search engines can understand the venue.
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      name: v.name,
      address: { "@type": "PostalAddress", addressLocality: v.city },
      url: v.bookingUrl,
    });
    document.head.appendChild(ld);
    return () => {
      document.head.removeChild(ld);
    };
  }, [v]);

  if (!v) return <NotFound />;

  return (
    <div style={themeStyle("dark")} className="v3 min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Nav theme="dark" prefix="/" />
      <main>
        <section className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
          <CourtFloor />
          <div className="container relative mx-auto px-4 sm:px-6">
            <a href="/venues" className="-my-3 mb-5 inline-flex items-center gap-1 py-3 text-sm text-[var(--muted)] hover:text-[var(--fg)]"><ArrowLeft className="h-4 w-4" /> All venues</a>
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
              <div className="min-w-0 space-y-6">
                {v.demo && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#1cabb0]/40 bg-[#1cabb0]/10 px-3 py-1.5 text-xs font-medium text-[#bff3f3]">
                    <span className="relative flex h-2 w-2"><span className="absolute inset-0 animate-ping rounded-full bg-[#3fd6d6] motion-reduce:hidden" /><span className="relative h-2 w-2 rounded-full bg-[#3fd6d6]" /></span>
                    Live demo facility
                  </span>
                )}
                <h1 className="text-5xl font-bold leading-[1] tracking-tight sm:text-7xl">{v.name}</h1>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-[var(--muted)]">
                  {!v.demo && <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{v.city}</span>}
                  {v.hours && <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{v.hours}</span>}
                  <span className="flex items-center gap-1.5"><LayoutGrid className="h-4 w-4" />{v.sports.length} sports, one schedule</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {v.sports.map((s) => {
                    const page = SPORTS.find((x) => x.slug === s.toLowerCase());
                    const cls = "rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1 text-sm";
                    return page ? <a key={s} href={`/sports/${page.slug}`} className={`${cls} hover:border-[var(--a)]`}>{s}</a> : <span key={s} className={cls}>{s}</span>;
                  })}
                </div>
                <p className="max-w-xl text-lg text-[var(--muted)]">
                  {v.demo
                    ? "A sample facility running on Courtside. Pick a court and a time to see exactly what your players get."
                    : `Book a court online, pay at checkout and get your access details in the confirmation. ${v.name} runs on Courtside.`}
                </p>
                <a href={v.bookingUrl} target="_blank" rel="noopener noreferrer" className={`group ${btnPrimary} shadow-[0_0_40px_-8px_rgba(28,171,176,0.8)]`}>{v.demo ? "Try the booking flow" : "Book a court"} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              </div>
              <div className="relative min-w-0">
                <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-[#1cabb0]/15 blur-3xl" aria-hidden="true" />
                <BookingPreview url={v.bookingUrl} name={v.name} sports={v.sports} />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] bg-[var(--bg2)] py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3fd6d6]">What your players get</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">From court to door code <span className={gradText}>in one flow.</span></h2>
            </div>
            <div className="stagger mx-auto grid max-w-5xl gap-4 sm:grid-cols-3 sm:gap-5">
              {PLAYER_STEPS.map(([Icon, t, d], i) => (
                <div key={t} className={`${card} flex items-center gap-4 p-4 sm:block sm:p-6`}>
                  <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#1cabb0]/15 sm:mb-4">
                    <Icon className="h-5 w-5 text-[#3fd6d6]" />
                    <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-[#1cabb0] text-[11px] font-bold text-[#0a0f1c]">{i + 1}</span>
                  </span>
                  <div>
                    <h3 className="font-semibold sm:mb-1.5 sm:text-lg">{t}</h3>
                    <p className="text-sm text-[var(--muted)] sm:text-base">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(50% 60% at 50% 100%, rgba(28,171,176,0.18), transparent)" }} />
          <div className="container relative mx-auto max-w-3xl space-y-6 px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Run a facility? <span className={gradText}>Get a page like this.</span></h2>
            <p className="text-lg text-[var(--muted)]">Your courts, pricing and rules, bookable online 24/7. We set it up and migrate your members for free.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/#early-access" className={`group ${btnPrimary}`}>Get started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Book a demo</a>
            </div>
          </div>
        </section>
      </main>
      <Sports />
      <Footer />
    </div>
  );
};

const PLAYER_STEPS: [typeof Clock, string, string][] = [
  [CalendarDays, "Pick a court and time", "Live availability for every court and sport, on any phone."],
  [CreditCard, "Pay and sign at checkout", "Card payment through Stripe and an e-signed waiver in the same flow."],
  [KeyRound, "Get the door code", "Access details arrive by text and email the moment the booking is made."],
];

// A clickable preview of the real booking page (the booking site can't be embedded in a frame).
type Court = { name: string; sports: string[] };
const COURTS: Court[] = [
  { name: "Main court", sports: ["Basketball", "Volleyball"] },
  { name: "Court 2", sports: ["Basketball", "Volleyball", "Pickleball"] },
  { name: "Half court", sports: ["Basketball"] },
  { name: "Turf", sports: ["Indoor Soccer"] },
  { name: "Pickleball 1", sports: ["Pickleball"] },
];
const TIMES = ["5 PM", "6 PM", "7 PM", "8 PM", "9 PM"];
const TAKEN = new Set(["Main court|5 PM", "Main court|6 PM", "Half court|8 PM", "Turf|6 PM", "Turf|7 PM", "Pickleball 1|9 PM", "Court 2|5 PM"]);

const BookingPreview = ({ url, name, sports }: { url: string; name: string; sports: string[] }) => {
  const [sport, setSport] = useState("All");
  const [pick, setPick] = useState<string | null>(null);
  useEffect(() => {
    // Pre-select a slot so the checkout bar shows what happens next.
    const t = setTimeout(() => setPick((p) => p ?? "Court 2|7 PM"), 1400);
    return () => clearTimeout(t);
  }, []);
  const courts = COURTS.filter((c) => sport === "All" || c.sports.includes(sport));
  const [pc, pt] = pick?.split("|") ?? [];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--card)] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 border-b border-[var(--line)] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-2 flex-1 truncate rounded-md bg-[var(--bg)] px-3 py-1 text-xs text-[var(--muted)]">book.court-side.ai</span>
      </div>
      <div className="space-y-3 p-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-semibold"><span className="grid h-6 w-6 place-items-center rounded-md bg-[#1cabb0] text-[11px] font-bold text-[#0a0f1c]">{name.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>{name}</span>
          <span className="text-xs text-[var(--muted)]">Today</span>
        </div>
        <div className="-mx-4 flex gap-1.5 overflow-x-auto px-4 [scrollbar-width:none]">
          {["All", ...sports].map((s) => (
            <button key={s} type="button" onClick={() => { setSport(s); setPick(null); }} className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition ${sport === s ? "border-[#1cabb0] bg-[#1cabb0] text-[#0a0f1c]" : "border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)]"}`}>{s}</button>
          ))}
        </div>
        <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none]">
          <div className="grid min-w-[420px] gap-1.5" style={{ gridTemplateColumns: `40px repeat(${courts.length}, minmax(0, 1fr))` }}>
            <span />
            {courts.map((c) => <span key={c.name} className="truncate pb-1 text-center text-xs font-medium text-[var(--muted)]">{c.name}</span>)}
            {TIMES.map((t) => (
              <Fragment key={t}>
                <span className="self-center text-[11px] text-[var(--muted)]">{t}</span>
                {courts.map((c) => {
                  const id = `${c.name}|${t}`;
                  const taken = TAKEN.has(id);
                  const on = pick === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      disabled={taken}
                      onClick={() => setPick(on ? null : id)}
                      aria-label={taken ? `${c.name} at ${t}, unavailable` : `Select ${c.name} at ${t}`}
                      className={`grid h-9 place-items-center rounded-lg border text-xs transition ${
                        taken
                          ? "cursor-not-allowed border-transparent bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.05)_0_6px,transparent_6px_12px)] text-[var(--muted)]/60"
                          : on
                            ? "anim-pop border-[#3fd6d6] bg-[#1cabb0] font-semibold text-[#0a0f1c] shadow-[0_0_20px_-4px_rgba(63,214,214,0.8)]"
                            : "border-[var(--line)] text-[var(--muted)] hover:border-[#1cabb0] hover:text-[var(--fg)]"
                      }`}
                    >
                      {taken ? "" : on ? <Check className="h-4 w-4" /> : <Plus className="h-3.5 w-3.5" />}
                    </button>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </div>
        <div className={`flex items-center justify-between gap-3 rounded-xl border border-[#1cabb0]/40 bg-[#1cabb0]/10 px-3 py-2.5 transition-all duration-300 ${pick ? "opacity-100" : "pointer-events-none translate-y-1 opacity-0"}`}>
          <span className="text-xs sm:text-sm"><span className="font-semibold">{pc ?? "Court 2"}</span> · {pt ?? "7 PM"} · 1 hour</span>
          <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center rounded-lg bg-[#1cabb0] px-3 py-1.5 text-xs font-semibold text-[#0a0f1c] hover:bg-[#3fd6d6]">Continue to book <ArrowRight className="ml-1 h-3.5 w-3.5" /></a>
        </div>
      </div>
    </div>
  );
};

export default VenuePage;
