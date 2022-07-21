<template>
  <div id="app">
    <Hearder />
    <Layout />
    <Footer />
  </div>
</template>

<script>
import Hearder from './components/hearder/hearder'
import Footer from './components/footer/footer'
import Layout from './components/layout/layout'
export default {
  name: 'music-demo',
  components: {
    Hearder,
    Footer,
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
