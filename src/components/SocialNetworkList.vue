<template>
  <ul class="social-networks">
    <SocialNetwork
        v-for="network in socialNetworks"
        :network="network"
        :key="network.id">
    </SocialNetwork>
  </ul>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {useStore} from "vuex";
import SocialNetwork from "@/components/SocialNetwork.vue";

export default defineComponent({
  name: "SocialNetworkList",
  components: {SocialNetwork},
  setup() {
    const store = useStore();

    return {
      socialNetworks: computed(() => store.state.socialNetworks),
    }
  }
})
</script>

<style scoped lang="scss">
.social-networks {
  padding-top: 0.5rem;
  gap: 1.5rem;
  justify-content: center;
}
</style>
