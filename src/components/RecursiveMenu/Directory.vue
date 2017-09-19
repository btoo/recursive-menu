<template>
  <ul :class="{active, parent}">
    <template v-if="directory.children">
      <li v-for="childDirectory in directory.children" :key="childDirectory.path" class="item item--directory">
        <a href="#" @click="viewChildDirectory(childDirectory)">{{childDirectory.name}}</a>
        <directory :directory="childDirectory"></directory>
      </li>
    </template>
    <template v-if="directory.files">
      <li v-for="childFile in directory.files" :key="childFile.path" class="item item--file">
        <span>{{childFile.name}}</span>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'directory',
  props: ['directory'],
  computed: {
    active(){
      return this.directory === this.$store.state.activeDirectory
    },
    parent(){
      return this.directory === this.$store.state.parentDirectory
    }
  },
  methods: {
    viewChildDirectory(childDirectory){
      this.active && this.$store.commit('VIEW_CHILD_DIRECTORY', childDirectory)
    }
  }
}
</script>

<style lang="scss">
  ul {
    // position: absolute;
    // top: 0;
    // left: 0;

    &.active {
      ul:not(.active){
        li {
          display: none;
        }
      }
    }
  }

  .parent, .ancestor {
    > li > :not(.active) {
      display: none;
    }
  }
</style>