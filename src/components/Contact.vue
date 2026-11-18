<script lang="ts">
import { defineComponent } from "vue";
import ContactIllustration from "@/components/illustrations/ContactIllustration.vue";
import Icon from "@/components/Icon.vue";
import { mailtoHref, site } from "@/lib/site";

export default defineComponent({
  name: "Contact",
  components: { ContactIllustration, Icon },
  data() {
    return { site };
  },
  methods: {
    mailtoHref,
  },
});
</script>

<template>
  <section id="kontakt" class="section-anchor bg-cream-100 py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-6">
      <div class="grid items-center gap-10 rounded-3xl bg-brand-500 p-8 sm:p-14 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Klar til at sikre jeres hjemmeside?
          </h2>
          <p class="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Send os adressen på din hjemmeside. Vi vender tilbage til en
            kort, uforpligtende snak.
          </p>

          <div class="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              :href="mailtoHref('Jeg vil gerne have tjekket min hjemmeside')"
              class="flex items-center gap-4 rounded-xl bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
            >
              <span class="icon-chip">
                <Icon name="mail" class="h-6 w-6" />
              </span>
              <span class="min-w-0">
                <span class="block text-xs font-bold uppercase tracking-wider text-navy-500">
                  E-mail
                </span>
                <span class="block break-all text-sm font-bold text-navy-900">
                  {{ site.email }}
                </span>
              </span>
            </a>
          </div>

          <p class="mt-6 text-sm text-white/75">
            Skriv gerne adressen på din hjemmeside i mailen.
          </p>
        </div>

        <ContactIllustration class-name="mx-auto hidden w-full max-w-xs lg:block" />
      </div>
    </div>
  </section>
</template>
