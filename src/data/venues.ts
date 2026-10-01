// Facilities that run on Courtside. Add a venue here and it appears on /venues and the homepage.
export interface Venue {
  slug: string;
  name: string;
  city: string;
  sports: string[];
  bookingUrl: string;
  hours?: string;
}

export const VENUES: Venue[] = [
  {
    slug: "kings-court-markham-2",
    name: "Kings Court Markham 2",
    city: "Markham, ON",
    sports: ["Basketball", "Volleyball", "Pickleball"],
    bookingUrl: "https://book.court-side.ai/kings-court-markham-2",
    hours: "Open 24 hours",
  },
];

export const getVenue = (slug?: string) => VENUES.find((v) => v.slug === slug);
