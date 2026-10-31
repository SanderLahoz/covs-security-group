# SecuriLocal ITU: landingsside

Marketing-landingsside (100 % dansk) for en cybersikkerheds-startup drevet af IT-studerende fra ITU.
Bygget med **Next.js 16 (App Router, React 19)**, **TypeScript (strict)** og **Tailwind CSS**.

Siden er rent informativ: **ingen formularer, ingen inputfelter, ingen database**. Kontakt sker via `mailto:` og `tel:`.

## Kom i gang

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produktionsbuild
npm run start
```

## Det skal du opdatere

Alt brand- og kontaktindhold ligger i `lib/site.ts`:

- `brandName`: midlertidigt "SecuriLocal ITU"
- `email`: midlertidigt `kontakt@dit-domaene.dk`
- `phoneDisplay` / `phoneHref`: midlertidigt `+45 00 00 00 00`

Øvrige placeholders:

- Logo: `components/Logo.tsx` (skjold og "[Logo]"-boks)
- Priser: `components/Pricing.tsx` (`[Fast pris]` / `[Efter aftale]`)
- CVR: `components/Footer.tsx`

## Design

Lyst, enkelt og venligt udtryk. Farver ligger i `tailwind.config.ts`: varme creme-toner (`cream`),
mørk marineblå tekst (`navy`) og én mørkegrøn accent (`brand`). `coral` bruges kun i illustrationer.
Fælles knap- og kort-stilarter (hover, kanter, løft) ligger i `app/globals.css`.

Illustrationerne er originale SVG-figurer i `components/illustrations/`. De kan redigeres direkte
eller erstattes af jeres egne (fx fra en illustrator) uden at røre resten af siden.

## Struktur

```
app/            layout, side og globale styles
components/     Navbar, Hero, Highlights, Problem, Steps, WhyUs, Pricing, FAQ, Contact, Footer, Logo, Icons
components/illustrations/   Hero-, butiks-, team- og kontaktillustration
lib/site.ts     central konfiguration (brand, kontakt, navigation)
```

## Noter

- Ingen eksterne fonte eller tredjeparts-scripts (systemfonte). Godt for hastighed og GDPR.
- FAQ-accordion og mobilmenu er `"use client"`-komponenter med React-state.
- Tilføj `/privatlivspolitik` og virksomhedsoplysninger (CVR m.m.), før siden går live.
