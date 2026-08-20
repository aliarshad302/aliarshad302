# iElectrician — WordPress + Elementor Setup Guide

## Quick Overview

This guide walks you through setting up ielectrician.org on WordPress with Elementor. The package includes:

- **`ielectrician-theme/`** — Custom child theme (Hello Elementor child) with all brand CSS
- **`content/homepage-sections.html`** — All homepage sections ready for Elementor
- **`content/city-page-template.html`** — Template for all 14 city pages
- **`content/seo-metadata.json`** — SEO titles, meta descriptions, and focus keywords for all 50 pages

---

## Step 1: Hosting & WordPress Installation

### Recommended Hosting
- **SiteGround** or **Cloudways** (best for rank & rent — fast, affordable)
- **NameHero** or **A2 Hosting** (budget-friendly)
- Avoid EIG brands (Bluehost, HostGator) — slow for SEO

### Install WordPress
1. Point your domain `ielectrician.org` to your hosting
2. Install WordPress via your host's one-click installer
3. Set permalink structure: **Settings → Permalinks → Post name** (`/%postname%/`)

---

## Step 2: Install Required Plugins

### Essential (Free)
1. **Elementor** — Page builder (free version works, Pro recommended)
2. **RankMath SEO** — SEO plugin (free version is sufficient)
3. **WP Fastest Cache** or **LiteSpeed Cache** — Caching
4. **Redirection** — For 301 redirects if needed

### Recommended (Free)
5. **Schema Pro** or use RankMath's built-in schema
6. **Smush** — Image optimization
7. **UpdraftPlus** — Backups

### Optional (Paid)
8. **Elementor Pro** ($59/yr) — Theme builder, popups, form widgets. Highly recommended.

---

## Step 3: Install the iElectrician Theme

1. Install the **Hello Elementor** theme from WordPress dashboard:
   - Appearance → Themes → Add New → Search "Hello Elementor" → Install & Activate

2. Upload the **ielectrician-theme** child theme:
   - Zip the `ielectrician-theme/` folder into `ielectrician-theme.zip`
   - Appearance → Themes → Add New → Upload Theme → Upload the zip
   - Activate the child theme

3. Verify the child theme is active:
   - You should see "iElectrician" as the active theme
   - It inherits Hello Elementor and adds the brand CSS

---

## Step 4: Configure RankMath SEO

1. Run the RankMath Setup Wizard
2. Set your site type: **Local Business → Electrician**
3. Enter business info:
   - **Name:** iElectrician
   - **Phone:** (800) 555-0199 ← Replace with your real number
   - **Email:** info@ielectrician.org
4. Enable modules: **SEO Analyzer, Sitemap, Schema, Redirections**
5. Submit your sitemap: `https://ielectrician.org/sitemap_index.xml`

---

## Step 5: Create the Page Structure

### WordPress Settings
- **Settings → Reading → Homepage displays:** A static page
- Set **Homepage** to your homepage (create it first)

### Pages to Create (50 total)

Create each page in WordPress (Pages → Add New), then build with Elementor.

#### Main Pages (7)
| Page Title | Slug | Parent |
|---|---|---|
| Home | `/` (set as front page) | — |
| About iElectrician | `/about/` | — |
| Contact | `/contact/` | — |
| Services | `/services/` | — |
| Service Areas | `/service-areas/` | — |
| California Electrician | `/california-electrician/` | — |
| Resources | `/resources/` | — |

#### Service Pages (20)
Create each as a child page of "Services":

