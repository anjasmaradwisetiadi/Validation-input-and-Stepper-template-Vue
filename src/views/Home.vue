<template>
  <div class="home">
    <div class="row">
      <div class="col">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App " />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <image-priview></image-priview>
      </div>
      <div class="col">
        <mapping-data></mapping-data>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';
  import ImagePriview from '../components/ImagePriview.vue';
import MappingData from '../components/MappingData.vue';

  export default {
    name: 'Home',
    components: {
      HelloWorld,
      ImagePriview,
        MappingData,
    },
  };

</script>
