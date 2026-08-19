export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  category: "emergency" | "residential" | "commercial" | "specialty";
  priority: number;
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  {
    slug: "emergency-electrician",
    name: "Emergency Electrician",
    shortName: "Emergency",
    description:
      "24/7 emergency electrical services for power outages, sparking outlets, burning smells, and dangerous electrical situations across California.",
    icon: "⚡",
    category: "emergency",
    priority: 1,
    metaTitle: "Emergency Electrician in California | 24/7 Electrical Service",
    metaDescription:
      "24/7 emergency electrician services across California. Fast response for power outages, sparking outlets, electrical fires, and dangerous wiring. Call now.",
  },
  {
    slug: "residential-electrician",
    name: "Residential Electrician",
    shortName: "Residential",
    description:
      "Complete home electrical services including wiring, repairs, upgrades, lighting installation, and electrical safety inspections.",
    icon: "🏠",
    category: "residential",
    priority: 2,
    metaTitle: "Residential Electrician in California | Home Electrical Services",
    metaDescription:
      "Licensed residential electricians serving California homes. Wiring, repairs, panel upgrades, lighting, and safety inspections. Request service today.",
  },
  {
    slug: "commercial-electrician",
    name: "Commercial Electrician",
    shortName: "Commercial",
    description:
      "Professional commercial electrical services for offices, retail, restaurants, warehouses, and industrial facilities throughout California.",
    icon: "🏢",
    category: "commercial",
    priority: 3,
    metaTitle:
      "Commercial Electrician in California | Business Electrical Services",
    metaDescription:
      "Licensed commercial electricians for California businesses. Office wiring, retail lighting, industrial electrical, code compliance, and tenant improvements.",
  },
  {
    slug: "electrical-panel-upgrade",
    name: "Electrical Panel Upgrade",
    shortName: "Panel Upgrade",
    description:
      "Upgrade your electrical panel to safely handle modern power demands. 100-amp to 200-amp upgrades, panel replacements, and code-compliant installations.",
    icon: "🔌",
    category: "residential",
    priority: 4,
    metaTitle:
      "Electrical Panel Upgrade in California | 200 Amp Panel Service",
    metaDescription:
      "Professional electrical panel upgrades across California. 200-amp upgrades, panel replacements, and code-compliant installations by licensed electricians.",
  },
  {
    slug: "ev-charger-installation",
    name: "EV Charger Installation",
    shortName: "EV Charger",
    description:
      "Level 2 EV charger installation for homes and businesses. Tesla, ChargePoint, and universal EVSE installation with dedicated circuits and panel upgrades.",
    icon: "🔋",
    category: "specialty",
    priority: 5,
    metaTitle:
      "EV Charger Installation in California | Home & Commercial EVSE",
    metaDescription:
      "Professional EV charger installation across California. Level 2 home and commercial charging stations. Tesla, ChargePoint, and universal EVSE. Licensed electricians.",
  },
  {
    slug: "electrical-repair",
    name: "Electrical Repair",
    shortName: "Repair",
    description:
      "Diagnose and repair electrical problems including faulty wiring, tripping breakers, flickering lights, dead outlets, and electrical shorts.",
    icon: "🔧",
    category: "residential",
    priority: 6,
    metaTitle: "Electrical Repair in California | Licensed Electricians",
    metaDescription:
      "Fast electrical repair services across California. Fix faulty wiring, tripping breakers, flickering lights, dead outlets, and more. Licensed and insured.",
  },
  {
    slug: "electrical-wiring",
    name: "Electrical Wiring",
    shortName: "Wiring",
    description:
      "New construction wiring, rewiring, and electrical wiring upgrades for homes and commercial buildings. Code-compliant installations.",
    icon: "🔌",
    category: "residential",
    priority: 7,
    metaTitle:
      "Electrical Wiring Services in California | New & Rewiring",
    metaDescription:
      "Professional electrical wiring services across California. New construction, rewiring, and upgrades. Code-compliant work by licensed electricians.",
  },
  {
    slug: "house-rewiring",
    name: "House Rewiring",
    shortName: "Rewiring",
    description:
      "Complete house rewiring services to replace outdated, damaged, or unsafe electrical wiring. Protect your home and meet current electrical codes.",
    icon: "🏠",
    category: "residential",
    priority: 8,
    metaTitle: "House Rewiring in California | Whole Home Electrical Rewire",
    metaDescription:
      "Professional house rewiring services across California. Replace outdated wiring, upgrade to modern standards, and protect your home. Licensed electricians.",
  },
  {
    slug: "lighting-installation",
    name: "Lighting Installation",
    shortName: "Lighting",
    description:
      "Interior and exterior lighting installation including recessed lighting, landscape lighting, LED upgrades, and decorative fixtures.",
    icon: "💡",
    category: "residential",
    priority: 9,
    metaTitle: "Lighting Installation in California | Indoor & Outdoor",
    metaDescription:
      "Professional lighting installation across California. Recessed lighting, landscape lights, LED upgrades, and decorative fixtures. Licensed electricians.",
  },
  {
    slug: "ceiling-fan-installation",
    name: "Ceiling Fan Installation",
    shortName: "Ceiling Fans",
    description:
      "Ceiling fan installation, replacement, and wiring services. New fan installation with proper electrical support and switch wiring.",
    icon: "💨",
    category: "residential",
    priority: 10,
    metaTitle: "Ceiling Fan Installation in California | Licensed Electricians",
    metaDescription:
      "Professional ceiling fan installation across California. New installations, replacements, and wiring by licensed electricians. Schedule service today.",
  },
  {
    slug: "generator-installation",
    name: "Generator Installation",
    shortName: "Generators",
    description:
      "Whole-home and commercial standby generator installation. Automatic transfer switches, fuel connections, and generator maintenance services.",
    icon: "⚙️",
    category: "specialty",
    priority: 11,
    metaTitle:
      "Generator Installation in California | Standby & Backup Power",
    metaDescription:
      "Professional generator installation across California. Whole-home and commercial standby generators with automatic transfer switches. Licensed electricians.",
  },
  {
    slug: "electrical-safety-inspection",
    name: "Electrical Safety Inspection",
    shortName: "Safety Inspection",
    description:
      "Comprehensive electrical safety inspections for homes, commercial properties, and real estate transactions. Identify hazards before they become emergencies.",
    icon: "🔍",
    category: "residential",
    priority: 12,
    metaTitle:
      "Electrical Safety Inspection in California | Home & Commercial",
    metaDescription:
      "Professional electrical safety inspections across California. Identify hazards, ensure code compliance, and protect your property. Licensed electricians.",
  },
  {
    slug: "circuit-breaker-repair",
    name: "Circuit Breaker Repair & Replacement",
    shortName: "Breaker Repair",
    description:
      "Diagnose and repair tripping circuit breakers, replace faulty breakers, and upgrade breaker panels for safe, reliable electrical distribution.",
    icon: "🔌",
    category: "residential",
    priority: 13,
    metaTitle:
      "Circuit Breaker Repair in California | Breaker Replacement Service",
    metaDescription:
      "Circuit breaker repair and replacement across California. Fix tripping breakers, replace faulty units, and upgrade panels. Licensed electricians.",
  },
  {
    slug: "outlet-repair",
    name: "Outlet & GFCI Installation",
    shortName: "Outlets & GFCI",
    description:
      "Outlet repair, replacement, and GFCI installation for kitchens, bathrooms, garages, and outdoor areas. Meet current electrical safety codes.",
    icon: "🔌",
    category: "residential",
    priority: 14,
    metaTitle:
      "Outlet Repair & GFCI Installation in California | Licensed Electricians",
    metaDescription:
      "Professional outlet repair and GFCI installation across California. Kitchen, bathroom, garage, and outdoor outlets. Code-compliant work by licensed electricians.",
  },
  {
    slug: "whole-house-surge-protection",
    name: "Whole House Surge Protection",
    shortName: "Surge Protection",
    description:
      "Protect your home electronics and appliances with whole-house surge protection installed at your electrical panel by licensed electricians.",
    icon: "🛡️",
    category: "specialty",
    priority: 15,
    metaTitle:
      "Whole House Surge Protection in California | Panel-Level Protection",
    metaDescription:
      "Whole-house surge protection installation across California. Protect electronics and appliances from power surges at the panel level. Licensed electricians.",
  },
  {
    slug: "smoke-detector-installation",
    name: "Smoke Detector Installation",
    shortName: "Smoke Detectors",
    description:
      "Hardwired smoke detector and carbon monoxide detector installation. Meet California building codes and protect your family with professional installation.",
    icon: "🔔",
    category: "residential",
    priority: 16,
    metaTitle:
      "Smoke Detector Installation in California | Hardwired & Code-Compliant",
    metaDescription:
      "Professional smoke detector installation across California. Hardwired smoke and CO detectors. California code-compliant installations by licensed electricians.",
  },
  {
    slug: "aluminum-wiring-replacement",
    name: "Aluminum Wiring Replacement",
    shortName: "Aluminum Wiring",
    description:
      "Replace hazardous aluminum wiring with safe copper wiring. Reduce fire risk and bring your home's electrical system up to current safety standards.",
    icon: "⚠️",
    category: "specialty",
    priority: 17,
    metaTitle:
      "Aluminum Wiring Replacement in California | Fire Safety Upgrade",
    metaDescription:
      "Professional aluminum wiring replacement across California. Replace hazardous aluminum with copper wiring. Reduce fire risk with licensed electricians.",
  },
  {
    slug: "electrical-troubleshooting",
    name: "Electrical Troubleshooting",
    shortName: "Troubleshooting",
    description:
      "Expert electrical troubleshooting to diagnose flickering lights, power loss, tripping breakers, buzzing sounds, and other electrical problems.",
    icon: "🔍",
    category: "residential",
    priority: 18,
    metaTitle:
      "Electrical Troubleshooting in California | Diagnose & Fix",
    metaDescription:
      "Expert electrical troubleshooting across California. Diagnose flickering lights, power loss, tripping breakers, and more. Licensed electricians.",
  },
  {
    slug: "recessed-lighting",
    name: "Recessed Lighting Installation",
    shortName: "Recessed Lighting",
    description:
      "Professional recessed lighting design and installation for kitchens, living rooms, bathrooms, and commercial spaces. LED recessed light retrofits available.",
    icon: "💡",
    category: "residential",
    priority: 19,
    metaTitle:
      "Recessed Lighting Installation in California | LED Retrofits",
    metaDescription:
      "Professional recessed lighting installation across California. Kitchen, living room, and bathroom can lights. LED retrofits available. Licensed electricians.",
  },
  {
    slug: "landscape-lighting",
    name: "Landscape Lighting",
    shortName: "Landscape Lighting",
    description:
      "Outdoor and landscape lighting design and installation. Path lights, accent lighting, security lights, and architectural illumination for California properties.",
    icon: "🌳",
    category: "residential",
    priority: 20,
    metaTitle:
      "Landscape Lighting Installation in California | Outdoor Lighting",
    metaDescription:
      "Professional landscape lighting installation across California. Path lights, accent lighting, security lights, and architectural illumination. Licensed electricians.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceData["category"]): ServiceData[] {
  return services.filter((s) => s.category === category).sort((a, b) => a.priority - b.priority);
}

export const serviceCategories = [
  { key: "emergency" as const, label: "Emergency Services" },
  { key: "residential" as const, label: "Residential Services" },
  { key: "commercial" as const, label: "Commercial Services" },
  { key: "specialty" as const, label: "Specialty Services" },
];
