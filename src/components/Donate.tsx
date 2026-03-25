export default function Donate() {
  return (
    <section
      id="donate"
      className="py-24 lg:py-32 bg-gradient-to-br from-[var(--color-eden-green-dark)] via-[var(--color-eden-green)] to-[var(--color-eden-green-light)] relative overflow-hidden"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 70%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-[var(--color-eden-gold)]/50" />
          <div className="w-2 h-2 rounded-full bg-[var(--color-eden-gold)]" />
          <div className="h-px w-12 bg-[var(--color-eden-gold)]/50" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Build the Future With Us
        </h2>
        <p className="text-white/85 text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
          EDEN is building for a horizon we may not live to see — and that is
          the point. Every great institution humanity has built began with a
          generation willing to plant trees whose shade they would never sit
          under.
        </p>
        <p className="text-[var(--color-eden-gold-light)] text-lg italic mb-10">
          &ldquo;The Youngest of Us Will Be the Best of Us.&rdquo;
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:mileschapman@college.harvard.edu?subject=EDEN%20Foundation%20—%20Partnership%20Inquiry"
            className="bg-white text-[var(--color-eden-green-dark)] font-semibold px-8 py-4 rounded-full text-lg hover:bg-[var(--color-eden-cream)] transition-colors duration-300 shadow-lg"
          >
            Partner With EDEN
          </a>
          <a
            href="mailto:mileschapman@college.harvard.edu?subject=EDEN%20Foundation%20—%20Donation%20Inquiry"
            className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors duration-300"
          >
            Support the Foundation
          </a>
        </div>

        {/* Founding member campaign */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-xl mx-auto">
          <h3 className="text-white font-bold text-lg mb-2">
            Founding Member Campaign
          </h3>
          <p className="text-white/80 text-sm mb-4">
            Join the founding 250 members by July 4, 2026 — America&apos;s 250th
            anniversary. Be part of the generation that chose to invest in the
            beginning.
          </p>
          <a
            href="mailto:mileschapman@college.harvard.edu?subject=EDEN%20Founding%20Member"
            className="inline-flex items-center gap-2 text-[var(--color-eden-gold-light)] font-semibold text-sm hover:text-[var(--color-eden-gold)] transition-colors"
          >
            Become a Founding Member
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
