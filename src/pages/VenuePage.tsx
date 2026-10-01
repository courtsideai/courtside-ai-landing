import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import { Nav, Sports } from "@/components/home/Sections";
import { btnPrimary, btnSecondary, card, gradText, themeStyle } from "@/components/home/theme";
import { getVenue } from "@/data/venues";
import NotFound from "@/pages/NotFound";

const VenuePage = () => {
  const { slug } = useParams();
  const v = getVenue(slug);

  useEffect(() => {
    if (!v) return;
    document.title = `Book a court at ${v.name} | Courtside AI`;
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
    <div style={themeStyle("dark")} className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Nav theme="dark" prefix="/" />
      <main className="container mx-auto px-4 pb-24 pt-32 sm:px-6">
        <a href="/venues" className="mb-8 inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--fg)]"><ArrowLeft className="h-4 w-4" /> All venues</a>
        <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{v.name}</h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[var(--muted)]">
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{v.city}</span>
              {v.hours && <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{v.hours}</span>}
            </div>
            <div className="flex flex-wrap gap-2">
              {v.sports.map((s) => (
                <a key={s} href={`/sports/${s.toLowerCase()}`} className="rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1 text-sm hover:border-[var(--a)]">{s}</a>
              ))}
            </div>
            <p className="max-w-xl text-lg text-[var(--muted)]">Book a court online, pay at checkout and get your access details in the confirmation. {v.name} runs on Courtside.</p>
            <a href={v.bookingUrl} target="_blank" rel="noopener noreferrer" className={`group ${btnPrimary}`}>Book a court <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          </div>
          <div className={`${card} space-y-3 p-6`}>
            <h2 className="text-lg font-semibold">Run a facility?</h2>
            <p className="text-[var(--muted)]">Put your courts on Courtside and get a booking page like this one.</p>
            <a href="/#early-access" className={`${btnSecondary} w-full`}>Get your facility on Courtside <span className={`ml-1 ${gradText}`}>→</span></a>
          </div>
        </div>
      </main>
      <Sports />
      <Footer />
    </div>
  );
};

export default VenuePage;
