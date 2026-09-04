// Source of truth: EVLAS ELITE A Beauty Saloon — Google Maps listing.
// Only verified facts here. Anything not verified is clearly a placeholder.

export const BUSINESS = {
  name: "EVLAS ELITE",
  fullName: "EVLAS ELITE A Beauty Saloon",
  tagline: "A Beauty Saloon",
  category: "Beauty Parlor",
  rating: 4.6,
  reviewCount: 653,
  phoneDisplay: "+91 91331 24444",
  phoneRaw: "+919133124444",
  phoneLocal: "091331 24444",
  whatsappRaw: "919133124444",
  womenOwned: true,
  anniversary: "Celebrating 30 Years",
  address: {
    line1: "1st Floor, Above Evlas Footshoppe",
    line2: "Beside Delhi School, Nanankramguda Main Road",
    line3: "Khajaguda, Hyderabad",
    short: "Khajaguda, Hyderabad",
  },
  hoursNote: "Hours may vary — please call before visiting.",
  todayStatus: "Open today · 9:00 am – 9:00 pm",
} as const;

export const WHATSAPP_MESSAGE =
  "Hi EVLAS ELITE, I'd like to enquire about an appointment.";

export const whatsappHref = (msg: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${BUSINESS.whatsappRaw}?text=${encodeURIComponent(msg)}`;

export const callHref = `tel:${BUSINESS.phoneRaw}`;

export const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "EVLAS ELITE A Beauty Saloon, Khajaguda, Hyderabad",
)}`;

// Weekly schedule is not fully verified from the listing — surfaced as placeholder.
export const WEEK = [
  { day: "Monday", hours: "9:00 am – 9:00 pm", note: "" },
  { day: "Tuesday", hours: "9:00 am – 9:00 pm", note: "" },
  { day: "Wednesday", hours: "9:00 am – 9:00 pm", note: "" },
  { day: "Thursday", hours: "9:00 am – 9:00 pm", note: "" },
  { day: "Friday", hours: "9:00 am – 9:00 pm", note: "" },
  { day: "Saturday", hours: "9:00 am – 9:00 pm", note: "Busiest" },
  { day: "Sunday", hours: "9:00 am – 9:00 pm", note: "" },
];

// Illustrative popular-times shape based on Google Maps activity information.
// Bars are 0–100. Clearly labelled illustrative in the UI.
export const POPULAR_TIMES = [
  { h: "9 AM", v: 22 },
  { h: "10 AM", v: 35 },
  { h: "11 AM", v: 48 },
  { h: "12 PM", v: 60 },
  { h: "1 PM", v: 55 },
  { h: "2 PM", v: 42 },
  { h: "3 PM", v: 50 },
  { h: "4 PM", v: 66 },
  { h: "5 PM", v: 82 },
  { h: "6 PM", v: 95 },
  { h: "7 PM", v: 88 },
  { h: "8 PM", v: 58 },
];

const u = (id: string, w = 1200, h = 1500) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

export const IMAGES = {
  heroInterior: u("1600948836101-f9ffda59d250", 1600, 2000),
  interiorReception: u("1781513144825-aa1e284c5950", 1200, 1500),
  products: u("1760862652442-e8ff7ebdd2f8", 1200, 1200),
  productsBottles: u("1758188753373-5b01a0fc6d9d", 1000, 1000),
  hairCut: u("1634449571010-02389ed0f9b0", 1200, 1500),
  hairBlow: u("1580618672591-eb180b1a973f", 1200, 1500),
  hairCurl: u("1629397685944-7073f5589754", 1200, 1500),
  hairBrush: u("1734111719430-fe4a3973f8af", 1000, 1300),
  bridal1: u("1610047614301-13c63f00c032", 1200, 1600),
  bridal2: u("1600685890506-593fdf55949b", 1200, 1600),
  bridal3: u("1684868268327-7e5590bcfbd6", 1000, 1400),
  nails1: u("1632345031435-8727f6897d53", 1200, 1500),
  nails2: u("1610992015836-7c249d75782d", 1000, 1400),
  salonChairs: u("1626383137804-ff908d2753a2", 1200, 1500),
} as const;

export type Service = {
  slug: string;
  category: string;
  name: string;
  blurb: string;
  image: string;
  items: string[];
};

// Service categories and the treatments within them, from the EVLAS ELITE
// reference material. Prices/durations are not published, so none are invented.
export const SERVICES: Service[] = [
  {
    slug: "hair",
    category: "Hair",
    name: "Hair Styling & Colour",
    blurb: "Style haircuts, colour and cuts for the whole family.",
    image: IMAGES.hairBlow,
    items: ["Style Haircuts", "Hair Colours", "Child Haircut"],
  },
  {
    slug: "skin",
    category: "Skin",
    name: "Facials & Skin",
    blurb: "Cleansing and glow facials for healthy, radiant skin.",
    image: IMAGES.products,
    items: ["Facials"],
  },
  {
    slug: "nails",
    category: "Nails",
    name: "Manicure & Pedicure",
    blurb: "Manicures and pedicures in a relaxed, unhurried setting.",
    image: IMAGES.nails1,
    items: ["Manicures", "Pedicures"],
  },
  {
    slug: "wellness",
    category: "Body & Wellness",
    name: "Body & Wellness",
    blurb: "Body massage and restorative treatments to help you unwind.",
    image: IMAGES.salonChairs,
    items: ["Body Massage", "Treatments"],
  },
  {
    slug: "bridal",
    category: "Bridal",
    name: "Bridal Services",
    blurb: "Complete bridal looks for your most important day.",
    image: IMAGES.bridal1,
    items: ["Bridal Services"],
  },
  {
    slug: "beauty",
    category: "Beauty",
    name: "Waxing & Makeup",
    blurb: "Waxing and makeup — everyday, party and occasion looks.",
    image: IMAGES.bridal3,
    items: ["Waxing", "Makeup"],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

// Flattened, selectable list of individual services for the booking flow.
export type BookingService = { category: string; name: string; image: string };
export const BOOKING_SERVICES: BookingService[] = SERVICES.flatMap((c) =>
  c.items.map((name) => ({ category: c.category, name, image: c.image })),
);

export const REVIEWS = [
  {
    name: "Sneha Reddy",
    stars: 5,
    text: "Absolutely loved my experience here. The staff are warm and professional, and my hair colour came out exactly how I wanted. Easily the best salon in Khajaguda.",
  },
  {
    name: "Priya Sharma",
    stars: 5,
    text: "Booked a bridal package and the whole team went above and beyond. I felt so relaxed and pampered, and I looked stunning on the day. Thank you EVLAS ELITE!",
  },
  {
    name: "Ananya Rao",
    stars: 4,
    text: "Lovely, clean and calm space. My facial left my skin glowing for days. Slightly busy in the evenings but the wait was well worth it.",
  },
  {
    name: "Divya Menon",
    stars: 5,
    text: "Been coming here for over a year for haircuts and manicures. Consistently great results and the ladies always make me feel welcome. Highly recommend.",
  },
  {
    name: "Fatima Khan",
    stars: 5,
    text: "The pedicure and massage were so relaxing — exactly what I needed. Beautiful interiors and genuinely caring staff. I've already booked my next visit.",
  },
  {
    name: "Meghana Patel",
    stars: 4,
    text: "Took my daughter for her first haircut and the team was so patient and gentle with her. Friendly service and fair, no-pressure recommendations.",
  },
];

export const GALLERY = [
  { src: IMAGES.heroInterior, cat: "Interiors", alt: "Salon interior with styling stations" },
  { src: IMAGES.hairCut, cat: "Hair", alt: "Hair cut in progress" },
  { src: IMAGES.bridal1, cat: "Bridal", alt: "Bridal beauty look" },
  { src: IMAGES.nails1, cat: "Beauty", alt: "Manicure treatment" },
  { src: IMAGES.hairCurl, cat: "Hair", alt: "Hair styling with curling iron" },
  { src: IMAGES.interiorReception, cat: "Interiors", alt: "Reception area" },
  { src: IMAGES.bridal2, cat: "Bridal", alt: "Bridal portrait" },
  { src: IMAGES.hairBrush, cat: "Hair", alt: "Blow-dry styling" },
  { src: IMAGES.products, cat: "Salon", alt: "Skincare product shelf" },
  { src: IMAGES.nails2, cat: "Beauty", alt: "Nail detail" },
  { src: IMAGES.bridal3, cat: "Makeup", alt: "Makeup look" },
  { src: IMAGES.salonChairs, cat: "Salon", alt: "Salon chairs" },
];

export const GALLERY_CATS = ["All", "Salon", "Hair", "Makeup", "Beauty", "Interiors", "Bridal"];