| Page Title | Slug |
|---|---|
| Emergency Electrician | `/services/emergency-electrician/` |
| Residential Electrician | `/services/residential-electrician/` |
| Commercial Electrician | `/services/commercial-electrician/` |
| Electrical Panel Upgrade | `/services/electrical-panel-upgrade/` |
| EV Charger Installation | `/services/ev-charger-installation/` |
| Electrical Repair | `/services/electrical-repair/` |
| Electrical Wiring | `/services/electrical-wiring/` |
| House Rewiring | `/services/house-rewiring/` |
| Lighting Installation | `/services/lighting-installation/` |
| Ceiling Fan Installation | `/services/ceiling-fan-installation/` |
| Generator Installation | `/services/generator-installation/` |
| Electrical Safety Inspection | `/services/electrical-safety-inspection/` |
| Circuit Breaker Repair | `/services/circuit-breaker-repair/` |
| Outlet & GFCI Installation | `/services/outlet-repair/` |
| Whole House Surge Protection | `/services/whole-house-surge-protection/` |
| Smoke Detector Installation | `/services/smoke-detector-installation/` |
| Aluminum Wiring Replacement | `/services/aluminum-wiring-replacement/` |
| Electrical Troubleshooting | `/services/electrical-troubleshooting/` |
| Recessed Lighting | `/services/recessed-lighting/` |
| Landscape Lighting | `/services/landscape-lighting/` |

#### City Pages (14)
For city pages to have the URL structure `/electrician/los-angeles-ca/`, create a parent page called "Electrician" with slug `electrician`, then create each city as a child page:

| Page Title | Slug |
|---|---|
| Electrician in Los Angeles, CA | `/electrician/los-angeles-ca/` |
| Electrician in San Diego, CA | `/electrician/san-diego-ca/` |
| Electrician in San Jose, CA | `/electrician/san-jose-ca/` |
| Electrician in San Francisco, CA | `/electrician/san-francisco-ca/` |
| Electrician in Sacramento, CA | `/electrician/sacramento-ca/` |
| Electrician in Long Beach, CA | `/electrician/long-beach-ca/` |
| Electrician in Anaheim, CA | `/electrician/anaheim-ca/` |
| Electrician in Irvine, CA | `/electrician/irvine-ca/` |
| Electrician in Fresno, CA | `/electrician/fresno-ca/` |
| Electrician in Oakland, CA | `/electrician/oakland-ca/` |
| Electrician in Bakersfield, CA | `/electrician/bakersfield-ca/` |
| Electrician in Riverside, CA | `/electrician/riverside-ca/` |
| Electrician in Stockton, CA | `/electrician/stockton-ca/` |
| Electrician in Santa Ana, CA | `/electrician/santa-ana-ca/` |

#### Blog Posts (4)
Create these as **Posts** (not Pages), with category "Resources":

| Post Title | Slug |
|---|---|
| Circuit Breaker Keeps Tripping? Here's What to Do | `circuit-breaker-keeps-tripping` |
| EV Charger Installation Cost in California | `ev-charger-installation-cost-california` |
| 7 Warning Signs You Need an Electrical Inspection | `warning-signs-electrical-inspection` |
| 200 Amp Panel Upgrade Guide for California Homes | `200-amp-panel-upgrade-guide` |

**For blog post URLs to be `/resources/slug/`:** In RankMath or Yoast, set the blog post permalink to include the category in the URL, OR create a custom post type "Resources" with that base slug.

---

## Step 6: Build Pages with Elementor

### Homepage
1. Edit the homepage with Elementor
2. Reference `content/homepage-sections.html` for each section
3. Use Elementor widgets:
   - **Heading** widget for titles
   - **Text Editor** for paragraphs
   - **Button** widget for CTAs
   - **Icon Box** for service cards
   - **Testimonial** widget (or custom HTML) for reviews
   - **Accordion** widget for FAQs
   - **Inner Section** for columns and grids

### Building Tips
- Set **section backgrounds** using the colors from the theme:
  - Navy: `#0f1b2d`
  - Gray: `#f8f9fb`
  - Accent/Gold: `#f5c518`
- Use **full-width** layout for sections
- Add **padding**: 80px top/bottom for desktop, 60px for mobile
- Keep **max content width** at 1200px

### City Pages
1. Build one city page fully in Elementor
2. **Save it as a template** (Right-click → Save as Template)
3. For each new city page, insert the template and update:
   - City name, county, region
   - Description and local info (from the cities config data)
   - Common issues list
   - Neighborhoods list
   - FAQs
   - Nearby areas

### Service Pages
Same approach — build one, save as template, replicate.

---

## Step 7: SEO Configuration

