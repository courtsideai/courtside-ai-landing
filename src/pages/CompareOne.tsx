import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import Footer from "@/components/Footer";
import { Nav, Sports } from "@/components/home/Sections";
import { OfferStrip } from "@/components/home/CompareMatrix";
import { btnPrimary, btnSecondary, card, DEMO_URL, gradText, themeStyle } from "@/components/home/theme";
import { COMPARE_AS_OF, COMPARE_PAGES, MATRIX, SWITCH_CARDS, type Cell } from "@/data/competitors";
import NotFound from "@/pages/NotFound";

const CellText = ({ c, ours }: { c: Cell; ours: boolean }) => {
  if (c.kind === "yes")
    return <span className={`flex items-center gap-2 ${ours ? "font-medium text-lime-400" : "text-[var(--muted)]"}`}><Check className="h-5 w-5 shrink-0" />{c.note ?? "Yes"}</span>;
  if (c.kind === "no") return <span className="flex items-center gap-2 text-[var(--muted)]"><X className="h-5 w-5 shrink-0 opacity-60" />No</span>;
  return <span className={ours ? "font-medium text-[var(--fg)]" : "text-[var(--muted)]"}>{c.note}</span>;
};

const CompareOne = () => {
  const { slug } = useParams();
  const page = COMPARE_PAGES.find((p) => p.slug === slug);
  const sw = SWITCH_CARDS.find((c) => c.from === page?.name);

  useEffect(() => {
    if (page) document.title = `${page.title} | Courtside AI`;
  }, [page]);

  if (!page) return <NotFound />;

  return (
    <div style={themeStyle("dark")} className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Nav theme="dark" prefix="/" />
      <main>
        <section className="relative overflow-hidden px-4 pb-16 pt-36 sm:px-6">
          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(60% 50% at 50% 0%, var(--glow), transparent)" }} />
          <div className="container relative mx-auto max-w-3xl space-y-6 text-center">
            <a href="/compare" className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--fg)]"><ArrowLeft className="h-4 w-4" /> All comparisons</a>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Courtside vs <span className={gradText}>{page.name}</span>
            </h1>
            <p className="text-lg text-[var(--muted)]">{page.intro}</p>
            <OfferStrip className="justify-center" />
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6">
          <div className={`${card} mx-auto max-w-4xl overflow-hidden`}>
            <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] border-b border-[var(--line)] text-sm font-semibold">
              <span className="px-3 py-4 sm:px-5" />
              <span className="bg-[color-mix(in_srgb,var(--a)_14%,transparent)] px-3 py-4 sm:px-5">Courtside</span>
              <span className="px-3 py-4 sm:px-5 text-[var(--muted)]">{page.name}</span>
            </div>
            {MATRIX.map((row) => (
              <div key={row.label} className="grid grid-cols-[repeat(3,minmax(0,1fr))] border-b border-[var(--line)] text-sm last:border-0">
                <span className="px-3 py-4 sm:px-5 font-medium">{row.label}</span>
                <span className="bg-[color-mix(in_srgb,var(--a)_14%,transparent)] px-3 py-4 sm:px-5"><CellText c={row.cells[0]} ours /></span>
                <span className="px-3 py-4 sm:px-5"><CellText c={row.cells[page.col]} ours={false} /></span>
              </div>
            ))}
            <p className="border-t border-[var(--line)] px-5 py-3 text-xs text-[var(--muted)]">Based on {page.name}'s public website, {COMPARE_AS_OF}. Prices in USD. Check their site for current details.</p>
          </div>
        </section>

        {sw && (
          <section className="bg-[var(--bg2)] px-4 py-20 sm:px-6">
            <div className="container mx-auto max-w-3xl">
              <p className="mb-2 text-sm font-medium text-[var(--b)]">Switching from {page.name}</p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">{sw.headline}</h2>
              <ul className="space-y-3">
                {sw.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-lg text-[var(--muted)]"><Check className="mt-1 h-5 w-5 shrink-0 text-lime-400" />{p}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="px-4 py-20 sm:px-6">
          <div className="container mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Move from {page.name}. <span className={gradText}>We'll do the migration, free.</span></h2>
            <p className="text-lg text-[var(--muted)]">Your members and bookings come with you. Then try Courtside for three months before you pay.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/#early-access" className={`group ${btnPrimary}`}>Get started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Book a demo</a>
            </div>
            <p className="pt-4 text-sm text-[var(--muted)]">
              Other comparisons:{" "}
              {COMPARE_PAGES.filter((p) => p.slug !== page.slug).map((p, i) => (
                <span key={p.slug}>{i > 0 && " · "}<a className="underline hover:text-[var(--fg)]" href={`/compare/${p.slug}`}>Courtside vs {p.name}</a></span>
              ))}
            </p>
          </div>
        </section>
      </main>
      <Sports />
      <Footer />
    </div>
  );
};

export default CompareOne;
