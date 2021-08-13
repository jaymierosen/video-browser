<template>
  <div class="container">
    <h1>Type in a search type from the following list</h1>
    <h2>["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]</h2>
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail />
      <VideoList :videos="videos"></VideoList>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return { videos: [] };
  },
  methods: {
    onTermChange(type) {
      axios.get('https://www.boredapi.com/api/activity?type', {
        params: {
          type: type
        }
      })
        .then(res => {
          this.videos = res.data;
          console.log('this.videos', this.videos)
        });
    }
  }
};
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