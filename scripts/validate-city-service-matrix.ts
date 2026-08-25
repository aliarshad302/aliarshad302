import { cities } from "../src/config/cities";
import { services } from "../src/config/services";
import { getCityArticleSlugs } from "../src/config/city-articles-generator";
import * as fs from "fs";
import * as path from "path";

let errors = 0;
let warnings = 0;

function error(msg: string) { console.error(`  ERROR: ${msg}`); errors++; }
function warn(msg: string) { console.warn(`  WARN:  ${msg}`); warnings++; }

console.log("=== City × Service Matrix Validation ===\n");

console.log(`Cities detected:   ${cities.length}`);
console.log(`Services detected: ${services.length}`);
console.log(`City pages:        ${cities.length}`);
console.log(`City×Service pages: ${cities.length * services.length}`);
console.log(`Total expected:    ${cities.length + cities.length * services.length}\n`);

console.log("--- Checking city data integrity ---");
const slugSet = new Set<string>();
for (const city of cities) {
  if (slugSet.has(city.slug)) error(`Duplicate city slug: ${city.slug}`);
  slugSet.add(city.slug);
  if (!city.slug.endsWith("-ca")) error(`City slug does not end with -ca: ${city.slug}`);
  if (!city.name) error(`City missing name: ${city.slug}`);
  if (!city.county) error(`City missing county: ${city.slug}`);
  if (!city.region) error(`City missing region: ${city.slug}`);
  if (!city.population) error(`City missing population: ${city.slug}`);
  if (!city.description) error(`City missing description: ${city.slug}`);
  if (!city.metaTitle) error(`City missing metaTitle: ${city.slug}`);
  if (!city.metaDescription) error(`City missing metaDescription: ${city.slug}`);
  if (!city.faqs || city.faqs.length === 0) warn(`City has no FAQs: ${city.slug}`);
  if (!city.commonIssues || city.commonIssues.length === 0) warn(`City has no commonIssues: ${city.slug}`);
}

console.log("--- Checking service data integrity ---");
const serviceSlugs = new Set<string>();
for (const svc of services) {
  if (serviceSlugs.has(svc.slug)) error(`Duplicate service slug: ${svc.slug}`);
  serviceSlugs.add(svc.slug);
  if (!svc.name) error(`Service missing name: ${svc.slug}`);
  if (!svc.metaTitle) error(`Service missing metaTitle: ${svc.slug}`);
}

console.log("--- Checking sitemap coverage ---");
const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, "utf-8");
  let sitemapMissing = 0;

  for (const city of cities) {
    const cityUrl = `https://ielectrician.org/electrician/${city.slug}/`;
    if (!sitemap.includes(cityUrl)) {
      error(`Sitemap missing city URL: ${cityUrl}`);
      sitemapMissing++;
    }
    for (const svc of services) {
      const svcUrl = `https://ielectrician.org/electrician/${city.slug}/${svc.slug}/`;
      if (!sitemap.includes(svcUrl)) {
        if (sitemapMissing < 20) error(`Sitemap missing city×service URL: ${svcUrl}`);
        sitemapMissing++;
      }
    }
  }
  if (sitemapMissing > 20) error(`... and ${sitemapMissing - 20} more sitemap URLs missing`);
  const urlCount = (sitemap.match(/<url>/g) || []).length;
  console.log(`  Sitemap URLs found: ${urlCount}`);
} else {
  error("public/sitemap.xml not found");
}

console.log("--- Checking region distribution ---");
const regionCounts: Record<string, number> = {};
for (const city of cities) {
  regionCounts[city.region] = (regionCounts[city.region] || 0) + 1;
}
for (const [region, count] of Object.entries(regionCounts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${region}: ${count} cities`);
}

console.log("--- Checking blog articles ---");
const articleSlugs = getCityArticleSlugs();
console.log(`  City blog articles: ${articleSlugs.length}`);

console.log("--- Sample routes ---");
const sampleCities = ["los-angeles-ca", "san-diego-ca", "chula-vista-ca", "fremont-ca", "redding-ca"];
const sampleService = "electrical-panel-upgrade";
for (const slug of sampleCities) {
  const city = cities.find(c => c.slug === slug);
  if (city) {
    console.log(`  /electrician/${slug}/ => ${city.name} (${city.county})`);
    console.log(`  /electrician/${slug}/${sampleService}/ => ${city.name} × Electrical Panel Upgrade`);
  } else {
    error(`Sample city not found: ${slug}`);
  }
}

console.log(`\n=== Validation Complete ===`);
console.log(`Errors:   ${errors}`);
console.log(`Warnings: ${warnings}`);
process.exit(errors > 0 ? 1 : 0);
