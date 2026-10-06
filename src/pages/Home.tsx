import Hero from "../components/Hero";
import { Contact, Reviews } from "../components/Sections";
import { DarkList, FullBleed, Pricing, Stacked, Work } from "../components/Showcase";
import { Marquee } from "../components/MotionBits";
import { TreelineDivider } from "../components/DecorBits";
import { RouteFX } from "../components/PageBits";

const MARQUEE_ITEMS = [
  "Landscaping",
  "Tree Removal",
  "Landscape Design",
  "Tree Trimming",
  "Irrigation",
  "Canopy Cleaning",
  "Jamaica",
  "Queens Village",
  "Hollis",
  "St. Albans",
  "Free Estimates",
];

export default function Home() {
  return (
    <>
      <RouteFX
        title="U&B Landscaping and Tree Service | Tree Removal & Trimming in Jamaica, NY"
        description="U&B Landscaping and Tree Service — landscaping, design, irrigation and tree care across Jamaica, Queens NY. Free estimates."
      />
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <Stacked />
      <DarkList />
      <TreelineDivider />
      <FullBleed />
      <Work />
      <Pricing />
      <Reviews />
      <Contact />
    </>
  );
}
