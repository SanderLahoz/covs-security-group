import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.brandName} | Sikkerhedstjek af din hjemmeside`,
  description:
    "IT-studerende fra ITU hjælper lokale virksomheder med at få tjekket og sikret deres hjemmeside. Rapport på almindeligt dansk og fast pris.",
  openGraph: {
    title: `${site.brandName} | Sikkerhedstjek af din hjemmeside`,
    description:
      "Er din hjemmeside sikker? Vi hjælper lokale butikker, caféer og restauranter.",
    locale: "da_DK",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fffcf8",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
