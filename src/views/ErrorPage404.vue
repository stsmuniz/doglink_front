<template>
  <div class="page-body">
    <div class="center-text-container">
      <div>
        <h1>Page Not Found</h1>
        <i class="fa-solid fa-circle-question"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "ErrorPage404"
})
</script>

<style scoped lang="scss">
.page-body {
  flex-grow: 1;
  text-align: center;
  .center-text-container {
    height: 90vh;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .fa-circle-question {
      font-size: 3rem;
    }
  }
}
</style>
