<script lang="ts">
import { defineComponent } from "vue";
import HeroIllustration from "@/components/illustrations/HeroIllustration.vue";
import Icon from "@/components/Icon.vue";
import { mailtoHref } from "@/lib/site";

const checks: readonly string[] = [
  "Skriftlig aftale først",
  "Ingen risiko for din side",
  "Rapport på almindeligt dansk",
];

export default defineComponent({
  name: "Hero",
  components: { HeroIllustration, Icon },
  data() {
    return { checks };
  },
  methods: {
    mailtoHref,
  },
});
</script>

<template>
  <section
    id="top"
    class="relative overflow-hidden bg-cream-100 pt-32 pb-44 sm:pt-40 sm:pb-52"
  >
    <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="animate-fade-up">
        <div class="inline-flex flex-col gap-2 rounded-xl border border-cream-300 bg-cream-200 px-5 py-3 text-sm font-semibold text-navy-900 sm:flex-row sm:gap-6">
          <span class="flex items-center gap-2">
            <Icon name="graduation" class="h-4 w-4 text-brand-500" />
            Stiftet af IT-studerende fra ITU
          </span>
          <span class="flex items-center gap-2">
            <Icon name="pin" class="h-4 w-4 text-brand-500" />
            Lokalt baseret i København
          </span>
        </div>

        <h1 class="heading mt-8 text-4xl leading-[1.12] sm:text-5xl lg:text-6xl">
          Er din hjemmeside <span class="text-brand-500">faktisk sikker</span>
          mod hackerangreb?
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-relaxed text-navy-700">
          Vi hjælper lokale butikker, caféer og restauranter med at sikre
          deres hjemmeside. Vi er IT-studerende fra ITU i København.
        </p>

        <div class="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            :href="mailtoHref('Jeg vil gerne have tjekket min hjemmeside')"
            class="btn-primary"
          >
            <Icon name="mail" class="h-5 w-5" />
            Kontakt os via e-mail
          </a>
          <a href="#sadan-foregar-det" class="btn-secondary">
            Læs hvordan det foregår
          </a>
        </div>

        <ul class="mt-10 flex flex-col gap-3 text-sm font-medium text-navy-700 sm:flex-row sm:flex-wrap sm:gap-x-8">
          <li v-for="c in checks" :key="c" class="flex items-center gap-2 whitespace-nowrap">
            <Icon name="check" class="h-4 w-4 text-brand-500" />
            {{ c }}
          </li>
        </ul>
      </div>

      <div class="animate-fade-up [animation-delay:150ms]">
        <HeroIllustration class-name="mx-auto w-full max-w-md lg:max-w-none" />
      </div>
    </div>
  </section>
</template>
