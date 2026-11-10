<script lang="ts">
import { defineComponent } from "vue";
import Sparkle from "@/components/illustrations/Sparkle.vue";

/** Original illustration: to IT-studerende med en bærbar og et skjold. */
export default defineComponent({
  name: "TeamIllustration",
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
    aria-label="Illustration af to IT-studerende ved en bærbar computer"
    fill="none"
  >
    <circle cx="220" cy="205" r="165" fill="#FBE4D4" />
    <circle cx="220" cy="205" r="124" fill="#FDEFE4" />

    <!-- Skjold over dem -->
    <g transform="translate(193.6 30) scale(2.2)">
      <g class="animate-float">
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
    </g>

    <!-- Venstre person med studenterhue -->
    <path d="M78 345 Q78 258 150 252 Q222 258 222 345 Z" fill="#2F4B6E" />
    <rect x="138" y="222" width="24" height="36" rx="8" fill="#D9A47C" />
    <circle cx="150" cy="192" r="34" fill="#E2AE86" />
    <path d="M116 190 Q114 154 150 154 Q186 154 184 190 Q176 170 150 170 Q124 170 116 190 Z" fill="#2A2220" />
    <path d="M124 142 v14 q26 14 52 0 v-14" fill="#2B3748" />
    <polygon points="150,116 204,134 150,152 96,134" fill="#1F2937" />
    <path d="M204 134 V166" stroke="#F2B544" stroke-width="3" stroke-linecap="round" />
    <circle cx="204" cy="168" r="4.5" fill="#F2B544" />
    <circle cx="138" cy="194" r="3" fill="#2B2B2B" />
    <circle cx="162" cy="194" r="3" fill="#2B2B2B" />
    <path d="M141 206 Q150 214 159 206" stroke="#2B2B2B" stroke-width="2.5" stroke-linecap="round" />

    <!-- Højre person med briller -->
    <path d="M218 345 Q218 258 290 252 Q362 258 362 345 Z" fill="#E9826A" />
    <rect x="278" y="222" width="24" height="36" rx="8" fill="#E9B896" />
    <path
      d="M254 192 Q250 146 290 146 Q330 146 326 192 L330 234 Q318 240 316 222 L316 192 Q308 168 290 168 Q272 168 264 192 L264 222 Q262 240 250 234 Z"
      fill="#5A3A2E"
    />
    <circle cx="290" cy="194" r="34" fill="#F3C9A5" />
    <path d="M256 188 Q258 152 290 152 Q322 152 324 188 Q312 166 290 166 Q268 166 256 188 Z" fill="#5A3A2E" />
    <circle cx="278" cy="196" r="9" stroke="#16233A" stroke-width="2" />
    <circle cx="302" cy="196" r="9" stroke="#16233A" stroke-width="2" />
    <path d="M287 196 H293" stroke="#16233A" stroke-width="2" />
    <circle cx="278" cy="196" r="2.5" fill="#2B2B2B" />
    <circle cx="302" cy="196" r="2.5" fill="#2B2B2B" />
    <path d="M281 210 Q290 218 299 210" stroke="#2B2B2B" stroke-width="2.5" stroke-linecap="round" />

    <!-- Bærbar -->
    <rect x="168" y="278" width="104" height="60" rx="7" fill="#16233A" />
    <rect x="174" y="284" width="92" height="48" rx="3" fill="#223552" />
    <text
      x="220"
      y="318"
      text-anchor="middle"
      font-size="22"
      font-weight="800"
      fill="#ffffff"
      font-family="ui-sans-serif, system-ui, sans-serif"
    >
      ITU
    </text>
    <rect x="152" y="338" width="136" height="9" rx="4.5" fill="#C9D2DA" />

    <Sparkle :x="60" :y="150" :scale="0.8" fill="#F2B544" />
    <Sparkle :x="388" :y="120" :scale="0.7" fill="#2E8A6B" />
    <Sparkle :x="370" :y="300" :scale="0.5" fill="#E9826A" />
  </svg>
</template>
