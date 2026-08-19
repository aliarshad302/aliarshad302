import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/config/business";
import { getPhoneLink } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About iElectrician | Licensed California Electricians",
  description:
    "iElectrician provides licensed, insured electrician services across California. Professional residential and commercial electrical service with 24/7 emergency availability.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-[var(--gray-bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
        </div>
      </div>

      <section className="bg-[var(--navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              About iElectrician
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Licensed, insured electricians serving homeowners and businesses
              throughout California with professional electrical services and
              24/7 emergency availability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <h2 className="text-2xl font-bold text-[var(--navy)]">
                Professional Electrical Services Across California
              </h2>
              <p>
                iElectrician connects California homeowners and businesses with
                licensed, insured electricians who deliver professional results
                on every project. Whether you need an emergency repair at 2 AM
                or a planned electrical panel upgrade, our technicians bring the
                expertise, tools, and commitment to quality that your property
                deserves.
              </p>
              <p>
                We serve communities throughout California — from the dense
                urban neighborhoods of Los Angeles and San Francisco to the
                suburban communities of the Inland Empire and Central Valley.
                Every job is completed to current National Electrical Code (NEC)
                and California electrical code standards, with proper permitting
                handled as part of the project.
              </p>
              <p>
                Our approach is straightforward: arrive on time, diagnose
                accurately, price transparently, and complete the work to the
                highest standard. We believe California homeowners and
                businesses deserve electricians they can trust with one of the
                most critical systems in their property.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Licensed & Insured",
                  desc: "All technicians carry proper California C-10 electrical contractor licensing, general liability insurance, and workers' compensation coverage.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  title: "Code-Compliant Work",
                  desc: "Every installation meets or exceeds current NEC and California electrical code requirements. We handle all local permitting.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                },
                {
                  title: "Transparent Pricing",
                  desc: "We provide detailed estimates before starting any work. No surprise charges, no hidden fees, no pressure upsells.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "24/7 Emergency Response",
                  desc: "Electrical emergencies happen at any hour. Our emergency electricians are available around the clock, every day of the year.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Clean Workmanship",
                  desc: "We respect your property. Work areas are cleaned up, materials are disposed of properly, and the job isn't done until you're satisfied.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                },
                {
                  title: "Statewide Coverage",
                  desc: "We serve communities across California, from Southern California to the Bay Area, Central Valley, and beyond.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-gray-200 p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-light)] text-[var(--accent-dark)]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to Work With iElectrician?"
        description="Contact us today for licensed, professional electrical service anywhere in California."
        variant="light"
      />
    </>
  );
}
