<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App "/>
    <image-priview></image-priview>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ImagePriview from '../components/ImagePriview.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ImagePriview,
  },
};
</script>
