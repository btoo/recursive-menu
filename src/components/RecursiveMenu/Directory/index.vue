<template>
  <ul class="directory" :class="directoryLevel(directory)">
    <template v-if="directory.children">
      <li v-for="childDirectory in directory.children" :key="childDirectory.path"
        class="item item--directory"
        :class="{
          opened: is.opened(childDirectory)
        }">
        <a href="#" @click="is.active(childDirectory) ? $store.commit('VIEW_PARENT_DIRECTORY') : viewChildDirectory(childDirectory)">{{childDirectory.name}}</a>
        <directory :directory="childDirectory" />
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
import {mapGetters} from 'vuex'

export default {
  name: 'directory',
  props: ['directory'],
  computed: {
    ...mapGetters([
      'directoryLevel',
      'is'
    ])
  },
  methods: {
    viewChildDirectory(childDirectory){
      this.is.active(this.directory) && this.$store.commit('VIEW_CHILD_DIRECTORY', childDirectory)
    }
  },
  mounted(){
    // console.log(this)
  }
}
</script>

<style lang="scss" src="./index.scss" />