"use client";

import { business } from "@/config/business";
import { getPhoneLink } from "@/lib/utils";
import Link from "next/link";

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[var(--navy)] border-t border-white/10 shadow-[0_-4px_12px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <a
          href={getPhoneLink()}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white bg-[var(--accent)] text-[var(--navy)]"
          data-event="sticky-bar-call"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {business.ctaPrimary}
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
          data-event="sticky-bar-request-service"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {business.ctaSecondary}
        </Link>
      </div>
    </div>
  );
}
