<script lang="ts">
import { defineComponent } from "vue";

/** Lille firetakket stjerne brugt som dekoration i illustrationerne. */
export default defineComponent({
  name: "Sparkle",
  props: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    scale: { type: Number, default: 1 },
    fill: { type: String, default: "#F2B544" },
  },
});
</script>

<template>
  <path
    d="M0 -12 Q0 0 12 0 Q0 0 0 12 Q0 0 -12 0 Q0 0 0 -12Z"
    :fill="fill"
    :transform="`translate(${x} ${y}) scale(${scale})`"
  />
</template>
