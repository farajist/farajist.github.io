<template>
  <footer class="footer flex">
    <section class="container">
      <nav class="footer-links">
        <nuxt-link to="/blog">
          Blog
        </nuxt-link>
        <nuxt-link to="/guides">
          Guides
        </nuxt-link>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Newsletter
        </a>
      </nav>
      <nav class="flex justify-center">
        <a
          href="https://nuxtjs.org/"
          title="Built with Gatsby"
          target="_blank"
          rel="noopener noreferrer"
          class="img"
        >
          <img src="/icons/nuxt.png" class="footer-img" alt="NuxtJS">
        </a>
        <a
          href="https://github.com/farajist"
          title="Open-source on GitHub"
          target="_blank"
          rel="noopener noreferrer"
          class="img"
        >
          <img src="/icons/github.png" class="footer-img" alt="GitHub">
        </a>
        <a
          href="https://www.netlify.com/"
          title="Hosted by Netlify"
          target="_blank"
          rel="noopener noreferrer"
          class="img"
        >
          <img src="/icons/netlify.png" class="footer-img" alt="Netlify">
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
