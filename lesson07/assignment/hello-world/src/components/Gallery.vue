<template>
  <div>
    <NavBar />
    <main class="main">
      <h1 class="display-1 m-5 text-center">A mix of stupid and cute photos.</h1>
      <div class="container">
        <ImagePic :images="images" />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'; // Importing the NavBar component
import ImagePic from './ImagePic.vue'; // Importing the Image component

export default {
  name: 'ImageGallery',
  components: {
    NavBar,
    ImagePic
  },
  data() {
    return {
      images: [
        { src: require("../assets/img/yuna.jpeg") },
        { src: require("../assets/img/mei-beach.jpeg") },
        { src: require("../assets/img/mei-yuna-yard.jpeg") },
        { src: require("../assets/img/mei-yuna-boat.jpeg") },
        { src: require("../assets/img/totoro-blanket.jpeg") },
        { src: require("../assets/img/totoro-laptop.jpeg") },
        { src: require("../assets/img/totoro-shelf.jpeg") }
      ]
    };
  }
}
</script>

<style>
/* Add your styles for the image gallery here */
</style>