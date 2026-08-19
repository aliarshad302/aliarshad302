"use client";

import { useState, type FormEvent } from "react";
import { business } from "@/config/business";
import { services } from "@/config/services";

interface LeadFormProps {
  className?: string;
  source?: string;
}

export default function LeadForm({ className = "", source = "contact" }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;

    if (!name || !phone) {
      setError(true);
      return;
    }

    setSubmitted(true);
    setError(false);
  }

  if (submitted) {
    return (
      <div className={`rounded-xl bg-green-50 border border-green-200 p-8 text-center ${className}`}>
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-900 mb-2">Request Received</h3>
        <p className="text-sm text-green-700">
          We&apos;ll contact you shortly. For immediate assistance, call{" "}
          <a href={`tel:${business.phoneRaw}`} className="font-semibold underline">
            {business.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8 ${className}`}
      data-event-source={source}
    >
      <h3 className="text-lg font-semibold text-[var(--navy)] mb-1">
        Request Electrical Service
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Fill out the form below and we&apos;ll get back to you promptly.
      </p>

      {error && (
        <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          Please provide your name and phone number.
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor={`${source}-name`} className="block text-sm font-medium text-gray-700 mb-1.5">
            Name *
          </label>
          <input
            type="text"
            id={`${source}-name`}
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor={`${source}-phone`} className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone *
          </label>
          <input
            type="tel"
            id={`${source}-phone`}
            name="phone"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
            placeholder="(555) 555-5555"
          />
        </div>

        <div>
          <label htmlFor={`${source}-email`} className="block text-sm font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <input
            type="email"
            id={`${source}-email`}
            name="email"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
            placeholder="you@email.com"
          />
        </div>

        <div>
          <label htmlFor={`${source}-service`} className="block text-sm font-medium text-gray-700 mb-1.5">
            Service Needed
          </label>
          <select
            id={`${source}-service`}
            name="service"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor={`${source}-message`} className="block text-sm font-medium text-gray-700 mb-1.5">
            Message
          </label>
          <textarea
            id={`${source}-message`}
            name="message"
            rows={3}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 resize-none"
            placeholder="Describe your electrical needs..."
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[var(--accent)] px-6 py-3 text-base font-semibold text-[var(--navy)] transition-all hover:bg-[var(--accent-hover)] shadow-sm hover:shadow-md"
          data-event="form-submit"
        >
          {business.ctaSecondary}
        </button>

        <p className="text-xs text-gray-400 text-center">
          Or call us directly at{" "}
          <a href={`tel:${business.phoneRaw}`} className="text-[var(--navy)] font-medium">
            {business.phone}
          </a>
        </p>
      </div>
    </form>
  );
}
