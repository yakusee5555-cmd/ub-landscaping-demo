export const BUSINESS = {
  name: "U&B Landscaping and Tree Service",
  phone: "(917) 417-0195",
  phoneHref: "tel:+19174170195",
  address: "139-09 91st Ave, Jamaica, NY 11435",
  hours: "Mon–Fri 8am–5pm, Sat 8am–3pm",
  emergency: "Storm cleanup with fast response",
  rating: "4.3",
  reviewCount: "6",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* Stacked headline words (section 2) */
export const STACK_WORDS = ["Landscaping.", "Design.", "Irrigation.", "Tree Care."];

export interface FloatCard {
  img: string;
  title: string;
  meta: string;
  rotate: string;
  offset: string;
}

export const FLOAT_CARDS: FloatCard[] = [
  {
    img: "/img/treesvc.jpg",
    title: "Landscaping",
    meta: "Mowing & beds · Seasonal color",
    rotate: "rotate-[4deg]",
    offset: "md:translate-y-10",
  },
  {
    img: "/img/arborist2.jpg",
    title: "Landscape design",
    meta: "Planting plans · Curb appeal",
    rotate: "rotate-[-3deg]",
    offset: "md:-translate-y-6",
  },
  {
    img: "/img/forest.jpg",
    title: "Irrigation",
    meta: "Sprinklers · Repairs",
    rotate: "rotate-[2.5deg]",
    offset: "md:translate-y-16",
  },
];

/* Dark numbered list (section 3) */
export interface ListRow {
  img: string;
  title: string;
  desc: string;
}

export const LIST_ROWS: ListRow[] = [
  {
    img: "/img/treesvc.jpg",
    title: "Landscaping",
    desc: "Weekly care that keeps it sharp",
  },
  {
    img: "/img/arborist2.jpg",
    title: "Landscape design",
    desc: "Planting with year-round color",
  },
  {
    img: "/img/forest.jpg",
    title: "Irrigation",
    desc: "Green lawns, less water waste",
  },
  {
    img: "/img/arborist1.jpg",
    title: "Tree trimming",
    desc: "Healthy canopies, clean shapes",
  },
  {
    img: "/img/felling.jpg",
    title: "Tree removal",
    desc: "Safe takedowns in tight spaces",
  },
];

/* Glass cards on full-bleed image (section 4) */
export interface GlassCard {
  title: string;
  desc: string;
  pos: string;
}

export const GLASS_CARDS: GlassCard[] = [
  {
    title: "Free estimates",
    desc: "On-site quotes, usually same-day.",
    pos: "left-[6%] top-[16%]",
  },
  {
    title: "Licensed & insured",
    desc: "Full coverage on every single job.",
    pos: "right-[8%] top-[24%]",
  },
  {
    title: "Storm cleanup",
    desc: "Downed limbs and debris cleared fast.",
    pos: "left-[10%] bottom-[20%]",
  },
  {
    title: "4.3 ★★★★★",
    desc: "Google reviews from Jamaica neighbors.",
    pos: "right-[10%] bottom-[14%]",
  },
];

/* Real work gallery (section 5) — actual tree-work photos */
export interface WorkShot {
  img: string;
  title: string;
  location: string;
}

export const WORK_SHOTS: WorkShot[] = [
  { img: "/img/felling.jpg", title: "Hazardous pine topped & removed", location: "Jamaica, NY" },
  { img: "/img/chainsaw.jpg", title: "Sectional takedown, tight lot", location: "Queens Village, NY" },
  { img: "/img/treesvc.jpg", title: "Crown cleaning & shaping", location: "Hollis, NY" },
  { img: "/img/arborist2.jpg", title: "Climbing prune, mature oak", location: "St. Albans, NY" },
  { img: "/img/storm1.jpg", title: "Storm-felled tree cleared", location: "Springfield Gardens, NY" },
  { img: "/img/stump.jpg", title: "Stump ground below grade", location: "Bellerose, NY" },
];

export interface Service {
  img: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    img: "/img/treesvc.jpg",
    title: "Landscaping",
    desc: "Complete lawn and landscape care: mowing, beds, and seasonal color that keeps the whole property sharp.",
  },
  {
    img: "/img/arborist2.jpg",
    title: "Landscape design",
    desc: "Planting plans with year-round color and texture, designed around how you actually use the yard.",
  },
  {
    img: "/img/forest.jpg",
    title: "Irrigation",
    desc: "Sprinkler installs and repairs that keep everything green without wasting water.",
  },
  {
    img: "/img/arborist1.jpg",
    title: "Tree trimming",
    desc: "Crown thinning, shaping, and deadwood removal that keeps trees healthy and storm-resistant.",
  },
  {
    img: "/img/felling.jpg",
    title: "Tree removal",
    desc: "Safe, controlled takedowns of dead or hazardous trees, even in tight Jamaica lots.",
  },
  {
    img: "/img/storm1.jpg",
    title: "Canopy cleaning",
    desc: "Deadwood and debris cleared from tree canopies for health, safety, and curb appeal.",
  },
];

export interface Review {
  name: string;
  town: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Marcus T.",
    town: "Jamaica",
    text: "Huge oak leaning over our garage. They took it down in sections without touching a shingle. Cleaned everything like they were never here.",
  },
  {
    name: "Priya S.",
    town: "Hollis",
    text: "Called at 7am after a storm dropped a limb on our fence. Crew was here by noon and the yard looked better than before.",
  },
  {
    name: "Dave R.",
    town: "Queens Village",
    text: "Fair price, showed up on time, and actually explained what they were doing to our maples. Rare these days. Highly recommend.",
  },
  {
    name: "Angela M.",
    town: "Bellerose",
    text: "Three stumps ground out and the lawn regraded in one morning. You can't even tell trees were there. Worth every penny.",
  },
];

export const TOWNS = [
  "Jamaica",
  "Springfield Gardens",
  "Queens Village",
  "Hollis",
  "St. Albans",
  "Bellerose",
  "Cambria Heights",
  "Laurelton",
  "Rosedale",
  "Jamaica Estates",
  "South Ozone Park",
  "Richmond Hill",
];
