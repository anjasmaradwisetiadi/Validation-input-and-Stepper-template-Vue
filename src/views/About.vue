<template>
  <section class="Stepper">
    <div class="container">
      <div class="row">
        <div class="col">
          <keep-alive>
            <component :is="selectedStepper"></component>
          </keep-alive>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="mt-4">
            <button v-if="stepByStep<3" @click="nextSteps()">Next Step</button>
            <button v-if="stepByStep>1" @click="prevSteps()">Previous Step</button>
            <button v-if="stepByStep===3" @click="Submit()">Submit</button>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
  import Finally from '../components/Stepper/Finally.vue'
  import One from '../components/Stepper/One.vue'
  import Three from '../components/Stepper/Three.vue'
  import Two from '../components/Stepper/Two.vue'
  export default {
    components: {
      One,
      Two,
      Three,
      Finally
    },

    data() {
      return {
        stepByStep: 1,
        maxStep: 4,
        selectedStepper: 'one'
      }
    },

    computed: {
      logicStepper() {
        if (this.stepByStep === 1) return this.selectedStepper = 'one';
        else if (this.stepByStep === 2) return this.selectedStepper = 'two';
        else if (this.stepByStep === 3) return this.selectedStepper = 'three';
        else return this.selectedStepper = 'finally';
      }
    },

    methods: {
      nextSteps() {
        this.stepByStep++;
        this.logicStepper;
      },
      prevSteps() {
        this.stepByStep--;
        this.logicStepper;
      },
      Submit() {
        this.stepByStep++;
        this.logicStepper;
        this.$store.commit('finally');
      },
    }
  }

</script>

<style scoped>

</style>
