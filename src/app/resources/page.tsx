import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { getCityArticleListings, getCityArticleSlugs } from "@/config/city-articles-generator";

export const metadata: Metadata = {
  title: "Electrical Resources & Guides | Homeowner Education",
  description:
    "Electrical safety guides, homeowner education, and expert resources from iElectrician. Learn about panel upgrades, EV chargers, wiring safety, and more.",
  alternates: { canonical: "/resources" },
};

const categories = [
  {
    name: "Electrical Safety",
    description:
      "Guides to help California homeowners understand electrical hazards, safety practices, and when to call a licensed electrician.",
    articles: [
      {
        title: "7 Warning Signs Your Home Needs an Electrical Inspection",
        description:
          "Flickering lights, tripping breakers, and warm outlets can indicate serious electrical problems. Learn the warning signs that mean it's time to call a licensed electrician.",
        slug: "warning-signs-electrical-inspection",
      },
      {
        title: "When to Call an Emergency Electrician",
        description:
          "Not every electrical problem is an emergency — but some require immediate professional attention. Here's how to know the difference and what to do while waiting.",
        slug: "when-to-call-emergency-electrician",
      },
      {
        title: "Understanding GFCI Outlets: Where They're Required and Why",
        description:
          "GFCI outlets protect against electrical shock in kitchens, bathrooms, garages, and outdoor areas. Learn where California code requires them and how they work.",
        slug: "understanding-gfci-outlets",
      },
    ],
  },
  {
    name: "Electrical Panels",
    description:
      "Everything California homeowners need to know about electrical panels, upgrades, and when your home needs a 200-amp service.",
    articles: [
      {
        title: "How Often Should an Electrical Panel Be Inspected?",
        description:
          "Regular panel inspections help identify potential hazards before they become emergencies. Learn the recommended inspection schedule for California homes.",
        slug: "electrical-panel-inspection-frequency",
      },
      {
        title: "Do You Need a 200-Amp Panel Upgrade?",
        description:
          "Many California homes still have 100-amp panels that may not support modern electrical demands. Learn whether a 200-amp upgrade is right for your home.",
        slug: "200-amp-panel-upgrade-guide",
      },
      {
        title: "Federal Pacific and Zinsco Panels: What You Need to Know",
        description:
          "These panel brands have documented safety concerns. If your California home has one, here's what a licensed electrician recommends.",
        slug: "federal-pacific-zinsco-panels",
      },
    ],
  },
  {
    name: "EV Charging",
    description:
      "Guides for California homeowners considering home EV charger installation, including costs, requirements, and what to expect.",
    articles: [
      {
        title: "How Much Does an EV Charger Installation Cost in California?",
        description:
          "A complete guide to home EV charger installation costs in California, including charger types, electrical requirements, permitting, and potential rebates.",
        slug: "ev-charger-installation-cost-california",
      },
      {
        title: "Level 1 vs. Level 2 EV Chargers: Which Is Right for You?",
        description:
          "Understanding the difference between Level 1 and Level 2 EV charging, charging speeds, installation requirements, and which option works best for your needs.",
        slug: "level-1-vs-level-2-ev-chargers",
      },
    ],
  },
  {
    name: "Home Electrical",
    description:
      "Practical guides about home electrical systems, wiring, and common issues California homeowners encounter.",
    articles: [
      {
        title: "Why Does My Circuit Breaker Keep Tripping?",
        description:
          "A tripping circuit breaker is telling you something. Learn the most common causes — from overloaded circuits to short circuits — and when you need an electrician.",
        slug: "circuit-breaker-keeps-tripping",
      },
      {
        title: "What Are the Signs of Bad Electrical Wiring?",
        description:
          "Outdated or damaged wiring is a leading cause of electrical fires. Learn the signs that your California home's wiring may need professional attention.",
        slug: "signs-of-bad-electrical-wiring",
      },
      {
        title: "Aluminum Wiring in California Homes: Is It Dangerous?",
        description:
          "Many homes built in the 1960s and 1970s have aluminum wiring that can pose fire risks. Learn what to watch for and what a licensed electrician recommends.",
        slug: "aluminum-wiring-california-homes",
      },
    ],
  },
  {
    name: "Electrician Careers",
    description:
      "Guides about electrician salaries, career paths, licensing requirements, and how to get started in the trade in California.",
    articles: [
      {
        title: "How Much Does an Electrician Make in Los Angeles?",
        description:
          "Electricians in Los Angeles earn $55,000 to $100,000+ per year depending on experience, license type, and specialty. Full salary breakdown by level.",
        slug: "how-much-does-an-electrician-make-in-los-angeles",
      },
      {
        title: "How to Become an Electrician in Los Angeles",
        description:
          "Step-by-step guide to becoming a licensed electrician in Los Angeles: apprenticeship programs, certification, licensing, and career paths.",
        slug: "how-to-become-an-electrician-in-los-angeles",
      },
      ...getCityArticleListings().flatMap((city) => [
        {
          title: city.salaryTitle,
          description: city.salaryDescription,
          slug: city.salarySlug,
        },
        {
          title: city.careerTitle,
          description: city.careerDescription,
          slug: city.careerSlug,
        },
      ]),
      {
        title: "What Is a Residential Electrician?",
        description:
          "A residential electrician specializes in home electrical systems. Learn what they do, how they differ from commercial electricians, and when to call one.",
        slug: "what-is-a-residential-electrician",
      },
      {
        title: "What Does an Electrician Do?",
        description:
          "Electricians install, repair, and maintain electrical systems. Learn about their daily work, types of electricians, tools they use, and why they matter.",
        slug: "what-does-an-electrician-do",
      },
    ],
  },
  {
    name: "Hiring an Electrician",
    description:
      "Guides to help California homeowners find, evaluate, and hire the right licensed electrician for their project.",
    articles: [
      {
        title: "How to Choose a Residential Electrician",
        description:
          "A 7-point checklist for choosing the right residential electrician: license, insurance, reviews, estimates, permits, warranties, and communication.",
        slug: "how-to-choose-a-residential-electrician",
      },
      {
        title: "How Much Does a Residential Electrician Cost?",
        description:
          "Residential electricians in California charge $75-$150/hour. Complete pricing guide for outlets, panels, wiring, lighting, and specialty services.",
        slug: "how-much-does-a-residential-electrician-cost",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <div className="bg-[var(--gray-bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Resources", href: "/resources" }]} />
        </div>
      </div>

      <section className="bg-[var(--navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Electrical Resources & Guides
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            Expert guides and educational resources to help California
            homeowners understand their electrical systems, make informed
            decisions, and know when to call a licensed electrician.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category.name}>
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-2">
                  {category.name}
                </h2>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.articles.map((article) => {
                    const hasPage = [
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
                      ...getCityArticleSlugs(),
                    ].includes(article.slug);
                    const inner = (
                      <>
                        <div className="text-xs font-medium text-[var(--accent-dark)] uppercase tracking-wide mb-3">
                          {category.name}
                        </div>
                        <h3 className={`text-base font-semibold text-[var(--navy)] mb-2 leading-snug ${hasPage ? "group-hover:text-[var(--accent-dark)] transition-colors" : ""}`}>
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                          {article.description}
                        </p>
                        {hasPage ? (
                          <span className="text-sm font-medium text-[var(--accent-dark)]">
                            Read article →
                          </span>
                        ) : (
                          <span className="text-sm text-gray-400 italic">
                            Coming soon
                          </span>
                        )}
                      </>
                    );
                    return hasPage ? (
                      <Link
                        key={article.slug}
                        href={`/resources/${article.slug}`}
                        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm group transition-all hover:shadow-md hover:border-[var(--accent)]/30"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div
                        key={article.slug}
                        className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                      >
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Have an Electrical Question?"
        description="Our licensed electricians are happy to answer questions about your home or business electrical needs."
        variant="light"
      />
    </>
  );
}
