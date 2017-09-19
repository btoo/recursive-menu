<template>
  <menu>
    <menuitem v-if="activeDirectory.children" v-for="childDirectory in activeDirectory.children" :key="childDirectory.path" class="item item--directory">
      <h1>{{childDirectory.name}}</h1>
      <h2>{{childDirectory.path}}</h2>
      <directory v-bind=""></directory>
    </menuitem>
    <menuitem v-if="activeDirectory.files" v-for="childFile in activeDirectory.files" :key="childFile.path" class="item item--file">
      <h1>{{childFile.name}}</h1>
      <h2>{{childFile.path}}</h2>
    </menuitem>
  </menu>
</template>

<script>
import { setActiveDirectory } from '../../vuex/actions'
import Directory from './Directory.vue'

export default {
  name: 'directory',
  props: ['path', 'directory'],
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
