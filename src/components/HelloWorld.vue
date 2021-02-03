<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="form-group">
      <label for="number">Number Only </label>
      <input v-model="myNumber" v-digitsonly type="text" name="number" class="mx-3 form_number">
    </div>

    <div class="form-group pt-3">
      <label for="text">Text Only </label>
      <input v-model="myText" v-textonly type="text" name="text" class="mx-3 form_text">
    </div>
<!-- 
    <div class="form-group pt-3">
      <label for="text">AlphaNumeric </label>
      <input v-model="myAlphaNumeric" v-AlphaNumeric type="text" name="text" class="mx-3 form_text">
    </div>

    <div class="form-group pt-3">
      <label for="text">Email </label>
      <input v-model="myEmail" v-Email type="text" name="text" class="mx-3 form_text">
    </div>

    <div class="form-group pt-3">
      <label for="text">Password </label>
      <input v-model="myPassword" v-Password type="text" name="text" class="mx-3 form_text">
    </div> -->
  </div>
</template>

<script>
  import {
    mixinValidate
  } from '../Directive/mixins'

  export default {
    mixins: [mixinValidate],
    name: 'HelloWorld',
    data() {
      return {
        myNumber: null,
        myText: '',
      }
    },
    props: {
      msg: String,
    },

  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .form_text:focus,
  .form_number:focus {
    outline: 1px solid red;
  }

</style>
