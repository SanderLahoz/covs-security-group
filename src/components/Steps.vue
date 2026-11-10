<script lang="ts">
import { defineComponent } from "vue";
import Icon from "@/components/Icon.vue";
import type { IconName } from "@/components/icons";

interface Step {
  number: string;
  title: string;
  summary: string;
  bullets: readonly string[];
  icon: IconName;
}

const steps: readonly Step[] = [
  {
    number: "1",
    title: "Aftale & Tilladelse",
    summary: "Vi underskriver en klar aftale, før vi rører noget.",
    bullets: ["Hvad vi må teste, og hvad vi ikke må", "100% lovligt og trygt"],
    icon: "fileSign",
  },
  {
    number: "2",
    title: "Det etiske tjek (pentesting)",
    summary: "Vi leder efter svage punkter, som en hacker ville. Uden at ødelægge noget.",
    bullets: ["Skånsom test af plugins og kode", "Intet bliver ændret eller slettet"],
    icon: "searchShield",
  },
  {
    number: "3",
    title: "Rapport & Løsning",
    summary: "Du får en rapport på almindeligt dansk. Du vælger, hvem der retter.",
    bullets: ["Ret det selv", "Giv det til dit bureau", "Eller lad os klare det"],
    icon: "report",
  },
];

export default defineComponent({
  name: "Steps",
  components: { Icon },
  data() {
    return { steps };
  },
});
</script>

<template>
  <section
    id="sadan-foregar-det"
    class="section-anchor bg-cream-100 py-24 sm:py-32"
  >
    <div class="mx-auto max-w-6xl px-6">
      <div class="mx-auto max-w-2xl text-center">
        <p class="eyebrow">Sådan foregår det</p>
        <h2 class="heading mt-4 text-3xl sm:text-4xl">Tre enkle trin</h2>
        <p class="mt-5 text-lg leading-relaxed text-navy-700">
          Du skal bare sende os adressen på din hjemmeside.
        </p>
      </div>

      <ol class="mt-16 grid gap-6 md:grid-cols-3">
        <li v-for="s in steps" :key="s.number" class="card flex flex-col">
          <div class="flex items-center justify-between">
            <span class="icon-chip">
              <Icon :name="s.icon" class="h-6 w-6" />
            </span>
            <span class="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-sm font-bold text-white">
              {{ s.number }}
            </span>
          </div>
          <h3 class="mt-6 text-xl font-bold text-navy-900">
            <span class="sr-only">Trin {{ s.number }}: </span>
            {{ s.title }}
          </h3>
          <p class="mt-3 leading-relaxed text-navy-700">{{ s.summary }}</p>
          <ul class="mt-6 space-y-3 border-t border-cream-300 pt-6">
            <li v-for="b in s.bullets" :key="b" class="flex gap-3 text-sm font-medium text-navy-700">
              <Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              {{ b }}
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>
