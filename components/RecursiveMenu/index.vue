<template>
  <ul id="recursive-menu">
    
    active: {{$store.state.activeDirectory.path}}
    <br>
    <template v-if="$store.state.parentDirectory">
      parent: {{$store.state.parentDirectory.path}}
      <br><br>
      <a href="#" @click="$store.commit('VIEW_PARENT_DIRECTORY')">view parent</a>
    </template>
    

    <h1>{{name}}</h1>
    <h2>{{path}}</h2>
    <directory :directory="$store.state.rootDirectory"></directory>
  </ul>
</template>

<script>
import Directory from './Directory.vue'

export default {
  components: {
    Directory
  },
  data(){
    return this.$store.state.rootDirectory
  }
}
</script>
