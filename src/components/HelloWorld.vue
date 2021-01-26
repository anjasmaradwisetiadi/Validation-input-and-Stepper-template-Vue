<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="form-group">
      <label for="number">Number Only </label>
      <input v-model="myNumber" v-digitsonly type="text" name="number" class="mx-3">
    </div>

    <div class="form-group pt-3">
      <label for="text">Text Only </label>
      <input v-model="myText" v-Alphabet type="text" name="text" class="mx-3">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        myNumber: null,
        myText:'',
      }
    },
    props: {
      msg: String,
    },
    directives: {
      digitsonly(el, binding) {
        el.addEventListener('keypress', (e) => {
          const key = e.key;
          if(!/\d/.test(key)){
            console.log("only number")
             e.preventDefault();
          }
        })

        el.addEventListener('change', (e) => {
          const initialValue = el.value;
          console.log(initialValue)
          el.value = initialValue.replace(/[^0-9]*/g, '');
          if (initialValue !== el.value) {
            e.stopPropagation()
          }
        })

      },

      Alphabet(el, binding) {
        el.addEventListener('keypress', (e) => {
            const key = e.key;
            if(!/[A-Za-z]/.test(key)){
              console.log("only string")
              e.preventDefault();
            }
          }),
          el.addEventListener('change', (e) => {
            const initialValue = el.value;
            el.value = initialValue.replace(/[^A-Za-z ]*/g, '');
            if (initialValue !== el.value) {
              e.stopPropagation()
              console.log("string")
            }
          })
      },
    }
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

</style>
