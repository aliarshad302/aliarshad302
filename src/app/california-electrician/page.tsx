import type { Metadata } from "next";
import Link from "next/link";
import { cities, regions, getCitiesByRegion } from "@/config/cities";
import { services, serviceCategories, getServicesByCategory } from "@/config/services";
import { business } from "@/config/business";
import { getPhoneLink, generateFAQSchema } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title:
    "California Electrician Services | Residential & Commercial Electrical Services",
  description:
    "Licensed electrician services throughout California. Residential, commercial, and emergency electrical service across Los Angeles, San Diego, San Jose, San Francisco, Sacramento, and more.",
  alternates: { canonical: "/california-electrician" },
};

const caFaqs = [
  {
    question:
      "What areas of California does iElectrician serve?",
    answer:
      "iElectrician serves cities and communities throughout California, including the Los Angeles metro area, San Diego County, the San Francisco Bay Area, Sacramento, the Central Valley, the Central Coast, and Northern California. Contact us to confirm service availability in your specific area.",
  },
  {
    question: "Do California electricians need to be licensed?",
    answer:
      "Yes. California requires electricians to hold a valid C-10 Electrical Contractor license issued by the Contractors State License Board (CSLB). All iElectrician technicians work under proper California licensing.",
  },
  {
    question: "What is the average cost of an electrician in California?",
    answer:
      "Electrician costs in California vary by region, scope of work, and complexity. Service calls typically range from $75 to $175, while project-based work like panel upgrades, rewiring, and EV charger installations are quoted based on individual assessments. We provide upfront estimates before starting any project.",
  },
  {
    question:
      "Does California require permits for electrical work?",
    answer:
      "Yes. Most electrical work in California requires a permit from the local building department, including panel upgrades, new circuits, rewiring, EV charger installations, and generator installations. Our licensed electricians handle all permitting as part of the project.",
  },
  {
    question: "What are the most common electrical problems in California homes?",
    answer:
      "Common electrical problems in California homes include outdated electrical panels (especially 60-amp and 100-amp panels in older homes), aging wiring systems (knob-and-tube, aluminum, or cloth-insulated wiring), insufficient circuits for modern appliances, lack of GFCI protection in kitchens and bathrooms, and electrical systems that cannot support EV chargers or modern HVAC systems.",
  },
];

export default function CaliforniaElectricianPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(caFaqs)),
        }}
      />

      <div className="bg-[var(--gray-bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              {
                name: "California Electrician",
                href: "/california-electrician",
              },
            ]}
          />
        </div>
      </div>

      <section className="bg-[var(--navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              California Electrician Services
            </h1>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              iElectrician provides licensed, insured electrician services
              throughout the state of California. From the coastal cities of
              Southern California to the communities of the Bay Area and Central
              Valley, our electricians deliver professional residential and
              commercial electrical service with 24/7 emergency availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getPhoneLink()}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-3.5 text-base font-semibold text-[var(--navy)] transition-all hover:bg-[var(--accent-hover)] shadow-md"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {business.ctaPrimary}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-all"
              >
                {business.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* California Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-6">
              Licensed Electricians Serving All of California
            </h2>
            <div className="prose max-w-none text-gray-600 space-y-4">
              <p>
                California&apos;s diverse geography, climate, and housing stock
                create unique electrical challenges that require experienced,
                licensed electricians. From the historic Victorian homes of San
                Francisco — many still containing knob-and-tube wiring — to the
                modern master-planned communities of Irvine and the
                heat-stressed electrical systems of the Central Valley,
                California homeowners face a wide range of electrical needs.
              </p>
              <p>
                iElectrician serves homeowners and businesses across the state
                with a full range of electrical services. Every technician
                carries proper California C-10 licensing, liability insurance,
                and workers&apos; compensation coverage. We handle all local
                permitting requirements and ensure every installation meets or
                exceeds current National Electrical Code (NEC) and California
                electrical code standards.
              </p>
              <p>
                California leads the nation in electric vehicle adoption, solar
                installations, and building electrification — which means the
                demand for qualified electricians has never been higher. Panel
                upgrades, EV charger installations, and electrical system
                modernization are among our most requested services statewide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-[var(--gray-bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-8">
            Electrical Services Across California
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                name={service.shortName}
                description={service.description}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[var(--navy)] font-semibold hover:text-[var(--accent-dark)] transition-colors"
            >
              View All Services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Regions & Cities */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-4">
            California Service Areas
          </h2>
          <p className="text-gray-600 mb-10 max-w-3xl">
            We serve communities across every major region of California. Find
            a licensed electrician in your area.
          </p>

          <div className="space-y-10">
            {regions.map((region) => {
              const regionCities = getCitiesByRegion(region.name);
              if (regionCities.length === 0) return null;
              return (
                <div key={region.slug}>
                  <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                    {region.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {region.description}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {regionCities.map((city) => (
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
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20 bg-[var(--gray-bg)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-8 text-center">
            California Electrician FAQs
          </h2>
          <FAQ faqs={caFaqs} />
        </div>
      </section>

      <CTASection
        headline="Need an Electrician in California?"
        description="Licensed electricians available across the state. Residential, commercial, and 24/7 emergency service."
      />
    </>
  );
}
