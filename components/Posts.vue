<template>
  <div :class="[withTags ? tagsClass : '', 'grid posts']">
    <nuxt-link v-for="(item, ix) in data" :key="ix" :to="`/blog/${item.slug}`" class="row">
      <div class="cell">
        <div>{{ item.title }}</div>
      </div>
      <template v-if="withTags">
        <div class="cell tags">
          <template v-if="item.tags">
            <nuxt-link v-for="(tag, index) in item.tags" :key="index" :to="`/tags/${item.slug}`" :class="linkTagClass(tag)">
              {{ tag }}
            </nuxt-link>
          </template>
        </div>
      </template>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Article } from '~/components/Post.vue'

@Component
export default class Posts extends Vue {
  @Prop({ type: Array, required: true }) readonly data!: Article[];
  @Prop({ type: Boolean, default: true }) readonly withTags!: Boolean;

  get tagsClass (): string {
    return 'with-tags'
  }

  linkTagClass (tag: string): string {
    return `tag-${tag}`
  }
}
</script>

<style scoped>

</style>
