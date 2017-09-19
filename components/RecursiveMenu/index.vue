<template>
  <ul id="recursive-menu">
    <h1>{{rootDirectory.name}}</h1>
    <h2>{{rootDirectory.path}}</h2>
    <directory :directory="rootDirectory"></directory>
  </ul>
</template>

<script>
import Directory from './Directory.vue'

export default {
  components: {
    Directory
  },
  computed: {
    rootDirectory(){
      return this.$store.state.rootDirectory
    }
  }
}
</script>
