import { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import Footer from "@/components/Footer";
import { Nav, Sports } from "@/components/home/Sections";
import { CompareMatrix, OfferStrip } from "@/components/home/CompareMatrix";
import { btnPrimary, btnSecondary, card, DEMO_URL, gradText, themeStyle } from "@/components/home/theme";
import { SWITCH_CARDS } from "@/data/competitors";

const Compare = () => {
  useEffect(() => {
    document.title = "Courtside vs AllBooked, CourtReserve and Swift | Courtside AI";
  }, []);

  return (
    <div style={themeStyle("dark")} className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Nav theme="dark" prefix="/" />
      <main>
        <section className="relative overflow-hidden px-4 pb-16 pt-36 sm:px-6">
          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(60% 50% at 50% 0%, var(--glow), transparent)" }} />
          <div className="container relative mx-auto max-w-3xl space-y-6 text-center">
            <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--muted)]">Compare</span>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Courtside vs <span className={gradText}>the alternatives.</span>
            </h1>
            <p className="text-lg text-[var(--muted)]">
              Every booking tool takes reservations. Courtside is the only one with a live AI receptionist that answers your phone, built by people who run courts.
            </p>
            <OfferStrip className="justify-center" />
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6">
          <CompareMatrix />
        </section>

        <section className="bg-[var(--bg2)] px-4 py-20 sm:px-6">
          <div className="container mx-auto">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">Switching from…</h2>
            <div className="grid gap-5 lg:grid-cols-3">
              {SWITCH_CARDS.map((c) => (
                <div key={c.from} className={`${card} flex flex-col p-6`}>
                  <p className="mb-1 text-sm font-medium text-[var(--b)]">From {c.from}</p>
                  <h3 className="mb-4 text-xl font-semibold">{c.headline}</h3>
                  <ul className="mb-6 flex-1 space-y-2.5">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[var(--muted)]"><Check className="mt-0.5 h-5 w-5 shrink-0 text-lime-400" />{p}</li>
                    ))}
                  </ul>
                  <a href="/#early-access" className={`${btnSecondary} w-full`}>Switch to Courtside <ArrowRight className="ml-2 h-4 w-4" /></a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="container mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">We'll move you over. <span className={gradText}>Free.</span></h2>
            <p className="text-lg text-[var(--muted)]">Members, bookings and settings come with you, and your players won't feel the switch. Then try it for three months before you pay.</p>
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

export default Compare;
