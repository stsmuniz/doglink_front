<template>
  <HeaderSection />
  <div class="page-inner">
    <h1>Terms of Service</h1>
    <section>
      <h2>1. Agreement to Terms</h2>

      <p>By signing up on our website, which can be accessed at https://doglink.net, you are agreeing to be bound by all these Website’s Terms of Use and agree with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this Website or using the Service. All materials in this Website are protected by trade mark law and copyright.</p>

      <p>For purposes of this Terms of Use, the terms “company”, “we” and “our” refers to the Company.</p>

      <h2>2. Privacy policy</h2>

      <p>We advise you to read <a href="/privacy-policy">our privacy policy</a> regarding our user data collection. It will help you better understand our practices.</p>

      <h2>3. Corrections</h2>

      <p>There may be information or materials appearing on our Website that contains technical, typographical, or photographic errors. We will not promise that any of the materials in this Website are accurate, complete, or current. We reserve the right to change and update the materials contained on its Website at any time without prior notice.</p>

      <h2>4. Links</h2>

      <p>DogLink has no control over all links provided on this Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement of the site by DogLink. The use of any linked website is at your own risk.</p>

      <h2>5. Modification of Terms of Use</h2>

      <h2>Company may revise or include supplemental terms in these Terms of Use on its Website from time to time without prior notice. Please ensure that you check the current Terms of Use every time you use the Website. By using this Website, you are agreeing to be bound by the current version of these Terms of Use.</h2>

      <h2>6. Applicable law</h2>

      <p>Any claim related to our Website shall be governed by the laws of Brazil without regards to its conflict of law provisions.</p>

      <h2>7. Contact</h2>

      <p>In case of any questions or requests, please contact us at contato@doglink.net</p>
    </section>
  </div>
</template>

<script setup lang="ts">

import {useHead, useSeoMeta} from "@vueuse/head";
import HeaderSection from "@/components/Home/HeaderSection.vue";

useHead({
  title: 'Terms of Service',
  titleTemplate: (title?: string) => !title ? 'Default title' : `${title} - DogLink`,
  meta: [
    {
      name: "description",
      content: "Terms of Service - Doglink"
    }
  ]
})

useSeoMeta({
  description: 'Terms of Service - Doglink',
  ogDescription: 'Terms of Service - Doglink',
  ogTitle: 'Terms of Service - Doglink',
  ogImage: '/logo.png',
  twitterCard: 'summary',
})
</script>

<style lang="scss">
@import "@/assets/landing_page.scss";
</style>
