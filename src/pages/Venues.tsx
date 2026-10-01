import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import Footer from "@/components/Footer";
import { Nav } from "@/components/home/Sections";
import { themeStyle, gradText } from "@/components/home/theme";
import { GetListedCard, VenueCard } from "@/components/home/Venues";
import { VENUES } from "@/data/venues";

const Venues = () => {
  const [q, setQ] = useState("");
  useEffect(() => {
    document.title = "Book a court | Courtside AI";
  }, []);
  const term = q.trim().toLowerCase();
  const list = VENUES.filter((v) => !term || [v.name, v.city, ...v.sports].some((x) => x.toLowerCase().includes(term)));

  return (
    <div style={themeStyle("dark")} className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Nav theme="dark" prefix="/" />
      <main className="container mx-auto px-4 pb-24 pt-32 sm:px-6">
        <div className="mb-10 max-w-2xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Book a <span className={gradText}>court.</span></h1>
          <p className="text-lg text-[var(--muted)]">Facilities running on Courtside. Choose where you want to play.</p>
          <label className="flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--card)] px-3 py-2.5 focus-within:border-[var(--a)]">
            <Search className="h-4 w-4 text-[var(--muted)]" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by venue, city or sport" className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]" />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((v) => <VenueCard key={v.bookingUrl} v={v} />)}
          <GetListedCard />
        </div>
        {list.length === 0 && <p className="mt-6 text-[var(--muted)]">No venues match “{q}”.</p>}
      </main>
      <Footer />
    </div>
  );
};

export default Venues;
