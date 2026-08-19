export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  highlight?: boolean;
}

export const mainNav: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Emergency Electrician", href: "/services/emergency-electrician" },
      { label: "Residential Electrician", href: "/services/residential-electrician" },
      { label: "Commercial Electrician", href: "/services/commercial-electrician" },
      { label: "Electrical Panel Upgrade", href: "/services/electrical-panel-upgrade" },
      { label: "EV Charger Installation", href: "/services/ev-charger-installation" },
      { label: "Electrical Repair", href: "/services/electrical-repair" },
      { label: "Lighting Installation", href: "/services/lighting-installation" },
      { label: "Generator Installation", href: "/services/generator-installation" },
      { label: "View All Services", href: "/services" },
    ],
  },
  { label: "Areas We Serve", href: "/service-areas" },
  {
    label: "Emergency Electrician",
    href: "/services/emergency-electrician",
    highlight: true,
  },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Emergency Electrician", href: "/services/emergency-electrician" },
    { label: "Residential Electrician", href: "/services/residential-electrician" },
    { label: "Commercial Electrician", href: "/services/commercial-electrician" },
    { label: "Panel Upgrades", href: "/services/electrical-panel-upgrade" },
    { label: "EV Charger Installation", href: "/services/ev-charger-installation" },
    { label: "Electrical Repair", href: "/services/electrical-repair" },
    { label: "Lighting Installation", href: "/services/lighting-installation" },
    { label: "All Services", href: "/services" },
  ],
  areas: [
    { label: "Los Angeles", href: "/electrician/los-angeles-ca" },
    { label: "San Diego", href: "/electrician/san-diego-ca" },
    { label: "San Jose", href: "/electrician/san-jose-ca" },
    { label: "San Francisco", href: "/electrician/san-francisco-ca" },
    { label: "Sacramento", href: "/electrician/sacramento-ca" },
    { label: "All Service Areas", href: "/service-areas" },
  ],
  company: [
    { label: "About iElectrician", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Resources", href: "/resources" },
    { label: "California Electrician", href: "/california-electrician" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
