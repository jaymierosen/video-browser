<template>
  <section>
      <h3>My Identicon Generator</h3>
      <div>
        Input:
        <!-- directive enhances behaviour of html -->
        <input v-on:input="handleChange" type="text" name="input" id="input" v-model="input">
      </div>
      <div>
        Outputs:
        <div>{{ $data.input }}</div>
        <div>{{ reversedMessage }}</div>
        <div v-html="indenticon"></div>
      </div>
      <div>{{ getDate }}</div>
    </section>
</template>

<script>
const jdenticon = require("jdenticon");

export default {
  name: 'Identicon',
  // init state
  data: function () {
    return {
      input: ""
    }
  },
  // use these functions to change data
  methods: {
    handleChange: (e) => {
      return this.data.input = e.target.value;
    }
  },
  // turn data into viewable values
  computed: {
    indenticon: function () {
      return jdenticon.toSvg(this.input, 200);
    },
    reversedMessage: function () {
      return this.input.split("").reverse().join("");
    },
    getDate: function () {
      return new Date().getDay() === 5 ? `Friday :)!` : `not Friday :(`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
