<template>
    <NavBar />

  <main class="main">
    <h1 class="display-1 m-5 text-center">A mix of stupid and cute photos.</h1>
    <div class="container">
      <div class="image-gallery">
        <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="'Image ' + (index + 1)">
      </div>
    </div>
  </main>
</template>

<script>
import NavBar from './NavBar.vue'; // Importing the NavBar component

export default {
      name: 'ImageGallery',
    components: {
        NavBar
 },
  data() {
    return {
      images: [
        { src: "assets/img/yuna.jpeg" },
        { src: "/img/mei-beach.JPG" },
        { src: "/img/mei-yuna-yard.JPG" },
        { src: "/img/mei-yuna-boat.JPG" },
        { src: "/img/totoro-blanket.JPG" },
        { src: "/img/totoro-laptop.JPG" },
        { src: "/img/totoro-shelf.JPG" }
      ]
    };
  }
}
</script>

<style>
/* Add your styles for the image gallery here */
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.image-gallery img {
  width: 300px;
  margin: 10px;
}
</style>