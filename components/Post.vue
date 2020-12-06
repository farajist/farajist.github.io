<template>
  <div class="container">
    <section class="grid post">
      <article>
        <header class="article-header">
          <div class="container">
            <div class="thumb">
              <img v-if="article.img" :src="article.img" :alt="article.alt">
              <h1>{{ article.title }}</h1>
            </div>
          </div>
        </header>
        <nuxt-content :document="article" />
      </article>
      <sidebar :date="article.createdAt" :tags="article.tags" />
    </section>
    <suggested :prev="prev" :next="next" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Sidebar from '~/components/Sidebar.vue'
import Suggested from '~/components/Suggested.vue'

export interface Article {
  title: string;
  description: string;
  tags: string[];
  img: string;
  alt: string;
  body: any;
  createdAt: string;
  updatedAt: string;
}
@Component({
  components: {
    Sidebar,
    Suggested
  }
})
export default class Post extends Vue {
  @Prop({ type: Object, required: true }) readonly article!: Article;
  @Prop({ type: Object }) readonly prev!: object;
  @Prop({ type: Object }) readonly next!: object;
}
</script>

<style scoped>

</style>
