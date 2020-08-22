<template>
  <div>
    <h2>Up next</h2>
    <nav class="flex container suggested">
      <nuxt-link v-if="prev" :to="{ name: 'blog-slug', params: { slug: prev.slug } }">
        {{ prev.title }}
      </nuxt-link>
      <nuxt-link v-if="next" :to="{ name: 'blog-slug', params: { slug: next.slug } }">
        {{ next.title }}
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'Suggested',
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
})
</script>

<style scoped>

</style>
