<template>
    <section class="step-3">
        <div>
            <h3>Step 3</h3>
            <p>{{error}}</p>
            <textarea v-model="message" type="text" placeholder="what your Message ?"
                class="form-control form-group-lg"></textarea>
        </div>
    </section>
</template>
<script>
    export default {
        data(){
            return{
                error: '',
            }
        },

        computed:{
            message:{
                get(){
                    return this.$store.state.pageForm.message;
                },
                set(value){
                    this.$store.commit('collectThree',value)
                }
            }
        }
    }
</script>
<style scoped>

</style>