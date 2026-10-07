import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Check, Copy, FileSignature, Printer } from "lucide-react";
import Footer from "@/components/Footer";
import { Nav } from "@/components/home/Sections";
import { btnPrimary, btnSecondary, card, DEMO_URL, gradText, themeStyle } from "@/components/home/theme";
import { supabase } from "@/integrations/supabase/client";

// PLACEHOLDER TEXT: replace with the counsel-drafted template from Courtside before linking this page
// (footer, automation step, sitemap). Then update the intro to say it was drafted by counsel and used at our facility.
const TEMPLATE = `[FACILITY NAME] — RELEASE OF LIABILITY, WAIVER OF CLAIMS AND ASSUMPTION OF RISK

PLEASE READ CAREFULLY. BY SIGNING, YOU GIVE UP CERTAIN LEGAL RIGHTS.

1. Activities. I want to use the facilities, courts, equipment and programs of [FACILITY LEGAL NAME] ("the Facility"), including [basketball, volleyball, pickleball, tennis, other] and related activities (the "Activities").

2. Assumption of risk. I understand the Activities involve risks, including but not limited to falls, collisions with people, equipment or walls, being struck by balls or equipment, sprains, fractures, concussions, heat-related illness, cardiac events and, in rare cases, serious injury or death. I freely accept and assume all of these risks, whether known or unknown.

3. Fitness to participate. I confirm I am physically able to take part and have no medical condition that makes participation unsafe. I will stop and tell staff if I feel unwell or unsafe.

4. Rules. I will follow the Facility's rules, posted signs and staff instructions, and use equipment only as intended.

5. Release and waiver. To the fullest extent permitted by law, I release, waive and discharge the Facility and its owners, directors, employees, contractors and volunteers from all claims for injury, illness, death, or loss of or damage to property arising from my participation in the Activities or use of the premises, INCLUDING CLAIMS CAUSED BY THEIR NEGLIGENCE.

6. Indemnity. I agree to indemnify and hold harmless the released parties from any claims brought by me or on my behalf, or arising from my actions, to the extent permitted by law.

7. Medical treatment. I authorize the Facility to obtain emergency medical treatment for me if needed, and I am responsible for any resulting costs.

8. Personal property. The Facility is not responsible for lost, stolen or damaged personal property.

9. Photos and video (optional). [ ] I agree that photos or video of me taken at the Facility may be used in its marketing. I can withdraw this consent in writing at any time.

10. Minors. If the participant is under the age of majority, I confirm I am their parent or legal guardian, I have read this document, and I agree to it on their behalf and on my own.

11. Governing law and severability. This agreement is governed by the laws of [PROVINCE/STATE]. If any part is found unenforceable, the rest remains in effect.

12. Term. This waiver applies to every visit and booking at the Facility until I withdraw it in writing [or: for 12 months from the date signed].

I HAVE READ THIS DOCUMENT, UNDERSTAND IT, AND SIGN IT VOLUNTARILY.

Participant name: ______________________   Date of birth: ____________
Signature: ______________________________   Date: ____________________
Parent/guardian name (if participant is a minor): ______________________
Parent/guardian signature: ________________   Date: ____________________
Emergency contact name and phone: ___________________________________`;

const inputCls = "w-full rounded-lg border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--fg)] placeholder:text-[var(--muted)] focus:border-[var(--a)] focus:outline-none";

const WaiverTemplate = () => {
  const [f, setF] = useState({ name: "", email: "", facility: "" });
  const [busy, setBusy] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    document.title = "Free sports facility liability waiver template | Courtside AI";
    return () => {
      document.head.removeChild(robots);
    };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.from("courtside_waitlist").insert({
      name: f.name.trim(),
      email: f.email.trim(),
      company: `${f.facility.trim() || "Unknown facility"} [waiver template]`,
      phone: null,
    });
    setBusy(false);
    if (error) return toast.error("Couldn't send that. Please try again.");
    setUnlocked(true);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(TEMPLATE);
    toast.success("Template copied");
  };

  return (
    <div style={themeStyle("dark")} className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <Nav theme="dark" prefix="/" />
      <main>
        <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6">
          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(60% 50% at 50% 0%, var(--glow), transparent)" }} />
          <div className="container relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1 text-xs font-medium text-[var(--muted)]">Free resource</span>
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">Sports facility <span className={gradText}>liability waiver template.</span></h1>
              <p className="text-lg text-[var(--muted)]">A plain-language waiver for courts and multi-sport facilities, written by people who run one. Fill in the brackets, have your lawyer review it, and you're ready.</p>
              <ul className="space-y-2.5">
                {["Assumption of risk for court sports", "Release, waiver and indemnity", "Minors and parent/guardian signature", "Medical treatment, property and photo consent", "Term and governing-law clauses to fill in"].map((x) => (
                  <li key={x} className="flex items-start gap-2"><Check className="mt-0.5 h-5 w-5 shrink-0 text-lime-400" />{x}</li>
                ))}
              </ul>
              <p className="text-sm text-[var(--muted)]">This template is general information, not legal advice. Waiver rules differ by province and state, so have a lawyer review it before you use it.</p>
            </div>

            {!unlocked ? (
              <form onSubmit={submit} className={`${card} space-y-3 p-6`}>
                <FileSignature className="h-7 w-7 text-[var(--b)]" />
                <h2 className="text-xl font-semibold">Get the template</h2>
                <p className="text-sm text-[var(--muted)]">Free. We'll also send you the occasional tip on running a facility. Unsubscribe anytime.</p>
                <input required maxLength={100} className={inputCls} placeholder="Full name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
                <input required type="email" maxLength={255} className={inputCls} placeholder="Email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
                <input maxLength={80} className={inputCls} placeholder="Facility name" value={f.facility} onChange={(e) => setF({ ...f, facility: e.target.value })} />
                <button disabled={busy} className={`${btnPrimary} w-full disabled:opacity-60`}>{busy ? "Sending…" : "Get the free template"}</button>
              </form>
            ) : (
              <div className={`${card} space-y-4 p-6`}>
                <div className="flex items-center gap-2 font-semibold"><Check className="h-5 w-5 text-lime-400" />Here's your template</div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={copy} className={`${btnSecondary} !py-2 text-sm`}><Copy className="mr-2 h-4 w-4" />Copy text</button>
                  <button onClick={() => window.print()} className={`${btnSecondary} !py-2 text-sm`}><Printer className="mr-2 h-4 w-4" />Print or save as PDF</button>
                </div>
                <pre className="max-h-[420px] overflow-auto whitespace-pre-wrap rounded-lg border border-[var(--line)] bg-[var(--bg)] p-4 font-sans text-sm leading-relaxed text-[var(--muted)]">{TEMPLATE}</pre>
              </div>
            )}
          </div>
        </section>

        <section className="bg-[var(--bg2)] px-4 py-20 sm:px-6">
          <div className="container mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skip the clipboard. <span className={gradText}>Let players e-sign before they book.</span></h2>
            <p className="text-lg text-[var(--muted)]">With Courtside, your waiver is signed on the player's phone before their first visit and stored with the exact version they agreed to.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/#early-access" className={`group ${btnPrimary}`}>Get started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className={btnSecondary}>Book a demo</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WaiverTemplate;
