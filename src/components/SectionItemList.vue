<template>
  <div class="external-link-container">
    <keep-alive v-for="item in sections" :key="item.id">
      <component :is="item.type" :data="item.data"></component>
    </keep-alive>
  </div>
</template>

<script>
import {computed, defineComponent} from "vue";

import YoutubePlayer from "@/components/YoutubePlayer.vue";
import SpotifyPlayer from "@/components/SpotifyPlayer.vue";
import ExternalLink from "@/components/ExternalLink.vue";
import HeaderBlock from "@/components/HeaderBlock.vue";
import Whatsapp from "@/components/Whatsapp.vue";
import {useStore} from "vuex";

export default defineComponent({
  name: "SectionItemList",
  components: {
    YoutubePlayer,
    SpotifyPlayer,
    ExternalLink,
    Whatsapp,
    HeaderBlock
  },
  setup() {
    const store = useStore();

    return {
      sections: computed(() => store.state.sections),
    }
  }
});
</script>

<style scoped>

</style>
