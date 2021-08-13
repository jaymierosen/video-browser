<template>
  <section>
      <ul>
					<VideoDetail></VideoDetail>
         <VideoListItem></VideoListItem>
      </ul>
  </section>
</template>

<script>
import VideoListItem from '../components/VideoListItem.vue'
import VideoDetail from '../components/VideoDetail.vue'

export default {
  components: {
      VideoListItem,
			VideoDetail
  },
  name: 'VideoList',
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