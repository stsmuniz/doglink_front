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
import {useTitle} from "vue-page-title";

const { title } = useTitle('Home');

</script>

<style lang="scss">
@import "@/assets/landing_page.scss";
</style>
