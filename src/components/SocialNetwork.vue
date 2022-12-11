<template>
  <li class="social-network" :key="network.id">
    <a :href="network.url" target="_blank">
      <i :class="`fa-brands fa-${network.network.toLowerCase()}`"></i>
    </a>
  </li>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {useStore} from "vuex";

export default defineComponent({
  name: "SocialNetwork",
  props: {
    network: {
      type: Object,
      required: true
    }
  },
  setup() {
    const store = useStore();

    return {
      primaryColor: computed(() => store.state.primaryColor),
      secondaryColor: computed(() => store.state.secondaryColor)
    }
  }
})
</script>

<style scoped lang="scss">
$primary-color: v-bind(primaryColor);
$secondary-color: v-bind(secondaryColor);

.social-network {
  font-size: 2rem;
  i {
    color: $secondary-color;
    transition: 0.25s;
    &:hover {
      filter: brightness(200%);
      cursor: pointer;
    }
  }
}
</style>
