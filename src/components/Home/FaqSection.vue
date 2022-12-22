<template>
  <section class="faq">
    <h2>FAQ</h2>
    <h3>Get to know more about how DogLink works</h3>
    <dl class="faq-questions">
      <dt class="faq-question" @click="toggleAnswer('answer_01')">What is DogLink?</dt>
      <dd class="faq-answer" id="answer_01">DogLink is a user-friendly microsite builder that allows you to create beautiful, mobile-optimized websites in minutes.</dd>
      <dt class="faq-question" @click="toggleAnswer('answer_02')">What is a microsite anyways? Is is the same as link-in-bio? </dt>
      <dd class="faq-answer" id="answer_02">Although DogLink can be used as link-in-bio, it is much more than that. A microsite is a website that’s dedicated to a single topic or idea, and it usually has a very specific purpose. You can use DogLink to build microsites for your brand, product, service or campaign.You are free to add as many as you like too. Showcase your videos on your page</dd>
      <dt class="faq-question" @click="toggleAnswer('answer_03')">How much does DogLink cost?</dt>
      <dd class="faq-answer" id="answer_03">During its beta stage, DogLink is free for anyone to use. Once the platform is officially launched, you’ll be able to use it for free or pay a monthly subscription fee for more advanced features.</dd>
      <dt class="faq-question" @click="toggleAnswer('answer_04')">How much does DogLink cost?</dt>
      <dd class="faq-answer" id="answer_04">During its beta stage, DogLink is free for anyone to use. Once the platform is officially launched, you’ll be able to use it for free or pay a monthly subscription fee for more advanced features.</dd>
      <dt class="faq-question" @click="toggleAnswer('answer_05')">Can I use DogLink if I don’t have any technical skills?</dt>
      <dd class="faq-answer" id="answer_05">Yes! DogLink is easy to use and doesn’t require any coding knowledge.</dd>
      <dt class="faq-question" @click="toggleAnswer('answer_06')">How can I create my DogLink website?</dt>
      <dd class="faq-answer" id="answer_06">You can sign up for an account on <a href="https://dashboard.doglink.net">https://dashboard.doglink.net</a> and once you sign up, you’ll be taken to the main dashboard where you can start building your page.</dd>
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
