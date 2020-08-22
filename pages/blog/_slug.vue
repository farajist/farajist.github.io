<template>
  <post :article="article" :prev="prev" :next="next" />
</template>
<script lang="ts">
import Vue from 'vue'
import Post from '~/components/Post.vue'

export default Vue.extend({
  components: { Post },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { article, prev, next }
  },
  methods: {
    formatDate (date: string) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
})
</script>
