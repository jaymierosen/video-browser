<template>
  <section>
      <form>
          <!-- v-on: -->
          <!-- v-on:input -->
          <input v-model="input" @input="onInput" placeholder="Search..." type="text" name="searchbar" id="searchbar" />
          <button @click="onSubmit" type="submit">Get another activity</button>
      </form>
  </section>
</template>

<script>
export default {
  name: 'SearchBar',
  data: function () {
    return {
      input: ''
    }
  },
  // use these functions to change data
  methods: {
    onInput: function(e) {
      // listens to search to emit an event
      this.$emit('termChange', e.target.value)
    },
    onSubmit: function(e) {
      e.preventDefault();
      this.$emit('termChange', this.input)
    }
  },
  // turn data into viewable values
  computed: {

  }
}
</script>
