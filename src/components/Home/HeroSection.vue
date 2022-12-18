<template>
  <section class="hero">
    <div class="hero-text">
      <h1>Share your links<br> your way</h1>
      <p>Create, edit and share your links anywhere from your custom page</p>
      <a href="https://www.dashboard.doglink.net/login" class="btn btn-cta">Get yours</a>
    </div>
    <div class="hero-image">
      <div class="img-container">
        <img src="@/assets/screenshot_header.png" alt="screenshot">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/landing_page.scss";

.hero {
  background: $primary-color;
  background: linear-gradient(45deg, $primary-color 0%, $secondary-color 100%);
  display: flex;
  flex-direction: column;
  @media screen and (min-width: $breakpoint-desktop){
    flex-direction: row;
    height: 40rem;
    justify-content: center;
  }
  .hero-text {
    max-width: calc($breakpoint-desktop/2);
    color: $text-secondary;
    padding: 2rem 0;
    @media screen and (min-width: $breakpoint-desktop) {
      width: 50%;
      justify-content: center;
      display: flex;
      padding: 4rem;
      flex-direction: column;
    }
    h1 {
      margin: 0;
      padding: 1rem 0 0;
      @media screen and (min-width: $breakpoint-desktop) {
        font-size: 3rem;
      }
    }
    p {
      padding: 1rem;
      @media screen and (min-width: $breakpoint-desktop) {
        font-size: 1.5rem;
      }
    }
  }
  .hero-image {
    max-width: calc($breakpoint-desktop/2);
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 1rem;
    @media screen and (min-width: $breakpoint-desktop) {
      padding: 4rem 1rem;
    }
    .img-container {
      width: 70%;
      display: flex;
      margin: 0 auto;
      @media screen and (min-width: $breakpoint-desktop) {
        width: initial;
        max-height: 100%;
      }
      img {
        max-width: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
