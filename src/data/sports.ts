// Per-sport landing pages (/sports/:slug). Keep claims to what the platform does today.
export interface Sport {
  slug: string;
  name: string;
  headline: string;
  sub: string;
  pains: [string, string][];
  title: string;
}

export const SPORTS: Sport[] = [
  {
    slug: "pickleball",
    name: "Pickleball",
    title: "Pickleball facility management software",
    headline: "Fill every pickleball court, without the front-desk scramble.",
    sub: "Courts, bookings, members and payments in one platform, with an AI receptionist that books courts when you can't pick up.",
    pains: [
      ["Courts shared across sports", "Pickleball, basketball and volleyball can live on the same court. Courtside schedules each sport on the court it uses, so nothing double-books."],
      ["Calls during peak play", "Everyone is on court when the phone rings. Maya answers, checks real availability and books it."],
      ["Waivers and no-shows", "Players sign waivers online before they arrive, and payment is taken at booking."],
    ],
  },
  {
    slug: "basketball",
    name: "Basketball",
    title: "Basketball court booking and facility software",
    headline: "Run full courts, half courts and everything between.",
    sub: "Rent by the hour, split a court in two, and keep pickup games, private rentals and other sports from colliding.",
    pains: [
      ["Full court or half court", "Book a full court or a half court from the same calendar. Availability updates the moment either is taken."],
      ["Late-night and 24/7 access", "Door codes go out with the booking confirmation, so you don't need staff at the desk."],
      ["Chasing payment", "Players pay when they book, with receipts and confirmations sent automatically."],
    ],
  },
  {
    slug: "tennis",
    name: "Tennis",
    title: "Tennis court booking and club management software",
    headline: "Tennis court bookings and memberships, handled.",
    sub: "Let members book online, take payment up front and keep prime-time courts from sitting empty.",
    pains: [
      ["Prime-time demand", "See which hours fill and which don't, so you know where to focus."],
      ["Members and guests", "Memberships, passes and one-off bookings in one place, with signed waivers on file."],
      ["Phone bookings", "Maya books and changes courts by phone, using your live schedule."],
    ],
  },
  {
    slug: "volleyball",
    name: "Volleyball",
    title: "Volleyball facility booking software",
    headline: "Volleyball bookings that fit the way your gym actually runs.",
    sub: "Share the floor with basketball and pickleball, and keep every booking on one calendar.",
    pains: [
      ["One floor, several sports", "Tag each booking by sport so a volleyball night and a basketball game never overlap."],
      ["Group bookings", "Add players to a booking, collect payment and send the details to everyone."],
      ["Missed calls", "Maya takes the call, books the court and sends the confirmation."],
    ],
  },
  {
    slug: "badminton",
    name: "Badminton",
    title: "Badminton court booking and facility software",
    headline: "Badminton courts, booked and paid before players arrive.",
    sub: "Hourly court bookings, memberships and waivers without paper or back-and-forth texts.",
    pains: [
      ["Many small courts", "Manage lots of courts on one clear schedule instead of a spreadsheet."],
      ["Regulars and drop-ins", "Offer memberships and passes alongside one-off bookings."],
      ["After-hours bookings", "Players book online any time, and Maya covers the phone."],
    ],
  },
  {
    slug: "squash",
    name: "Squash",
    title: "Squash court booking and club software",
    headline: "Squash court bookings without the admin.",
    sub: "Online booking, payments and waivers for squash clubs, with the phone covered by an AI receptionist.",
    pains: [
      ["Booking by court and time", "A live schedule for every court, with cancellations freeing the slot immediately."],
      ["Member and guest access", "Memberships, passes and guest bookings in one system."],
      ["Phone calls", "Maya answers booking questions and books the court."],
    ],
  },
];

export const getSport = (slug?: string) => SPORTS.find((s) => s.slug === slug);
