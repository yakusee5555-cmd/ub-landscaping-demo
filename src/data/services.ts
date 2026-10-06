export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  img: string;
  description: string[];
  included: string[];
  steps: { title: string; desc: string }[];
  pricingHint: string;
  faqs: { q: string; a: string }[];
  meta: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "landscaping",
    title: "Landscaping",
    tagline: "Weekly care that keeps it sharp.",
    img: "/img/treesvc.jpg",
    description: [
      "A great yard isn't an accident. It's a routine. U&B handles the mowing, edging, bed care, and seasonal color that keeps your Jamaica property looking sharp all year.",
      "One crew, one schedule, zero headaches. We show up when we say we will and leave every visit cleaner than we found it.",
    ],
    included: [
      "Mowing & crisp edging",
      "Bed weeding & mulch touch-ups",
      "Seasonal color plantings",
      "Leaf & debris removal",
      "Hedge & shrub shaping",
      "One crew on a set schedule",
    ],
    steps: [
      { title: "Walkthrough & plan",
        desc: "We walk the property with you, note the trouble spots, and set a schedule that fits.", },
      { title: "First deep cleanup",
        desc: "We reset everything once: beds, edges, overgrowth. So maintenance starts from clean.", },
      { title: "Regular visits",
        desc: "Weekly or biweekly, same crew, same day. You'll barely notice we're there. Except the yard.", },
      { title: "Seasonal refresh",
        desc: "Spring wake-up, summer color, fall cleanup. The yard never has an off-season.", },
    ],
    pricingHint: "Weekly plans from $55/visit depending on lot size. Free walkthrough and a firm quote before we start.",
    faqs: [
      {
        q: "How much does regular landscaping cost?",
        a: "Most Jamaica homes run $55–$150 per visit depending on lot size and what's included. We quote firm and free before the first visit.",
      },
      {
        q: "How often do you come?",
        a: "Weekly in growing season, biweekly or monthly in winter. You pick the rhythm; we keep it.",
      },
      {
        q: "Do you bring your own equipment?",
        a: "Yes. Mowers, trimmers, blowers, all of it. You don't lift a finger.",
      },
      {
        q: "What about fall leaves?",
        a: "Covered. Leaf season gets extra visits and full removal so beds and lawns go into winter clean.",
      },
    ],
    meta: "Landscaping in Jamaica, Queens NY. Mowing, beds, seasonal color, cleanups. Free estimates. U&B Landscaping and Tree Service.",
  },
  {
    slug: "landscape-design",
    title: "Landscape Design",
    tagline: "Planting with year-round color.",
    img: "/img/arborist2.jpg",
    description: [
      "Anyone can plant a bush. We design beds and borders that look good in April and still look good in November, matched to your sun, your soil, and how much maintenance you actually want to do.",
      "You get a real plan before anything goes in the ground: what goes where, why it works, and what it costs. No surprises, no dead plants by August.",
    ],
    included: [
      "On-site design consultation",
      "Planting plan matched to sun & soil",
      "Year-round color & texture",
      "Native & low-water options",
      "Bed & border installation",
      "Phased plans for any budget",
    ],
    steps: [
      { title: "Consultation",
        desc: "We walk the yard, talk about what you want, and take sun and soil into account.", },
      { title: "The plan",
        desc: "You get a planting plan with every plant named and priced. Approve it before we dig.", },
      { title: "Installation",
        desc: "Beds built, plants in, mulch down. Most installs finish in days, not weeks.", },
      { title: "Aftercare",
        desc: "Watering guide and a check-in visit so everything establishes strong.", },
    ],
    pricingHint: "Design plans from $499; installs quoted per project after the consultation. The consult itself is free.",
    faqs: [
      {
        q: "How much does landscape design cost?",
        a: "Plans start at $499. Installs depend on size and plant choices. We quote everything up front, plant by plant.",
      },
      {
        q: "Will the plants survive?",
        a: "We pick for your actual sun and soil conditions, and every install comes with a watering guide plus a check-in visit.",
      },
      {
        q: "Can you work in phases?",
        a: "Absolutely. Most clients do front yard first, backyard later. The plan covers the whole property so phases connect.",
      },
      {
        q: "Do you do native plants?",
        a: "Yes, and we recommend them where they fit: less water, less fuss, better for pollinators.",
      },
    ],
    meta: "Landscape design in Jamaica, Queens NY. Planting plans, bed installs, year-round color. Free consultation. U&B Landscaping and Tree Service.",
  },
  {
    slug: "irrigation",
    title: "Irrigation",
    tagline: "Green lawns, less water waste.",
    img: "/img/forest.jpg",
    description: [
      "Brown spots and swampy corners usually mean one thing: the sprinklers aren't doing their job. U&B installs and repairs irrigation systems sized for your actual lawn: even coverage, no geysers, no dead zones.",
      "We also fix what the last guy left behind: broken heads, leaking valves, and controllers still running like it's 2009.",
    ],
    included: [
      "New sprinkler installs",
      "Broken head & valve repairs",
      "Spring startup & testing",
      "Fall winterization blowouts",
      "Smart controller upgrades",
      "Coverage audits & adjustments",
    ],
    steps: [
      { title: "Walkthrough",
        desc: "We check your water pressure, lawn layout, and what's broken or missing.", },
      { title: "The fix or the plan",
        desc: "Repairs quoted on the spot. Full installs get a zoned plan with a firm price.", },
      { title: "Install / repair",
        desc: "Trenches cut clean, heads set level, everything tested zone by zone before we leave.", },
      { title: "Tune-up",
        desc: "We dial in run times so you're watering deeply, not daily. Greener lawn, smaller bill.", },
    ],
    pricingHint: "Repairs from $149; full installs quoted free on-site after the walkthrough.",
    faqs: [
      {
        q: "How much does a sprinkler system cost?",
        a: "Depends on zones and lawn size: most Jamaica homes land $2,500–$6,000 installed. The walkthrough and quote are free.",
      },
      {
        q: "Can you fix my existing system?",
        a: "Usually, yes. Broken heads, bad valves, and tired controllers are most of what we see. Repairs start at $149.",
      },
      {
        q: "Do I need winterization?",
        a: "Yes. Queens freezes hard enough to crack pipes and valves. Our fall blowout takes an hour and saves a spring rebuild.",
      },
      {
        q: "Are smart controllers worth it?",
        a: "If you travel or just forget, yes. They skip watering when it rains and most pay for themselves in a season or two.",
      },
    ],
    meta: "Irrigation in Jamaica, Queens NY. Sprinkler installs, repairs, winterization. Free estimates. U&B Landscaping and Tree Service.",
  },
  {
    slug: "tree-trimming",
    title: "Tree Trimming",
    tagline: "Healthy canopies, clean shapes.",
    img: "/img/arborist1.jpg",
    description: [
      "Good pruning is part science, part art. We thin crowded canopies so light and air get through, remove deadwood before it becomes a hazard, and shape trees so they grow strong instead of splitting in the next storm.",
      "Bad pruning (topping, lion-tailing, flush cuts) ruins trees. We cut to ANSI standards, which means your trees heal clean and stay healthy for decades.",
    ],
    included: [
      "Crown thinning & deadwood removal",
      "Shaping for structure and clearance",
      "Roof, driveway & line clearance",
      "Fruit tree & ornamental pruning",
      "Storm-damage corrective pruning",
      "All brush chipped and hauled away",
    ],
    steps: [
      { title: "Canopy assessment",
        desc: "We walk the tree with you and mark exactly what's coming off and why. No surprises.", },
      { title: "Targeted cuts",
        desc: "Deadwood out, crossing limbs out, weight reduced where it matters. Clean cuts at the branch collar.", },
      { title: "Clearance work",
        desc: "Limbs lifted off roofs, driveways, and service lines so everything has breathing room.", },
      { title: "Chipping & cleanup",
        desc: "Everything gets chipped on-site and hauled. Beds and lawns raked clean.", },
    ],
    pricingHint: "Most pruning jobs run $299–$900 depending on tree size and count. Free on-site quote, always.",
    faqs: [
      {
        q: "When is the best time to prune?",
        a: "Late winter is ideal for most species: the tree is dormant and structure is easy to see, but dead or hazardous limbs should come off any time of year.",
      },
      {
        q: "Will pruning hurt my tree?",
        a: "Proper pruning helps trees. We never remove more than 25% of a live canopy in a season and cut to ANSI standards so wounds close cleanly.",
      },
      {
        q: "Do you top trees?",
        a: "No. Topping destroys trees and creates weak, dangerous regrowth. If someone offered to top your tree, call us for a second opinion first.",
      },
      {
        q: "How often should trees be pruned?",
        a: "Most mature shade trees benefit from a professional prune every 3–5 years. Fast growers usually need attention every 1–2 years.",
      },
    ],
    meta: "Tree trimming & pruning in Jamaica, Queens NY. Crown thinning, deadwood removal, clearance cuts. Free estimates. U&B Landscaping and Tree Service.",
  },
  {
    slug: "tree-removal",
    title: "Tree Removal",
    tagline: "Safe takedowns in tight spaces.",
    img: "/img/felling.jpg",
    description: [
      "Some trees can't be saved: dead, diseased, storm-damaged, or just in the wrong spot. U&B removes them safely, even when they're leaning over your roof, tangled in power lines, or boxed in by fences on every side.",
      "Our crews are trained climbers, not guys with a ladder and a hope.  We rig every limb down in controlled sections, so nothing free-falls and nothing gets crushed.",
    ],
    included: [
      "Controlled sectional takedowns",
      "Large-tree specialists",
      "Trees near structures, lines & fences",
      "Stump grinding add-on available",
      "Full property cleanup: chips, limbs, sawdust",
      "Wood left as firewood or hauled away, your call",
    ],
    steps: [
      { title: "Free on-site assessment",
        desc: "We look at the tree, the obstacles, and the access. Then we give you a firm price on the spot.", },
      { title: "Rigging plan",
        desc: "Every limb gets a plan: what comes down first, where it lands, and how it's lowered.", },
      { title: "Sectional takedown",
        desc: "Climbers dismantle the tree piece by piece. Controlled, quiet, and safe around your home.", },
      { title: "Cleanup",
        desc: "We rake, blow, and haul everything out. Your yard looks better than when we arrived.", },
    ],
    pricingHint: "Most removals land between $600 and $2,500 depending on size and access. Exact price confirmed free on-site.",
    faqs: [
      {
        q: "How much does tree removal cost?",
        a: "Small trees start around $600; large or complex removals run $1,500–$2,500+. We confirm a firm, free quote on-site before any work begins.",
      },
      {
        q: "Can you remove a tree close to my house?",
        a: "Yes, that's most of what we do. We dismantle trees in sections and lower each piece with ropes, so nothing touches your roof, fence, or landscaping.",
      },
      {
        q: "Do you take the stump too?",
        a: "Stump grinding is an add-on to any removal. We grind it below grade, haul the chips, and leave the spot ready for grass or replanting.",
      },
      {
        q: "Are you insured?",
        a: "Fully licensed and insured on every job. We'll show you the paperwork before we start. No exceptions.",
      },
    ],
    meta: "Tree removal in Jamaica, Queens NY. Safe takedowns, tight spaces, full cleanup. Free estimates. U&B Landscaping and Tree Service.",
  },
  {
    slug: "canopy-cleaning",
    title: "Canopy Cleaning",
    tagline: "Deadwood out, safer trees.",
    img: "/img/storm1.jpg",
    description: [
      "Look up into most mature trees and you'll see it: dead limbs hanging over the driveway, crossing branches rubbing bark raw, weight building where you don't want it. Canopy cleaning takes all of that out before the next storm does it for you.",
      "It's the single best thing you can do for an older tree short of removal. Safer, healthier, and it lets light back into the yard below.",
    ],
    included: [
      "Deadwood & hanger removal",
      "Crossing & rubbing limb removal",
      "Weight reduction on heavy limbs",
      "Roof & structure clearance",
      "Storm-prep assessment included",
      "All debris chipped & hauled",
    ],
    steps: [
      { title: "Canopy walkthrough",
        desc: "We assess from the ground and in the tree, marking dead, weak, and crossing wood.", },
      { title: "Targeted removal",
        desc: "Deadwood and hazards come out first, then crossing limbs that damage bark.", },
      { title: "Clearance & balance",
        desc: "Weight reduced over roofs and driveways; canopy balanced so it moves right in wind.", },
      { title: "Cleanup",
        desc: "Everything chipped on-site and hauled. Lawn and beds raked clean.", },
    ],
    pricingHint: "Most canopy cleanings run $299–$800 depending on tree size and count. Free on-site quote.",
    faqs: [
      {
        q: "What's the difference between this and trimming?",
        a: "Canopy cleaning targets dead, weak, and hazardous wood specifically. Full trimming adds shaping and structure work on top.",
      },
      {
        q: "Will it help in storms?",
        a: "Yes. Deadwood is what breaks off first. A cleaned canopy moves with wind instead of fighting it.",
      },
      {
        q: "How often does a tree need it?",
        a: "Every 3–5 years for mature trees, or after any big storm drops debris.",
      },
      {
        q: "Do you haul everything away?",
        a: "Yes. Chipped on-site and hauled. Nothing left behind but a healthier tree.",
      },
    ],
    meta: "Canopy cleaning in Jamaica, Queens NY. Deadwood removal, storm prep, healthier trees. Free estimates. U&B Landscaping and Tree Service.",
  },
];
