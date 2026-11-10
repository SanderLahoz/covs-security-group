<script lang="ts">
import { defineComponent } from "vue";
import TeamIllustration from "@/components/illustrations/TeamIllustration.vue";
import Icon from "@/components/Icon.vue";
import type { IconName } from "@/components/icons";

interface Reason {
  title: string;
  text: string;
  icon: IconName;
}

const reasons: readonly Reason[] = [
  {
    title: "Viden fra ITU",
    text: "Vi studerer IT og cybersikkerhed og arbejder med nutidens trusler.",
    icon: "graduation",
  },
  {
    title: "Små virksomheder",
    text: "Vi bygger til caféer, frisører og butikker, hvor tid og budget er knappe.",
    icon: "store",
  },
  {
    title: "Lokalt og personligt",
    text: "Du taler direkte med dem, der tester din side. Ingen callcenter.",
    icon: "pin",
  },
  {
    title: "Fast pris",
    text: "Du kender prisen på forhånd. Ingen skjulte gebyrer.",
    icon: "tag",
  },
];

export default defineComponent({
  name: "WhyUs",
  components: { TeamIllustration, Icon },
  data() {
    return { reasons };
  },
});
</script>

<template>
  <section id="hvorfor-os" class="section-anchor bg-cream-50 py-24 sm:py-32">
    <div class="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
      <div class="order-2 lg:order-1">
        <p class="eyebrow">Hvorfor os?</p>
        <h2 class="heading mt-4 text-3xl sm:text-4xl">
          Faglig viden og lokal service
        </h2>
        <p class="mt-5 text-lg leading-relaxed text-navy-700">
          Vi er IT-studerende fra IT-Universitetet i København. God
          IT-sikkerhed skal ikke kun være for de store virksomheder.
        </p>

        <ul class="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
          <li v-for="r in reasons" :key="r.title" class="group">
            <span class="icon-chip transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-500 group-hover:text-white">
              <Icon :name="r.icon" class="h-6 w-6" />
            </span>
            <h3 class="mt-4 text-lg font-bold text-navy-900">{{ r.title }}</h3>
            <p class="mt-1 leading-relaxed text-navy-700">{{ r.text }}</p>
          </li>
        </ul>
      </div>

      <TeamIllustration class-name="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none" />
    </div>
  </section>
</template>
