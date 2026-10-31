import Logo from "@/components/Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#top" aria-label={`${site.brandName}, til toppen`}>
            <Logo tone="onDark" />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
            Stiftet af IT-studerende fra {site.university}.
          </p>
        </div>

        <nav aria-label="Sidens sektioner">
          <h2 className="text-sm font-bold text-white">Navigation</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-400 transition-all duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontakt"
                className="text-slate-400 transition-all duration-300 hover:text-white"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold text-white">Kontakt</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-slate-400 transition-all duration-300 hover:text-white"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.phoneHref}`}
                className="text-slate-400 transition-all duration-300 hover:text-white"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li className="text-slate-400">København</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.brandName}. [CVR-nummer]
          </p>
          <p>Et studenterinitiativ. Ikke en officiel del af ITU.</p>
        </div>
      </div>
    </footer>
  );
}
