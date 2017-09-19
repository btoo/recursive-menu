export default {

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

  SET_ACTIVE_DIRECTORY (state, newActiveDirectory) {
    state.parentDirectory = state.activeDirectory
    state.activeDirectory = newActiveDirectory
  },

  VIEW_CHILD_DIRECTORY(state, childDirectory){
    state.parentDirectory = state.activeDirectory
    state.activeDirectory = childDirectory
    state.breadcrumbs.push(childDirectory)
  },
  
  VIEW_PARENT_DIRECTORY(state){
    state.breadcrumbs.pop()
    const breadcrumbsLength = state.breadcrumbs.length
    state.parentDirectory = state.breadcrumbs[breadcrumbsLength - 2]
    state.activeDirectory = state.breadcrumbs[breadcrumbsLength - 1]
  }

}