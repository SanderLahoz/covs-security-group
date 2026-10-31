import type { ComponentType, SVGProps } from "react";
import { CheckIcon, FileSignIcon, ReportIcon, SearchShieldIcon } from "@/components/Icons";

interface Step {
  number: string;
  title: string;
  summary: string;
  bullets: readonly string[];
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const steps: readonly Step[] = [
  {
    number: "1",
    title: "Aftale & Tilladelse",
    summary: "Vi underskriver en klar aftale, før vi rører noget.",
    bullets: ["Hvad vi må teste, og hvad vi ikke må", "100% lovligt og trygt"],
    Icon: FileSignIcon,
  },
  {
    number: "2",
    title: "Det etiske tjek (pentesting)",
    summary: "Vi leder efter svage punkter, som en hacker ville. Uden at ødelægge noget.",
    bullets: ["Skånsom test af plugins og kode", "Intet bliver ændret eller slettet"],
    Icon: SearchShieldIcon,
  },
  {
    number: "3",
    title: "Rapport & Løsning",
    summary: "Du får en rapport på almindeligt dansk. Du vælger, hvem der retter.",
    bullets: ["Ret det selv", "Giv det til dit bureau", "Eller lad os klare det"],
    Icon: ReportIcon,
  },
];

export default function Steps() {
  return (
    <section
      id="sadan-foregar-det"
      className="section-anchor bg-cream-100 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Sådan foregår det</p>
          <h2 className="heading mt-4 text-3xl sm:text-4xl">Tre enkle trin</h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-700">
            Du skal bare sende os adressen på din hjemmeside.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map(({ number, title, summary, bullets, Icon }) => (
            <li key={number} className="card flex flex-col">
              <div className="flex items-center justify-between">
                <span className="icon-chip">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {number}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy-900">
                <span className="sr-only">Trin {number}: </span>
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-navy-700">{summary}</p>
              <ul className="mt-6 space-y-3 border-t border-cream-300 pt-6">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm font-medium text-navy-700">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
