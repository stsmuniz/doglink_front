<template>
  <header>
    <nav>
      <p class="home">DogLink</p>
      <ul>
        <li>
          <a href="#login">Login</a>
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
    padding: 0.5rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    max-width: $breakpoint-desktop-lg;
    margin: 0 auto;
    ul {
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
