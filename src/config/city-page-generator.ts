import type { CityData } from "./cities-types";
import { getRawCities, countyToRegion, cityNameToSlug } from "./california-cities-data";

const HANDWRITTEN_SLUGS = new Set([
  "los-angeles-ca", "san-diego-ca", "san-jose-ca", "san-francisco-ca",
  "sacramento-ca", "long-beach-ca", "anaheim-ca", "irvine-ca",
  "fresno-ca", "oakland-ca", "bakersfield-ca", "riverside-ca",
  "stockton-ca", "santa-ana-ca",
]);

function formatPopulation(pop: number): string {
  if (pop >= 1_000_000) {
    return `${(pop / 1_000_000).toFixed(1)} million`;
  }
  return pop.toLocaleString("en-US");
}

function simpleHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function getDescription(name: string, county: string, region: string, pop: number): string {
  const sizeLabel = pop >= 100_000 ? "city" : pop >= 30_000 ? "community" : "area";
  const templates: Record<string, string[]> = {
    "Southern California": [
      `iElectrician provides licensed electrician services throughout ${name} and the surrounding ${county} area. Whether you need a panel upgrade, EV charger installation, or emergency electrical repair, our electricians serve residential and commercial properties across this Southern California ${sizeLabel}.`,
      `iElectrician delivers professional electrical services across ${name}, CA. Our licensed electricians handle everything from rewiring and panel upgrades to EV charger installations and safety inspections for homes and businesses in ${county}.`,
    ],
    "Bay Area": [
      `iElectrician provides expert electrician services throughout ${name} and the greater Bay Area. Our licensed electricians serve ${county} with panel upgrades, smart home wiring, EV charger installations, and emergency electrical repairs for residential and commercial properties.`,
      `iElectrician delivers licensed electrical services across ${name}, CA. From panel upgrades and whole-home rewiring to EV charger installations, our electricians understand the electrical needs of Bay Area homes and businesses in ${county}.`,
    ],
    "Central Valley": [
      `iElectrician provides reliable electrician services throughout ${name} and the surrounding ${county} communities. Our licensed electricians understand the Central Valley's unique electrical demands, from heavy air conditioning loads to panel upgrades and residential rewiring.`,
      `iElectrician serves ${name} and ${county} with professional electrical services. Our licensed electricians handle panel upgrades, HVAC electrical circuits, EV charger installations, and emergency repairs for homes and businesses across the Central Valley.`,
    ],
    "Central Coast": [
      `iElectrician provides licensed electrician services across ${name} and the ${county} area. Our electricians serve Central Coast homes and businesses with panel upgrades, rewiring, EV charger installations, and outdoor electrical work.`,
      `iElectrician delivers professional electrical services throughout ${name}, CA. From residential rewiring and panel upgrades to commercial electrical work, our licensed electricians serve properties across ${county} and the Central Coast.`,
    ],
    "Northern California": [
      `iElectrician provides professional electrician services across ${name} and ${county}. Our licensed electricians serve Northern California with panel upgrades, generator installations, emergency repairs, and residential electrical work.`,
      `iElectrician delivers licensed electrical services throughout ${name}, CA. Our electricians handle panel upgrades, whole-home rewiring, EV charger installations, and emergency service for homes and businesses in ${county}.`,
    ],
  };
  const opts = templates[region] || templates["Southern California"];
  return opts[simpleHash(name) % opts.length];
}

