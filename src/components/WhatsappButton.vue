<template>
  <a
      class="whatsapp-link"
      :href="whatsappLink"
      target="_blank">
    <i class="fab fa-whatsapp"></i>
    {{data.text ? data.text : 'Message me'}}
  </a>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {useStore} from "vuex";

export default defineComponent({
  name: "WhatsappButton",
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  setup(props) {
    const store = useStore();

    return {
      whatsappLink: computed(() => `https://wa.me/${props.data.url.replaceAll(' ', '')}`),
      primaryColor: computed(() => store.state.primaryColor),
      secondaryColor: computed(() => store.state.secondaryColor)
    }
  }
})
</script>

<style scoped lang="scss">
$primary-color: v-bind(primaryColor);
$secondary-color: v-bind(secondaryColor);

a {
  color: $secondary-color;
  &.whatsapp-link {
    border: 0.15rem solid $secondary-color;
    width: 90%;
    margin: 0 auto;
    padding: 0.75rem 0;
    text-decoration: none;
    text-align: center;
    color: $secondary-color;
    background-color: $primary-color;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    transition: 0.5s;
    @media screen and (min-width: 960px) {
      width: 50%;
    }
    &:hover {
      filter: brightness(120%);
    }
  }
}
</style>
