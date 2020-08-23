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
        <p>Sorry, nothing matches what you are looking for.</p>
      </template>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Article } from '~/components/Post.vue'
import Posts from '~/components/Posts.vue'

@Component({
  components: { Posts }
})
export default class Search extends Vue {
  @Prop({ type: Array, required: true }) readonly articles!: Article[];

  searchQuery = '';
  resultArticles = this.articles;

  @Watch('$route', { immediate: true, deep: true })
  // NOTE: couldn't find Route type (not exported maybe)
  private async urlChanged (to: any) {
    await this.updateArticles(to.query.search)
  }

  @Watch('searchQuery')
  async onQueryChanged (val: string) {
    await this.updateArticles(val)
  }

  async updateArticles (query?: string) {
    if (!query) {
      this.resultArticles = this.articles
      return
    }
    this.resultArticles = await this.$content('articles')
      .search(query)
      .only(['title', 'tags', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
  }
}
</script>

<style scoped>

</style>
