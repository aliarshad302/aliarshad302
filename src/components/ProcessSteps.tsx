const steps = [
  {
    number: "1",
    title: "Call or Request Service",
    description:
      "Contact us by phone or submit a service request online. We respond promptly to every inquiry.",
  },
  {
    number: "2",
    title: "Free Consultation",
    description:
      "We discuss your electrical needs, provide upfront information, and schedule a convenient appointment.",
  },
  {
    number: "3",
    title: "Professional Service",
    description:
      "Our licensed electricians arrive on time, diagnose the issue, and complete the work to code.",
  },
  {
    number: "4",
    title: "Quality Assurance",
    description:
      "We test everything, clean up the work area, and ensure you are satisfied with the results.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting professional electrical service is simple. Here&apos;s what to expect when you contact iElectrician.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gray-200" />
              )}
              <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--navy)] text-[var(--accent)] text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-base font-semibold text-[var(--navy)] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
