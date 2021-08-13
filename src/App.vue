<template>
  <SearchBar v-on:termChange="onTermChange"></SearchBar>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App',
  components: {
    SearchBar
  },
  methods: {
    onTermChange: (searchTerm) => {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: process.env.VUE_APP_ENV_API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      }).then(res => console.log(res))
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
