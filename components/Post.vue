<template>
  <div class="container">
    <section class="grid post">
      <article>
        <header class="article-header">
          <div class="container">
            <div class="thumb">
              <img v-if="article.thumbnail">
              <h1>{{ article.title }}</h1>
            </div>
          </div>
        </header>
        <!-- TODO: meat goes here -->
        <!-- <div />-->
        <!-- <nuxt-content :document="article" />-->
      </article>
      <!-- TODO: sidebar goes here -->
      <sidebar :date="article.createdAt" :tags="article.tags" />
    </section>
    <!-- TODO: suggestion goes here -->
    <Suggested :prev="prev" :next="next" />
  </div>
</template>

<script lang="ts">
// post for single blog post
import Vue from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import Suggested from '~/components/Suggested.vue'
export default Vue.extend({
  name: 'Post',
  components: {
    Sidebar,
    Suggested
  },
  props: {
    article: Object,
    prev: Object,
    next: Object
  }

})
</script>

<style scoped>

</style>
