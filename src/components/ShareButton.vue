<template>
  <button
      class="share-button"
      v-if="webShareApiSupported"
      @click="shareViaWebShare(false)"
  >
    <i class="fa fa-arrow-up-right-from-square"></i>
  </button>
  <button class="share-button" v-else @click="openShareDialog">
    <i class="fa fa-arrow-up-from-bracket"></i>
  </button>
  <ShareDialog
      v-show="showShareDialog"
      @onCloseWebShareModal="openShareDialog(false)">
  </ShareDialog>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from "vue";
import ShareDialog from "@/components/ShareDialog.vue";

export default defineComponent({
  name: "ShareButton",
  components: {ShareDialog},
  setup() {
    const webShareApiSupported = computed(() => navigator.share)
    const showShareDialog = ref(false)

    const openShareDialog = (value: boolean) => {
      showShareDialog.value = value;
    };

    const shareViaWebShare = () => {
      navigator.share({
        text: 'DogLink',
        url: location.href
      })
    }

    return {
      webShareApiSupported,
      shareViaWebShare,
      openShareDialog,
      showShareDialog
    }
  }
})
</script>

<style scoped lang="scss">
.share-button {
  border-radius: 50%;
  background-color: #fff;
  padding: 0.75rem;
  border: none;
  transition: background-color 0.15s;
  &:hover {
    cursor: pointer;
    background-color: #eee;
  }
  i {
    color: #000;
  }
}
</style>