function getLocalInfo(name: string, county: string, region: string, pop: number): string {
  const templates: Record<string, string[]> = {
    "Southern California": [
      `${name}'s warm Southern California climate drives demand for reliable electrical systems, including EV charger installations, landscape lighting, and ceiling fan circuits. Many homes in the area may have electrical panels and wiring that predate modern electrical demands, making panel upgrades and safety inspections common projects for local homeowners.`,
      `As a ${county} community, ${name} has a mix of housing ranging from older residential properties to newer developments. Southern California's climate supports year-round outdoor living, increasing demand for outdoor lighting, EV charger installations, and electrical systems that can handle modern appliance loads.`,
    ],
    "Bay Area": [
      `${name} is part of the Bay Area's diverse housing landscape. Many properties in ${county} were built decades ago and may benefit from electrical upgrades including panel replacements, rewiring, and modern safety features like GFCI and AFCI protection. The region's high EV adoption also drives demand for home charger installations.`,
      `As a Bay Area community in ${county}, ${name} has strong demand for electrical services including panel upgrades, smart home wiring, and EV charger installations. Many homes in the area have electrical systems that may not meet current code requirements, particularly in older neighborhoods.`,
    ],
    "Central Valley": [
      `${name}'s Central Valley location means summer temperatures can exceed 100°F, putting heavy demands on residential electrical systems for air conditioning. Many homes in ${county} need panel upgrades to safely support modern HVAC systems alongside other electrical loads. The region's agricultural and commercial sectors also drive demand for electrical services.`,
      `Located in ${county}, ${name} experiences the Central Valley's extreme summer heat, which stresses electrical systems running air conditioning at full capacity. Panel upgrades, dedicated HVAC circuits, and whole-house surge protection are common electrical projects for area homeowners.`,
    ],
    "Central Coast": [
      `${name}'s Central Coast location brings unique electrical considerations. Properties in ${county} may face coastal moisture and salt air exposure that can affect outdoor electrical components. The area's mix of older and newer homes creates varied demand for panel upgrades, rewiring, and modern electrical installations.`,
      `As a ${county} community along the Central Coast, ${name} has electrical needs shaped by the coastal climate and the region's diverse housing stock. EV charger installations, outdoor lighting, and panel upgrades are among the most common electrical services requested by area homeowners.`,
    ],
    "Northern California": [
      `${name}'s Northern California location presents unique electrical challenges, including public safety power shutoffs (PSPS) during wildfire season and older homes that may need electrical modernization. Homeowners in ${county} commonly request panel upgrades, generator installations, and whole-house surge protection.`,
      `Located in ${county}, ${name} is part of Northern California's diverse landscape. Many area homes have electrical systems that may benefit from upgrades, and the region's wildfire risk makes generator installations and emergency electrical preparedness important considerations for homeowners.`,
    ],
  };
  const opts = templates[region] || templates["Southern California"];
  return opts[simpleHash(name + "info") % opts.length];
}

