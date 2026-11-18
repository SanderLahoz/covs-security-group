<script lang="ts">
import { defineComponent } from "vue";
import Sparkle from "@/components/illustrations/Sparkle.vue";

/** Original illustration: en butiksfront med åben dør og en åben hængelås. */
export default defineComponent({
  name: "ShopIllustration",
  components: { Sparkle },
  props: {
    className: { type: String, default: undefined },
  },
  data() {
    return {
      stripes: [0, 1, 2, 3, 4, 5] as readonly number[],
      stripeWidth: 250 / 6,
    };
  },
});
</script>

<template>
  <svg
    viewBox="0 0 440 380"
    :class="className"
    role="img"
    aria-label="Illustration af en butik med åben dør og en åben hængelås"
    fill="none"
  >
    <circle cx="220" cy="190" r="165" fill="#FBE4D4" />
    <ellipse cx="220" cy="342" rx="190" ry="14" fill="#F3DFCC" />

    <!-- Bygning -->
    <rect x="85" y="150" width="230" height="192" rx="6" fill="#ffffff" stroke="#EBD5BF" stroke-width="2" />

    <!-- Markise -->
    <g>
      <rect
        v-for="i in stripes"
        :key="`stripe-${i}`"
        :x="75 + i * stripeWidth"
        :y="110"
        :width="stripeWidth + 0.5"
        :height="46"
        :fill="i % 2 === 0 ? '#E9826A' : '#FFF4EA'"
      />
      <circle
        v-for="i in stripes"
        :key="`scallop-${i}`"
        :cx="75 + i * stripeWidth + stripeWidth / 2"
        :cy="156"
        :r="stripeWidth / 2"
        :fill="i % 2 === 0 ? '#E9826A' : '#FFF4EA'"
      />
      <rect x="75" y="108" width="250" height="4" fill="#C9674F" />
    </g>

    <!-- Vindue med skilt -->
    <rect x="105" y="196" width="88" height="78" rx="4" fill="#DCEBF1" stroke="#EBD5BF" stroke-width="2" />
    <rect x="121" y="214" width="56" height="26" rx="5" fill="#ffffff" />
    <text
      x="149"
      y="232"
      text-anchor="middle"
      font-size="14"
      font-weight="800"
      fill="#16233A"
      font-family="ui-sans-serif, system-ui, sans-serif"
    >
      ÅBEN
    </text>

    <!-- Åben dør -->
    <rect x="225" y="196" width="66" height="146" fill="#3A2A22" />
    <polygon points="225,196 262,210 262,342 225,342" fill="#8A6A55" />
    <circle cx="256" cy="275" r="3.5" fill="#F2B544" />

    <!-- Åben hængelås -->
    <g transform="translate(348 262)">
      <g class="animate-float">
        <path
          d="M-18 0 V-22 a18 18 0 0 1 36 0 V-8"
          stroke="#C9921F"
          stroke-width="7"
          stroke-linecap="round"
        />
        <rect x="-34" y="0" width="68" height="58" rx="10" fill="#F2B544" />
        <circle cx="0" cy="24" r="7" fill="#8A5A00" />
        <rect x="-2.5" y="28" width="5" height="14" rx="2" fill="#8A5A00" />
      </g>
    </g>

    <Sparkle :x="62" :y="170" :scale="0.8" fill="#F2B544" />
    <Sparkle :x="398" :y="140" :scale="0.6" fill="#E9826A" />
    <Sparkle :x="330" :y="70" :scale="0.5" fill="#2E8A6B" />
  </svg>
</template>
