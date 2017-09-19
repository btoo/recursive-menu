export default {
  directoryLevel: (state, getters) => dir => {
    if(state.activeDirectory === dir) return 'active'
    else if(state.parentDirectory === dir) return 'parent'
    else if(state.breadcrumbs.includes(dir)) return 'ancestor'
    else return 'inactive'
  }
}