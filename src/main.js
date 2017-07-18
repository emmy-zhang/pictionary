// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMeta from 'vue-meta'
import BootstrapVue from 'bootstrap-vue'

import App from './App'
import router from './router'
import store from './store'

Vue.use(VueAxios, axios)
Vue.use(VueMeta)
Vue.use(BootstrapVue)

sync(store, router)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
