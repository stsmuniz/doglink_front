<template>
  <h3 class="header-section">{{data.text}}</h3>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HeaderBlock",
  props: {
    data: {
      type: Object,
      required: true,
    }
  }
})
</script>

<style scoped lang="scss">
.header-section {
  font-weight: bold;
  font-size: 1.25rem;
  margin: 0;
  padding: 1rem 0;
}
</style>
