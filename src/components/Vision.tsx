export default function Vision() {
  return (
    <section
      id="vision"
      className="py-24 lg:py-32 bg-[var(--color-eden-cream)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-[var(--color-eden-green)] text-sm font-semibold tracking-widest uppercase mb-4 block">
            The Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-eden-slate)] mb-6">
            Democratic Infrastructure for the Care Economy
          </h2>
          <p className="text-[var(--color-eden-slate-light)] text-lg leading-relaxed">
            EDEN is built on the same logic as the Rural Electrification
            Administration of 1936: when a market fails to serve communities it
            cannot profit from, public infrastructure must step in. Three
            entities, one mission — research, technology, and community working
            in concert.
          </p>
        </div>

        {/* Three entities */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Foundation */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[var(--color-eden-green)]/10">
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-eden-green)]/10 flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-[var(--color-eden-green)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div className="inline-block bg-[var(--color-eden-green)]/10 text-[var(--color-eden-green)] text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
              501(c)(3) Nonprofit
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-eden-slate)] mb-4">
              EDEN Foundation
            </h3>
            <p className="text-[var(--color-eden-slate-light)] leading-relaxed mb-6">
              The cultural, intellectual, and philanthropic backbone. Research
              and publication, policy advocacy, the EDEN Atlas, Corps programs,
              cultural programming, and endowment management — building the
              systems and narratives that shift public consciousness.
            </p>
            <ul className="space-y-3">
              {[
                "Original research & publication",
                "Policy advocacy at state & federal levels",
                "EDEN Atlas — mapping childhood quality",
                "Parent, College & Community Corps",
                "Cultural programming for children",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[var(--color-eden-slate)]"
                >
                  <svg
                    className="w-5 h-5 text-[var(--color-eden-green)] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[var(--color-eden-green)]/10">
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-eden-gold)]/15 flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-[var(--color-eden-gold)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
            <div className="inline-block bg-[var(--color-eden-gold)]/15 text-[var(--color-eden-gold)] text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
              B2G SaaS Platform
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-eden-slate)] mb-4">
              EDEN Solutions
            </h3>
            <p className="text-[var(--color-eden-slate-light)] leading-relaxed mb-6">
              The coordination engine. An agentic platform that automates
              subsidy capture, compliance navigation, curriculum support, and
              business management for family childcare providers — unlocking
              revenue they&apos;re already entitled to.
            </p>
            <ul className="space-y-3">
              {[
                "ERIE — Embedded Regulatory Intelligence",
                "Automated CCDF & CACFP subsidy capture",
                "Business management & scheduling",
                "Curriculum & milestone tracking",
                "Group purchasing power for providers",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[var(--color-eden-slate)]"
                >
                  <svg
                    className="w-5 h-5 text-[var(--color-eden-gold)] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* App */}
          <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[var(--color-eden-green)]/10">
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-eden-green-light)]/15 flex items-center justify-center mb-6">
              <svg
                className="w-7 h-7 text-[var(--color-eden-green-light)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="inline-block bg-[var(--color-eden-green-light)]/15 text-[var(--color-eden-green-light)] text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
              Social Platform
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-eden-slate)] mb-4">
              EDEN App
            </h3>
            <p className="text-[var(--color-eden-slate-light)] leading-relaxed mb-6">
              The parent&apos;s first community. A social platform built for the
              moment someone becomes a parent — designed to replace isolation
              with connection, anxiety with confidence, and algorithmic
              extraction with developmental support.
            </p>
            <ul className="space-y-3">
              {[
                "Local parent networks & playdate finder",
                "Developmental milestone tracking",
                "Provider discovery & ratings",
                "EDEN Creator content feed",
                "Certified marketplace with Quality Seal",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[var(--color-eden-slate)]"
                >
                  <svg
                    className="w-5 h-5 text-[var(--color-eden-green-light)] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
