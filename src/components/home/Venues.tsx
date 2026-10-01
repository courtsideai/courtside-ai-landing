import { ArrowRight, Clock, MapPin, Plus } from "lucide-react";
import { VENUES, Venue } from "@/data/venues";
import { btnSecondary, card, gradText } from "./theme";

const SPORT_COLOURS: Record<string, string> = {
  Basketball: "bg-orange-500/20 text-orange-300",
  Volleyball: "bg-fuchsia-500/20 text-fuchsia-300",
  Pickleball: "bg-lime-400/20 text-lime-300",
  Tennis: "bg-sky-500/20 text-sky-300",
  Badminton: "bg-yellow-400/20 text-yellow-300",
  Squash: "bg-rose-500/20 text-rose-300",
};

export const VenueCard = ({ v }: { v: Venue }) => (
  <a href={`/venues/${v.slug}`} className={`${card} group flex flex-col gap-4 p-6 transition hover:border-[var(--a)]`}>
    <div className="flex items-start gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--a)] to-[var(--b)] font-bold text-[var(--on-primary)]">
        {v.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
      </span>
      <div>
        <h3 className="text-lg font-semibold">{v.name}</h3>
        <p className="flex items-center gap-1 text-sm text-[var(--muted)]"><MapPin className="h-3.5 w-3.5" />{v.city}</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-2">
      {v.sports.map((s) => (
        <span key={s} className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${SPORT_COLOURS[s] ?? "bg-white/10 text-[var(--muted)]"}`}>{s}</span>
      ))}
    </div>
    <div className="mt-auto flex items-center justify-between pt-2 text-sm">
      {v.hours ? <span className="flex items-center gap-1 text-[var(--muted)]"><Clock className="h-3.5 w-3.5" />{v.hours}</span> : <span />}
      <span className="flex items-center gap-1 font-semibold text-[var(--b)]">View venue <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
    </div>
  </a>
);

export const GetListedCard = ({ href = "/#early-access" }: { href?: string }) => (
  <a href={href} className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-[var(--line)] p-6 text-center text-[var(--muted)] transition hover:border-[var(--a)] hover:text-[var(--fg)]">
    <Plus className="h-6 w-6" />
    <span className="font-semibold">Your facility here</span>
    <span className="text-sm">Run courts? Get on Courtside.</span>
  </a>
);

// Homepage section: venues already running on Courtside.
export const VenuesSection = () => (
  <section id="venues" className="py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl space-y-3">
          <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--muted)]">Venues</span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Play at a <span className={gradText}>Courtside venue.</span></h2>
          <p className="text-lg text-[var(--muted)]">These facilities run on Courtside. Pick one and book a court in seconds.</p>
        </div>
        <a href="/venues" className={btnSecondary}>See all venues <ArrowRight className="ml-2 h-4 w-4" /></a>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {VENUES.slice(0, 5).map((v) => <VenueCard key={v.slug} v={v} />)}
        <GetListedCard />
      </div>
    </div>
  </section>
);
