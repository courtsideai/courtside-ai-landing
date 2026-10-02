import { useEffect } from "react";
import { ArrowRight, Bot, Eye, Trophy, Users } from "lucide-react";
import Footer from "@/components/Footer";
import { Nav } from "@/components/home/Sections";
import { btnPrimary, btnSecondary, card, DEMO_URL, gradText, themeStyle } from "@/components/home/theme";

const BELIEFS = [
  [Trophy, "Built on the court", "We run a facility. Every feature exists because we needed it at our own front desk first."],
  [Bot, "Software should do the work", "Booking software records what happened. Ours answers the phone, takes the payment and sends the door code."],
  [Users, "Owners first", "We build what we'd pay for ourselves: simple to set up, fair to switch to, and built around how courts actually run."],
  [Eye, "Honest about what's live", "If a feature is still coming, we say so. You'll always know what works today."],
] as const;

const TEAM = [
  { name: "Vi", role: "Co-founder, CEO", bio: "Sports entrepreneur focused on strategy and sales, and on putting facilities on autopilot." },
  { name: "Dragan", role: "Co-founder, CTO", bio: "Builds the platform and the automation behind it, from booking engine to AI receptionist." },
  { name: "Shiv Sekhon", role: "Co-founder, COO", bio: "Sports facility owner who runs operations, content and marketing, and knows the front desk from the inside." },
];

const About = () => {
  useEffect(() => {
    document.title = "About | Courtside AI";
  }, []);

  return (
    <div style={themeStyle("dark")} className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Nav theme="dark" prefix="/" />
      <main>
        <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6">
          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(60% 50% at 50% 0%, var(--glow), transparent)" }} />
          <div className="container relative mx-auto max-w-3xl space-y-6 text-center">
            <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--muted)]">Our story</span>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Built by facility operators, <span className={gradText}>for facility operators.</span>
            </h1>
            <p className="text-lg text-[var(--muted)]">
              We run courts. We got tired of missed calls, empty slots and admin that never ends, so we built the software we wished we had: facility management software that does the work.
            </p>
          </div>
        </section>

        <section className="bg-[var(--bg2)] px-4 py-20 sm:px-6">
          <div className="container mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-[var(--muted)]">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl">Why we built Courtside</h2>
            <p>
              Every facility owner knows the pattern. The phone rings during peak hours and nobody can pick up. A court sits empty because a cancellation never got rebooked. Someone at the desk spends the evening chasing payments and waivers.
            </p>
            <p>
              We lived it at our own facility. We tried more staff and we tried booking software. The software kept a record of what happened, but it didn't do anything about it. We still had to answer every call, chase every payment and hand out every door code.
            </p>
            <p>
              So we built Courtside: everything you're used to from facility software, plus AI that does the work. It answers the phone, books the court, takes payment and sends access details, 24/7. We run it at our own courts first, so it has to work.
            </p>
            <p className="border-l-2 border-[var(--a)] pl-4 font-semibold text-[var(--fg)]">Our goal is simple: your facility on autopilot.</p>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="container mx-auto">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">What we believe</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {BELIEFS.map(([Icon, t, d]) => (
                <div key={t} className={`${card} p-6`}>
                  <Icon className="mb-4 h-7 w-7 text-[var(--b)]" />
                  <h3 className="mb-2 text-lg font-semibold">{t}</h3>
                  <p className="text-[var(--muted)]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--bg2)] px-4 py-20 sm:px-6">
          <div className="container mx-auto">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">The team</h2>
            <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
              {TEAM.map((m) => (
                <div key={m.name} className={`${card} p-6 text-center`}>
                  <span className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[var(--a)] to-[var(--b)] text-2xl font-bold text-[var(--on-primary)]">{m.name[0]}</span>
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="mb-3 text-sm font-medium text-[var(--b)]">{m.role}</p>
                  <p className="text-[var(--muted)]">{m.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="container mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">See it running <span className={gradText}>at our own courts.</span></h2>
            <p className="text-lg text-[var(--muted)]">Kings Court runs on Courtside. Book a court there, or talk to us about putting your facility on autopilot.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/#early-access" className={`group ${btnPrimary}`}>Get started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Book a demo</a>
              <a href="/venues/kings-court-markham-2" className={btnSecondary}>Visit Kings Court</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
