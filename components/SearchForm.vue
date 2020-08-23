<template>
  <form class="search-form" @submit="submitForm">
    <label for="search" hidden>
      Name
    </label>
    <input
      id="search"
      v-model="searchQuery"
      type="search"
      placeholder="Try me..."
    >
    <button>🔍</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class SearchForm extends Vue {
  searchQuery = null;
  submitForm (e: Event) {
    e.preventDefault()
    if (this.searchQuery) { this.$router.push(`/blog/?search=${this.searchQuery}`) }
  }
}
</script>
