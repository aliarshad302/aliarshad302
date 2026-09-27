import { cities } from "../src/config/cities";
import { services } from "../src/config/services";
import { getCityArticleSlugs } from "../src/config/city-articles-generator";
import * as fs from "fs";
import * as path from "path";

const BASE = "https://ielectrician.org";
const TODAY = new Date().toISOString().slice(0, 10);
const PUBLIC = path.resolve(import.meta.dirname, "../public");
const MAX_PER_SITEMAP = 2500;

interface SitemapEntry {
  loc: string;
  priority: string;
  changefreq: string;
}

function buildSitemapXml(entries: SitemapEntry[]): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const e of entries) {
    xml += `  <url>\n`;
    xml += `    <loc>${e.loc}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>${e.changefreq}</changefreq>\n`;
    xml += `    <priority>${e.priority}</priority>\n`;
    xml += `  </url>\n`;
  }
  xml += `</urlset>\n`;
  return xml;
}

function buildSitemapIndex(sitemapFiles: string[]): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const file of sitemapFiles) {
    xml += `  <sitemap>\n`;
    xml += `    <loc>${BASE}/${file}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `  </sitemap>\n`;
  }
  xml += `</sitemapindex>\n`;
  return xml;
}

// --- Static & service pages ---
const staticEntries: SitemapEntry[] = [];

const staticPages: [string, string][] = [
  ["/", "1.0"],
  ["/about/", "0.8"],
  ["/contact/", "0.8"],
  ["/services/", "0.8"],
  ["/service-areas/", "0.8"],
  ["/california-electrician/", "0.8"],
  ["/resources/", "0.8"],
];

for (const [p, priority] of staticPages) {
  staticEntries.push({ loc: `${BASE}${p}`, priority, changefreq: "monthly" });
}

for (const s of services) {
  staticEntries.push({ loc: `${BASE}/services/${s.slug}/`, priority: "0.8", changefreq: "monthly" });
}

const hardcodedArticleSlugs = [
  "circuit-breaker-keeps-tripping",
  "ev-charger-installation-cost-california",
  "warning-signs-electrical-inspection",
  "200-amp-panel-upgrade-guide",
  "how-much-does-an-electrician-make-in-los-angeles",
  "how-to-become-an-electrician-in-los-angeles",
  "what-is-a-residential-electrician",
  "what-does-an-electrician-do",
  "how-to-choose-a-residential-electrician",
  "how-much-does-a-residential-electrician-cost",
];

const cityArticleSlugs = getCityArticleSlugs();
for (const slug of [...hardcodedArticleSlugs, ...cityArticleSlugs]) {
  staticEntries.push({ loc: `${BASE}/resources/${slug}/`, priority: "0.6", changefreq: "monthly" });
}

// --- City pages (high priority) ---
const cityEntries: SitemapEntry[] = [];
for (const city of cities) {
  cityEntries.push({ loc: `${BASE}/electrician/${city.slug}/`, priority: "0.8", changefreq: "weekly" });
}

// --- City × service pages (split into chunks) ---
const cityServiceEntries: SitemapEntry[] = [];
for (const city of cities) {
  for (const s of services) {
    cityServiceEntries.push({
      loc: `${BASE}/electrician/${city.slug}/${s.slug}/`,
      priority: "0.7",
      changefreq: "weekly",
    });
  }
}

const cityServiceChunks: SitemapEntry[][] = [];
for (let i = 0; i < cityServiceEntries.length; i += MAX_PER_SITEMAP) {
  cityServiceChunks.push(cityServiceEntries.slice(i, i + MAX_PER_SITEMAP));
}

// --- Write files ---
const sitemapFiles: string[] = [];

fs.writeFileSync(path.join(PUBLIC, "sitemap-static.xml"), buildSitemapXml(staticEntries));
sitemapFiles.push("sitemap-static.xml");

fs.writeFileSync(path.join(PUBLIC, "sitemap-cities.xml"), buildSitemapXml(cityEntries));
sitemapFiles.push("sitemap-cities.xml");

for (let i = 0; i < cityServiceChunks.length; i++) {
  const filename = `sitemap-services-${i + 1}.xml`;
  fs.writeFileSync(path.join(PUBLIC, filename), buildSitemapXml(cityServiceChunks[i]));
  sitemapFiles.push(filename);
}

fs.writeFileSync(path.join(PUBLIC, "sitemap.xml"), buildSitemapIndex(sitemapFiles));

console.log(`Generated sitemap index with ${sitemapFiles.length} sitemaps:`);
console.log(`  sitemap-static.xml: ${staticEntries.length} URLs`);
console.log(`  sitemap-cities.xml: ${cityEntries.length} URLs`);
for (let i = 0; i < cityServiceChunks.length; i++) {
  console.log(`  sitemap-services-${i + 1}.xml: ${cityServiceChunks[i].length} URLs`);
}
console.log(`  Total: ${staticEntries.length + cityEntries.length + cityServiceEntries.length} URLs`);
