<template>
  <section>
      <ul>
        <VideoListItem :videos="videos"></VideoListItem>
      </ul>
  </section>
</template>

<script>
import VideoListItem from '../components/VideoListItem.vue'

export default {
  components: {
      VideoListItem
  },
  name: 'VideoList',
	props: ['videos'],
	// props: {
	// 	videos: Array
	// },
  // use these functions to change data
  methods: {
    
  },
  // turn data into viewable values
  computed: {

  }
}
</script>

<style>
    ul {
        list-style-type: none;
        padding-left: 0;
    }
</style>