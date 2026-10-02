import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Footer from "@/components/Footer";
import { Nav, Sports } from "@/components/home/Sections";
import { ScheduleMock } from "@/components/home/Mocks";
import { btnPrimary, btnSecondary, card, DEMO_URL, gradText, themeStyle } from "@/components/home/theme";
import { getSport } from "@/data/sports";
import NotFound from "@/pages/NotFound";

const INCLUDED = [
  "Live court schedule with bookings by sport",
  "Memberships, passes and signed waivers",
  "Payments at checkout, with receipts and door codes sent automatically",
  "Reporting on revenue and court utilization",
  "Maya, the AI receptionist, as an add-on",
];

const SportPage = () => {
  const { sport: slug } = useParams();
  const sport = getSport(slug);

  useEffect(() => {
    if (sport) document.title = `${sport.title} | Courtside AI`;
  }, [sport]);

  if (!sport) return <NotFound />;

  return (
    <div style={themeStyle("dark")} className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Nav theme="dark" prefix="/" />
      <main>
        <section className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6">
          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(60% 50% at 70% 10%, var(--glow), transparent)" }} />
          <div className="container relative mx-auto grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--muted)]">For {sport.name.toLowerCase()} facilities</span>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">{sport.headline}</h1>
              <p className="max-w-xl text-lg text-[var(--muted)]">{sport.sub}</p>
              <div className="flex flex-wrap gap-3">
                <a href="/#early-access" className={`group ${btnPrimary}`}>Get started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Book a demo</a>
              </div>
            </div>
            <ScheduleMock />
          </div>
        </section>

        <section className="bg-[var(--bg2)] px-4 py-20 sm:px-6">
          <div className="container mx-auto grid gap-5 md:grid-cols-3">
            {sport.pains.map(([t, d]) => (
              <div key={t} className={`${card} p-6`}>
                <h3 className="mb-2 text-lg font-semibold">{t}</h3>
                <p className="text-[var(--muted)]">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="container mx-auto grid items-start gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything your {sport.name.toLowerCase()} facility runs on, <span className={gradText}>in one system.</span></h2>
              <p className="text-[var(--muted)]">Built by people who run a court facility, so it fits how courts actually work.</p>
            </div>
            <ul className={`${card} space-y-3 p-6`}>
              {INCLUDED.map((x) => (
                <li key={x} className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0 text-lime-400" />{x}</li>
              ))}
            </ul>
          </div>
        </section>

        <Sports current={sport.slug} />
      </main>
      <Footer />
    </div>
  );
};

export default SportPage;
