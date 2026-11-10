<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/Logo.vue";
import { site } from "@/lib/site";

export default defineComponent({
  name: "Footer",
  components: { Logo },
  data() {
    return {
      site,
      year: new Date().getFullYear(),
    };
  },
});
</script>

<template>
  <footer class="bg-navy-900 text-slate-300">
    <div class="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <a href="#top" :aria-label="`${site.brandName}, til toppen`">
          <Logo tone="onDark" />
        </a>
        <p class="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
          Stiftet af IT-studerende fra {{ site.university }}.
        </p>
      </div>

      <nav aria-label="Sidens sektioner">
        <h2 class="text-sm font-bold text-white">Navigation</h2>
        <ul class="mt-5 space-y-3 text-sm">
          <li v-for="link in site.nav" :key="link.href">
            <a
              :href="link.href"
              class="text-slate-400 transition-all duration-300 hover:text-white"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <a
              href="#kontakt"
              class="text-slate-400 transition-all duration-300 hover:text-white"
            >
              Kontakt
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <h2 class="text-sm font-bold text-white">Kontakt</h2>
        <ul class="mt-5 space-y-3 text-sm">
          <li>
            <a
              :href="`mailto:${site.email}`"
              class="text-slate-400 transition-all duration-300 hover:text-white"
            >
              {{ site.email }}
            </a>
          </li>
          <li>
            <a
              :href="`tel:${site.phoneHref}`"
              class="text-slate-400 transition-all duration-300 hover:text-white"
            >
              {{ site.phoneDisplay }}
            </a>
          </li>
          <li class="text-slate-400">København</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
        <p>
          © {{ year }} {{ site.brandName }}.
        </p>
        <p>Et studenterinitiativ. Ikke en officiel del af ITU.</p>
      </div>
    </div>
  </footer>
</template>
