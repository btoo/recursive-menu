<template>
  <ul>
    <li v-if="directory.children" v-for="childDirectory in directory.children" :key="childDirectory.path" class="item item--directory">
      <h1>{{childDirectory.name}}</h1>
      <h2>{{childDirectory.path}}</h2>
      <directory :directory="childDirectory"></directory>
    </li>
    <li v-if="directory.files" v-for="childFile in directory.files" :key="childFile.path" class="item item--file">
      <h1>{{childFile.name}}</h1>
      <h2>{{childFile.path}}</h2>
    </li>
  </ul>
</template>

<script>
import { setActiveDirectory } from '../../vuex/actions'

export default {
  name: 'directory',
  props: ['directory'],
  vuex: {
    getters: {
      activeDirectory: state => state.activeDirectory,
      parentDirectory: state => state.parentDirectory,
    },
    actions: {
      setActiveDirectory
    }
  }
}
</script>
