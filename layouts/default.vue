<template>
  <div>
    <Nav />
    <main class="container">
      <Nuxt />
    </main>
    <Foot />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Foot from '~/components/Foot.vue'
import Nav from '~/components/Nav.vue'
export default Vue.extend({
  name: 'Layout',
  components: {
    Foot,
    Nav
  }
})
</script>
<style>
</style>
