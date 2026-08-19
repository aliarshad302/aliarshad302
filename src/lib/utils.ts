import { business } from "@/config/business";

export function formatPhone(raw: string): string {
  return raw;
}

export function getPhoneLink(): string {
  return `tel:${business.phoneRaw}`;
}

export function generateBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${business.domain}${item.href}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: business.name,
    url: business.domain,
    telephone: business.phone,
    email: business.email,
    description: business.description,
    areaServed: {
      "@type": "State",
      name: "California",
      containedInPlace: {
        "@type": "Country",
        name: "United States",
      },
    },
    serviceType: [
      "Emergency Electrician",
      "Residential Electrician",
      "Commercial Electrician",
      "Electrical Panel Upgrade",
      "EV Charger Installation",
      "Electrical Repair",
      "Electrical Wiring",
      "Lighting Installation",
      "Generator Installation",
      "Electrical Safety Inspection",
    ],
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${business.domain}/services/${service.slug}`,
    provider: {
      "@type": "Electrician",
      name: business.name,
      url: business.domain,
      telephone: business.phone,
    },
    areaServed: {
      "@type": "State",
      name: "California",
    },
  };
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
