import { ShieldCheckIcon } from "@/components/Icons";
import { site } from "@/lib/site";

interface LogoProps {
  /** "onLight" til lyse baggrunde, "onDark" til mørke (fx footer) */
  tone?: "onLight" | "onDark";
  /** Vis det lille "[Logo]"-placeholder-felt ved siden af skjoldet */
  showPlaceholderBox?: boolean;
}

/**
 * Placeholder-logo: skjold, "[Logo]"-boks og brandnavn.
 * Udskift indholdet her, når det rigtige logo er klar.
 */
export default function Logo({ tone = "onLight", showPlaceholderBox = true }: LogoProps) {
  const dark = tone === "onDark";
  return (
    <span className="inline-flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-white">
        <ShieldCheckIcon className="h-5 w-5" />
      </span>
      {showPlaceholderBox && (
        <span
          className={`hidden rounded border border-dashed px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider sm:inline ${
            dark ? "border-white/30 text-white/60" : "border-navy-400/50 text-navy-500"
          }`}
        >
          {site.logoPlaceholder}
        </span>
      )}
      <span
        className={`text-base font-bold tracking-tight ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        {site.brandName}
      </span>
    </span>
  );
}
