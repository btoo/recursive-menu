export default {
  is: (state, getters) => ({
    active: dir => getters.directoryLevel(dir) === 'active',
    parent: dir => getters.directoryLevel(dir) === 'parent',
    ancestor: dir => getters.directoryLevel(dir) === 'ancestor',
    inactive: dir => getters.directoryLevel(dir) === 'inactive',
    opened: dir => state.breadcrumbs.includes(dir)
  }),
  directoryLevel: state => dir => {
    if(state.activeDirectory === dir) return 'active'
    else if(state.parentDirectory === dir) return 'parent'
    else if(state.breadcrumbs.includes(dir)) return 'ancestor'
    else return 'inactive'
  }
}