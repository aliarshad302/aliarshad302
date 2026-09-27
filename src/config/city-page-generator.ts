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

export function simpleHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function popTier(pop: number): "large" | "mid" | "growing" | "small" {
  if (pop >= 150_000) return "large";
  if (pop >= 75_000) return "mid";
  if (pop >= 30_000) return "growing";
  return "small";
}

function getDescription(name: string, county: string, region: string, pop: number): string {
  const sizeLabel = pop >= 100_000 ? "city" : pop >= 30_000 ? "community" : "area";
  const tier = popTier(pop);
  const popStr = formatPopulation(pop);

  const templates: Record<string, string[]> = {
    "Southern California": [
      `iElectrician provides licensed electrician services throughout ${name} and the surrounding ${county} area. Whether you need a panel upgrade, EV charger installation, or emergency electrical repair, our electricians serve residential and commercial properties across this Southern California ${sizeLabel}.`,
      `iElectrician delivers professional electrical services across ${name}, CA. Our licensed electricians handle everything from rewiring and panel upgrades to EV charger installations and safety inspections for homes and businesses in ${county}.`,
      `Homeowners and businesses in ${name} rely on iElectrician for licensed electrical work throughout ${county}. With a population of ${popStr}, ${name} has ${tier === "large" ? "significant" : tier === "mid" ? "steady" : "growing"} demand for panel upgrades, EV charger installations, whole-house surge protection, and code-compliant electrical repairs across the ${sizeLabel}.`,
      `iElectrician's licensed electricians serve ${name} and all of ${county} with residential and commercial electrical services. From circuit breaker repairs and outlet installations to complete home rewiring and generator setups, we bring professional electrical solutions to this Southern California ${sizeLabel}.`,
      `${name} property owners choose iElectrician for dependable electrical services in ${county}. Our licensed electricians provide panel upgrades sized for modern electrical loads, Level 2 EV charger installations, aluminum wiring replacement, and emergency electrical repairs for this ${sizeLabel} of ${popStr} residents.`,
    ],
    "Bay Area": [
      `iElectrician provides expert electrician services throughout ${name} and the greater Bay Area. Our licensed electricians serve ${county} with panel upgrades, smart home wiring, EV charger installations, and emergency electrical repairs for residential and commercial properties.`,
      `iElectrician delivers licensed electrical services across ${name}, CA. From panel upgrades and whole-home rewiring to EV charger installations, our electricians understand the electrical needs of Bay Area homes and businesses in ${county}.`,
      `Bay Area homeowners in ${name} trust iElectrician for licensed electrical work across ${county}. With a population of ${popStr}, ${name} has ${tier === "large" ? "strong" : tier === "mid" ? "consistent" : "growing"} demand for panel modernization, EV charger installations, structured cabling, and electrical safety upgrades throughout the ${sizeLabel}.`,
      `iElectrician's licensed electricians bring professional electrical services to ${name} and the wider ${county} region. We handle panel upgrades for older Bay Area homes, EV charger installations, home office electrical circuits, and emergency repairs across residential and commercial properties.`,
      `${name} residents and businesses count on iElectrician for electrical services tailored to Bay Area properties. Our licensed electricians serve ${county} with panel capacity upgrades, rewiring for pre-1970s homes, GFCI and AFCI protection upgrades, and 24/7 emergency response for this ${sizeLabel} of ${popStr}.`,
    ],
    "Central Valley": [
      `iElectrician provides reliable electrician services throughout ${name} and the surrounding ${county} communities. Our licensed electricians understand the Central Valley's unique electrical demands, from heavy air conditioning loads to panel upgrades and residential rewiring.`,
      `iElectrician serves ${name} and ${county} with professional electrical services. Our licensed electricians handle panel upgrades, HVAC electrical circuits, EV charger installations, and emergency repairs for homes and businesses across the Central Valley.`,
      `Central Valley homeowners in ${name} depend on iElectrician for licensed electrical services throughout ${county}. With a population of ${popStr}, ${name} has ${tier === "large" ? "high" : tier === "mid" ? "steady" : "growing"} demand for panel upgrades that support air conditioning loads, dedicated HVAC circuits, and whole-house surge protection across the ${sizeLabel}.`,
      `iElectrician's licensed electricians serve ${name} and all of ${county} with electrical services built for Central Valley conditions. We provide panel upgrades, breaker replacements, EV charger installations, and commercial electrical work for this ${sizeLabel}'s residential and business properties.`,
      `${name} property owners choose iElectrician for electrical services that account for the Central Valley's climate demands. Our licensed electricians serve ${county} with panel capacity upgrades, HVAC circuit installations, generator setups for power stability, and emergency repairs for this ${sizeLabel} of ${popStr} residents.`,
    ],
    "Central Coast": [
      `iElectrician provides licensed electrician services across ${name} and the ${county} area. Our electricians serve Central Coast homes and businesses with panel upgrades, rewiring, EV charger installations, and outdoor electrical work.`,
      `iElectrician delivers professional electrical services throughout ${name}, CA. From residential rewiring and panel upgrades to commercial electrical work, our licensed electricians serve properties across ${county} and the Central Coast.`,
      `Central Coast homeowners in ${name} trust iElectrician for licensed electrical work throughout ${county}. With a population of ${popStr}, ${name} has ${tier === "large" ? "strong" : tier === "mid" ? "consistent" : "growing"} demand for panel upgrades, weather-rated outdoor electrical installations, and EV charger setups across the ${sizeLabel}.`,
      `iElectrician's licensed electricians bring professional electrical services to ${name} and the wider ${county} area. We handle panel upgrades, corrosion-resistant outdoor wiring, landscape lighting, and emergency electrical repairs for Central Coast residential and commercial properties.`,
      `${name} residents and businesses rely on iElectrician for electrical services suited to Central Coast properties. Our licensed electricians serve ${county} with panel capacity upgrades, GFCI protection for coastal environments, EV charger installations, and emergency service for this ${sizeLabel} of ${popStr}.`,
    ],
    "Northern California": [
      `iElectrician provides professional electrician services across ${name} and ${county}. Our licensed electricians serve Northern California with panel upgrades, generator installations, emergency repairs, and residential electrical work.`,
      `iElectrician delivers licensed electrical services throughout ${name}, CA. Our electricians handle panel upgrades, whole-home rewiring, EV charger installations, and emergency service for homes and businesses in ${county}.`,
      `Northern California homeowners in ${name} count on iElectrician for licensed electrical services throughout ${county}. With a population of ${popStr}, ${name} has ${tier === "large" ? "significant" : tier === "mid" ? "consistent" : "growing"} demand for generator installations, panel upgrades, wildfire-preparedness wiring, and backup power systems across the ${sizeLabel}.`,
      `iElectrician's licensed electricians serve ${name} and the wider ${county} region with electrical services suited to Northern California conditions. We provide panel upgrades, standby generator installations, whole-house surge protection, and emergency electrical repairs for residential and commercial properties.`,
      `${name} property owners choose iElectrician for electrical services designed for Northern California's challenges. Our licensed electricians serve ${county} with generator and transfer switch installations, panel capacity upgrades, safety inspections, and storm-damage electrical repairs for this ${sizeLabel} of ${popStr} residents.`,
    ],
  };
  const opts = templates[region] || templates["Southern California"];
  return opts[simpleHash(name) % opts.length];
}

