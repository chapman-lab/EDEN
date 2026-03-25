const stats = [
  {
    number: "90%",
    label: "of brain development occurs before age 5",
    context: "The highest-leverage investment any society can make",
  },
  {
    number: "$122B",
    label: "in annual GDP lost to inadequate childcare",
    context: "Not a projection — a current recurring cost",
  },
  {
    number: "$15K+",
    label: "average annual cost of childcare per child",
    context: "More than in-state college tuition in most states",
  },
  {
    number: "40%",
    label: "annual workforce turnover among childcare workers",
    context: "Destroying institutional knowledge and child development continuity",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[var(--color-eden-green)] text-sm font-semibold tracking-widest uppercase mb-4 block">
            The Crisis
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-eden-slate)] mb-6">
            A Coordination Failure, Not a Funding Gap
          </h2>
          <p className="text-[var(--color-eden-slate-light)] text-lg leading-relaxed">
            The American childcare crisis is not a policy oversight. It is the
            systemic outcome of treating childhood as an afterthought —
            building a society that values output over origin, production over
            formation. Billions in federal subsidies flow annually while
            providers leave substantial income unclaimed due to administrative
            complexity.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl bg-[var(--color-eden-cream)] border border-[var(--color-eden-green)]/10 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl font-bold text-[var(--color-eden-green)] mb-3">
                {stat.number}
              </div>
              <div className="text-[var(--color-eden-slate)] font-medium mb-2">
                {stat.label}
              </div>
              <div className="text-[var(--color-eden-slate-light)] text-sm">
                {stat.context}
              </div>
            </div>
          ))}
        </div>

        {/* Impact areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-eden-slate)] mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[var(--color-eden-green)]/10 flex items-center justify-center text-[var(--color-eden-green)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </span>
              Families Under Pressure
            </h3>
            <p className="text-[var(--color-eden-slate-light)] leading-relaxed">
              The burden falls disproportionately on mothers, who reduce hours
              or exit the workforce entirely. The search for quality care is
              opaque, stressful, and largely informal. Subsidy systems exist
              but remain inaccessible — complex applications, waitlists, and
              bureaucratic friction filter out those who need them most.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--color-eden-slate)] mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[var(--color-eden-green)]/10 flex items-center justify-center text-[var(--color-eden-green)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </span>
              Providers Without Support
            </h3>
            <p className="text-[var(--color-eden-slate-light)] leading-relaxed">
              Median childcare worker wage: $13.22/hour — below a living wage
              in most American cities. Family childcare providers operate as
              solo entrepreneurs without administrative support, purchasing
              power, or compliance guidance. The profession carries no social
              prestige, yet these are the people shaping our children&apos;s futures.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--color-eden-slate)] mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[var(--color-eden-green)]/10 flex items-center justify-center text-[var(--color-eden-green)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              Children Left Behind
            </h3>
            <p className="text-[var(--color-eden-slate-light)] leading-relaxed">
              Achievement gaps begin before age 3 and compound across every
              subsequent phase of development. Art, music, play, and
              imagination — the primary currencies of childhood — are
              systematically undervalued. Every year of inaction widens the gap.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--color-eden-slate)] mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[var(--color-eden-green)]/10 flex items-center justify-center text-[var(--color-eden-green)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Communities in Decline
            </h3>
            <p className="text-[var(--color-eden-slate-light)] leading-relaxed">
              Childcare deserts suppress economic activity: employers cannot
              retain parents, parents cannot work, local economies contract.
              The decline of community institutions has hollowed the social
              fabric that once informally supported families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
