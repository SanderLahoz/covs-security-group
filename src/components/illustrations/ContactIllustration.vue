<script lang="ts">
import { defineComponent } from "vue";
import Sparkle from "@/components/illustrations/Sparkle.vue";

/** Original illustration: en person, der vinker, med en "Hej!"-boble. */
export default defineComponent({
  name: "ContactIllustration",
  components: { Sparkle },
  props: {
    className: { type: String, default: undefined },
  },
});
</script>

<template>
  <svg
    viewBox="0 0 300 280"
    :class="className"
    role="img"
    aria-label="Illustration af en venlig person, der vinker"
    fill="none"
  >
    <circle cx="160" cy="150" r="108" fill="#ffffff" opacity="0.14" />

    <!-- Person -->
    <path d="M92 280 Q92 196 160 190 Q228 196 228 280 Z" fill="#FDF6EE" />
    <rect x="148" y="162" width="24" height="34" rx="8" fill="#E9B896" />
    <circle cx="160" cy="140" r="36" fill="#F3C9A5" />
    <path d="M124 138 Q122 96 160 96 Q198 96 196 138 Q188 116 160 116 Q132 116 124 138 Z" fill="#4A2F27" />
    <circle cx="148" cy="143" r="3" fill="#2B2B2B" />
    <circle cx="172" cy="143" r="3" fill="#2B2B2B" />
    <path d="M150 155 Q160 164 170 155" stroke="#2B2B2B" stroke-width="2.5" stroke-linecap="round" />
    <circle cx="139" cy="154" r="5" fill="#F2A07B" opacity="0.5" />
    <circle cx="181" cy="154" r="5" fill="#F2A07B" opacity="0.5" />

    <!-- Vinkende arm -->
    <path d="M214 232 Q248 208 244 160" stroke="#F3C9A5" stroke-width="16" stroke-linecap="round" />
    <circle cx="244" cy="150" r="12" fill="#F3C9A5" />

    <!-- Boble -->
    <g class="animate-float">
      <rect x="30" y="34" width="96" height="52" rx="16" fill="#ffffff" />
      <polygon points="96,84 112,84 108,102" fill="#ffffff" />
      <text
        x="78"
        y="68"
        text-anchor="middle"
        font-size="26"
        font-weight="800"
        fill="#1E6B52"
        font-family="ui-sans-serif, system-ui, sans-serif"
      >
        Hej!
      </text>
    </g>

    <Sparkle :x="262" :y="80" :scale="0.7" fill="#F2B544" />
    <Sparkle :x="40" :y="170" :scale="0.6" fill="#ffffff" />
  </svg>
</template>
