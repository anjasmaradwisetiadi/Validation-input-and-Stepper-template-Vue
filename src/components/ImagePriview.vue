<template>
  <section class="Priview_Image">
    <hr>
    <h2>Select image Priview</h2>
    <div class="form-group">
      <label>Image Priview</label>
      <br>
      <input type="file" name=imgPriview accept="image/*" @change="imagePriview">
      <br>
      <div v-if="imageCollect" class="my-4">
        <div v-for="(item,index) in imageCollect" :key="index">
          <img :src="imageUrlPriview(item)" alt="imageSved" style="width:260px">
          <br>
          <span class="text-danger">{{item.name}}</span>
          <br>
        </div>

      </div>
      <div v-else class="my-4">
        <span>Gambar tidak ada</span>
      </div>


    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        image: {
          imageSaved: '',
          nameImage: '',
        },
        countImage: 1,
        imageCollect: []

      }
    },

    methods: {
      imagePriview(event) {
        if (event.target.files[0]) {
          const cobaObservasi = this.countImage+1;
          console.log("ini observasi = "+cobaObservasi)
          for (let i = 1; i < cobaObservasi; i++) {
            this.imageCollect.push(event.target.files[0])
          }
          return this.imageCollect;
        } else {
          return false;
        }
      },

      imageUrlPriview(item) {
        if (item) {
          return URL.createObjectURL(item);
        } else {
          return false;
        }
      }
    }
  }

</script>
