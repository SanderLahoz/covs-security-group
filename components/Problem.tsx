import type { ComponentType, SVGProps } from "react";
import ShopIllustration from "@/components/illustrations/ShopIllustration";
import { ClockIcon, LockOpenIcon, PuzzleIcon } from "@/components/Icons";

interface ProblemPoint {
  title: string;
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const points: readonly ProblemPoint[] = [
  {
    title: "Gamle plugins",
    text: "Små tilføjelser til menukort, booking eller webshop. Hvis de ikke opdateres, kender hackere fejlene.",
    Icon: PuzzleIcon,
  },
  {
    title: "Gammel kode",
    text: "Med tiden bliver dele af siden droppet af deres udviklere. Hullerne bliver aldrig lukket.",
    Icon: ClockIcon,
  },
  {
    title: "Ingen holder øje",
    text: "Mange sider er en engangsopgave. Efter fakturaen kigger ingen på sikkerheden.",
    Icon: LockOpenIcon,
  },
];

export default function Problem() {
  return (
    <section id="problemet" className="section-anchor bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <ShopIllustration className="mx-auto w-full max-w-md lg:max-w-none" />

        <div>
          <p className="eyebrow">Hvorfor det betyder noget</p>
          <h2 className="heading mt-4 text-3xl sm:text-4xl">
            Din hjemmeside er hoveddøren til din forretning
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-700">
            Du lader ikke døren til din café stå ulåst. Men en hjemmeside, der
            ikke er opdateret i årevis, er netop det.
          </p>

          <ul className="mt-10 space-y-6">
            {points.map(({ title, text, Icon }) => (
              <li key={title} className="flex gap-5">
                <span className="icon-chip">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">{title}</h3>
                  <p className="mt-1 leading-relaxed text-navy-700">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-10 rounded-xl border border-cream-300 bg-cream-100 p-5 text-sm font-medium leading-relaxed text-navy-900">
            Den gode nyhed: En ny lås er som regel hurtig og billig at få sat i.
          </p>
        </div>
      </div>
    </section>
  );
}
