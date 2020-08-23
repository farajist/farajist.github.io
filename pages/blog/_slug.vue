<template>
  <post :article="article" :prev="prev" :next="next" />
</template>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Post from '~/components/Post.vue'
@Component({
  components: { Post },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return { article, prev, next }
  }
})
export default class BlogPage extends Vue {

}
</script>
