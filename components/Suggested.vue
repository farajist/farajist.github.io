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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

interface PrevNextElement {
  title: string;
  slug: string;
}

@Component
export default class Suggested extends Vue {
  @Prop({ type: Object, default: null }) readonly prev!: PrevNextElement;
  @Prop({ type: Object, default: null }) readonly next!: PrevNextElement;
}
</script>

<style scoped>

</style>
