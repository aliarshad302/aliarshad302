import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/config/services";
import { cities } from "@/config/cities";
import { business } from "@/config/business";
import { getPhoneLink, generateServiceSchema, generateFAQSchema } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

const serviceFaqs: Record<string, { question: string; answer: string }[]> = {
  "emergency-electrician": [
    {
      question: "What qualifies as an electrical emergency?",
      answer:
        "Electrical emergencies include power outages, sparking outlets or switches, burning smells from electrical components, exposed or damaged wiring, electrical panel failures, buzzing or crackling sounds from outlets, and any situation where you feel unsafe around your electrical system.",
    },
    {
      question: "How fast can an emergency electrician respond?",
      answer:
        "We prioritize emergency calls and dispatch licensed electricians as quickly as possible. Response times vary by location and current demand, but we aim to have a technician en route within the hour for genuine electrical emergencies.",
    },
    {
      question: "Should I turn off my electricity during an electrical emergency?",
      answer:
        "If you can safely reach your main breaker panel, turning off the main breaker can help reduce immediate risk during emergencies involving sparking, burning smells, or flooding near electrical components. If you cannot reach the panel safely, evacuate the area and call 911 followed by an emergency electrician.",
    },
    {
      question: "Is emergency electrical service available on holidays?",
      answer:
        "Yes. Electrical emergencies do not follow a schedule, so our emergency electricians are available 24 hours a day, 7 days a week, including all holidays.",
    },
  ],
  "electrical-panel-upgrade": [
    {
      question: "How do I know if I need a panel upgrade?",
      answer:
        "Common signs include frequently tripping breakers, a panel that is warm to the touch, a panel older than 25-30 years, a Federal Pacific or Zinsco panel, plans to add major appliances or an EV charger, or a home that still has a fuse box instead of circuit breakers.",
    },
    {
      question: "How long does a panel upgrade take?",
      answer:
        "A standard 200-amp panel upgrade typically takes one full day to complete. This includes removing the old panel, installing the new panel, replacing the meter base if needed, connecting all circuits, and testing the entire system.",
    },
    {
      question: "Do I need a permit for a panel upgrade in California?",
      answer:
        "Yes. Panel upgrades require an electrical permit in every California municipality. Our licensed electricians handle the permit application, inspection scheduling, and all code compliance requirements as part of the project.",
    },
  ],
  "ev-charger-installation": [
    {
      question: "What type of EV charger should I install at home?",
      answer:
        "For most homeowners, a Level 2 (240V) EV charger provides the best balance of charging speed and cost. Level 2 chargers add approximately 25-30 miles of range per hour of charging and can fully charge most EVs overnight.",
    },
    {
      question: "Does my electrical panel need an upgrade for an EV charger?",
      answer:
        "Many homes with 100-amp panels do not have sufficient capacity for a Level 2 EV charger alongside existing electrical loads. A licensed electrician can perform a load calculation to determine if a panel upgrade is necessary before installing your EV charging station.",
    },
    {
      question: "Can I install an EV charger in my condo or HOA community?",
      answer:
        "Yes. California law (Civil Code 4745) protects homeowners' and renters' rights to install EV chargers in common-interest developments. While HOAs can establish reasonable rules about installation, they cannot prohibit EV charger installations.",
    },
  ],
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const faqs = serviceFaqs[service.slug] || [];
  const isEmergency = service.category === "emergency";
  const relatedServices = services
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(service)),
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
              { name: "Services", href: "/services" },
              { name: service.name, href: `/services/${service.slug}` },
            ]}
          />
        </div>
      </div>

      <section
        className={`${isEmergency ? "bg-red-700" : "bg-[var(--navy)]"} py-16 sm:py-20`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {isEmergency && (
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm text-white mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Available 24/7
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {service.name} in California
            </h1>
            <p className="text-lg text-white/80 mb-8">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getPhoneLink()}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-3.5 text-base font-semibold text-[var(--navy)] transition-all hover:bg-[var(--accent-hover)] shadow-md"
                data-event={`service-${service.slug}-call`}
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
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">
                  About This Service
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.description} Our licensed electricians serve
                  homeowners and businesses throughout California, delivering
                  professional, code-compliant {service.name.toLowerCase()}{" "}
                  services with upfront pricing and quality workmanship.
                </p>
              </div>

              {/* Available In Cities */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                  {service.name} Near You
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cities.slice(0, 12).map((city) => (
                    <Link
                      key={city.slug}
                      href={`/electrician/${city.slug}`}
                      className="flex items-center gap-2 rounded-lg border border-gray-200 p-3 text-sm text-gray-700 hover:border-[var(--accent)]/30 hover:text-[var(--navy)] transition-colors"
                    >
                      <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {city.name}, {city.stateAbbr}
                    </Link>
                  ))}
                </div>
              </div>

              {faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                    Frequently Asked Questions
                  </h2>
                  <FAQ faqs={faqs} />
                </div>
              )}

              {relatedServices.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                    Related Services
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedServices.map((rs) => (
                      <Link
                        key={rs.slug}
                        href={`/services/${rs.slug}`}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 hover:shadow-sm hover:border-[var(--accent)]/30 transition-all"
                      >
                        <span className="text-2xl">{rs.icon}</span>
                        <div>
                          <div className="text-sm font-semibold text-[var(--navy)]">
                            {rs.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            Learn more
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <LeadForm source={`service-${service.slug}`} />
                <div className="rounded-xl bg-[var(--navy)] p-6 text-center">
                  <p className="text-white/80 text-sm mb-3">
                    Need immediate service?
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
        headline={`Schedule ${service.name} Today`}
        description={`Contact our licensed electricians for professional ${service.name.toLowerCase()} services anywhere in California.`}
        variant={isEmergency ? "emergency" : "default"}
      />
    </>
  );
}
