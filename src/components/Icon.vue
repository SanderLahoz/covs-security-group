<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { iconShapes, type IconName, type IconShape } from "@/components/icons";

/**
 * Samlet ikonkomponent (erstatter de enkelte ikoner fra Icons.tsx).
 * Brug fx <Icon name="mail" class="h-5 w-5" />. Klasser sendes videre til <svg>.
 */
export default defineComponent({
  name: "Icon",
  props: {
    name: { type: String as PropType<IconName>, required: true },
  },
  computed: {
    shapes(): IconShape[] {
      return iconShapes[this.name];
    },
  },
});
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <component :is="s.tag" v-for="(s, i) in shapes" :key="i" v-bind="s.attrs" />
  </svg>
</template>
