<template>
  <section class="finally">
    <h1>Finally Form</h1>
    <div class="text-left">
      <pre id="json">
            {{resultAll}}
        </pre>
    </div>
    </section>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {


        mounted() {
            alert("finally form")
        },

        computed: {
            ...mapGetters({
                resultAll: 'getResultAll'
            }),
        },



    }
</script>
<style scoped>

</style>
