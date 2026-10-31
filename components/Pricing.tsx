import { CheckIcon, MailIcon } from "@/components/Icons";
import { mailtoHref } from "@/lib/site";

interface Pack {
  name: string;
  price: string;
  priceNote: string;
  features: readonly string[];
  highlighted: boolean;
}

/* TODO: Udskift prisplaceholders med jeres rigtige priser. */
const packs: readonly Pack[] = [
  {
    name: "Indledende tjek",
    price: "[Fast pris]",
    priceNote: "Ingen binding",
    features: ["Skriftlig aftale", "Hurtigt overblik over risici", "Uforpligtende samtale"],
    highlighted: false,
  },
  {
    name: "Fuld rapport",
    price: "[Fast pris]",
    priceNote: "Aftalt på forhånd",
    features: ["Grundig test", "Rapport på almindeligt dansk", "Hvad skal rettes først"],
    highlighted: true,
  },
  {
    name: "Rettelser",
    price: "[Efter aftale]",
    priceNote: "Du vælger selv",
    features: ["Fast pris pr. rettelse", "Du godkender alt først", "Ingen abonnement"],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pris" className="section-anchor bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Pris & Pakker</p>
          <h2 className="heading mt-4 text-3xl sm:text-4xl">
            Du kender prisen, før vi starter
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-700">
            Start med et tjek. Vælg bagefter, hvad du vil have rettet.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {packs.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-xl hover:shadow-navy-900/10 ${
                p.highlighted ? "border-brand-500 border-2" : "border-cream-300"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">
                  Mest valgt
                </span>
              )}
              <h3 className="text-lg font-bold text-navy-900">{p.name}</h3>
              <p className="mt-4 text-3xl font-extrabold text-navy-900">{p.price}</p>
              <p className="mt-1 text-sm text-navy-500">{p.priceNote}</p>
              <ul className="mt-8 flex-1 space-y-3 border-t border-cream-300 pt-8">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm font-medium text-navy-700">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={mailtoHref(`Spørgsmål om: ${p.name}`)}
                className={`mt-8 ${p.highlighted ? "btn-primary" : "btn-secondary"}`}
              >
                <MailIcon className="h-5 w-5" />
                Skriv til os
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
