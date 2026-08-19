export const business = {
  name: "iElectrician",
  legalName: "iElectrician",
  domain: "https://ielectrician.org",
  phone: "(800) 555-0199",
  phoneRaw: "+18005550199",
  email: "info@ielectrician.org",
  tagline: "Licensed Electricians Across California",
  description:
    "Professional residential and commercial electrician services throughout California. Licensed, insured, and available 24/7 for emergency electrical work.",
  hours: "24/7 Emergency Service Available",
  primaryState: "California",
  primaryStateAbbr: "CA",
  ctaPrimary: "Call Now",
  ctaSecondary: "Request Service",
  ctaEmergency: "Emergency Service",
  social: {
    facebook: "",
    instagram: "",
    yelp: "",
    google: "",
  },
} as const;

export type Business = typeof business;
