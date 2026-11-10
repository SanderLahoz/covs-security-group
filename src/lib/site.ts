/**
 * Central konfiguration. Ret her for at opdatere brand, kontaktoplysninger
 * og navigation på hele siden.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  brandName: string;
  logoPlaceholder: string;
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  university: string;
  nav: NavLink[];
}

export const site: SiteConfig = {
  // TODO: Udskift med jeres rigtige brandnavn
  brandName: "COVS",
  logoPlaceholder: "",
  // TODO: Udskift med jeres rigtige domæne og telefonnummer
  email: "covsgroup@protonmail.com",
  phoneDisplay: "",
  phoneHref: "",
  university: "IT-Universitetet i København (ITU)",
  nav: [
    { label: "Sådan foregår det", href: "#sadan-foregar-det" },
    { label: "Hvorfor os?", href: "#hvorfor-os" },
    { label: "Pris & Pakker", href: "#pris" },
    { label: "FAQ", href: "#faq" },
  ],
};

export const mailtoHref = (subject?: string): string =>
  subject
    ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${site.email}`;
