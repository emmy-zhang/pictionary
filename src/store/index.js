import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  // actions,
  // mutations,
  modules: {
    user
  },
  strict: process.env.NODE_ENV !== 'production'
})