function getCommonIssues(name: string, county: string, region: string): string[] {
  const templates: Record<string, string[][]> = {
    "Southern California": [
      [
        `Panel upgrades needed in older homes throughout ${name} to support modern electrical loads`,
        `EV charger installation demand from California's growing electric vehicle adoption in ${county}`,
        `Outdated wiring in older residential properties that may not meet current electrical codes`,
        `GFCI outlet upgrades required in kitchens, bathrooms, and outdoor areas for code compliance`,
        `Landscape and outdoor lighting installations for Southern California's year-round outdoor living`,
      ],
      [
        `Aging electrical panels in older ${name} homes that may not safely support air conditioning and modern appliances`,
        `High demand for Level 2 EV charger installations across ${county} residential properties`,
        `Aluminum wiring concerns in homes built during the 1960s and 1970s`,
        `Commercial electrical needs for local businesses including lighting and power distribution`,
        `Whole-house surge protection to guard against power fluctuations`,
      ],
    ],
    "Bay Area": [
      [
        `Panel upgrades needed in older ${name} homes to support EV chargers, home offices, and modern appliances`,
        `High EV charger installation demand across ${county} driven by Bay Area adoption rates`,
        `Older wiring systems in pre-1970 homes that may need updating for safety and capacity`,
        `Smart home wiring and structured cabling for home automation and networking`,
        `Earthquake preparedness electrical work including automatic shutoffs and emergency lighting`,
      ],
      [
        `Aging electrical infrastructure in older ${name} residential properties requiring modernization`,
        `EV charger installations for Bay Area homeowners in ${county}`,
        `Home office electrical upgrades including dedicated circuits and structured wiring`,
        `GFCI and AFCI protection upgrades in kitchens, bathrooms, and bedrooms`,
        `Commercial tenant improvement electrical work for local businesses`,
      ],
    ],
    "Central Valley": [
      [
        `Extreme heat putting heavy electrical loads on air conditioning systems in ${name}`,
        `Panel upgrades needed in older homes to safely support HVAC and modern appliances`,
        `Whole-house surge protection against power grid fluctuations during Central Valley heat waves`,
        `New construction electrical work in growing ${county} developments`,
        `Agricultural and commercial electrical services for the Central Valley economy`,
      ],
      [
        `Air conditioning circuit overloads during summer temperatures exceeding 100°F in ${name}`,
        `Aging wiring and undersized panels in older ${county} homes`,
        `EV charger installations as electric vehicle adoption grows in the Central Valley`,
        `Dedicated HVAC circuits needed for homes adding or upgrading central air conditioning`,
        `Commercial electrical services for local businesses and agricultural operations`,
      ],
    ],
    "Central Coast": [
      [
        `Coastal moisture and salt air exposure affecting outdoor electrical components in ${name}`,
        `Panel upgrades in older ${county} homes to meet modern electrical demands`,
        `EV charger installations for homeowners transitioning to electric vehicles`,
        `Outdoor and landscape lighting for Central Coast properties`,
        `Older residential wiring that may need updating for safety and capacity`,
      ],
      [
        `Panel upgrades needed in older homes throughout ${name} and ${county}`,
        `Corrosion on outdoor electrical fixtures from Central Coast marine environment`,
        `EV charger installation demand growing across ${county}`,
        `GFCI outlet requirements in kitchens, bathrooms, garages, and outdoor areas`,
        `Commercial electrical services for local businesses and hospitality properties`,
      ],
    ],
    "Northern California": [
      [
        `Public safety power shutoff (PSPS) preparedness including generator installations in ${name}`,
        `Panel upgrades in older ${county} homes that may not support modern electrical loads`,
        `Wildfire risk zone electrical safety upgrades including hardwired smoke detectors`,
        `EV charger installations for homeowners in ${county}`,
        `Aging residential wiring that may need updating for safety and code compliance`,
      ],
      [
        `Generator and backup power installations for PSPS events in ${name} and ${county}`,
        `Older home electrical modernization including panel upgrades and rewiring`,
        `Whole-house surge protection for power stability in rural and semi-rural areas`,
        `EV charger installations as electric vehicle adoption grows in Northern California`,
        `Emergency electrical services for storm damage and power outage recovery`,
      ],
    ],
  };
  const opts = templates[region] || templates["Southern California"];
  return opts[simpleHash(name + "issues") % opts.length];
}

