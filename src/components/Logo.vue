<script lang="ts">
import { defineComponent, type PropType } from "vue";
import Icon from "@/components/Icon.vue";
import { site } from "@/lib/site";

/**
 * Placeholder-logo: skjold, "[Logo]"-boks og brandnavn.
 * Udskift indholdet her, når det rigtige logo er klar.
 */
export default defineComponent({
  name: "Logo",
  components: { Icon },
  props: {
    /** "onLight" til lyse baggrunde, "onDark" til mørke (fx footer) */
    tone: { type: String as PropType<"onLight" | "onDark">, default: "onLight" },
    /** Vis det lille "[Logo]"-placeholder-felt ved siden af skjoldet */
    showPlaceholderBox: { type: Boolean, default: true },
  },
  data() {
    return { site };
  },
  computed: {
    dark(): boolean {
      return this.tone === "onDark";
    },
  },
});
</script>

<template>
  <span class="inline-flex items-center gap-3">
    <span class="grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-white">
      <Icon name="shieldCheck" class="h-5 w-5" />
    </span>
    <span
      v-if="showPlaceholderBox"
      :class="`hidden rounded border border-dashed px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider sm:inline ${
        dark ? 'border-white/30 text-white/60' : 'border-navy-400/50 text-navy-500'
      }`"
    >
      {{ site.logoPlaceholder }}
    </span>
    <span
      :class="`text-base font-bold tracking-tight ${dark ? 'text-white' : 'text-navy-900'}`"
    >
      {{ site.brandName }}
    </span>
  </span>
</template>
