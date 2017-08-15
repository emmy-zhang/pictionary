// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMeta from 'vue-meta'
import VueForm from 'vue-form'
import BootstrapVue from 'bootstrap-vue'
import VueSocketIO from 'vue-socket.io'

import App from './App'
import router from './router'
import store from './store'
import sockets from './sockets'

Vue.use(VueAxios, axios)
Vue.use(VueMeta)
Vue.use(VueForm)
Vue.use(BootstrapVue)
Vue.use(VueSocketIO, process.env.SOCKET_URL, store)

sync(store, router)

// TODO: Fix baseURL for production/development server
// May require splitting client/server into separate repos
const protocol = window.location.protocol
const hostname = window.location.hostname
const port = process.env.PORT || 3000
Vue.axios.defaults.baseURL = `${protocol}//${hostname}:${port}`
Vue.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  sockets,
  template: '<App/>',
  components: { App }
})
