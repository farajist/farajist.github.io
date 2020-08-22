<template>
  <div>
    <input
      id="search"
      v-model="searchQuery"
      :style="{margin: '0 auto'}"
      type="search"
      autocomplete="off"
      placeholder="Search for anything ..."
    >
    <section>
      <template v-if="resultArticles.length > 0">
        <posts with-tags :data="resultArticles" />
      </template>
      <template v-else>
        <p>Sorry, nothing matched that search.</p>
      </template>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Posts from '~/components/Posts.vue'
export default Vue.extend({
  name: 'Search',
  components: { Posts },
  props: { articles: Array },
  data () {
    return {
      searchQuery: '',
      resultArticles: this.articles
    }
  },
  watch: {
    async searchQuery (searchQuery) {
      if (!searchQuery) {
        this.resultArticles = this.articles
        return
      }
      this.resultArticles = await this.$content('articles')
        .search(searchQuery)
        .only(['title', 'tags', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
    }
  }
})
</script>

<style scoped>

</style>
