import HeroIllustration from "@/components/illustrations/HeroIllustration";
import { CheckIcon, GraduationIcon, MailIcon, PinIcon } from "@/components/Icons";
import { mailtoHref } from "@/lib/site";

const checks: readonly string[] = [
  "Skriftlig aftale først",
  "Ingen risiko for din side",
  "Rapport på almindeligt dansk",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream-100 pt-32 pb-44 sm:pt-40 sm:pb-52"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <div className="inline-flex flex-col gap-2 rounded-xl border border-cream-300 bg-cream-200 px-5 py-3 text-sm font-semibold text-navy-900 sm:flex-row sm:gap-6">
            <span className="flex items-center gap-2">
              <GraduationIcon className="h-4 w-4 text-brand-500" />
              Stiftet af IT-studerende fra ITU
            </span>
            <span className="flex items-center gap-2">
              <PinIcon className="h-4 w-4 text-brand-500" />
              Lokalt baseret i København
            </span>
          </div>

          <h1 className="heading mt-8 text-4xl leading-[1.12] sm:text-5xl lg:text-6xl">
            Er din hjemmeside <span className="text-brand-500">faktisk sikker</span>{" "}
            mod hackerangreb?
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-700">
            Vi hjælper lokale butikker, caféer og restauranter med at sikre
            deres hjemmeside. Vi er IT-studerende fra ITU i København.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={mailtoHref("Jeg vil gerne have tjekket min hjemmeside")}
              className="btn-primary"
            >
              <MailIcon className="h-5 w-5" />
              Kontakt os via e-mail
            </a>
            <a href="#sadan-foregar-det" className="btn-secondary">
              Læs hvordan det foregår
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-3 text-sm font-medium text-navy-700 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {checks.map((c) => (
              <li key={c} className="flex items-center gap-2 whitespace-nowrap">
                <CheckIcon className="h-4 w-4 text-brand-500" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <HeroIllustration className="mx-auto w-full max-w-md lg:max-w-none" />
        </div>
      </div>
    </section>
  );
}
