<template>
  <router-view></router-view>
</template>


<script lang="ts">
import {computed, defineComponent} from 'vue';
import {useStore} from "vuex";

export default defineComponent({
  name: 'App',

  setup() {
    const store = useStore();

    return {
      primaryColor: computed(() => store.state.primaryColor),
      secondaryColor: computed(() => store.state.secondaryColor),
    }
  },
});
</script>

<style lang="scss">
$primary-color: v-bind(primaryColor);
$secondary-color: v-bind(secondaryColor);
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
}
#app {
  color: $secondary-color;
  background-color: $primary-color;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
