<template>
  <section class="recursive-menu">
    
    <!-- <template v-if="$store.state.parentDirectory">
      parent: {{$store.state.parentDirectory.path}}
      <br>
    </template>
    active: {{$store.state.activeDirectory.path}} -->
    
    <!-- <template v-if="$store.state.parentDirectory"> -->
      <!-- <br><br> -->
      <!-- <a href="#" @click="$store.commit('VIEW_PARENT_DIRECTORY')">&larr;</a> -->
    <!-- </template> -->

    <!-- <h1>{{name}}</h1>
    <h2>{{path}}</h2> -->
    <nav>
      <directory class="root-directory"
        :directory="$store.state.rootDirectory"
        :style="{
          '--breadcrumbsLength': $store.state.breadcrumbs.length
        }"
        />
    </nav>
  </section>
</template>

<script>
import Directory from './Directory/index.vue'

export default {
  components: {
    Directory
  },
  data(){
    return this.$store.state.rootDirectory
  }
}
</script>

<style lang="scss" scoped>
  .recursive-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  nav {
    position: relative;
  }

  .root-directory {
    top: 50vh;
    left: calc(calc(1 - var(--breadcrumbsLength)) * 22vh);
    transform: translate(-50%, -50%);
  }
</style>
