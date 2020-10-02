import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import investimento from './modules/investimento'

export default new Vuex.Store({
    modules: {
        investimento
    },
    strict: false
  })