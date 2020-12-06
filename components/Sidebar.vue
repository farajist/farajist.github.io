<template>
  <aside>
    <div class="aside-content">
      <section>
        <img src="https://github.com/farajist.png" alt="Hamza" class="avatar">
        <p>
          I'm <nuxt-link to="/about">Hamza</nuxt-link>
          I'm a software engineer with keen interest in applied ML and OSS.
          This website is my portfolio, I like to keep it updated with what I learn
          along the journey of life as well as things I'm interested in.
        </p>
      </section>
      <section>
        <h3>Tags</h3>
        <div class="cell tags">
          <nuxt-link v-for="(tag, index) in tags" :key="index" :to="`/tags/${tag}`" :class="linkTagClass(tag)">
            {{ tag }}
          </nuxt-link>
        </div>
      </section>
      <section>
        <h3>Published</h3>
        <time>{{ date | formatDate }}</time>
      </section>
      <section>
        <h3>Search</h3>
        <p>Search anything on the site.</p>
        <search-form />
      </section>
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SearchForm from '~/components/SearchForm.vue'

@Component({
  components: {
    SearchForm
  },
  filters: {
    formatDate (date: string) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
})
export default class Sidebar extends Vue {
  @Prop({ type: String, required: true }) readonly date!: string;
  @Prop({ type: Array }) readonly tags!: string[];

  linkTagClass (tag: string): string {
    return `tag-${tag}`
  }
}
</script>
