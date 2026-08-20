const projects = [
  {
    title: "200-Amp Panel Upgrade",
    location: "Los Angeles, CA",
    description: "Upgraded a 1960s home from a 100-amp fuse box to a modern 200-amp breaker panel with whole-house surge protection.",
    color: "from-blue-900 to-blue-800",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <line x1="8" y1="8" x2="16" y2="8" /><line x1="8" y1="11" x2="16" y2="11" /><line x1="8" y1="14" x2="16" y2="14" /><line x1="8" y1="17" x2="16" y2="17" />
      </svg>
    ),
  },
  {
    title: "Tesla Wall Connector Installation",
    location: "Irvine, CA",
    description: "Installed a Tesla Wall Connector with a dedicated 60-amp circuit and NEMA 14-50 backup outlet in a residential garage.",
    color: "from-emerald-900 to-emerald-800",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Whole-Home Recessed Lighting",
    location: "San Diego, CA",
    description: "Designed and installed 32 LED recessed lights across kitchen, living room, and master bedroom with dimmer controls.",
    color: "from-amber-900 to-amber-800",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Commercial Electrical Renovation",
    location: "Sacramento, CA",
    description: "Complete electrical renovation of a 3,500 sq ft restaurant including commercial lighting, dedicated equipment circuits, and emergency exits.",
    color: "from-indigo-900 to-indigo-800",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Knob & Tube Wiring Replacement",
    location: "San Francisco, CA",
    description: "Replaced all knob-and-tube wiring in a 1905 Victorian home with modern Romex, including a panel upgrade and GFCI protection.",
    color: "from-red-900 to-red-800",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Standby Generator Installation",
    location: "Fresno, CA",
    description: "Installed a 22kW whole-home standby generator with automatic transfer switch to provide backup power during Central Valley heat waves.",
    color: "from-slate-800 to-slate-700",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
];

export default function ProjectGallery() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--gray-bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--navy)] mb-4">
            Recent Electrical Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of electrical projects completed by our licensed
            electricians across California.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all"
            >
              <div className={`bg-gradient-to-br ${project.color} p-8 flex items-center justify-center h-48`}>
                <div className="text-white/80 group-hover:text-white transition-colors">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-semibold text-[var(--navy)]">
                    {project.title}
                  </h3>
                </div>
                <p className="text-xs text-[var(--accent-dark)] font-medium mb-2">
                  {project.location}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
