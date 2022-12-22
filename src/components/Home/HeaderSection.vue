<template>
  <header>
    <nav>
      <p class="home">Dog<span class="text-link">Link</span> </p>
      <ul>
        <li>
          <a href="https://dashboard.doglink.net/login">Login</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderSection"
}
</script>

<style scoped lang="scss">
@import "@/assets/landing_page.scss";

header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: $text-secondary;
  .home {
    font-weight: bold;
    font-size: 1.25rem;
    margin: 0.5rem;
  }
  nav {
    padding: 0.5rem;
    @media screen and (min-width: $breakpoint-desktop){
      padding: 0.5rem 0;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90vw;
    max-width: $breakpoint-desktop-lg;
    margin: 0 auto;
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0 1rem;
      li {
        a {
          text-decoration: none;
          color: $secondary-color;
          font-weight: bold;
          line-height: 2.5rem;
          transition: 0.5s;
          &:hover {
            color: $primary-color;
          }
        }
      }
    }
  }
}
</style>
