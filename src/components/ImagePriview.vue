<template>
  <section class="Priview_Image">
    <hr>
    <h2>Select image Priview</h2>
    <div class="form-group">
      <label>Image Priview</label>
      <br>
      <input type="file" name=imgPriview accept="image/*" @change="imagePriview">
      <br>
      <div v-if="image.imageSaved" class="my-4">
        <img :src="image.imageSaved" alt="imageSved" style="width:260px">
        <br>
        <span class="text-danger">{{image.nameImage}}</span>
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
          nameImage: ''
        }

      }
    },

    methods: {
      imagePriview(event) {
        const gambar = event.target.files[0];
        this.image.nameImage = event.target.files[0].name
        this.image.imageSaved = URL.createObjectURL(gambar)
      }
    }
  }

</script>
