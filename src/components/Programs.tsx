const programs = [
  {
    name: "EDEN ROOTS",
    tagline: "Roots of Independence",
    description:
      "A workforce development program converting displaced workers and motivated parents into licensed, supported childcare providers — filling deserts with Guardians trained to the highest standard.",
    color: "var(--color-eden-green)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "EDEN Centers",
    tagline: "Community Infrastructure",
    description:
      "Cooperative childcare centers developed by professionals and eventually owned by the community. Gardens, co-working, intergenerational programming — civic hubs that raise property values $13 for every $1 invested.",
    color: "var(--color-eden-gold)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "EDEN Atlas",
    tagline: "Mapping Childhood Quality",
    description:
      "A comprehensive map of childcare infrastructure across America — identifying deserts and gardens, guiding resource deployment, and making the invisible landscape of early childhood visible to everyone.",
    color: "var(--color-eden-green-light)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    name: "Corps Programs",
    tagline: "Citizens in Service of Children",
    description:
      "Parent Corps trains advocates. College Corps builds a talent pipeline through university partnerships. Community Corps carries the mission into every neighborhood. Three tiers, one movement.",
    color: "var(--color-eden-slate)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[var(--color-eden-green)] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-eden-slate)] mb-6">
            Building the Ecosystem
          </h2>
          <p className="text-[var(--color-eden-slate-light)] text-lg leading-relaxed">
            Beyond the three core entities, EDEN&apos;s programs create the
            workforce, infrastructure, knowledge, and civic engagement that make
            systemic change possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div
              key={program.name}
              className="group relative p-8 rounded-2xl border border-gray-100 hover:border-[var(--color-eden-green)]/20 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  backgroundColor: `color-mix(in srgb, ${program.color} 10%, transparent)`,
                  color: program.color,
                }}
              >
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-eden-slate)] mb-1">
                {program.name}
              </h3>
              <p
                className="text-sm font-medium mb-3"
                style={{ color: program.color }}
              >
                {program.tagline}
              </p>
              <p className="text-[var(--color-eden-slate-light)] leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
