<script lang="ts">
import { defineComponent } from "vue";
import Icon from "@/components/Icon.vue";
import type { IconName } from "@/components/icons";

interface Highlight {
  label: string;
  icon: IconName;
}

const highlights: readonly Highlight[] = [
  { label: "Skriftlig aftale", icon: "fileSign" },
  { label: "Skånsom test", icon: "searchShield" },
  { label: "Rapport på dansk", icon: "report" },
  { label: "Fast pris", icon: "tag" },
  { label: "Lokal kontakt", icon: "pin" },
];

/** Stribe med fem korte løfter. Overlapper bunden af hero. */
export default defineComponent({
  name: "Highlights",
  components: { Icon },
  data() {
    return { highlights };
  },
});
</script>

<template>
  <div class="relative z-10 mx-auto -mt-28 max-w-6xl px-6 sm:-mt-32">
    <ul class="grid grid-cols-2 gap-y-8 rounded-2xl border border-cream-300 bg-white px-6 py-10 shadow-xl shadow-navy-900/5 sm:grid-cols-3 lg:grid-cols-5">
      <li
        v-for="h in highlights"
        :key="h.label"
        class="group flex flex-col items-center gap-4 text-center"
      >
        <span class="icon-chip h-14 w-14 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-brand-500 group-hover:text-white">
          <Icon :name="h.icon" class="h-6 w-6" />
        </span>
        <span class="text-sm font-bold text-navy-900">{{ h.label }}</span>
      </li>
    </ul>
  </div>
</template>
