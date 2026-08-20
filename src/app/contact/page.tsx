import type { Metadata } from "next";
import { business } from "@/config/business";
import { getPhoneLink } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadSmartForm from "@/components/LeadSmartForm";

export const metadata: Metadata = {
  title: "Contact Us | Request Electrical Service in California",
  description:
    "Contact iElectrician for licensed electrician services in California. Call for 24/7 emergency service or submit a service request online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-[var(--gray-bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
        </div>
      </div>

      <section className="bg-[var(--navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Contact iElectrician
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Ready to schedule electrical service? Contact us by phone for
            immediate assistance or submit a service request online.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--navy)] mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent-dark)]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)] mb-1">Phone</h3>
                    <a
                      href={getPhoneLink()}
                      className="text-lg text-[var(--accent-dark)] font-semibold hover:text-[var(--navy)] transition-colors"
                    >
                      {business.phone}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Available 24/7 for emergencies
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent-dark)]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)] mb-1">Email</h3>
                    <a
                      href={`mailto:${business.email}`}
                      className="text-[var(--accent-dark)] hover:text-[var(--navy)] transition-colors"
                    >
                      {business.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      We respond to emails within one business day
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent-dark)]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)] mb-1">Hours</h3>
                    <p className="text-gray-700">{business.hours}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Scheduled appointments available 7 days a week
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent-dark)]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)] mb-1">
                      Service Area
                    </h3>
                    <p className="text-gray-700">Throughout California</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Serving major cities and communities statewide
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-red-50 border border-red-200 p-6">
                <h3 className="font-semibold text-red-900 mb-2">
                  Electrical Emergency?
                </h3>
                <p className="text-sm text-red-800/80 mb-4">
                  If you are experiencing a dangerous electrical situation —
                  sparking, burning smell, exposed wires, or power outage — call
                  us immediately. Do not attempt DIY repairs on electrical
                  emergencies.
                </p>
                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center gap-2 rounded-lg bg-red-700 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-800"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  24/7 Emergency Service
                </a>
              </div>
            </div>

            <div>
              <LeadSmartForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
