<template>
  <section class="features">
    <h2>Features</h2>
    <h3 class="headline">All your social networks in one place</h3>
    <div class="social-networks-showcase">
      <carousel
          :autoplay="true"
          :items-to-show="2"
          :wrap-around="true"
          :transition="4000"
          :snap-align="center"
          :breakpoints="socialBreakpoint"
      >
        <slide v-for="(item, index) in socialCarouselItems" :key="index">
          <div class="social-network">
            <i :class="`fa-brands fa-${item}`"></i>
          </div>
        </slide>
      </carousel>
    </div>
    <h3 class="headline">Easy to use drag-and-drop website builder</h3>
    <h3 class="headline">Mobile friendly websites that work on all devices</h3>
    <h3 class="headline">Social media integration so you can share your site on Facebook, Twitter and Instagram</h3>
    <h3 class="headline">Let your audience get in touch with you using our Whatsapp <b>Message Me</b> button</h3>
  </section>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const socialCarouselItems = [
  'facebook',
  'twitter',
  'instagram',
  'tiktok',
  'youtube',
  'spotify',
  'github',
  'linkedin',
  'dev',
  'steam',
  'pinterest',
  'dribbble',
  'soundcloud',
]

const socialBreakpoint = {
  700: {
    itemsToShow: 5
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/landing_page.scss";
.features {
  padding: 3rem 1rem;
  background-color: $text-secondary;
  .headline {
    padding: 0.5rem;
    @media screen and (min-width: $breakpoint-desktop) {
      font-size: 1.75rem;
    }
  }
  .social-networks-showcase {
    .social-network {
      font-size: 4rem;
    }
  }
}
</style>
