import Link from "next/link";
import { business } from "@/config/business";
import { services, getServicesByCategory } from "@/config/services";
import { cities, regions } from "@/config/cities";
import { getPhoneLink, generateFAQSchema } from "@/lib/utils";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import HeroImage from "@/components/HeroImage";
import ProjectGallery from "@/components/ProjectGallery";

const homeFaqs = [
  {
    question: "What areas does iElectrician serve in California?",
    answer:
      "iElectrician provides licensed electrician services across California, including Los Angeles, San Diego, San Jose, San Francisco, Sacramento, Oakland, Fresno, Long Beach, Anaheim, Irvine, and many other cities throughout the state.",
  },
  {
    question: "Do you offer 24/7 emergency electrical service?",
    answer:
      "Yes. We provide 24/7 emergency electrician services for urgent situations including power outages, sparking outlets, burning smells, exposed wiring, and electrical panel failures. Call us any time for immediate assistance.",
  },
  {
    question: "Are your electricians licensed and insured?",
    answer:
      "All iElectrician technicians are licensed electricians with proper California state licensing, insurance, and bonding. We carry both general liability and workers' compensation insurance for your protection.",
  },
  {
    question: "How much does it cost to hire an electrician in California?",
    answer:
      "Electrician costs in California vary based on the type of work, complexity, and location. We provide upfront estimates before starting any project. Contact us to discuss your specific needs and receive a transparent quote.",
  },
  {
    question: "What types of electrical services do you offer?",
    answer:
      "We offer a full range of electrical services including emergency repairs, electrical panel upgrades, EV charger installation, house rewiring, lighting installation, generator installation, circuit breaker repair, GFCI outlets, electrical safety inspections, and more for both residential and commercial properties.",
  },
  {
    question: "Do I need a permit for electrical work in California?",
    answer:
      "Most electrical work in California requires a permit from your local building department. This includes panel upgrades, new circuits, rewiring, and EV charger installations. Our licensed electricians handle the permitting process as part of each project.",
  },
];

