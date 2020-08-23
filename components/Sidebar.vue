<template>
  <aside>
    <div class="aside-content">
      <section>
        <img src="/farajist.png" alt="Tania" class="avatar">
        <p>
          I'm <nuxt-link to="/about">
            Hamza
          </nuxt-link> I'm a CS Student, interested in applied ML and OSS.
          This website is my portfolio - I like to keep it updated with things I learn
          along the journey as well as things I'm interested in.
        </p>
      </section>
      <section>
        <h3>Tags</h3>
        <div class="cell tags">
          <nuxt-link v-for="(tag, index) in tags" :key="index" :to="`/tags/${tag}`" class="tag">
            {{ tag }}
          </nuxt-link>
        </div>
      </section>
      <section>
        <h3>Published</h3>
        <time>{{ date | formatDate }}</time>
      </section>
      <section>
        <h3>Stay in touch</h3>
        <nav>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            class="link"
          >
            <span class="emoji">
              ✉️
            </span> Get emails from Hamza
          </a>
          <nuxt-link
            to="/rss.xml"
            target="_blank"
            rel="noreferrer"
            class="link"
          >
            <span class="emoji">☢️</span> Follow the RSS feed
          </nuxt-link>
        </nav>
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
}
</script>
