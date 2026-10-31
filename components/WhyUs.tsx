import type { ComponentType, SVGProps } from "react";
import TeamIllustration from "@/components/illustrations/TeamIllustration";
import { GraduationIcon, PinIcon, StoreIcon, TagIcon } from "@/components/Icons";

interface Reason {
  title: string;
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const reasons: readonly Reason[] = [
  {
    title: "Viden fra ITU",
    text: "Vi studerer IT og cybersikkerhed og arbejder med nutidens trusler.",
    Icon: GraduationIcon,
  },
  {
    title: "Små virksomheder",
    text: "Vi bygger til caféer, frisører og butikker, hvor tid og budget er knappe.",
    Icon: StoreIcon,
  },
  {
    title: "Lokalt og personligt",
    text: "Du taler direkte med dem, der tester din side. Ingen callcenter.",
    Icon: PinIcon,
  },
  {
    title: "Fast pris",
    text: "Du kender prisen på forhånd. Ingen skjulte gebyrer.",
    Icon: TagIcon,
  },
];

export default function WhyUs() {
  return (
    <section id="hvorfor-os" className="section-anchor bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="eyebrow">Hvorfor os?</p>
          <h2 className="heading mt-4 text-3xl sm:text-4xl">
            Faglig viden og lokal service
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-700">
            Vi er IT-studerende fra IT-Universitetet i København. God
            IT-sikkerhed skal ikke kun være for de store virksomheder.
          </p>

          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {reasons.map(({ title, text, Icon }) => (
              <li key={title} className="group">
                <span className="icon-chip transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-1 leading-relaxed text-navy-700">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <TeamIllustration className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none" />
      </div>
    </section>
  );
}
