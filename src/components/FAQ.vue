<script lang="ts">
import { defineComponent } from "vue";
import Icon from "@/components/Icon.vue";

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

export default defineComponent({
  name: "FAQ",
  components: { Icon },
  data() {
    return {
      items,
      openIndex: 0 as number | null,
    };
  },
  methods: {
    toggle(index: number): void {
      this.openIndex = this.openIndex === index ? null : index;
    },
  },
});
</script>

<template>
  <section id="faq" class="section-anchor bg-cream-50 py-24 sm:py-32">
    <div class="mx-auto max-w-3xl px-6">
      <div class="text-center">
        <p class="eyebrow">FAQ</p>
        <h2 class="heading mt-4 text-3xl sm:text-4xl">
          Ofte stillede spørgsmål
        </h2>
      </div>

      <div class="mt-14 space-y-3">
        <div
          v-for="(item, i) in items"
          :key="item.question"
          :class="`rounded-xl border bg-white transition-all duration-300 ${
            openIndex === i
              ? 'border-brand-400/60 shadow-lg shadow-navy-900/5'
              : 'border-cream-300 hover:border-navy-400/50'
          }`"
        >
          <h3>
            <button
              type="button"
              :id="`faq-button-${i}`"
              :aria-expanded="openIndex === i"
              :aria-controls="`faq-panel-${i}`"
              class="flex w-full items-center justify-between gap-6 rounded-xl px-6 py-5 text-left text-base font-bold text-navy-900"
              @click="toggle(i)"
            >
              {{ item.question }}
              <Icon
                name="chevronDown"
                :class="`h-5 w-5 shrink-0 transition-all duration-300 ${
                  openIndex === i ? 'rotate-180 text-brand-500' : 'text-navy-500'
                }`"
              />
            </button>
          </h3>
          <div
            :id="`faq-panel-${i}`"
            role="region"
            :aria-labelledby="`faq-button-${i}`"
            :class="`grid transition-[grid-template-rows] duration-300 ease-out ${
              openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
            }`"
          >
            <div class="overflow-hidden">
              <p class="px-6 pb-6 leading-relaxed text-navy-700">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
