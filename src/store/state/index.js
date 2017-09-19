// import rootDirectory from './test-directory'
const rootDirectory = Object.freeze(env.rootDirectory) // rootDirectory is a env variable passed into the client-side code with webpack.DefinePlugin

export default {
  notes: [],
  activeNote: {},
  rootDirectory: rootDirectory,
  activeDirectory: rootDirectory,
  parentDirectory: null,
  breadcrumbs: [rootDirectory]
}