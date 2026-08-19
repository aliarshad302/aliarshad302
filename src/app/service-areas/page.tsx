import type { Metadata } from "next";
import Link from "next/link";
import { cities, regions, getCitiesByRegion } from "@/config/cities";
import { business } from "@/config/business";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Service Areas | Electricians Across California",
  description:
    "Licensed electricians serving cities throughout California. Find electrician services in Los Angeles, San Diego, San Jose, San Francisco, Sacramento, Oakland, and more.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <div className="bg-[var(--gray-bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ name: "Service Areas", href: "/service-areas" }]}
          />
        </div>
      </div>

      <section className="bg-[var(--navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Electrician Service Areas in California
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            iElectrician provides licensed electrician services throughout
            California. We serve major cities, suburban communities, and
            surrounding areas across every region of the state.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {regions.map((region) => {
              const regionCities = getCitiesByRegion(region.name);
              if (regionCities.length === 0) return null;
              return (
                <div key={region.slug}>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-[var(--navy)] mb-2">
                      {region.name}
                    </h2>
                    <p className="text-gray-600">{region.description}</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {regionCities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/electrician/${city.slug}`}
                        className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-[var(--accent)]/30"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--navy)]/5 text-[var(--navy)] group-hover:bg-[var(--accent)]/10 transition-colors">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-[var(--navy)] group-hover:text-[var(--accent-dark)] transition-colors">
                            {city.name}, {city.stateAbbr}
                          </h3>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {city.county}
                          </p>
                          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                            Licensed electricians serving {city.name} and
                            surrounding {city.county} communities.
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 rounded-xl bg-[var(--gray-bg)] border border-gray-200 p-8 text-center">
            <h2 className="text-xl font-bold text-[var(--navy)] mb-3">
              Don&apos;t See Your City?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We serve many additional communities throughout California.
              Contact us to confirm service availability in your area.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--navy-light)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
