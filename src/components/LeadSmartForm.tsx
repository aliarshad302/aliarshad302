"use client";

interface LeadSmartFormProps {
  className?: string;
}

export default function LeadSmartForm({ className = "" }: LeadSmartFormProps) {
  return (
    <div className={`rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden ${className}`}>
      <div className="bg-[var(--navy)] px-6 py-4">
        <h3 className="text-lg font-semibold text-white">
          Request Electrical Service
        </h3>
        <p className="text-sm text-white/70 mt-1">
          Fill out the form below for a quick response from a licensed electrician.
        </p>
      </div>
      <iframe
        src="//leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=hmasknca1&funnel=3&category=10&step=1&buttons=btn-success"
        width="100%"
        height="600"
        style={{ border: "none", display: "block" }}
        title="Request Electrical Service"
        loading="lazy"
      />
    </div>
  );
}
