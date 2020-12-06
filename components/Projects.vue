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
import { Component, Prop, Vue } from 'vue-property-decorator'
export interface Project {
  title: string;
  description: string;
  img: string;
  alt: string;
  body: any;
  createdAt: string;
  updatedAt: string;
}
@Component
export default class Projects extends Vue {
  @Prop({ type: Array, required: true }) readonly projects!: Project[]
}
</script>

<style scoped>

</style>
