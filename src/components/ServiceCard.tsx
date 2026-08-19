import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  name: string;
  description: string;
  href: string;
}

export default function ServiceCard({ icon, name, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[var(--accent)]/30 hover:-translate-y-1"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--navy)]/5 text-2xl group-hover:bg-[var(--accent)]/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[var(--navy)] mb-2 group-hover:text-[var(--accent-dark)] transition-colors">
        {name}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
        {description}
      </p>
      <span className="inline-flex items-center text-sm font-medium text-[var(--navy)] group-hover:text-[var(--accent-dark)] transition-colors">
        Learn More
        <svg
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
