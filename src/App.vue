<script lang="ts">
import { defineComponent } from "vue";
import Contact from "@/components/Contact.vue";
import FAQ from "@/components/FAQ.vue";
import Footer from "@/components/Footer.vue";
import Hero from "@/components/Hero.vue";
import Highlights from "@/components/Highlights.vue";
import Navbar from "@/components/Navbar.vue";
import Pricing from "@/components/Pricing.vue";
import Problem from "@/components/Problem.vue";
import Steps from "@/components/Steps.vue";
import WhyUs from "@/components/WhyUs.vue";

export default defineComponent({
  name: "App",
  components: {
    Contact,
    FAQ,
    Footer,
    Hero,
    Highlights,
    Navbar,
    Pricing,
    Problem,
    Steps,
    WhyUs,
  },
});
</script>

<template>
  <Navbar />
  <main>
    <Hero />
    <Highlights />
    <Problem />
    <Steps />
    <WhyUs />
    <Pricing />
    <FAQ />
    <Contact />
  </main>
  <Footer />
</template>
