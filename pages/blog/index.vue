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
import Vue from 'vue'
import Search from '~/components/Search.vue'
export default Vue.extend({
  name: 'Index',
  components: { Search },
  async asyncData ({ $content, params }) {
    // FIXME: latest = last 5 ?
    const articles = await $content('articles', params.slug)
      .only(['title', 'tags', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
})
</script>

<style scoped>

</style>
