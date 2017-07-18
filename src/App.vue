<template lang='pug'>
  #app
    app-nav
    router-view
</template>

<script>
import AppNav from './components/includes/AppNav.vue'

export default {
  name: 'app',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | Pictionary'
  },
  components: { AppNav }
}
</script>

<style lang='scss'>
// Import custom styles
@import 'static/styles/main';

// Import Bootstrap
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/dist/bootstrap-vue.css';
</style>
