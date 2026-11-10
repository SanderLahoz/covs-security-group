<script lang="ts">
import { defineComponent } from "vue";
import Icon from "@/components/Icon.vue";
import Logo from "@/components/Logo.vue";
import { mailtoHref, site } from "@/lib/site";

export default defineComponent({
  name: "Navbar",
  components: { Icon, Logo },
  data() {
    return {
      site,
      open: false as boolean,
      scrolled: false as boolean,
    };
  },
  mounted() {
    this.onScroll();
    window.addEventListener("scroll", this.onScroll, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    mailtoHref,
    onScroll(): void {
      this.scrolled = window.scrollY > 12;
    },
    close(): void {
      this.open = false;
    },
    toggle(): void {
      this.open = !this.open;
    },
  },
});
</script>

<template>
  <header
    :class="`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled || open
        ? 'border-b border-cream-300 bg-cream-50/95 backdrop-blur'
        : 'border-b border-transparent bg-transparent'
    }`"
  >
    <nav
      aria-label="Hovedmenu"
      class="mx-auto flex h-20 max-w-6xl items-center justify-between px-6"
    >
      <a href="#top" :aria-label="`${site.brandName}, til toppen`" @click="close">
        <Logo />
      </a>

      <ul class="hidden items-center gap-10 md:flex">
        <li v-for="link in site.nav" :key="link.href">
          <a :href="link.href" class="link-subtle text-sm font-semibold">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <a
          :href="mailtoHref('Henvendelse om sikkerhedstjek')"
          class="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/25 sm:inline-flex"
        >
          <Icon name="mail" class="h-4 w-4" />
          Kontakt os
        </a>
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-full border border-cream-300 bg-white text-navy-900 transition-all duration-300 hover:border-brand-400 md:hidden"
          :aria-expanded="open"
          aria-controls="mobilmenu"
          :aria-label="open ? 'Luk menu' : 'Åbn menu'"
          @click="toggle"
        >
          <Icon v-if="open" name="close" class="h-5 w-5" />
          <Icon v-else name="menu" class="h-5 w-5" />
        </button>
      </div>
    </nav>

    <div
      id="mobilmenu"
      :class="`grid transition-[grid-template-rows] duration-300 md:hidden ${
        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`"
    >
      <div class="overflow-hidden">
        <ul class="mx-auto flex max-w-6xl flex-col gap-1 px-6 pb-6">
          <li v-for="link in site.nav" :key="link.href">
            <a
              :href="link.href"
              :tabindex="open ? 0 : -1"
              class="block rounded-lg px-3 py-3 text-base font-semibold text-navy-900 transition-all duration-300 hover:bg-cream-200"
              @click="close"
            >
              {{ link.label }}
            </a>
          </li>
          <li class="pt-3">
            <a
              :href="mailtoHref('Henvendelse om sikkerhedstjek')"
              :tabindex="open ? 0 : -1"
              class="btn-primary w-full"
              @click="close"
            >
              <Icon name="mail" class="h-5 w-5" />
              Kontakt os via e-mail
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
