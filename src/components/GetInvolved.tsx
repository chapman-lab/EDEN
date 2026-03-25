const pathways = [
  {
    audience: "Parents & Families",
    description:
      "Join Parent Corps to become an educated advocate and community organizer. Access the EDEN App for developmental guidance and local parent connections.",
    cta: "Join Parent Corps",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    audience: "Childcare Providers",
    description:
      "Access EDEN Solutions for subsidy navigation, compliance automation, and business support. Join a network that elevates your profession and your income.",
    cta: "Partner as a Provider",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    audience: "Donors & Philanthropists",
    description:
      "Fund the research, policy work, and community infrastructure that shifts how America values childhood. Every dollar invested returns across generations.",
    cta: "Fund the Mission",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    audience: "Policymakers",
    description:
      "Access EDEN Atlas data, research briefs, and policy recommendations grounded in developmental science. Childcare is bipartisan infrastructure.",
    cta: "Access Research",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    audience: "Students & Researchers",
    description:
      "Join College Corps through our university partnerships. Contribute research, gain field experience, and build the intellectual foundation for systemic change.",
    cta: "Join College Corps",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    audience: "Volunteers & Community",
    description:
      "Community Corps is for everyone. Map childcare deserts in your neighborhood, organize events, support local providers, and carry the mission forward.",
    cta: "Volunteer",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function GetInvolved() {
  return (
    <section
      id="involved"
      className="py-24 lg:py-32 bg-[var(--color-eden-cream)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[var(--color-eden-green)] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Get Involved
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-eden-slate)] mb-6">
            Every Role Matters
          </h2>
          <p className="text-[var(--color-eden-slate-light)] text-lg leading-relaxed">
            EDEN is a movement. Whether you&apos;re a parent, provider, donor,
            policymaker, student, or community member — there is a clear
            pathway to contribute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((pathway) => (
            <div
              key={pathway.audience}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[var(--color-eden-green)]/15 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-eden-green)]/8 flex items-center justify-center text-[var(--color-eden-green)] mb-5">
                {pathway.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--color-eden-slate)] mb-3">
                {pathway.audience}
              </h3>
              <p className="text-[var(--color-eden-slate-light)] text-sm leading-relaxed flex-1 mb-6">
                {pathway.description}
              </p>
              <a
                href="#donate"
                className="inline-flex items-center gap-2 text-[var(--color-eden-green)] font-semibold text-sm group/link"
              >
                {pathway.cta}
                <svg
                  className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
