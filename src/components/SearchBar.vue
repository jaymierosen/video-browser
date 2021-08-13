<template>
  <section>
      <form>
          <!-- v-on: -->
          <!-- v-on:input -->
          <input @input="onInput" placeholder="Search..." type="text" name="searchbar" id="searchbar" />
      </form>
  </section>
</template>

<script>
export default {
  name: 'SearchBar',
  // use these functions to change data
  methods: {
    onInput: function(e) {
        // listens to search to emit an event
        this.$emit('termChange', e.target.value)
        
    }
  },
  // turn data into viewable values
  computed: {

  }
}
</script>
