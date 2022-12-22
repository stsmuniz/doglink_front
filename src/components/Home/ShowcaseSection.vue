<template>
  <section class="showcase">
    <h2>Showcase</h2>
    <h3 class="headline">See how your website can look like</h3>
    <carousel :breakpoints="carouselBreakpoints" :settings="carouselSettings">
      <slide v-for="(item, index) in carouselItems" :key="index">
        <img :src="item.image">
      </slide>
    </carousel>
  </section>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const carouselSettings = {
  itemsToShow: 1.2,
  snapAlign: 'center',
  autoplay: true,
  wrapAround: true,
  transition: 3000
}

const carouselBreakpoints = {
  // 700px and up
  700: {
    itemsToShow: 4,
    snapAlign: 'center',
  },
}

const carouselItems = [
  {image: require('@/assets/screenshot_header.png')},
  {image: require('@/assets/screenshot_carousel_02.png')},
  {image: require('@/assets/screenshot_carousel_03.png')},
  {image: require('@/assets/screenshot_carousel_04.png')},
  {image: require('@/assets/screenshot_carousel_05.png')},
  {image: require('@/assets/screenshot_carousel_06.png')},
]
</script>

<style scoped lang="scss">
@import "@/assets/landing_page.scss";

.showcase {
  color: $text-secondary;
  padding: 3rem 1rem;
  background: $primary-color;
  background: linear-gradient(45deg, $secondary-color 0%, $primary-color 100%);
  .carousel {
    margin: 3rem 0;
    img {
      max-width: 80%;
      object-fit: contain;
      margin: 0 0.5rem;
      @media screen and (min-width: $breakpoint-desktop) {
        max-height: 40rem;
      }
    }
  }

  .carousel__slide--sliding {
    transition: 1.5s;
  }

  .carousel__slide {
    opacity: 0.5;
    transform: rotateY(-20deg) scale(0.9);
  }

  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.05);
  }
}
</style>
