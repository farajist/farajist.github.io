<template>
  <div>
    <section class="lead">
      <div class="container">
        <div class="copy">
          <h1>
            Hey, I'm Hamza <br>
            I'm a CS Student, interested in applied ML and OSS.
          </h1>
          <p class="subtitle" />
          <p>
            This website is my portfolio - I like to keep it updated with things I learn
            along the journey as well as things I'm interested in.
          </p>
          <p>
            You can read my
            <nuxt-link to="/blog">posts</nuxt-link>, view my
            <nuxt-link to="/blog">guides and tutorials</nuxt-link>,
            or learn more about <nuxt-link to="/about">me</nuxt-link>.
          </p>
          <p class="flex">
            <a
              href="https://github.com/farajist"
              target="_blank"
              rel="noreferrer"
              class="button"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/farajist/"
              target="_blank"
              rel="noreferrer"
              class="button"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <div class="image">
          <img src="{tania}" alt="Hamza">
        </div>
      </div>
    </section>
    <div class="container">
      <section>
        <h2>Latest</h2>
        <posts :data="articles" with-tags />
      </section>
      <section>
        <h2>Projects</h2>
      </section>
      <section>
        <h2>Newsletter</h2>
      </section>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Posts from '~/components/Posts.vue'
@Component({
  components: {
    Posts
  },
  async asyncData ({ $content, params }) {
    // NOTE: when having many articles later consider adding a limiter
    const articles = await $content('articles', params.slug)
      .only(['title', 'tags', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
})
export default class Index extends Vue {}
</script>

<style>

</style>
