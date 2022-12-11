<template>
  <section class="faq">
    <h2>FAQ</h2>
    <h3>Get to know more about us</h3>
    <dl class="faq-questions">
      <dt class="faq-question" @click="toggleAnswer('answer_01')">How many links can I add?</dt>
      <dd class="faq-answer" id="answer_01">You can add as many links as you want. Use your page for all your link sharing needs</dd>
      <dt class="faq-question" @click="toggleAnswer('answer_02')">How about youtube videos?</dt>
      <dd class="faq-answer" id="answer_02">You are free to add as many as you like too. Showcase your videos on your page</dd>
      <dt class="faq-question" @click="toggleAnswer('answer_03')">Where can I add my page link?</dt>
      <dd class="faq-answer" id="answer_03">On your social medias, on a QR code, or anywhere else you feel like it</dd>
    </dl>
  </section>
</template>

<script setup lang="ts">
const toggleAnswer = (answerId: string) => {
  document.getElementById(answerId).classList.toggle('hidden')
}
</script>

<style scoped lang="scss">
@import "@/assets/landing_page.scss";

.faq {
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .faq-questions {
    text-align: left;
    border-radius: 0.5rem;
    border: 1px solid #cccccc;
    background-color: darken($text-secondary, 10%);
    width: 90%;
    @media screen and (min-width: $breakpoint-desktop) {
      width: 50%;
    }
    .faq-question {
      border-bottom: 1px solid #cccccc;
      &:last-child {
        border-bottom: none;
      }
    }
    .faq-answer {
      background-color: $text-secondary;
      &.hidden {
        display: none;
      }
      &:last-child {
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
      }
    }
    .faq-question, .faq-answer {
      padding: 1rem;
      margin: 0;
    }
  }
}
</style>
