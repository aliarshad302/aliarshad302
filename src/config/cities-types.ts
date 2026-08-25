export interface CityData {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  region: string;
  county: string;
  population: string;
  description: string;
  localInfo: string;
  commonIssues: string[];
  neighborhoods: string[];
  nearbyAreas: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}
