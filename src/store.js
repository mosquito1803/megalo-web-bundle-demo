import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count: 0,
  _mp_global: {}
}

export default new Vuex.Store({
  state,
  mutations: {
    _mp_global (state, data) {
        state._mp_global = Object.assign({}, data);
    },
    increase (state) {
        state.count++;
    }
  }
})