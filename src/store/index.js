import Vue from 'vue'
import Vuex from 'vuex'
import rootDirectory from './test-directory'
import getters from './getters'
// import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {},
  rootDirectory,
  activeDirectory: rootDirectory,
  parentDirectory: null,
  breadcrumbs: [rootDirectory]
}



export default new Vuex.Store({
  state,
  getters,
  // actions,
  mutations
})
