import type { ComponentType, SVGProps } from "react";
import {
  FileSignIcon,
  PinIcon,
  ReportIcon,
  SearchShieldIcon,
  TagIcon,
} from "@/components/Icons";

interface Highlight {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const highlights: readonly Highlight[] = [
  { label: "Skriftlig aftale", Icon: FileSignIcon },
  { label: "Skånsom test", Icon: SearchShieldIcon },
  { label: "Rapport på dansk", Icon: ReportIcon },
  { label: "Fast pris", Icon: TagIcon },
  { label: "Lokal kontakt", Icon: PinIcon },
];

/** Stribe med fem korte løfter. Overlapper bunden af hero. */
export default function Highlights() {
  return (
    <div className="relative z-10 mx-auto -mt-28 max-w-6xl px-6 sm:-mt-32">
      <ul className="grid grid-cols-2 gap-y-8 rounded-2xl border border-cream-300 bg-white px-6 py-10 shadow-xl shadow-navy-900/5 sm:grid-cols-3 lg:grid-cols-5">
        {highlights.map(({ label, Icon }) => (
          <li
            key={label}
            className="group flex flex-col items-center gap-4 text-center"
          >
            <span className="icon-chip h-14 w-14 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-500 group-hover:text-white">
              <Icon className="h-6 w-6" />
            </span>
            <span className="text-sm font-bold text-navy-900">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
