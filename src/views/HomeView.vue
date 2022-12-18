<template>
  <div class="page-body">
    <HeaderSection />
    <hero-section />
    <features-section />
    <showcase-section />
    <faq-section />
  </div>
</template>
<script setup lang="ts">
import FeaturesSection from "@/components/Home/FeaturesSection.vue";
import ShowcaseSection from "@/components/Home/ShowcaseSection.vue";
import FaqSection from "@/components/Home/FaqSection.vue";
import HeroSection from "@/components/Home/HeroSection.vue";
import HeaderSection from "@/components/Home/HeaderSection.vue"
import {useHead, useSeoMeta} from "@vueuse/head";

useHead({
  title: 'Home',
  titleTemplate: (title?: string) => !title ? 'Default title' : `${title} - DogLink`,
  meta: [
    {
      name: "description",
      content: "Share your links your way"
    }
  ]
})

useSeoMeta({
  description: 'Share your links your way',
  ogDescription: 'Share your links your way',
  ogTitle: 'Home - Doglink',
  ogImage: '/logo.png',
  twitterCard: 'summary',
})

</script>

<style lang="scss">
@import "@/assets/landing_page.scss";
</style>