function getLocalInfo(name: string, county: string, region: string, pop: number): string {
  const tier = popTier(pop);
  const popStr = formatPopulation(pop);

  const templates: Record<string, string[]> = {
    "Southern California": [
      `${name}'s warm Southern California climate drives demand for reliable electrical systems, including EV charger installations, landscape lighting, and ceiling fan circuits. Many homes in the area may have electrical panels and wiring that predate modern electrical demands, making panel upgrades and safety inspections common projects for local homeowners.`,
      `As a ${county} community, ${name} has a mix of housing ranging from older residential properties to newer developments. Southern California's climate supports year-round outdoor living, increasing demand for outdoor lighting, EV charger installations, and electrical systems that can handle modern appliance loads.`,
      `With a population of ${popStr}, ${name} is ${tier === "large" ? "one of the larger cities" : tier === "mid" ? "a well-established community" : tier === "growing" ? "a growing community" : "a smaller community"} in ${county}. Local homeowners frequently request panel upgrades to support air conditioning, pool equipment, and EV chargers — all common electrical loads in Southern California properties.`,
      `${name} sits within ${county}, where Southern California's warm climate means electrical panels need to support significant cooling loads alongside modern demands like EV charging and home automation. Properties built before the 1990s may benefit from electrical panel upgrades and safety inspections to meet current code standards.`,
      `The housing stock in ${name} spans multiple decades, and ${county}'s building codes have evolved significantly over time. Older homes may still operate on 100-amp panels that were adequate when built but can struggle with today's electrical demands — central air conditioning, Level 2 EV chargers, home offices, and modern kitchen appliances.`,
    ],
    "Bay Area": [
      `${name} is part of the Bay Area's diverse housing landscape. Many properties in ${county} were built decades ago and may benefit from electrical upgrades including panel replacements, rewiring, and modern safety features like GFCI and AFCI protection. The region's high EV adoption also drives demand for home charger installations.`,
      `As a Bay Area community in ${county}, ${name} has strong demand for electrical services including panel upgrades, smart home wiring, and EV charger installations. Many homes in the area have electrical systems that may not meet current code requirements, particularly in older neighborhoods.`,
      `With a population of ${popStr}, ${name} is ${tier === "large" ? "one of the Bay Area's major cities" : tier === "mid" ? "an established Bay Area community" : tier === "growing" ? "a growing Bay Area community" : "a smaller Bay Area community"} in ${county}. The region's high cost of living drives homeowners to invest in electrical upgrades that add value — panel modernization, structured wiring, and EV charger installations are among the most requested projects.`,
      `${name}'s Bay Area location in ${county} means many homes were built during periods of rapid growth and may have electrical systems that predate modern demands. Home office circuits, EV charger installations, and panel upgrades are common projects as residents update properties for current technology and energy needs.`,
      `Properties in ${name} reflect the Bay Area's architectural diversity — from pre-war Victorians to mid-century ranches to modern construction. Each era brings different electrical challenges, and ${county} homeowners frequently need panel upgrades, rewiring, GFCI protection in wet areas, and dedicated circuits for home offices and EV chargers.`,
    ],
    "Central Valley": [
      `${name}'s Central Valley location means summer temperatures can exceed 100°F, putting heavy demands on residential electrical systems for air conditioning. Many homes in ${county} need panel upgrades to safely support modern HVAC systems alongside other electrical loads. The region's agricultural and commercial sectors also drive demand for electrical services.`,
      `Located in ${county}, ${name} experiences the Central Valley's extreme summer heat, which stresses electrical systems running air conditioning at full capacity. Panel upgrades, dedicated HVAC circuits, and whole-house surge protection are common electrical projects for area homeowners.`,
      `With a population of ${popStr}, ${name} is ${tier === "large" ? "one of the Central Valley's major cities" : tier === "mid" ? "an established Central Valley community" : tier === "growing" ? "a growing Central Valley community" : "a smaller Central Valley community"} in ${county}. Summer temperatures that regularly exceed 100°F mean electrical panels must handle sustained air conditioning loads, making panel capacity a top concern for local homeowners.`,
      `${name}'s position in ${county} puts it at the heart of the Central Valley, where electrical systems face year-round demands — heavy cooling loads in summer, heating circuits in winter, and agricultural operations that rely on commercial-grade electrical infrastructure. Residential panel upgrades and dedicated HVAC circuits rank among the most common electrical projects.`,
      `The Central Valley's climate creates specific electrical demands for ${name} homeowners in ${county}. Sustained summer heat means air conditioning runs for extended periods, requiring panels and wiring that can handle continuous high loads. Many area homes also benefit from whole-house surge protection and EV charger installations as the region's electrical needs continue to grow.`,
    ],
    "Central Coast": [
      `${name}'s Central Coast location brings unique electrical considerations. Properties in ${county} may face coastal moisture and salt air exposure that can affect outdoor electrical components. The area's mix of older and newer homes creates varied demand for panel upgrades, rewiring, and modern electrical installations.`,
      `As a ${county} community along the Central Coast, ${name} has electrical needs shaped by the coastal climate and the region's diverse housing stock. EV charger installations, outdoor lighting, and panel upgrades are among the most common electrical services requested by area homeowners.`,
      `With a population of ${popStr}, ${name} is ${tier === "large" ? "one of the Central Coast's larger cities" : tier === "mid" ? "an established Central Coast community" : tier === "growing" ? "a growing community on the Central Coast" : "a smaller Central Coast community"} in ${county}. The coastal environment means outdoor electrical components need weather-appropriate ratings, and many properties benefit from panel upgrades and corrosion-resistant installations.`,
      `${name}'s location in ${county} along the Central Coast shapes its electrical service needs. The moderate maritime climate supports year-round outdoor living, increasing demand for landscape lighting, outdoor outlets, and weather-rated electrical installations. Indoor electrical needs include panel upgrades and rewiring in older residential properties.`,
      `Properties in ${name} and throughout ${county} reflect the Central Coast's building history. Older homes may have electrical panels and wiring that predate current code standards, while coastal proximity means outdoor electrical components face moisture exposure. Panel upgrades, GFCI protection, and weather-rated outdoor installations are among the most requested services.`,
    ],
    "Northern California": [
      `${name}'s Northern California location presents unique electrical challenges, including public safety power shutoffs (PSPS) during wildfire season and older homes that may need electrical modernization. Homeowners in ${county} commonly request panel upgrades, generator installations, and whole-house surge protection.`,
      `Located in ${county}, ${name} is part of Northern California's diverse landscape. Many area homes have electrical systems that may benefit from upgrades, and the region's wildfire risk makes generator installations and emergency electrical preparedness important considerations for homeowners.`,
      `With a population of ${popStr}, ${name} is ${tier === "large" ? "one of Northern California's larger communities" : tier === "mid" ? "an established Northern California community" : tier === "growing" ? "a growing Northern California community" : "a smaller Northern California community"} in ${county}. PSPS events during wildfire season make standby generators and transfer switches increasingly important, alongside standard electrical upgrades like panel replacements and rewiring.`,
      `${name}'s position in ${county} places it in a Northern California region where wildfire risk, severe weather, and PSPS events create specific electrical preparedness needs. Homeowners commonly invest in generator installations with automatic transfer switches, whole-house surge protection, and hardwired smoke and CO detectors.`,
      `The electrical needs of ${name} homeowners in ${county} reflect Northern California's unique conditions. Power reliability concerns during fire season drive demand for generator installations, while the region's mix of older and newer homes creates consistent need for panel upgrades, rewiring, and electrical safety inspections throughout the ${popStr}-resident community.`,
    ],
  };
  const opts = templates[region] || templates["Southern California"];
  return opts[simpleHash(name + "info") % opts.length];
}

