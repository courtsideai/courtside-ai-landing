// Competitor comparison data. Every competitor cell must come from that company's own public
// website (or be clearly marked). Re-check before changing; last reviewed October 2026.
export type Cell = { kind: "yes" | "no" | "text"; note?: string };

export const COMPARE_AS_OF = "October 2026";

export const COMPETITORS = ["Courtside", "AllBooked", "CourtReserve", "Swift"] as const;

export const MATRIX: { label: string; cells: Cell[] }[] = [
  {
    label: "Built for",
    cells: [
      { kind: "text", note: "Court and multi-sport facilities, by operators" },
      { kind: "text", note: "Any bookable space: offices, studios, sports" },
      { kind: "text", note: "Tennis, pickleball and padel clubs" },
      { kind: "text", note: "Sports facilities, mostly baseball" },
    ],
  },
  {
    label: "Live AI receptionist that answers calls",
    cells: [
      { kind: "yes", note: "Live today" },
      { kind: "no" },
      { kind: "no" },
      { kind: "text", note: "Announced, not released" },
    ],
  },
  {
    label: "Bookings, payments and memberships in one platform",
    cells: [
      { kind: "yes", note: "Included" },
      { kind: "text", note: "Memberships on the $199/mo plan" },
      { kind: "yes" },
      { kind: "yes" },
    ],
  },
  {
    label: "Automatic door and access codes",
    cells: [
      { kind: "yes", note: "Included" },
      { kind: "text", note: "Add-on, $30 per device/mo" },
      { kind: "text", note: "Add-on, $25/mo" },
      { kind: "text", note: "Add-on" },
    ],
  },
  {
    label: "Pricing",
    cells: [
      { kind: "text", note: "3-month free trial, then month to month" },
      { kind: "text", note: "$99–$199/mo by number of spaces" },
      { kind: "text", note: "$199–$549/mo by number of courts" },
      { kind: "text", note: "Not published" },
    ],
  },
];

export const SWITCH_CARDS: { from: string; headline: string; points: string[] }[] = [
  {
    from: "AllBooked",
    headline: "We're moving our own facility off AllBooked.",
    points: [
      "Built for courts, not desks, studios and meeting rooms",
      "Memberships included, not gated behind a $199/mo plan",
      "Door codes included, no per-device fee",
      "Maya answers the phone, so bookings don't wait for staff",
    ],
  },
  {
    from: "CourtReserve",
    headline: "Pricing that doesn't climb with every court you add.",
    points: [
      "One platform for basketball, volleyball and multi-sport, not just racquet sports",
      "A live AI receptionist that books courts by phone",
      "Access codes included, not a paid add-on",
      "Free migration of your members and bookings",
    ],
  },
  {
    from: "Swift",
    headline: "The AI front desk they've announced, live today.",
    points: [
      "Maya answers calls and books courts now. Swift's AI front desk hasn't shipped",
      "Real e-signed waivers, stored with the version each player agreed to",
      "Built and proven on courts, at our own facility",
      "Start with a 3-month free trial",
    ],
  },
];

export const OFFER = ["3-month free trial", "Free migration", "No setup fees", "Month to month"];

// Individual comparison pages (/compare/:slug). `col` is the competitor's column in MATRIX.
export const COMPARE_PAGES: { slug: string; name: string; col: number; title: string; intro: string }[] = [
  {
    slug: "allbooked",
    name: "AllBooked",
    col: 1,
    title: "Courtside vs AllBooked: an AllBooked alternative for sports facilities",
    intro: "AllBooked by Skedda is booking software for every kind of space, from meeting rooms to courts. Courtside is built only for sports facilities, with an AI receptionist that answers your phone. We're moving our own facility off AllBooked.",
  },
  {
    slug: "courtreserve",
    name: "CourtReserve",
    col: 2,
    title: "Courtside vs CourtReserve: a CourtReserve alternative for court facilities",
    intro: "CourtReserve is an established choice for tennis, pickleball and padel clubs. Courtside covers every court sport, includes access codes, and adds a live AI receptionist that books courts by phone.",
  },
  {
    slug: "swift",
    name: "Swift",
    col: 3,
    title: "Courtside vs Swift: a Swift alternative with a live AI receptionist",
    intro: "Swift is facility software with its roots in baseball, and it has announced an AI front desk. Courtside's AI receptionist, Maya, is live today and built on courts.",
  },
];
