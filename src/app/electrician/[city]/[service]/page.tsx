import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/config/cities";
import { services, getServiceBySlug } from "@/config/services";
import { business } from "@/config/business";
import { getPhoneLink, generateFAQSchema } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";

export function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) {
    for (const service of services) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) return {};

  const title = `${service.name} in ${city.name}, ${city.stateAbbr} | ${business.name}`;
  const description = `Professional ${service.name.toLowerCase()} services in ${city.name}, ${city.stateAbbr}. Licensed electricians serving ${city.name} and ${city.county}. Available 24/7. Call now for a free estimate.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/electrician/${city.slug}/${service.slug}`,
    },
  };
}

const cityServiceContent: Record<
  string,
  Record<string, { intro: string; whyLocal: string; faqs: { question: string; answer: string }[] }>
> = {};

function getServiceIntro(serviceName: string, cityName: string, county: string): string {
  const intros: Record<string, string> = {
    "Emergency Electrician": `Electrical emergencies in ${cityName} require immediate professional attention. Whether you are dealing with a power outage, sparking outlet, burning smell from your panel, or exposed wiring, our licensed emergency electricians are available 24/7 to respond quickly throughout ${cityName} and ${county}.`,
    "Residential Electrician": `${cityName} homeowners trust our licensed residential electricians for all home electrical needs. From basic outlet repairs to complete home rewiring, we deliver safe, code-compliant electrical work throughout ${cityName} and surrounding ${county} communities.`,
    "Commercial Electrician": `${cityName} businesses rely on dependable electrical systems. Our licensed commercial electricians serve offices, retail locations, restaurants, and industrial facilities throughout ${cityName} and ${county} with professional electrical installations, repairs, and maintenance.`,
    "Electrical Panel Upgrade": `Many homes in ${cityName} still operate on outdated 100-amp electrical panels that cannot safely handle modern electrical demands. Our licensed electricians perform 200-amp panel upgrades throughout ${cityName} and ${county}, bringing your home's electrical system up to current code.`,
    "EV Charger Installation": `With California leading the nation in EV adoption, ${cityName} homeowners are installing Level 2 EV chargers for convenient overnight charging. Our licensed electricians install all major brands including Tesla Wall Connector, ChargePoint, and JuiceBox throughout ${cityName} and ${county}.`,
    "Electrical Repair": `From flickering lights to tripping breakers, electrical problems in your ${cityName} home need prompt professional attention. Our licensed electricians diagnose and repair all types of electrical issues throughout ${cityName} and ${county} with upfront pricing.`,
    "Electrical Wiring": `Whether you are building a new home or upgrading the wiring in an existing ${cityName} property, our licensed electricians deliver code-compliant electrical wiring services. We serve residential and commercial projects throughout ${cityName} and ${county}.`,
    "House Rewiring": `Many older homes in ${cityName} still have original knob-and-tube, cloth-insulated, or aluminum wiring that poses fire and safety risks. Our licensed electricians perform complete house rewiring throughout ${cityName} and ${county}, replacing outdated wiring with modern copper.`,
    "Lighting Installation": `Transform your ${cityName} home or business with professional lighting installation. Our licensed electricians install recessed lighting, landscape lighting, LED upgrades, and decorative fixtures throughout ${cityName} and ${county}.`,
    "Ceiling Fan Installation": `Stay comfortable in ${cityName} with professional ceiling fan installation. Our licensed electricians handle new installations, replacements, and proper wiring throughout ${cityName} and ${county} homes.`,
    "Generator Installation": `Power outages in ${cityName} can be caused by PSPS shutoffs, storms, or grid issues. Our licensed electricians install whole-home standby generators with automatic transfer switches throughout ${cityName} and ${county} to keep your home powered.`,
    "Electrical Safety Inspection": `Protect your ${cityName} property with a professional electrical safety inspection. Our licensed electricians identify hazards, code violations, and potential problems in homes and commercial buildings throughout ${cityName} and ${county}.`,
    "Circuit Breaker Repair & Replacement": `If your circuit breakers keep tripping in your ${cityName} home, it could signal an overloaded circuit, a short circuit, or a faulty breaker. Our licensed electricians diagnose and repair breaker issues throughout ${cityName} and ${county}.`,
    "Outlet & GFCI Installation": `Outdated or damaged outlets in your ${cityName} home can be a safety hazard. Our licensed electricians repair, replace, and install GFCI-protected outlets in kitchens, bathrooms, garages, and outdoor areas throughout ${cityName} and ${county}.`,
    "Whole House Surge Protection": `Protect your ${cityName} home's electronics and appliances from damaging power surges. Our licensed electricians install whole-house surge protection at your electrical panel, safeguarding your property throughout ${cityName} and ${county}.`,
    "Smoke Detector Installation": `California law requires working smoke and carbon monoxide detectors in every home. Our licensed electricians install hardwired, code-compliant smoke and CO detectors throughout ${cityName} and ${county} homes.`,
    "Aluminum Wiring Replacement": `Homes built in ${cityName} during the 1960s and 1970s may have aluminum wiring, which poses a significant fire risk. Our licensed electricians replace aluminum wiring with safe copper throughout ${cityName} and ${county}.`,
    "Electrical Troubleshooting": `Mysterious electrical problems in your ${cityName} home — flickering lights, power loss, buzzing sounds — need expert diagnosis. Our licensed electricians use professional testing equipment to identify and resolve electrical issues throughout ${cityName} and ${county}.`,
    "Recessed Lighting Installation": `Upgrade your ${cityName} home with clean, modern recessed lighting. Our licensed electricians design and install recessed lights in kitchens, living rooms, bathrooms, and more throughout ${cityName} and ${county}.`,
    "Landscape Lighting": `Enhance your ${cityName} property's curb appeal and security with professional landscape lighting. Our licensed electricians install path lights, accent lighting, security lights, and architectural illumination throughout ${cityName} and ${county}.`,
  };
  return intros[serviceName] || `Professional ${serviceName.toLowerCase()} services in ${cityName}, serving all of ${county}. Our licensed electricians are available for residential and commercial projects with upfront pricing and quality workmanship.`;
}

