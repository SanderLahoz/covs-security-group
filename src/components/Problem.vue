<script lang="ts">
import { defineComponent } from "vue";
import ShopIllustration from "@/components/illustrations/ShopIllustration.vue";
import Icon from "@/components/Icon.vue";
import type { IconName } from "@/components/icons";

interface ProblemPoint {
  title: string;
  text: string;
  icon: IconName;
}

const points: readonly ProblemPoint[] = [
  {
    title: "Gamle plugins",
    text: "Små tilføjelser til menukort, booking eller webshop. Hvis de ikke opdateres, kender hackere fejlene.",
    icon: "puzzle",
  },
  {
    title: "Gammel kode",
    text: "Med tiden bliver dele af siden droppet af deres udviklere. Hullerne bliver aldrig lukket.",
    icon: "clock",
  },
  {
    title: "Ingen holder øje",
    text: "Mange sider er en engangsopgave. Efter fakturaen kigger ingen på sikkerheden.",
    icon: "lockOpen",
  },
];

export default defineComponent({
  name: "Problem",
  components: { ShopIllustration, Icon },
  data() {
    return { points };
  },
});
</script>

<template>
  <section id="problemet" class="section-anchor bg-cream-50 py-24 sm:py-32">
    <div class="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
      <ShopIllustration class-name="mx-auto w-full max-w-md lg:max-w-none" />

      <div>
        <p class="eyebrow">Hvorfor det betyder noget</p>
        <h2 class="heading mt-4 text-3xl sm:text-4xl">
          Din hjemmeside er hoveddøren til din forretning
        </h2>
        <p class="mt-5 text-lg leading-relaxed text-navy-700">
          Du lader ikke døren til din café stå ulåst. Men en hjemmeside, der
          ikke er opdateret i årevis, er netop det.
        </p>

        <ul class="mt-10 space-y-6">
          <li v-for="pt in points" :key="pt.title" class="flex gap-5">
            <span class="icon-chip">
              <Icon :name="pt.icon" class="h-6 w-6" />
            </span>
            <div>
              <h3 class="text-lg font-bold text-navy-900">{{ pt.title }}</h3>
              <p class="mt-1 leading-relaxed text-navy-700">{{ pt.text }}</p>
            </div>
          </li>
        </ul>

        <p class="mt-10 rounded-xl border border-cream-300 bg-cream-100 p-5 text-sm font-medium leading-relaxed text-navy-900">
          Den gode nyhed: En ny lås er som regel hurtig og billig at få sat i.
        </p>
      </div>
    </div>
  </section>
</template>
