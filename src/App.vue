<script setup>
import { useI18n } from './composables/useI18n'
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import Growth from './components/Growth.vue'
import Pain from './components/Pain.vue'
import Solution from './components/Solution.vue'
import Platforms from './components/Platforms.vue'
import Examples from './components/Examples.vue'
import Compare from './components/Compare.vue'
import Pricing from './components/Pricing.vue'
import Delivery from './components/Delivery.vue'
import Questions from './components/Questions.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
const { t } = useI18n()
</script>

<template>
  <a href="#content" class="skip-link">{{ t.nav.skipToContent }}</a>
  <Nav />
  <main id="content">
    <Hero />
    <Growth />
    <Pain />
    <Solution />
    <Platforms />
    <Examples />
    <Compare />
    <Pricing />
    <Delivery />
    <Questions />
    <Contact />
  </main>
  <Footer />
</template>
