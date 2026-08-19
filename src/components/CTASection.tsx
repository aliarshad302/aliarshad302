import Link from "next/link";
import { business } from "@/config/business";
import { getPhoneLink } from "@/lib/utils";

interface CTASectionProps {
  headline?: string;
  description?: string;
  variant?: "default" | "emergency" | "light";
}

export default function CTASection({
  headline = "Ready to Get Started?",
  description = "Contact our licensed electricians today for fast, reliable service across California.",
  variant = "default",
}: CTASectionProps) {
  const bgClass =
    variant === "emergency"
      ? "bg-red-700"
      : variant === "light"
        ? "bg-gray-50 border-t border-gray-200"
        : "bg-[var(--navy)]";
  const textClass = variant === "light" ? "text-[var(--navy)]" : "text-white";
  const subClass = variant === "light" ? "text-gray-600" : "text-white/80";

  return (
    <section className={`${bgClass} py-16 sm:py-20`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${textClass} mb-4`}>
          {headline}
        </h2>
        <p className={`text-base sm:text-lg ${subClass} mb-8 max-w-2xl mx-auto`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getPhoneLink()}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-3.5 text-base font-semibold text-[var(--navy)] transition-all hover:bg-[var(--accent-hover)] shadow-md hover:shadow-lg"
            data-event="cta-section-call"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {business.phone}
          </a>
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 rounded-lg border-2 px-8 py-3.5 text-base font-semibold transition-all ${
              variant === "light"
                ? "border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
            data-event="cta-section-request"
          >
            {business.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
