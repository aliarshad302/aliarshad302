import { cities } from "../src/config/cities";
import { services } from "../src/config/services";
import { getCityArticleSlugs } from "../src/config/city-articles-generator";

const BASE = "https://ielectrician.org";
const TODAY = new Date().toISOString().slice(0, 10);

interface SitemapEntry {
  loc: string;
  priority: string;
  changefreq: string;
}

const entries: SitemapEntry[] = [];

const staticPages: [string, string][] = [
  ["/", "1.0"],
  ["/about/", "0.8"],
  ["/contact/", "0.8"],
  ["/services/", "0.8"],
  ["/service-areas/", "0.8"],
  ["/california-electrician/", "0.8"],
  ["/resources/", "0.8"],
];

for (const [path, priority] of staticPages) {
  entries.push({ loc: `${BASE}${path}`, priority, changefreq: "monthly" });
}

const serviceSlugs = services.map((s) => s.slug);
for (const slug of serviceSlugs) {
  entries.push({ loc: `${BASE}/services/${slug}/`, priority: "0.8", changefreq: "monthly" });
}

for (const city of cities) {
  entries.push({ loc: `${BASE}/electrician/${city.slug}/`, priority: "0.8", changefreq: "weekly" });

  for (const slug of serviceSlugs) {
    entries.push({ loc: `${BASE}/electrician/${city.slug}/${slug}/`, priority: "0.7", changefreq: "weekly" });
  }
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
const allArticleSlugs = [...hardcodedArticleSlugs, ...cityArticleSlugs];

for (const slug of allArticleSlugs) {
  entries.push({ loc: `${BASE}/resources/${slug}/`, priority: "0.6", changefreq: "monthly" });
}

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

process.stdout.write(xml);
