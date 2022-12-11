<template>
  <div class="embed-container">
    <iframe
        class="video"
        :src="videoHash"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: "YoutubePlayer",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      videoHash: computed(() => {
        const params = new URL(props.data.url).searchParams.get('v');
        return `https://www.youtube.com/embed/${params}`;
      })
    }
  }
})
</script>

<style scoped lang="scss">
.embed-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
@media screen and (min-width: 960px) {
  width: 50%;
}
justify-content: center;
align-items: center;
margin: 0 auto;
.video {
  aspect-ratio: 16 / 9;
  width: 100%;
}
}
</style>
