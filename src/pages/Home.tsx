import Hero from "../components/Hero";
import { Contact, Reviews } from "../components/Sections";
import { DarkList, FullBleed, Pricing, Stacked, Work } from "../components/Showcase";
import { RouteFX } from "../components/PageBits";

export default function Home() {
  return (
    <>
      <RouteFX
        title="U&B Landscaping and Tree Service | Tree Removal & Trimming in Jamaica, NY"
        description="U&B Landscaping and Tree Service — landscaping, design, irrigation and tree care across Jamaica, Queens NY. Free estimates."
      />
      <Hero />
      <Stacked />
      <DarkList />
      <FullBleed />
      <Work />
      <Pricing />
      <Reviews />
      <Contact />
    </>
  );
}
