export default function Footer() {
  return (
    <footer className="bg-[var(--color-eden-green-dark)] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-widest">
                E&thinsp;D&thinsp;E&thinsp;N
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-4">
              The Early Developmental Education &amp; Nurturing Foundation.
              Research, policy, and community infrastructure restoring dignity
              to early childhood care across America.
            </p>
            <p className="text-white/40 text-sm">
              Cambridge, Massachusetts | Founded 2026
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "#mission", label: "Mission" },
                { href: "#problem", label: "The Crisis" },
                { href: "#vision", label: "Vision" },
                { href: "#programs", label: "Programs" },
                { href: "#involved", label: "Get Involved" },
                { href: "#donate", label: "Support EDEN" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white/90 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:mileschapman@college.harvard.edu"
                  className="text-white/60 text-sm hover:text-white/90 transition-colors"
                >
                  mileschapman@college.harvard.edu
                </a>
              </li>
              <li className="text-white/60 text-sm">
                Cambridge, Massachusetts
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} The EDEN Foundation. All rights
            reserved.
          </p>
          <p className="text-white/30 text-xs italic">
            &ldquo;The Youngest of Us Will Be the Best of Us.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
