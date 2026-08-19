import Link from "next/link";
import { business } from "@/config/business";
import { getPhoneLink } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-[var(--accent-dark)] uppercase tracking-wide mb-4">
          404 — Page Not Found
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
          This page doesn&apos;t exist
        </h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for may have been moved or no longer
          exists. Use the links below to find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--navy-light)]"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 text-sm font-semibold text-[var(--navy)] transition-all hover:border-[var(--navy)]"
          >
            View Services
          </Link>
          <a
            href={getPhoneLink()}
            className="inline-flex items-center gap-2 text-[var(--accent-dark)] font-semibold hover:text-[var(--navy)] transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
