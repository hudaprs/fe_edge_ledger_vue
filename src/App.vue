<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { navbarAnimation } from './assets/js/script'

import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    navbarAnimation()
  }
}
</script>

<style>
@import url('./assets/css/utilities.css');
@import url('./assets/css/style.css');
</style>
