<template>
  <SearchBar v-on:termChange="onTermChange"></SearchBar>
  <VideoList>
  </VideoList>
  {{ videos.length }}
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar.vue'
import VideoList from './components/VideoList.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
  },
  data: function () {
    return {
      videos: []
    }
  },
  methods: {
    onTermChange: (searchTerm) => {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key:'AIzaSyBY2owLBQn7ThEYeehzc7cK775AzfUavpM',
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      })
      .then(res => console.log(res))
      // .then(res => {
      //   this.data.videos = res.data.items
      //   console.log(this.data.videos)
      // })
    }
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
