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
import ServiceImage from "@/components/ServiceImage";

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

const serviceDetails: Record<string, { benefits: string[]; process: string[]; longDescription: string }> = {
  "emergency-electrician": {
    longDescription:
      "When an electrical emergency strikes, every minute counts. Sparking outlets, burning smells from your panel, sudden power loss, or exposed wiring are situations that demand immediate attention from a qualified professional. Our emergency electricians carry fully stocked service vehicles and are trained to diagnose and resolve dangerous electrical conditions quickly and safely. We serve all of California and prioritize dispatch to minimize your wait time during a crisis.",
    benefits: [
      "Rapid dispatch with fully stocked service vehicles",
      "Licensed electricians trained for hazardous situations",
      "Available 24 hours a day, 365 days a year",
      "Upfront pricing even during emergency calls",
      "Direct communication — no answering services",
    ],
    process: [
      "Call our emergency line and describe the situation",
      "A licensed electrician is dispatched to your location",
      "On-site assessment and safety stabilization",
      "Complete repair with upfront pricing approval",
    ],
  },
  "electrical-panel-upgrade": {
    longDescription:
      "Your electrical panel is the heart of your home's power distribution system. Older 100-amp panels and outdated brands like Federal Pacific and Zinsco cannot safely handle the electrical demands of modern appliances, HVAC systems, EV chargers, and home offices. A 200-amp panel upgrade increases your home's electrical capacity, improves safety with modern arc-fault and ground-fault protection, and brings your system up to current National Electrical Code standards. Our licensed electricians handle every step — from permit application to final inspection.",
    benefits: [
      "Increased electrical capacity for modern demands",
      "Modern arc-fault and ground-fault circuit protection",
      "Eliminates fire risk from outdated panel brands",
      "Adds capacity for EV chargers and home additions",
      "Full permit handling and inspection coordination",
    ],
    process: [
      "Home electrical assessment and load calculation",
      "Permit application with your local building department",
      "Old panel removal and new panel installation",
      "Circuit reconnection, labeling, and system testing",
    ],
  },
  "ev-charger-installation": {
    longDescription:
      "As California leads the nation in EV adoption, reliable home charging has become essential. A Level 2 EV charger provides 25–30 miles of range per hour of charging — enough to fully charge most electric vehicles overnight. Our licensed electricians install all major charger brands including Tesla Wall Connector, ChargePoint, JuiceBox, Grizzl-E, and universal J1772 stations. We handle the full installation: dedicated circuit wiring, panel capacity assessment, charger mounting, permitting, and final testing.",
    benefits: [
      "Full overnight charging capability (25–30 miles/hour)",
      "Compatible with all major EV charger brands",
      "Dedicated circuit with proper overcurrent protection",
      "Assistance with available California EV rebates",
      "Panel upgrade coordination if additional capacity is needed",
    ],
    process: [
      "Site assessment and panel capacity evaluation",
      "Charger selection guidance and permit application",
      "Dedicated circuit installation and charger mounting",
      "System testing, activation, and homeowner walkthrough",
    ],
  },
  "house-rewiring": {
    longDescription:
      "Many California homes built before the 1970s still have original wiring — knob-and-tube, cloth-insulated, or aluminum wiring that poses serious fire and safety risks. A full house rewire replaces all outdated wiring with modern copper Romex, installs grounded outlets throughout, and brings your home up to current code. While it is a significant project, rewiring eliminates hidden electrical hazards, supports modern electrical loads, and can reduce homeowners insurance premiums.",
    benefits: [
      "Eliminates fire risk from outdated wiring types",
      "Modern grounded outlets and circuits throughout",
      "Supports modern electrical loads safely",
      "May reduce homeowners insurance premiums",
      "Increases home value and buyer confidence",
    ],
    process: [
      "Comprehensive wiring assessment and project scope",
      "Permit application and material planning",
      "Systematic wiring replacement room by room",
      "Panel connection, testing, and final inspection",
    ],
  },
  "lighting-installation": {
    longDescription:
      "The right lighting transforms how a space looks, feels, and functions. Whether you are upgrading to energy-efficient LED recessed lights, installing under-cabinet lighting in your kitchen, adding landscape lighting to your property, or wiring a new chandelier, our licensed electricians deliver clean installations with proper wiring, dimmer compatibility, and switch configuration. We work with homeowners and designers to bring lighting plans to life with code-compliant electrical work.",
    benefits: [
      "Energy-efficient LED solutions that reduce utility costs",
      "Proper dimmer switch compatibility and wiring",
      "Indoor and outdoor lighting expertise",
      "Clean installation with minimal wall and ceiling disruption",
      "Design consultation for optimal light placement",
    ],
    process: [
      "Lighting design consultation and layout planning",
      "Material selection and fixture procurement guidance",
      "Professional installation with proper wiring",
      "Dimmer programming, testing, and walkthrough",
    ],
  },
  "generator-installation": {
    longDescription:
      "California homeowners face power interruptions from PSPS shutoffs, heat-wave brownouts, winter storms, and aging grid infrastructure. A whole-home standby generator with an automatic transfer switch keeps your lights on, refrigerator running, HVAC operating, and medical equipment powered — all without manual intervention. Our licensed electricians install, wire, and commission standby generators from all major manufacturers, including proper permitting and coordination with your utility provider.",
    benefits: [
      "Automatic power restoration within seconds of an outage",
      "Keeps critical systems running: HVAC, refrigeration, medical equipment",
      "Protection from PSPS events and grid-related outages",
      "Increases home value and resilience",
      "Proper permit handling and utility coordination",
    ],
    process: [
      "Site assessment and generator sizing calculation",
      "Equipment selection, permit application, and utility coordination",
      "Concrete pad, generator, and transfer switch installation",
      "System commissioning, testing, and homeowner training",
    ],
  },
};

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
  const details = serviceDetails[service.slug];
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
              <ServiceImage service={service.slug} className="mb-4" />

              <div>
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">
                  About This Service
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {details?.longDescription || service.description}{" "}
                  {!details && `Our licensed electricians serve homeowners and businesses throughout California, delivering professional, code-compliant ${service.name.toLowerCase()} services with upfront pricing and quality workmanship.`}
                </p>
              </div>

              {details && (
                <>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                      Why Choose Our {service.shortName} Service
                    </h2>
                    <ul className="space-y-3">
                      {details.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <div className="shrink-0 mt-0.5">
                            <div className="h-5 w-5 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                              <svg className="h-3 w-3 text-[var(--accent-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                      What to Expect
                    </h2>
                    <div className="space-y-4">
                      {details.process.map((step, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--navy)] text-white text-sm font-bold">
                            {i + 1}
                          </div>
                          <div className="pt-1">
                            <p className="text-gray-700">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Available In Cities */}
              <div>
                <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                  {service.name} Near You
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cities.slice(0, 12).map((city) => (
                    <Link
                      key={city.slug}
                      href={`/electrician/${city.slug}/${service.slug}`}
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
