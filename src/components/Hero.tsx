export default function Hero() {
  return (
    <section
      id="mission"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-eden-green-dark)] via-[var(--color-eden-green)] to-[var(--color-eden-green-light)]" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Founding tag */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="text-[var(--color-eden-gold-light)] text-sm font-medium tracking-wide">
            Founded at America&apos;s 250th Anniversary
          </span>
        </div>

        {/* Title */}
        <h1 className="text-white mb-4">
          <span className="block text-lg md:text-xl tracking-[0.35em] font-light uppercase mb-4 text-white/80">
            The Early Developmental Education &amp; Nurturing
          </span>
          <span className="block text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.2em]">
            EDEN
          </span>
          <span className="block text-lg md:text-xl tracking-[0.25em] font-light uppercase mt-4 text-white/80">
            Foundation
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-16 bg-[var(--color-eden-gold)]/50" />
          <div className="w-2 h-2 rounded-full bg-[var(--color-eden-gold)]" />
          <div className="h-px w-16 bg-[var(--color-eden-gold)]/50" />
        </div>

        {/* Mission statement */}
        <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
          Restoring dignity, trust, and excellence to early childhood care
          across America — ensuring every child, regardless of circumstance,
          enters the world supported.
        </p>

        {/* Guiding principle */}
        <p className="text-[var(--color-eden-gold-light)] text-lg md:text-xl italic font-light mb-12">
          &ldquo;The Youngest of Us Will Be the Best of Us.&rdquo;
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#problem"
            className="bg-white text-[var(--color-eden-green-dark)] font-semibold px-8 py-4 rounded-full text-lg hover:bg-[var(--color-eden-cream)] transition-colors duration-300"
          >
            Why This Matters
          </a>
          <a
            href="#involved"
            className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors duration-300"
          >
            Join the Movement
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