export default function HomePage() {
  const emergencyServices = getServicesByCategory("emergency");
  const residentialServices = getServicesByCategory("residential");
  const commercialServices = getServicesByCategory("commercial");
  const specialtyServices = getServicesByCategory("specialty");
  const topServices = services.slice(0, 8);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(homeFaqs)),
        }}
      />

      {/* Hero */}
      <section className="relative bg-[var(--navy)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[var(--navy-light)] to-[var(--navy)]" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--accent)] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[var(--accent)] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-[var(--accent)] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                </span>
                24/7 Emergency Service Available
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                Licensed Electricians{" "}
                <span className="text-[var(--accent)]">Across California</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
                Professional residential and commercial electrical services.
                From emergency repairs to panel upgrades and EV charger
                installations — trusted electricians serving California
                homeowners and businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-4 text-base font-semibold text-[var(--navy)] transition-all hover:bg-[var(--accent-hover)] shadow-lg hover:shadow-xl"
                  data-event="hero-call-click"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {business.ctaPrimary} — {business.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
                  data-event="hero-request-service"
                >
                  {business.ctaSecondary}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <HeroImage />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Emergency CTA */}
      <section className="bg-red-700 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-white">
              <svg className="h-6 w-6 text-red-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="text-base font-semibold">
                Electrical Emergency?{" "}
                <span className="font-normal text-red-100">
                  Our electricians are available 24/7 for urgent situations.
                </span>
              </p>
            </div>
            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-2.5 text-sm font-semibold text-red-700 transition-all hover:bg-red-50 whitespace-nowrap"
              data-event="emergency-banner-call"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 sm:py-20 bg-[var(--gray-bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-4">
              Electrical Services Across California
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to whole-home electrical upgrades, our
              licensed electricians deliver professional results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topServices.map((service) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                name={service.shortName}
                description={service.description}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>

          <div className="text-center mt-10">
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

      {/* Why Choose iElectrician */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-6">
                Why California Homeowners Trust iElectrician
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Electrical work requires precision, safety knowledge, and
                experience. Our licensed electricians bring professional expertise
                to every job — from a simple outlet repair to a complete home
                rewire. We treat every property like our own.
              </p>
              <div className="space-y-5">
                {[
                  {
                    title: "Licensed & Insured Electricians",
                    desc: "Every technician carries proper California state licensing, liability insurance, and workers' compensation coverage.",
                  },
                  {
                    title: "Upfront, Transparent Pricing",
                    desc: "We provide detailed estimates before starting work. No surprise charges, no hidden fees.",
                  },
                  {
                    title: "Code-Compliant Workmanship",
                    desc: "All work meets or exceeds current National Electrical Code (NEC) and California electrical code requirements.",
                  },
                  {
                    title: "24/7 Emergency Availability",
                    desc: "Electrical emergencies don't wait for business hours. Our electricians are available around the clock.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 mt-0.5">
                      <div className="h-6 w-6 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                        <svg className="h-3.5 w-3.5 text-[var(--accent-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--navy)] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[var(--gray-bg)] rounded-2xl p-8 lg:p-10">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--navy)] mb-2">
                    Statewide
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">
                    Service Coverage
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-[var(--navy)]">{cities.length}+</div>
                    <div className="text-xs text-gray-500 mt-1">Cities Served</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-[var(--navy)]">{services.length}+</div>
                    <div className="text-xs text-gray-500 mt-1">Services</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-[var(--navy)]">24/7</div>
                    <div className="text-xs text-gray-500 mt-1">Emergency Service</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-[var(--accent-dark)]">CA</div>
                    <div className="text-xs text-gray-500 mt-1">Licensed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 sm:py-20 bg-[var(--gray-bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-4">
              Electrician Services Throughout California
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We serve major cities and communities across every region of
              California. Find a licensed electrician near you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {cities.slice(0, 6).map((city) => (
              <Link
                key={city.slug}
                href={`/electrician/${city.slug}`}
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[var(--accent)]/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--navy)]/5 text-[var(--navy)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--navy)] group-hover:text-[var(--accent-dark)] transition-colors">
                      {city.name}, {city.stateAbbr}
                    </h3>
                    <p className="text-xs text-gray-500">{city.region}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">
                  Licensed electricians serving {city.name} and surrounding communities in {city.county}.
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--navy-light)]"
            >
              View All Service Areas
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Residential Services Highlight */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-4">
              Residential Electrical Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive home electrical services — from repairs and upgrades
              to new installations. Keeping California homes safe and powered.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialServices.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                name={service.name}
                description={service.description}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Electrical Safety */}
      <section className="py-16 sm:py-20 bg-[var(--navy)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Electrical Safety for California Homes
              </h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                California&apos;s diverse housing stock — from Victorian-era homes
                in San Francisco to mid-century ranch homes across the Central
                Valley — means electrical systems vary widely in age and
                condition. Knowing when your home needs professional electrical
                attention can prevent hazards before they become emergencies.
              </p>
              <ul className="space-y-4 text-white/80">
                {[
                  "Circuit breakers that trip frequently or won't reset",
                  "Flickering or dimming lights throughout the house",
                  "Warm or discolored outlets, switches, or wall plates",
                  "Burning smell near outlets or electrical panels",
                  "Electrical panel older than 25–30 years",
                  "Two-prong outlets or lack of GFCI protection",
                  "Buzzing, crackling, or sizzling sounds from outlets or panels",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-[var(--accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/services/electrical-safety-inspection"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--navy)] transition-all hover:bg-[var(--accent-hover)]"
                >
                  Schedule a Safety Inspection
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "When to Call an Emergency Electrician",
                  desc: "If you smell burning, see sparks, have a total power outage, or notice exposed wiring, call an emergency electrician immediately. Do not attempt DIY electrical repairs on these issues.",
                  link: "/services/emergency-electrician",
                },
                {
                  title: "Signs Your Panel Needs an Upgrade",
                  desc: "Homes with 100-amp panels, Federal Pacific or Zinsco panels, or panels over 25 years old should be evaluated for an upgrade to safely support modern electrical demands.",
                  link: "/services/electrical-panel-upgrade",
                },
                {
                  title: "Is Your Home's Wiring Safe?",
                  desc: "Aluminum wiring, knob-and-tube wiring, and cloth-insulated wiring are all potential safety concerns found in California's older homes. A professional inspection can determine if replacement is needed.",
                  link: "/services/house-rewiring",
                },
              ].map((card) => (
                <Link
                  key={card.title}
                  href={card.link}
                  className="block rounded-xl bg-white/5 border border-white/10 p-6 transition-all hover:bg-white/10"
                >
                  <h3 className="text-base font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {card.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectGallery />

      <ProcessSteps />

      {/* FAQs */}
      <section className="py-16 sm:py-20 bg-[var(--gray-bg)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about our electrician services in California.
            </p>
          </div>
          <FAQ faqs={homeFaqs} />
        </div>
      </section>

      <CTASection
        headline="Need an Electrician in California?"
        description="Licensed, insured electricians ready to help with any residential or commercial electrical project. Available 24/7 for emergencies."
      />
    </>
  );
}
