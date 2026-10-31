"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/Icons";

interface FaqItem {
  question: string;
  answer: string;
}

const items: readonly FaqItem[] = [
  {
    question: "Er det lovligt?",
    answer:
      "Ja. Vi laver altid en skriftlig aftale, før vi rører noget. Uden din underskrift sker der ingenting.",
  },
  {
    question: "Kan I komme til at ødelægge min hjemmeside?",
    answer:
      "Nej. Vores test er skånsomme. Vi leder efter svagheder, men ændrer eller sletter intet.",
  },
  {
    question: "Hvad koster det?",
    answer:
      "Det indledende tjek har en fast, åben pris. Skal noget rettes, vælger du selv, hvad du vil betale for.",
  },
  {
    question: "Hvorfor har min restaurant eller butik brug for dette?",
    answer:
      "Automatiske robotter leder døgnet rundt efter gamle plugins. De ramler også små sider.",
  },
  {
    question: "Skal jeg kunne noget om IT?",
    answer:
      "Nej. Send os adressen på din hjemmeside. Rapporten er på almindeligt dansk.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number): void =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section id="faq" className="section-anchor bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="heading mt-4 text-3xl sm:text-4xl">
            Ofte stillede spørgsmål
          </h2>
        </div>

        <div className="mt-14 space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div
                key={item.question}
                className={`rounded-xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-brand-400/60 shadow-lg shadow-navy-900/5"
                    : "border-cream-300 hover:border-navy-400/50"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-6 rounded-xl px-6 py-5 text-left text-base font-bold text-navy-900"
                  >
                    {item.question}
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-180 text-brand-500" : "text-navy-500"
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-navy-700">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