function getCityFaqs(name: string, county: string, region: string): { question: string; answer: string }[] {
  const baseFaqs: { question: string; answer: string }[] = [
    {
      question: `How much does an electrician cost in ${name}?`,
      answer: `Electrician costs in ${name} vary based on the scope of work. Service calls typically start around $75–$150, while larger projects like panel upgrades or rewiring are priced based on materials, labor, and permitting requirements. We provide upfront estimates before starting any work.`,
    },
    {
      question: `Do I need a permit for electrical work in ${name}?`,
      answer: `Most electrical work in ${name} requires a permit from the local building department in ${county}. This includes panel upgrades, new circuits, rewiring, and EV charger installations. Our licensed electricians handle the permitting process as part of every qualifying project.`,
    },
    {
      question: `Can you install an EV charger at my ${name} home?`,
      answer: `Yes. We install Level 2 EV chargers at homes throughout ${name} and ${county}. Installation includes a dedicated 240V circuit, proper permitting, and support for all major EV charger brands. We assess your panel capacity and recommend any necessary upgrades before installation.`,
    },
  ];

  const regionFaq: Record<string, { question: string; answer: string }> = {
    "Southern California": {
      question: `Does ${name}'s climate affect electrical systems?`,
      answer: `Southern California's warm climate increases demand for air conditioning, pool equipment, and outdoor electrical systems. Homes in ${name} should have electrical panels with sufficient capacity for cooling loads, and outdoor electrical components should be rated for the local climate conditions.`,
    },
    "Bay Area": {
      question: `Do older ${name} homes need electrical upgrades?`,
      answer: `Many homes in ${name} and the Bay Area were built before modern electrical demands existed. Signs that an upgrade may be needed include frequently tripping breakers, flickering lights, a panel older than 25–30 years, or insufficient outlets for current needs. A licensed electrician can assess your system.`,
    },
    "Central Valley": {
      question: `Can extreme heat damage my electrical system in ${name}?`,
      answer: `Central Valley heat can stress electrical insulation, cause thermal expansion in connections, and overload panels running air conditioning at full capacity. Homes in ${name} should have electrical systems inspected before summer to ensure panels, wiring, and breakers are in safe working condition.`,
    },
    "Central Coast": {
      question: `Does coastal air affect electrical systems in ${name}?`,
      answer: `Properties in ${name} and along the Central Coast may experience moisture and salt air exposure that can corrode outdoor electrical panels, outlets, and light fixtures over time. Regular inspections and weather-rated electrical components help protect your system.`,
    },
    "Northern California": {
      question: `Should ${name} homeowners prepare for power shutoffs?`,
      answer: `Northern California communities like ${name} can be affected by public safety power shutoffs (PSPS) during wildfire season. A standby generator or portable generator with a transfer switch provides backup power during outages. Our electricians install generator systems sized for your home's needs.`,
    },
  };

  return [...baseFaqs, regionFaq[region] || regionFaq["Southern California"]];
}

function computeNearbyAreas(
  selfSlug: string,
  county: string,
  allByCounty: Map<string, { name: string; slug: string; pop: number }[]>
): string[] {
  const sameCounty = allByCounty.get(county) || [];
  return sameCounty
    .filter((c) => c.slug !== selfSlug)
    .sort((a, b) => b.pop - a.pop)
    .slice(0, 8)
    .map((c) => c.name);
}

export function generateAllCities(handwrittenCities: CityData[]): CityData[] {
  const handwrittenMap = new Map(handwrittenCities.map((c) => [c.slug, c]));
  const rawCities = getRawCities();

  const allByCounty = new Map<string, { name: string; slug: string; pop: number }[]>();
  for (const raw of rawCities) {
    const slug = cityNameToSlug(raw.name, raw.slugOverride);
    const list = allByCounty.get(raw.county) || [];
    list.push({ name: raw.name, slug, pop: raw.population });
    allByCounty.set(raw.county, list);
  }

  const generated: CityData[] = [];

  for (const raw of rawCities) {
    const slug = cityNameToSlug(raw.name, raw.slugOverride);
    if (handwrittenMap.has(slug)) continue;

    const region = countyToRegion[raw.county] || "Southern California";
    const countyFull = `${raw.county} County`;

    generated.push({
      slug,
      name: raw.name,
      state: "California",
      stateAbbr: "CA",
      region,
      county: countyFull,
      population: formatPopulation(raw.population),
      description: getDescription(raw.name, countyFull, region, raw.population),
      localInfo: getLocalInfo(raw.name, countyFull, region, raw.population),
      commonIssues: getCommonIssues(raw.name, countyFull, region),
      neighborhoods: [],
      nearbyAreas: computeNearbyAreas(slug, raw.county, allByCounty),
      faqs: getCityFaqs(raw.name, countyFull, region),
      metaTitle: `Electrician in ${raw.name}, CA | Licensed Electrical Services`,
      metaDescription: `Licensed electricians serving ${raw.name}, CA. Panel upgrades, EV charger installation, emergency electrical service, and residential repairs in ${countyFull}.`,
    });
  }

  return [...handwrittenCities, ...generated];
}
