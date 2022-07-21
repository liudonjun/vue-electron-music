<template>
  <div id="app">
    <titleVue />
    <Layout />
    <FootLayout />
  </div>
</template>

<script>
import titleVue from './components/title/title.vue'
import FootLayout from './components/bottom.vue'
import Layout from './components/layout.vue'
export default {
  name: 'music-demo',
  components: {
    titleVue,
    FootLayout,
    Layout,
  },
}
</script>

<style>
#app {
  height: 100vh;
  overflow: hidden;
}
/* CSS */
</style>
