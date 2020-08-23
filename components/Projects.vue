<template>
  <div class="grid projects">
    <a
      v-for="project in projects"
      :key="project.path || project.source"
      :href="project.path || project.source"
      class="row"
      target="_blank"
      rel="noreferrer"
    >
      <div class="cell simple">
        {{ project.icon }}
      </div>
      <div class="cell simple">
        {{ project.title }}
      </div>
      <div class="cell simple light description">
        {{ project.description }}
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Projects',
  props: {
    projects: Array
  }
})
</script>

<style scoped>

</style>
