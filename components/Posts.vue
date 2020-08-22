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
export default {
  name: 'Posts',
  props: { withTags: Boolean, data: Array },
  computed: {
    tagsClass (): string {
      return 'with-tags'
    }
  },
  methods: {
    linkTagClass (tag: string): string {
      return `tag-${tag}`
    }
  }
}
</script>

<style scoped>

</style>
