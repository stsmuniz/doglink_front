<template>
<div class="overlay" @click.self="closeModal">
  <div class="share-modal">
    <h2>Share it!</h2>
    <div class="share-items">
      <a target="_blank"
         class="share-item"
         :href="`https://www.facebook.com/share.php?v=4&src=bm&u=${url}`">
        <i class="fab fa-facebook-square"></i> Share on Facebook
      </a>
      <a target="_blank"
         class="share-item"
         :href="`https://www.linkedin.com/sharing/share-offsite/?url=${url}`">
        <i class="fab fa-linkedin"></i> Share on Linkedin
      </a>
      <a target="_blank"
         class="share-item"
         :href="`https://twitter.com/intent/tweet?text=${url}`">
        <i class="fab fa-twitter-square"></i> Share on Twitter
      </a>
      <a target="_blank"
         class="share-item"
         :href="`mailto:?body=%20${url}`">
        <i class="fa-regular fa-envelope"></i> Share on Email
      </a>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ShareDialog",
  emits: ['onCloseWebShareModal'],
  setup(props, {emit}) {
    const url = location.href;

    const closeModal = (): void => {
      emit('onCloseWebShareModal')
    }
    return {
      closeModal,
      url
    }
  }
});
</script>

<style scoped lang="scss">
.overlay {
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .share-modal {
    background-color: #fff;
    border-radius: 1rem;
    width: 80%;
    @media screen and (min-width: 768px) {
      width: 30%;
    }
    .share-items {
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 0 1rem 1rem;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: #333;
        font-size: 1.5rem;
        padding: 0.5rem;
        i {
          font-size: 2rem;
        }
        i.fa-twitter-square {
          color: #1DA1F2;
        }
        i.fa-facebook-square {
          color: #4267B2;
        }
        i.fa-linkedin {
          color: #0077b5;
        }
      }
    }
  }
}
</style>
