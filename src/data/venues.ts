// Facilities that run on Courtside. Add a venue here and it appears on /venues and the homepage.
export interface Venue {
  slug: string;
  name: string;
  city: string;
  sports: string[];
  bookingUrl: string;
  hours?: string;
  // A sample facility for trying the booking flow, not a real venue.
  demo?: boolean;
}

export const VENUES: Venue[] = [
  {
    slug: "sports-facility-a",
    name: "Sports Facility A",
    city: "Demo facility",
    sports: ["Basketball", "Volleyball", "Pickleball", "Indoor Soccer"],
    bookingUrl: "https://book.court-side.ai/booking?facility=27aff0bd-ac5f-4bd8-adae-e88e211db724",
    hours: "Open 24 hours",
    demo: true,
  },
];

export const getVenue = (slug?: string) => VENUES.find((v) => v.slug === slug);