### For Each Page
1. Open the RankMath SEO panel (below the editor or in sidebar)
2. Set the **SEO Title** and **Meta Description** from `content/seo-metadata.json`
3. Set the **Focus Keyword** from the same file
4. Add **Schema markup**: Use RankMath's built-in schema
   - Homepage: **Local Business → Electrician**
   - Service pages: **Service**
   - City pages: **Local Business → Electrician** (with areaServed set to the city)
   - Blog posts: **Article**
   - FAQ sections: Enable **FAQ Schema** in RankMath for pages with accordion FAQs

### Sitemap
- RankMath auto-generates a sitemap at `/sitemap_index.xml`
- Submit to Google Search Console

---

## Step 8: Header & Footer (Elementor Pro)

If you have **Elementor Pro**, use the Theme Builder:

### Header
1. Templates → Theme Builder → Header → Add New
2. Build the header:
   - Logo (iElectrician text or logo image) — left aligned
   - Navigation menu (Services dropdown, Areas We Serve, Emergency Electrician, About, Resources, Contact)
   - CTA button "24/7 Call Now" — gold background (#f5c518), navy text
3. **Background:** Navy (#0f1b2d)
4. Set display condition: Entire Site

### Footer
1. Templates → Theme Builder → Footer → Add New
2. Build 4-column footer:
   - **Column 1:** Company info, phone, email
   - **Column 2:** Services links
   - **Column 3:** Service Areas links
   - **Column 4:** Company links (About, Contact, Resources)
3. Copyright row at bottom
4. **Background:** Navy (#0f1b2d)

If you **don't have Elementor Pro**, use the theme customizer or a free header/footer plugin like **Header Footer Elementor**.

---

## Step 9: LeadSmart Form Integration

On the Contact page, add an **HTML widget** in Elementor with:

```html
<iframe
  src="//leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=hmasknca1&funnel=3&category=10&step=1&buttons=btn-success"
  width="100%"
  height="600"
  frameborder="0"
  style="border:none;"
></iframe>
```

---

## Step 10: Google Search Console & Analytics

1. **Google Search Console:**
   - Verify your domain at search.google.com/search-console
   - Submit sitemap: `https://ielectrician.org/sitemap_index.xml`

2. **Google Analytics 4:**
   - Create a GA4 property at analytics.google.com
   - Add the tracking code via RankMath (RankMath → General Settings → Analytics) or use the **Site Kit by Google** plugin

3. **Google Business Profile:**
   - If you set up a GBP, link it to the website

---

## Brand Colors Quick Reference

| Color | Hex | Usage |
|---|---|---|
| Navy (primary) | `#0f1b2d` | Headers, footer, hero backgrounds, headings |
| Navy Light | `#1a2d47` | Hover states, secondary backgrounds |
| Gold/Accent | `#f5c518` | CTA buttons, highlights, stars, badges |
| Gold Hover | `#e6b800` | Button hover states |
| Gold Dark | `#c99a00` | Links, secondary accent |
| Gold Light | `#fef3c7` | Icon backgrounds, light accent areas |
| Gray Background | `#f8f9fb` | Alternating section backgrounds |
| Text Muted | `#6b7280` | Body text, descriptions |
| White | `#ffffff` | Card backgrounds, section backgrounds |

---

## Phone Number

**Current placeholder: (800) 555-0199**

When you have your real tracking number, update it in:
1. All page content (Elementor — use Find & Replace in the database, or update manually)
2. Header CTA button
3. Schema markup in `functions.php`
4. RankMath business settings

**Tip:** Use a plugin like **Better Search Replace** to find/replace the phone number across all pages at once.

---

## Maintenance Checklist

- [ ] Replace placeholder phone number with real number
- [ ] Add team photo to About page and/or homepage
- [ ] Set up Google Search Console and submit sitemap
- [ ] Set up Google Analytics
- [ ] Install SSL certificate (most hosts do this automatically)
- [ ] Test all pages on mobile
- [ ] Check all internal links work
- [ ] Set up caching plugin
- [ ] Set up automated backups
