<template>
  <section class="step-2">
    <div>
      <h3>Step 2</h3>
      <p>{{error}}</p>
      <div class="form-group">
        <input v-model="email" type="email" placeholder="what your Email ?"
          class="form-control form-group-lg">
        <input v-model="phone" type="tel" placeholder="what your Telephone ?"
          class="form-control form-group-lg mt-2">
      </div>

    </div>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        error: '',
      }
    },

    // Tanya... ini bisa gak email dan phone di tampung di payload secara
    computed: {
      email: {
        get() {
          return this.$store.state.pageForm.email;
        },
        set(value) {
          this.$store.commit('collectTwo', {
            email: value,
            phone: this.$store.state.pageForm.phone
          })
        }
      },
      phone: {
        get() {
          return this.$store.state.pageForm.phone;
        },
        set(value) {
          this.$store.commit('collectTwo', {
            email:this.$store.state.pageForm.email,
            phone: value
          })
        }
      },
      
    },



  }

</script>
<style scoped>

</style>