function getWhyLocal(serviceName: string, cityName: string, county: string, region: string): string {
  return `When you need ${serviceName.toLowerCase()} in ${cityName}, choosing a local electrician matters. Our electricians are familiar with ${cityName}'s building codes, common electrical issues in ${region} homes, and the permitting requirements in ${county}. We provide upfront pricing, licensed and insured service, and stand behind our work.`;
}

function getCityServiceFaqs(
  serviceName: string,
  serviceShortName: string,
  cityName: string,
  stateAbbr: string,
  county: string
): { question: string; answer: string }[] {
  return [
    {
      question: `How much does ${serviceName.toLowerCase()} cost in ${cityName}?`,
      answer: `${serviceName} costs in ${cityName} vary depending on the scope of work, materials needed, and accessibility. Contact us for a free estimate — our licensed electricians provide upfront pricing before any work begins.`,
    },
    {
      question: `Do I need a permit for ${serviceShortName.toLowerCase()} in ${cityName}, ${stateAbbr}?`,
      answer: `Many electrical projects in ${cityName} require a permit from ${county}. Our licensed electricians handle all permit applications and inspection scheduling as part of the project, ensuring your work meets all local and state electrical codes.`,
    },
    {
      question: `How quickly can you provide ${serviceShortName.toLowerCase()} in ${cityName}?`,
      answer: `We offer prompt scheduling for ${serviceName.toLowerCase()} in ${cityName} and throughout ${county}. Emergency services are available 24/7. For non-emergency projects, we typically schedule within a few business days.`,
    },
  ];
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) notFound();

  const custom = cityServiceContent[city.slug]?.[service.slug];
  const intro = custom?.intro || getServiceIntro(service.name, city.name, city.county);
  const whyLocal = custom?.whyLocal || getWhyLocal(service.name, city.name, city.county, city.region);
  const faqs = custom?.faqs || getCityServiceFaqs(service.name, service.shortName, city.name, city.stateAbbr, city.county);

  const otherServicesInCity = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 8);
  const otherCitiesForService = cities
    .filter((c) => c.slug !== city.slug)
    .slice(0, 8);
  const isEmergency = service.category === "emergency";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${service.name} in ${city.name}, ${city.stateAbbr}`,
            description: intro,
            url: `${business.domain}/electrician/${city.slug}/${service.slug}`,
            provider: {
              "@type": "Electrician",
              name: business.name,
              telephone: business.phone,
              url: business.domain,
              areaServed: {
                "@type": "City",
                name: city.name,
                containedInPlace: {
                  "@type": "State",
                  name: city.state,
                },
              },
            },
            areaServed: {
              "@type": "City",
              name: city.name,
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: city.county,
              },
            },
          }),
        }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(faqs)),
          }}
        />
      )}

      <div className="bg-[var(--gray-bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Service Areas", href: "/service-areas" },
              {
                name: `${city.name}, ${city.stateAbbr}`,
                href: `/electrician/${city.slug}`,
              },
              {
                name: service.name,
                href: `/electrician/${city.slug}/${service.slug}`,
              },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section
        className={`${isEmergency ? "bg-red-700" : "bg-[var(--navy)]"} py-16 sm:py-20`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[var(--accent)] mb-4">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {city.name}, {city.stateAbbr} · {city.county}
            </div>
            {isEmergency && (
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm text-white mb-4 ml-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Available 24/7
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {service.name} in {city.name}, {city.stateAbbr}
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getPhoneLink()}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-3.5 text-base font-semibold text-[var(--navy)] transition-all hover:bg-[var(--accent-hover)] shadow-md"
                data-event={`city-service-${city.slug}-${service.slug}-call`}
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
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

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Why Local */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">
                  Why Choose a Local {city.name} Electrician for{" "}
                  {service.shortName}
                </h2>
                <p className="text-gray-600 leading-relaxed">{whyLocal}</p>
              </div>

              {/* What We Offer */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                  Our {service.name} Services in {city.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-gray-200 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-light)] flex items-center justify-center text-xl">
                        {service.icon}
                      </div>
                      <h3 className="font-semibold text-[var(--navy)]">
                        Licensed & Insured
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      All {service.name.toLowerCase()} work in {city.name} is
                      performed by licensed, insured electricians.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-light)] flex items-center justify-center">
                        <svg
                          className="h-5 w-5 text-[var(--accent-dark)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-[var(--navy)]">
                        Code Compliant
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      We follow all {city.county} building codes and California
                      electrical standards.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-light)] flex items-center justify-center">
                        <svg
                          className="h-5 w-5 text-[var(--accent-dark)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-[var(--navy)]">
                        Upfront Pricing
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Free estimates and transparent pricing before any work
                      begins on your {city.name} project.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-light)] flex items-center justify-center">
                        <svg
                          className="h-5 w-5 text-[var(--accent-dark)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-[var(--navy)]">
                        {isEmergency ? "24/7 Available" : "Flexible Scheduling"}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      {isEmergency
                        ? `Emergency ${service.name.toLowerCase()} available 24/7 in ${city.name} and all of ${city.county}.`
                        : `Convenient appointment times including evenings and weekends for ${city.name} residents.`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Neighborhoods */}
              {city.neighborhoods.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                    {service.name} in {city.name} Neighborhoods
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We provide {service.name.toLowerCase()} throughout {city.name}{" "}
                    neighborhoods including:
                  </p>
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

              {/* FAQs */}
              {faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                    {service.name} FAQs for {city.name}
                  </h2>
                  <FAQ faqs={faqs} />
                </div>
              )}

              {/* Other Services in This City */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                  Other Electrical Services in {city.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {otherServicesInCity.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/electrician/${city.slug}/${s.slug}`}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 hover:shadow-sm hover:border-[var(--accent)]/30 transition-all"
                    >
                      <span className="text-xl">{s.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-[var(--navy)]">
                          {s.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          in {city.name}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href={`/electrician/${city.slug}`}
                    className="text-sm font-medium text-[var(--accent-dark)] hover:underline"
                  >
                    View all services in {city.name} &rarr;
                  </Link>
                </div>
              </div>

              {/* Same Service in Other Cities */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                  {service.name} in Other California Cities
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {otherCitiesForService.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/electrician/${c.slug}/${service.slug}`}
                      className="flex items-center gap-2 rounded-lg border border-gray-200 p-3 text-sm text-gray-700 hover:border-[var(--accent)]/30 hover:text-[var(--navy)] transition-colors"
                    >
                      <svg
                        className="h-4 w-4 shrink-0 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {c.name}, {c.stateAbbr}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <LeadForm
                  source={`city-service-${city.slug}-${service.slug}`}
                />
                <div className="rounded-xl bg-[var(--navy)] p-6 text-center">
                  <p className="text-white/80 text-sm mb-3">
                    {service.name} in {city.name}
                  </p>
                  <a
                    href={getPhoneLink()}
                    className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold text-lg hover:text-[var(--accent-hover)] transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {business.phone}
                  </a>
                  <p className="text-white/60 text-xs mt-2">Available 24/7</p>
                </div>

                {/* Quick Links */}
                <div className="rounded-xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-[var(--navy)] mb-4">
                    Quick Links
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-sm text-gray-600 hover:text-[var(--navy)] transition-colors"
                      >
                        {service.name} — Statewide Info
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/electrician/${city.slug}`}
                        className="text-sm text-gray-600 hover:text-[var(--navy)] transition-colors"
                      >
                        All Services in {city.name}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="text-sm text-gray-600 hover:text-[var(--navy)] transition-colors"
                      >
                        All Electrical Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-areas"
                        className="text-sm text-gray-600 hover:text-[var(--navy)] transition-colors"
                      >
                        All Service Areas
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        headline={`Need ${service.name} in ${city.name}?`}
        description={`Licensed electricians serving ${city.name} and ${city.county}. Call today for professional ${service.name.toLowerCase()} with upfront pricing.`}
        variant={isEmergency ? "emergency" : "default"}
      />
    </>
  );
}
