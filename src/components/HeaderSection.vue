<template>
  <header class="profile">
    <img alt="Vue logo" :src="avatar" class="profile-picture">
    <h2>{{username}}</h2>
    <h3>{{tagline}}</h3>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HeaderSection",
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    tagline: {
      type: String,
      required: true,
      default: 'teste'
    }
  }
})
</script>

<style scoped lang="scss">
.profile {
  width: 90%;
  margin: 0 auto;
  @media screen and (min-width: 960px) {
    width: 50%;
  }
  h2 {
    margin: 0.5rem 0;
    font-size: 1.5rem;
  }
  h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
  .profile-picture {
    max-width: 6rem;
    border-radius: 50%;
    border: 0.25rem solid #fff;
    object-fit: cover;
    width: 100%;
  }
}
</style>
