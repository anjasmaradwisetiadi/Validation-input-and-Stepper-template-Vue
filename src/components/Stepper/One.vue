<template>
    <section class="step-1">
        <div>
            <h3>Step 1</h3>
            <p>{{error}}</p>
            <input v-model="name" type="text" placeholder="what your name ?" class="form-control form-group-lg">
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

        computed:{
            name:{
                get (){
                    return this.$store.state.pageForm.name
                },
                set (value){
                    this.$store.commit('collectOne', value);
                }
            }
        },
    }
</script>
<style scoped>

</style>