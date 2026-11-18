<script lang="ts">
import { defineComponent } from "vue";
import Sparkle from "@/components/illustrations/Sparkle.vue";

/** Original illustration: en café-ejer foran sin bærbare med et sikkerhedsskjold. */
export default defineComponent({
  name: "HeroIllustration",
  components: { Sparkle },
  props: {
    className: { type: String, default: undefined },
  },
});
</script>

<template>
  <svg
    viewBox="0 0 440 380"
    :class="className"
    role="img"
    aria-label="Illustration af en venlig ejer, der har fået sin hjemmeside sikret"
    fill="none"
  >
    <circle cx="220" cy="205" r="160" fill="#FBE4D4" />
    <circle cx="220" cy="205" r="120" fill="#FDEFE4" />

    <!-- Skyer -->
    <g fill="#ffffff">
      <ellipse cx="62" cy="150" rx="32" ry="12" />
      <ellipse cx="86" cy="140" rx="20" ry="13" />
      <ellipse cx="46" cy="142" rx="14" ry="9" />
      <ellipse cx="385" cy="300" rx="30" ry="11" />
      <ellipse cx="405" cy="291" rx="16" ry="11" />
    </g>

    <!-- Person -->
    <path d="M140 345 Q140 252 220 246 Q300 252 300 345 Z" fill="#1E6B52" />
    <rect x="208" y="214" width="24" height="36" rx="8" fill="#E9B896" />
    <circle cx="220" cy="190" r="38" fill="#F3C9A5" />
    <path
      d="M181 190 Q178 142 220 142 Q262 142 259 190 Q250 166 220 166 Q190 166 181 190 Z"
      fill="#4A2F27"
    />
    <circle cx="220" cy="130" r="16" fill="#4A2F27" />
    <circle cx="207" cy="193" r="3" fill="#2B2B2B" />
    <circle cx="233" cy="193" r="3" fill="#2B2B2B" />
    <path d="M211 206 Q220 214 229 206" stroke="#2B2B2B" stroke-width="2.5" stroke-linecap="round" />
    <circle cx="198" cy="204" r="5" fill="#F2A07B" opacity="0.5" />
    <circle cx="242" cy="204" r="5" fill="#F2A07B" opacity="0.5" />

    <!-- Bærbar med skjold -->
    <rect x="158" y="258" width="124" height="78" rx="8" fill="#16233A" />
    <rect x="165" y="265" width="110" height="64" rx="4" fill="#223552" />
    <g transform="translate(200.8 272.8) scale(1.6)">
      <path
        d="M12 3 4.5 6v5.5c0 4.6 3.1 8.4 7.5 9.5 4.4-1.1 7.5-4.9 7.5-9.5V6L12 3Z"
        fill="#2E8A6B"
      />
      <path
        d="m8.8 12.2 2.3 2.3 4.2-4.6"
        stroke="#ffffff"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <rect x="140" y="336" width="160" height="10" rx="5" fill="#C9D2DA" />

    <!-- Svævende bobler -->
    <g transform="translate(95 118)">
      <g class="animate-float">
        <circle r="30" fill="#ffffff" stroke="#EBD5BF" stroke-width="2" />
        <rect x="-10" y="-2" width="20" height="15" rx="3" fill="#F2B544" />
        <path d="M-6 -2 v-6 a6 6 0 0 1 12 0 v6" stroke="#C9921F" stroke-width="3" stroke-linecap="round" />
      </g>
    </g>
    <g transform="translate(350 112)">
      <g class="animate-float [animation-delay:1.5s]">
        <circle r="26" fill="#2E8A6B" />
        <path d="M-9 0 l6 6 l12 -12" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </g>
    </g>
    <g transform="translate(358 252)">
      <g class="animate-float [animation-delay:3s]">
        <circle r="24" fill="#ffffff" stroke="#EBD5BF" stroke-width="2" />
        <circle cx="-3" cy="-3" r="8" stroke="#E9826A" stroke-width="3" />
        <path d="M3 3 L11 11" stroke="#E9826A" stroke-width="3" stroke-linecap="round" />
      </g>
    </g>

    <Sparkle :x="60" :y="235" :scale="0.9" fill="#F2B544" />
    <Sparkle :x="392" :y="185" :scale="0.6" fill="#2E8A6B" />
    <Sparkle :x="150" :y="72" :scale="0.7" fill="#E9826A" />
    <Sparkle :x="300" :y="60" :scale="0.5" fill="#F2B544" />
  </svg>
</template>