function getCommonIssues(name: string, county: string, region: string, pop: number): string[] {
  const tier = popTier(pop);

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
      [
        `Electrical panels in ${name} homes that may be undersized for air conditioning, EV charging, and modern kitchen appliances`,
        `Growing need for dedicated circuits to support home offices and high-draw appliances in ${county}`,
        `Outdoor electrical components exposed to Southern California sun and heat needing maintenance or replacement`,
        `Code-required arc-fault circuit interrupter (AFCI) protection in bedrooms and living areas`,
        `Ceiling fan and lighting upgrades to improve comfort and reduce cooling costs in ${name} homes`,
      ],
      [
        `${tier === "large" || tier === "mid" ? "High volume of" : "Growing demand for"} panel upgrade requests as ${name} homeowners add EV chargers and modern appliances`,
        `Older residential wiring in ${county} that was not designed for today's electrical loads`,
        `Pool and spa electrical installations and safety inspections for Southern California properties`,
        `Smoke and carbon monoxide detector upgrades to meet current California code requirements`,
        `Emergency electrical repairs for power outages and circuit failures in ${name}`,
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
      [
        `Pre-1960s wiring in ${name} homes that may include knob-and-tube or cloth-insulated conductors`,
        `${tier === "large" || tier === "mid" ? "Strong" : "Growing"} demand for Level 2 EV charger installations in ${county} as Bay Area EV adoption leads the state`,
        `Subpanel installations to support home additions, ADUs, and converted garages in ${name}`,
        `Electrical safety inspections for older Bay Area properties during real estate transactions`,
        `Whole-house surge protection to safeguard home electronics and smart home systems`,
      ],
      [
        `Panel capacity limitations in older ${name} properties that restrict adding EV chargers or home office circuits`,
        `Victorian and Craftsman-era homes in ${county} with electrical systems that predate modern code requirements`,
        `ADU and in-law unit electrical installations requiring separate subpanels and metering`,
        `Lighting upgrades and LED retrofits for ${name} residential and commercial properties`,
        `Emergency electrical service for storm damage and power restoration in the Bay Area`,
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
      [
        `Sustained summer heat in ${name} causing electrical panels to operate near capacity for months`,
        `${tier === "large" || tier === "mid" ? "Frequent" : "Growing"} demand for panel upgrades as ${county} homeowners add EV chargers alongside heavy HVAC loads`,
        `Older residential wiring in the Central Valley that was not designed for modern air conditioning demands`,
        `Whole-house fan electrical installations as an energy-efficient supplement to air conditioning`,
        `Smoke and carbon monoxide detector upgrades in ${name} homes to meet current California requirements`,
      ],
      [
        `Power quality issues during peak summer demand in ${name} and across ${county}`,
        `Electrical panel heat exposure in attics and garages that may affect component lifespan`,
        `Swimming pool and spa electrical installations and GFCI safety compliance`,
        `Generator installations for backup power during Central Valley grid stress events`,
        `Ceiling fan installations and wiring to reduce cooling costs in ${name} homes`,
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
      [
        `Weather-rated electrical components needed for ${name} properties exposed to coastal conditions`,
        `${tier === "large" || tier === "mid" ? "Consistent" : "Growing"} demand for panel upgrades in ${county} as homeowners add EV chargers and modern appliances`,
        `Outdoor lighting and electrical installations designed for Central Coast maritime exposure`,
        `Electrical safety inspections for older Central Coast homes during property sales`,
        `Whole-house surge protection for properties in ${name} and surrounding ${county} areas`,
      ],
      [
        `Moisture-related electrical issues in ${name} homes near the Central Coast shoreline`,
        `Tourism and hospitality properties in ${county} requiring reliable commercial electrical service`,
        `Smoke detector and CO alarm upgrades to meet current California code in older ${name} homes`,
        `Landscape lighting installations for ${name} residential and commercial properties`,
        `Emergency electrical repairs for storm damage along the Central Coast`,
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
      [
        `${tier === "large" || tier === "mid" ? "High" : "Growing"} demand for standby generators with automatic transfer switches in ${name}`,
        `Aging electrical panels in ${county} homes that may not handle modern appliance loads safely`,
        `Wildfire season preparedness including hardwired smoke detectors and emergency lighting`,
        `Tree-fall and storm-related electrical damage requiring emergency repair in Northern California`,
        `EV charger installations and panel capacity assessments for ${name} homeowners`,
      ],
      [
        `PSPS events during wildfire season leaving ${name} homes without power for extended periods`,
        `Older residential properties in ${county} with panels and wiring that predate current code standards`,
        `Portable and standby generator electrical connections for backup power reliability`,
        `Electrical safety inspections for properties in wildfire risk zones near ${name}`,
        `Lighting upgrades and energy-efficient electrical installations for ${name} residential properties`,
      ],
    ],
  };
  const opts = templates[region] || templates["Southern California"];
  return opts[simpleHash(name + "issues") % opts.length];
}

function getCityFaqs(name: string, county: string, region: string, pop: number): { question: string; answer: string }[] {
  const popStr = formatPopulation(pop);

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

  const regionFaqs: Record<string, { question: string; answer: string }[]> = {
    "Southern California": [
      {
        question: `Does ${name}'s climate affect electrical systems?`,
        answer: `Southern California's warm climate increases demand for air conditioning, pool equipment, and outdoor electrical systems. Homes in ${name} should have electrical panels with sufficient capacity for cooling loads, and outdoor electrical components should be rated for the local climate conditions.`,
      },
      {
        question: `How do I know if my ${name} home needs a panel upgrade?`,
        answer: `Signs your ${name} home may need a panel upgrade include frequently tripping breakers, a panel rated at 100 amps or less, visible corrosion or damage, planning to add an EV charger or major appliance, or a panel that is more than 25 years old. Our licensed electricians provide free panel assessments for ${county} homeowners.`,
      },
    ],
    "Bay Area": [
      {
        question: `Do older ${name} homes need electrical upgrades?`,
        answer: `Many homes in ${name} and the Bay Area were built before modern electrical demands existed. Signs that an upgrade may be needed include frequently tripping breakers, flickering lights, a panel older than 25–30 years, or insufficient outlets for current needs. A licensed electrician can assess your system.`,
      },
      {
        question: `Can you add electrical for an ADU or in-law unit in ${name}?`,
        answer: `Yes. ADU and in-law unit construction in ${name} and ${county} typically requires a separate subpanel, dedicated circuits, and compliance with local building codes. Our licensed electricians handle the full electrical scope for ADU projects including permitting and inspection coordination.`,
      },
    ],
    "Central Valley": [
      {
        question: `Can extreme heat damage my electrical system in ${name}?`,
        answer: `Central Valley heat can stress electrical insulation, cause thermal expansion in connections, and overload panels running air conditioning at full capacity. Homes in ${name} should have electrical systems inspected before summer to ensure panels, wiring, and breakers are in safe working condition.`,
      },
      {
        question: `Should I get a dedicated circuit for my AC in ${name}?`,
        answer: `If your ${name} home's air conditioning shares circuits with other appliances, a dedicated HVAC circuit can improve performance and reduce the risk of tripped breakers during peak Central Valley heat. Our electricians can assess your panel capacity and install dedicated circuits as needed.`,
      },
    ],
    "Central Coast": [
      {
        question: `Does coastal air affect electrical systems in ${name}?`,
        answer: `Properties in ${name} and along the Central Coast may experience moisture and salt air exposure that can corrode outdoor electrical panels, outlets, and light fixtures over time. Regular inspections and weather-rated electrical components help protect your system.`,
      },
      {
        question: `What outdoor electrical work do you do in ${name}?`,
        answer: `We install and repair outdoor electrical systems for ${name} properties including landscape lighting, weatherproof outlets, security lighting, and outdoor kitchen circuits. All outdoor work in ${county} uses weather-rated components appropriate for the Central Coast environment.`,
      },
    ],
    "Northern California": [
      {
        question: `Should ${name} homeowners prepare for power shutoffs?`,
        answer: `Northern California communities like ${name} can be affected by public safety power shutoffs (PSPS) during wildfire season. A standby generator or portable generator with a transfer switch provides backup power during outages. Our electricians install generator systems sized for your home's needs.`,
      },
      {
        question: `Do you install generators in ${name}?`,
        answer: `Yes. We install whole-home standby generators and portable generator transfer switches for ${name} and ${county} homeowners. Generator sizing depends on your home's electrical needs — we assess your panel and recommend a system that covers essential circuits or your entire home.`,
      },
    ],
  };

  const regionSet = regionFaqs[region] || regionFaqs["Southern California"];
  const selectedRegionFaq = regionSet[simpleHash(name + "faq") % regionSet.length];

  return [...baseFaqs, selectedRegionFaq];
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

  const metaTitles = [
    (name: string, county: string) => `Electrician in ${name}, CA | Licensed Electrical Services`,
    (name: string, county: string) => `${name}, CA Electrician | Panel Upgrades & Electrical Repairs`,
    (name: string, county: string) => `Licensed Electrician in ${name}, California | ${county}`,
    (name: string, county: string) => `${name} Electrician Services | Residential & Commercial | CA`,
  ];

  const metaDescs = [
    (name: string, county: string) => `Licensed electricians serving ${name}, CA. Panel upgrades, EV charger installation, emergency electrical service, and residential repairs in ${county}.`,
    (name: string, county: string) => `Professional electrical services in ${name}, California. Licensed electricians serving ${county} with panel upgrades, rewiring, EV charger installations, and 24/7 emergency service.`,
    (name: string, county: string) => `Need an electrician in ${name}, CA? Licensed, insured electricians providing panel upgrades, EV charger installations, safety inspections, and emergency repairs throughout ${county}.`,
    (name: string, county: string) => `iElectrician serves ${name} and ${county} with licensed residential and commercial electrical services including panel upgrades, EV chargers, wiring, and emergency repairs.`,
  ];

  const generated: CityData[] = [];

  for (const raw of rawCities) {
    const slug = cityNameToSlug(raw.name, raw.slugOverride);
    if (handwrittenMap.has(slug)) continue;

    const region = countyToRegion[raw.county] || "Southern California";
    const countyFull = `${raw.county} County`;
    const titleIdx = simpleHash(raw.name + "title") % metaTitles.length;
    const descIdx = simpleHash(raw.name + "desc") % metaDescs.length;

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
      commonIssues: getCommonIssues(raw.name, countyFull, region, raw.population),
      neighborhoods: [],
      nearbyAreas: computeNearbyAreas(slug, raw.county, allByCounty),
      faqs: getCityFaqs(raw.name, countyFull, region, raw.population),
      metaTitle: metaTitles[titleIdx](raw.name, countyFull),
      metaDescription: metaDescs[descIdx](raw.name, countyFull),
    });
  }

  return [...handwrittenCities, ...generated];
}
