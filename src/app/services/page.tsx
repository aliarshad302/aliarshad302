import type { Metadata } from "next";
import { services, serviceCategories, getServicesByCategory } from "@/config/services";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Electrical Services in California | Residential & Commercial",
  description:
    "Full range of licensed electrician services across California. Emergency repairs, panel upgrades, EV charger installation, rewiring, lighting, and more.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-[var(--gray-bg)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
        </div>
      </div>

      <section className="bg-[var(--navy)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Electrical Services in California
          </h1>
          <p className="text-lg text-white/80 max-w-3xl">
            From emergency repairs to whole-home electrical upgrades, our
            licensed electricians deliver professional, code-compliant results
            for residential and commercial properties throughout California.
          </p>
        </div>
      </section>

      {serviceCategories.map((cat) => {
        const catServices = getServicesByCategory(cat.key);
        if (catServices.length === 0) return null;
        return (
          <section
            key={cat.key}
            className={`py-16 sm:py-20 ${cat.key === "emergency" || cat.key === "specialty" ? "bg-[var(--gray-bg)]" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-8">
                {cat.label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((service) => (
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
        );
      })}

      <CTASection
        headline="Ready to Schedule Electrical Service?"
        description="Contact our licensed electricians today for a free consultation and upfront estimate."
      />
    </>
  );
}
