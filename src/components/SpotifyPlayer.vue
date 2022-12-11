<template>
  <div class="spotify-embed-container">
    <iframe
        style="border-radius:12px"
        :src="`https://open.spotify.com/embed${spotifyLink}?utm_source=generator&theme=0`"
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
    </iframe>
  </div>
</template>

<script>
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: "SpotifyPlayer",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      spotifyLink: computed(() => {
        return props.data.url.replace('https://open.spotify.com', '');
      })
    }
  }
})
</script>

<style scoped lang="scss">
.spotify-embed-container {
  display: flex;
  flex-direction: column;
  width: 90%;
  @media screen and (min-width: 960px){
    width: 50%;
  }
  margin: 0 auto;
}
</style>
