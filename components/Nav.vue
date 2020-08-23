<template>
  <nav class="navbar">
    <div class="container">
      <div class="flex">
        <div>
          <nuxt-link to="/" class="brand">
            <span class="emoji">🧪</span>
            Hamza Faraji
          </nuxt-link>
        </div>
        <div class="flex">
          <nuxt-link to="/about">
            About
          </nuxt-link>
          <nuxt-link to="/blog">
            Blog
          </nuxt-link>
          <nuxt-link to="/guides">
            Guides
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Nav extends Vue {}
</script>

<style scoped>

</style>
