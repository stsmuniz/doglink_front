<template>
  <main class="page-body">
    <div class="share-button-container">
      <ShareButton></ShareButton>
    </div>
    <HeaderSection
        :tagline="tagline"
        :username="title ? title : '@' + username"
        :avatar="avatar">
    </HeaderSection>
    <SocialNetworkList></SocialNetworkList>
    <SectionItemList></SectionItemList>
  </main>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import SocialNetworkList from "@/components/SocialNetworkList.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import ShareButton from "@/components/ShareButton.vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import SectionItemList from "@/components/SectionItemList.vue";
import {useHead, useSeoMeta} from "@vueuse/head";

export default defineComponent({
  name: "ProfileView",
  components: {
    SectionItemList,
    ShareButton,
    HeaderSection,
    SocialNetworkList,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const slug = route.params.username;
    store.commit('SET_SLUG', slug);
    store.dispatch("fetchData");

    const backgroundColor = computed(() => store.state.backgroundColor);
    const textColor = computed(() => store.state.textColor);

    const title =  computed(() => store.state.title ? store.state.title : store.state.username);
    const tagline = computed(() => store.state.tagline);
    const picture = computed(() => store.state.profile_picture)

    const ogTitle = computed(() => store.state.title + ' - DogLink');

    useHead({
      title: title,
      titleTemplate: (title?: string) => !title ? 'Default title' : `${title} - DogLink`,
      meta: [
        {
          name: "description",
          content: tagline
        }
      ]
    })

    useSeoMeta({
      ogDescription: tagline,
      ogTitle: ogTitle,
      ogImage: picture,
      twitterCard: 'summary',
    })

    return {
      title,
      tagline,
      avatar: computed(() => store.state.profile_picture),
      username: title,
      backgroundColor,
      textColor,
    }
  },
})
</script>

<style lang="scss">
$background-color: v-bind(backgroundColor);
$text-color: v-bind(textColor);

.page-body {
  background-color: $background-color;
  color: $text-color;
}
h3 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
}
.page-body {
  flex-grow: 1;
  .share-button-container {
    width: 90%;
    display: flex;
    padding-top: 1.5rem;
    flex-direction: row-reverse;
    margin: 0 auto;
    @media screen and (min-width: 960px) {
      width: 60%;
    }
  }
  .external-link-container {
    padding: 1rem 0;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
