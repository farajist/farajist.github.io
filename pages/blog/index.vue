<template>
  <div>
    <header>
      <div class="container text-center">
        <h1>Blog</h1>
        <p class="subtitle">
          Articles, tutorials, snippets, musings and everything else.
        </p>
      </div>
    </header>
    <section>
      <div class="container">
        <search :articles="articles" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Search from '~/components/Search.vue'
@Component({
  components: { Search },
  async asyncData ({ $content, params }) {
    // NOTE: when having many articles later consider adding a limiter
    const articles = await $content('articles', params.slug)
      .only(['title', 'tags', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles
    }
  }
})
export default class BlogIndex extends Vue {}
</script>

<style scoped>

</style>
