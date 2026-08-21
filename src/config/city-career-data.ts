export interface CityCareerData {
  citySlug: string;
  ibewLocal: string;
  ibewLocalNumber: string;
  salaryApprentice: string;
  salaryJourneyman: string;
  salaryMaster: string;
  salaryAverage: string;
  hourlyRange: string;
  costOfLiving: "high" | "very-high" | "moderate" | "moderate-high";
  apprenticeshipPrograms: string[];
  demandDrivers: string[];
  comparisonNote: string;
}

export const cityCareerData: Record<string, CityCareerData> = {
  "los-angeles-ca": {
    citySlug: "los-angeles-ca",
    ibewLocal: "IBEW Local 11",
    ibewLocalNumber: "11",
    salaryApprentice: "$35,000 - $50,000",
    salaryJourneyman: "$60,000 - $90,000",
    salaryMaster: "$80,000 - $120,000+",
    salaryAverage: "$75,000",
    hourlyRange: "$30 - $50+",
    costOfLiving: "very-high",
    apprenticeshipPrograms: [
      "IBEW Local 11 / LATTC Electrical Training Institute",
      "IEC Southern California",
      "ABC SoCal (Associated Builders and Contractors)",
    ],
    demandDrivers: [
      "EV charger installations driven by California electrification mandates",
      "Solar panel and battery storage systems",
      "Aging housing stock (many homes built before 1980) requiring upgrades",
      "Commercial and residential construction activity",
      "Entertainment industry infrastructure (studios, venues)",
    ],
    comparisonNote:
      "Los Angeles electrician salaries are among the highest in California, driven by the high cost of living, strong construction activity, and demand for skilled trades.",
  },
  "san-diego-ca": {
    citySlug: "san-diego-ca",
    ibewLocal: "IBEW Local 569",
    ibewLocalNumber: "569",
    salaryApprentice: "$33,000 - $48,000",
    salaryJourneyman: "$58,000 - $85,000",
    salaryMaster: "$78,000 - $115,000+",
    salaryAverage: "$72,000",
    hourlyRange: "$28 - $48",
    costOfLiving: "very-high",
    apprenticeshipPrograms: [
      "IBEW Local 569 / San Diego Electrical Training Center",
      "IEC San Diego Chapter",
      "ABC San Diego",
    ],
    demandDrivers: [
      "Military base electrical infrastructure upgrades",
      "Biotech and research facility construction",
      "Coastal home rewiring and corrosion-related repairs",
      "EV charger and solar installation demand",
      "Tourism infrastructure and hotel renovations",
    ],
    comparisonNote:
      "San Diego electrician wages are comparable to Los Angeles, with strong demand driven by military installations, biotech, and coastal property maintenance.",
  },
  "san-jose-ca": {
    citySlug: "san-jose-ca",
    ibewLocal: "IBEW Local 332",
    ibewLocalNumber: "332",
    salaryApprentice: "$38,000 - $55,000",
    salaryJourneyman: "$65,000 - $100,000",
    salaryMaster: "$90,000 - $130,000+",
    salaryAverage: "$82,000",
    hourlyRange: "$33 - $55",
    costOfLiving: "very-high",
    apprenticeshipPrograms: [
      "IBEW Local 332 / San Jose Electrical JATC",
      "IEC Northern California",
      "ABC NorCal",
    ],
    demandDrivers: [
      "Data center construction and maintenance (Silicon Valley)",
      "Tech campus electrical infrastructure",
      "Smart home and automation installations",
      "EV charger demand (highest EV adoption rates in the state)",
      "High-density residential development",
    ],
    comparisonNote:
      "San Jose and Silicon Valley offer some of the highest electrician wages in California, fueled by tech industry data centers, campus projects, and the nation's highest EV adoption rates.",
  },
  "san-francisco-ca": {
    citySlug: "san-francisco-ca",
    ibewLocal: "IBEW Local 6",
    ibewLocalNumber: "6",
    salaryApprentice: "$40,000 - $58,000",
    salaryJourneyman: "$70,000 - $105,000",
    salaryMaster: "$95,000 - $140,000+",
    salaryAverage: "$88,000",
    hourlyRange: "$35 - $58",
    costOfLiving: "very-high",
    apprenticeshipPrograms: [
      "IBEW Local 6 / San Francisco Electrical JATC",
      "City College of San Francisco Electrical Technology Program",
      "IEC Northern California",
    ],
    demandDrivers: [
      "Victorian and Edwardian home rewiring (homes built 1890s-1920s)",
      "Seismic retrofit electrical upgrades",
      "Commercial tenant improvements in high-rises",
      "Building electrification ordinances",
      "Dense urban construction with complex permitting",
    ],
    comparisonNote:
      "San Francisco offers the highest electrician wages in California. The combination of extreme cost of living, complex Victorian-era rewiring projects, and strict building codes drives premium compensation.",
  },
  "sacramento-ca": {
    citySlug: "sacramento-ca",
    ibewLocal: "IBEW Local 340",
    ibewLocalNumber: "340",
    salaryApprentice: "$30,000 - $44,000",
    salaryJourneyman: "$55,000 - $80,000",
    salaryMaster: "$72,000 - $110,000+",
    salaryAverage: "$68,000",
    hourlyRange: "$27 - $44",
    costOfLiving: "moderate-high",
    apprenticeshipPrograms: [
      "IBEW Local 340 / Sacramento Electrical JATC",
      "Sacramento City College Electrical Technology",
      "IEC Northern California",
    ],
    demandDrivers: [
      "State government building maintenance and renovations",
      "Rapid suburban residential development",
      "Extreme heat driving HVAC circuit demand",
      "EV charger installations",
      "Warehouse and logistics facility construction",
    ],
    comparisonNote:
      "Sacramento offers lower wages than the Bay Area but with a significantly lower cost of living, making the effective purchasing power comparable. Rapid growth drives steady demand.",
  },
  "long-beach-ca": {
    citySlug: "long-beach-ca",
    ibewLocal: "IBEW Local 11",
    ibewLocalNumber: "11",
    salaryApprentice: "$34,000 - $48,000",
    salaryJourneyman: "$58,000 - $88,000",
    salaryMaster: "$78,000 - $118,000+",
    salaryAverage: "$73,000",
    hourlyRange: "$29 - $48",
    costOfLiving: "very-high",
    apprenticeshipPrograms: [
      "IBEW Local 11 / LATTC Electrical Training Institute",
      "Long Beach City College Electrical Technology",
      "IEC Southern California",
    ],
    demandDrivers: [
      "Port of Long Beach industrial electrical work",
      "Coastal property electrical upgrades and corrosion repairs",
      "Aerospace industry (Boeing, Virgin Orbit facilities)",
      "Oil refinery and energy sector maintenance",
      "Residential and commercial development",
    ],
    comparisonNote:
      "Long Beach wages mirror the greater Los Angeles market, with additional opportunities in port, aerospace, and energy industries that value specialized electrical skills.",
  },
  "anaheim-ca": {
    citySlug: "anaheim-ca",
    ibewLocal: "IBEW Local 441",
    ibewLocalNumber: "441",
    salaryApprentice: "$33,000 - $47,000",
    salaryJourneyman: "$57,000 - $85,000",
    salaryMaster: "$75,000 - $115,000+",
    salaryAverage: "$71,000",
    hourlyRange: "$28 - $47",
    costOfLiving: "high",
    apprenticeshipPrograms: [
      "IBEW Local 441 / Orange County Electrical JATC",
      "North Orange County Community College District",
      "IEC Southern California",
    ],
    demandDrivers: [
      "Disneyland Resort and convention center electrical maintenance",
      "Tourism and hospitality industry infrastructure",
      "Orange County commercial development",
      "Residential growth in surrounding communities",
      "Stadium and entertainment venue projects",
    ],
    comparisonNote:
      "Anaheim and Orange County offer strong electrician wages with steady demand from the tourism and hospitality industry, plus ongoing residential and commercial development.",
  },
  "irvine-ca": {
    citySlug: "irvine-ca",
    ibewLocal: "IBEW Local 441",
    ibewLocalNumber: "441",
    salaryApprentice: "$34,000 - $50,000",
    salaryJourneyman: "$60,000 - $90,000",
    salaryMaster: "$80,000 - $120,000+",
    salaryAverage: "$75,000",
    hourlyRange: "$30 - $50",
    costOfLiving: "very-high",
    apprenticeshipPrograms: [
      "IBEW Local 441 / Orange County Electrical JATC",
      "Irvine Valley College",
      "IEC Southern California",
    ],
    demandDrivers: [
      "Tech company campus construction and maintenance",
      "Master-planned community new construction",
      "Smart home and automation installations (affluent homeowners)",
      "EV charger installations (high EV adoption in Irvine)",
      "Commercial office and medical facility buildouts",
    ],
    comparisonNote:
      "Irvine offers above-average wages driven by tech campus construction, affluent homeowner demand for smart home and EV installations, and steady new residential development.",
  },
  "fresno-ca": {
    citySlug: "fresno-ca",
    ibewLocal: "IBEW Local 100",
    ibewLocalNumber: "100",
    salaryApprentice: "$28,000 - $40,000",
    salaryJourneyman: "$50,000 - $72,000",
    salaryMaster: "$65,000 - $95,000+",
    salaryAverage: "$61,000",
    hourlyRange: "$24 - $40",
    costOfLiving: "moderate",
    apprenticeshipPrograms: [
      "IBEW Local 100 / Fresno Electrical JATC",
      "Fresno City College Electrical Technology",
      "IEC Central California",
    ],
    demandDrivers: [
      "Agricultural processing facility electrical systems",
      "Extreme heat driving HVAC and cooling circuit demand",
      "Affordable housing construction boom",
      "Warehouse and distribution center development",
      "Solar farm and renewable energy installations",
    ],
    comparisonNote:
      "Fresno wages are lower than coastal cities but the significantly lower cost of living means electricians retain more of their earnings. Agricultural and warehouse construction provide steady work.",
  },
  "oakland-ca": {
    citySlug: "oakland-ca",
    ibewLocal: "IBEW Local 595",
    ibewLocalNumber: "595",
    salaryApprentice: "$37,000 - $54,000",
    salaryJourneyman: "$64,000 - $98,000",
    salaryMaster: "$85,000 - $130,000+",
    salaryAverage: "$80,000",
    hourlyRange: "$32 - $54",
    costOfLiving: "very-high",
    apprenticeshipPrograms: [
      "IBEW Local 595 / Alameda County Electrical JATC",
      "Laney College Electrical Technology",
      "IEC Northern California",
    ],
    demandDrivers: [
      "Victorian and Craftsman home rewiring projects",
      "Port of Oakland industrial electrical work",
      "Commercial development and mixed-use construction",
      "Building electrification mandates (Oakland's climate action plan)",
      "BART and transit infrastructure electrical maintenance",
    ],
    comparisonNote:
      "Oakland and the East Bay offer wages close to San Francisco levels, with demand driven by older housing stock requiring rewiring, port operations, and aggressive building electrification policies.",
  },
  "bakersfield-ca": {
    citySlug: "bakersfield-ca",
    ibewLocal: "IBEW Local 428",
    ibewLocalNumber: "428",
    salaryApprentice: "$27,000 - $38,000",
    salaryJourneyman: "$48,000 - $68,000",
    salaryMaster: "$62,000 - $90,000+",
    salaryAverage: "$58,000",
    hourlyRange: "$23 - $38",
    costOfLiving: "moderate",
    apprenticeshipPrograms: [
      "IBEW Local 428 / Kern County Electrical JATC",
      "Bakersfield College Industrial Electricity",
      "ABC Central California",
    ],
    demandDrivers: [
      "Oil and energy industry electrical maintenance",
      "Agricultural processing and cold storage facilities",
      "Affordable housing construction growth",
      "Extreme heat driving residential HVAC circuit demand",
      "Solar and wind farm installations in Kern County",
    ],
    comparisonNote:
      "Bakersfield offers lower nominal wages but the lowest cost of living among California's major cities, providing strong purchasing power. Energy industry work adds specialized, higher-paying opportunities.",
  },
  "riverside-ca": {
    citySlug: "riverside-ca",
    ibewLocal: "IBEW Local 440",
    ibewLocalNumber: "440",
    salaryApprentice: "$30,000 - $44,000",
    salaryJourneyman: "$54,000 - $80,000",
    salaryMaster: "$72,000 - $110,000+",
    salaryAverage: "$67,000",
    hourlyRange: "$27 - $44",
    costOfLiving: "moderate-high",
    apprenticeshipPrograms: [
      "IBEW Local 440 / Riverside Electrical JATC",
      "Riverside City College Electrical Technology",
      "IEC Southern California - Inland Empire",
    ],
    demandDrivers: [
      "Massive warehouse and logistics center construction (Inland Empire)",
      "Rapid residential subdivision development",
      "University of California Riverside campus expansion",
      "Extreme heat driving residential electrical demand",
      "EV charger installations for commuters",
    ],
    comparisonNote:
      "Riverside and the Inland Empire offer moderate wages with a lower cost of living than coastal cities. The explosion of warehouse construction creates strong demand for commercial electricians.",
  },
  "stockton-ca": {
    citySlug: "stockton-ca",
    ibewLocal: "IBEW Local 591",
    ibewLocalNumber: "591",
    salaryApprentice: "$28,000 - $40,000",
    salaryJourneyman: "$50,000 - $72,000",
    salaryMaster: "$65,000 - $95,000+",
    salaryAverage: "$62,000",
    hourlyRange: "$25 - $40",
    costOfLiving: "moderate",
    apprenticeshipPrograms: [
      "IBEW Local 591 / San Joaquin Electrical JATC",
      "San Joaquin Delta College Electrical Technology",
      "ABC Northern California",
    ],
    demandDrivers: [
      "Warehouse and distribution center construction along I-5 corridor",
      "Port of Stockton industrial electrical work",
      "Affordable housing development attracting Bay Area transplants",
      "Agricultural processing electrical systems",
      "Infrastructure upgrades for growing population",
    ],
    comparisonNote:
      "Stockton offers moderate wages with an affordable cost of living. Growing warehouse construction and Bay Area transplants creating housing demand are driving increased need for electricians.",
  },
  "santa-ana-ca": {
    citySlug: "santa-ana-ca",
    ibewLocal: "IBEW Local 441",
    ibewLocalNumber: "441",
    salaryApprentice: "$33,000 - $47,000",
    salaryJourneyman: "$57,000 - $85,000",
    salaryMaster: "$75,000 - $115,000+",
    salaryAverage: "$71,000",
    hourlyRange: "$28 - $47",
    costOfLiving: "high",
    apprenticeshipPrograms: [
      "IBEW Local 441 / Orange County Electrical JATC",
      "Santa Ana College Electrical Technology",
      "IEC Southern California",
    ],
    demandDrivers: [
      "Orange County government building maintenance (county seat)",
      "Commercial and retail renovation projects",
      "Multi-family residential construction",
      "Older housing stock requiring panel upgrades and rewiring",
      "Small business and restaurant electrical needs",
    ],
    comparisonNote:
      "Santa Ana wages reflect the broader Orange County market, with steady demand from government buildings, commercial renovations, and residential upgrades in one of OC's most densely populated cities.",
  },
};

export function getCityCareerData(citySlug: string): CityCareerData | undefined {
  return cityCareerData[citySlug];
}
