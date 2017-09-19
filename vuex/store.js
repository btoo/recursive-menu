import Vue from 'vue'
import Vuex from 'vuex'
import rootDirectory from './test-directory'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {},
  rootDirectory,
  activeDirectory: rootDirectory,
  parentDirectory: null
}

const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'New note',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  },

  SET_ACTIVE_DIRECTORY (state, parent, child) {
    state.activeDirectory = child
  }
}

export default new Vuex.Store({
  state,
  mutations
})
