<template>
  <footer class="footer flex">
    <section class="container">
      <nav class="footer-links">
        <nuxt-link to="/">
          Home
        </nuxt-link>
        <nuxt-link to="/about">
          About
        </nuxt-link>
        <nuxt-link
          to="/blog"
        >
          Blog
        </nuxt-link>
      </nav>
      <nav class="flex justify-center">
        <a
          href="https://nuxtjs.org/"
          title="Built with Gatsby"
          target="_blank"
          rel="noopener noreferrer"
          class="img"
        >
          <img src="~/assets/images/nuxt.png" class="footer-img" alt="NuxtJS">
        </a>
        <a
          href="https://github.com/farajist"
          title="Open-source on GitHub"
          target="_blank"
          rel="noopener noreferrer"
          class="img"
        >
          <img src="~/assets/images/github.png" class="footer-img" alt="GitHub">
        </a>
        <a
          href="https://www.netlify.com/"
          title="Hosted by Netlify"
          target="_blank"
          rel="noopener noreferrer"
          class="img"
        >
          <img src="~/assets/images/netlify.png" class="footer-img" alt="Netlify">
        </a>
      </nav>
    </section>
  </footer>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Foot extends Vue {}
</script>
