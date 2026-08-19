import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/config/cities";
import { services } from "@/config/services";
import { business } from "@/config/business";
import { getPhoneLink, generateFAQSchema } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `/electrician/${city.slug}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const topServices = services.slice(0, 8);
  const residentialServices = services.filter(
    (s) => s.category === "residential"
  ).slice(0, 6);
  const emergencyServices = services.filter(
    (s) => s.category === "emergency"
  );

  return (
    <>
      {city.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(city.faqs)),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Electrician",
            name: `${business.name} - ${city.name}`,
            url: `${business.domain}/electrician/${city.slug}`,
            telephone: business.phone,
            areaServed: {
              "@type": "City",
              name: city.name,
              containedInPlace: {
                "@type": "State",
                name: city.state,
              },
            },
          }),
        }}
      />

      <div className="bg-[var(--gray-bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Service Areas", href: "/service-areas" },
              {
                name: `${city.name}, ${city.stateAbbr}`,
                href: `/electrician/${city.slug}`,
              },
            ]}
          />
        </div>
      </div>

      {/* City Hero */}
      <section className="bg-[var(--navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[var(--accent)] mb-4">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {city.county} · {city.region}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Electrician in {city.name}, {city.stateAbbr}
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {city.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getPhoneLink()}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-3.5 text-base font-semibold text-[var(--navy)] transition-all hover:bg-[var(--accent-hover)] shadow-md"
                data-event={`city-${city.slug}-call`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {business.ctaPrimary}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                {business.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              {/* Local Electrical Info */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">
                  Electrical Services in {city.name}
                </h2>
                <p className="text-gray-600 leading-relaxed">{city.localInfo}</p>
              </div>

              {/* Common Issues */}
              {city.commonIssues.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                    Common Electrical Issues in {city.name}
                  </h2>
                  <ul className="space-y-3">
                    {city.commonIssues.map((issue) => (
                      <li key={issue} className="flex items-start gap-3">
                        <svg className="h-5 w-5 shrink-0 text-[var(--accent-dark)] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-gray-600">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Services Available */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                  Electrical Services Available in {city.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {topServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 hover:shadow-sm hover:border-[var(--accent)]/30 transition-all"
                    >
                      <span className="text-2xl">{service.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-[var(--navy)]">
                          {service.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          Available in {city.name}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Neighborhoods */}
              {city.neighborhoods.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                    Neighborhoods & Communities We Serve in {city.name}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {city.neighborhoods.map((hood) => (
                      <span
                        key={hood}
                        className="rounded-full bg-[var(--gray-bg)] px-4 py-2 text-sm text-gray-700 border border-gray-200"
                      >
                        {hood}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Emergency Section */}
              <div className="rounded-xl bg-red-50 border border-red-200 p-8">
                <h2 className="text-xl font-bold text-red-900 mb-3">
                  Emergency Electrician in {city.name}
                </h2>
                <p className="text-red-800/80 mb-6">
                  Electrical emergencies require immediate professional
                  attention. If you experience a power outage, sparking outlet,
                  burning smell, or any dangerous electrical situation in{" "}
                  {city.name}, call us immediately. Our emergency electricians
                  are available 24/7.
                </p>
                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center gap-2 rounded-lg bg-red-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-red-800"
                  data-event={`city-${city.slug}-emergency-call`}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  24/7 Emergency Service
                </a>
              </div>

              {/* FAQs */}
              {city.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                    Electrician FAQs for {city.name}
                  </h2>
                  <FAQ faqs={city.faqs} />
                </div>
              )}

              {/* Nearby Areas */}
              {city.nearbyAreas.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                    Nearby Service Areas
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We also provide electrician services in communities near{" "}
                    {city.name}:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {city.nearbyAreas.map((area) => {
                      const linked = cities.find(
                        (c) =>
                          c.name === area ||
                          c.slug ===
                            `${area.toLowerCase().replace(/\s+/g, "-")}-ca`
                      );
                      if (linked) {
                        return (
                          <Link
                            key={area}
                            href={`/electrician/${linked.slug}`}
                            className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-[var(--accent)]/30 hover:text-[var(--navy)] transition-colors"
                          >
                            {area}, CA
                          </Link>
                        );
                      }
                      return (
                        <span
                          key={area}
                          className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-500"
                        >
                          {area}, CA
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <LeadForm source={`city-${city.slug}`} />
                <div className="rounded-xl bg-[var(--navy)] p-6 text-center">
                  <p className="text-white/80 text-sm mb-3">
                    Serving {city.name} & surrounding areas
                  </p>
                  <a
                    href={getPhoneLink()}
                    className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold text-lg hover:text-[var(--accent-hover)] transition-colors"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {business.phone}
                  </a>
                  <p className="text-white/60 text-xs mt-2">
                    Available 24/7
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        headline={`Need an Electrician in ${city.name}?`}
        description={`Licensed electricians serving ${city.name} and ${city.county}. Call today for professional, code-compliant electrical service.`}
      />
    </>
  );
}
