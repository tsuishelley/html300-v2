<template>
  <div class="image-gallery">
    <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" :title="image.title" @click="toggleBorder" :class="{ 'bordered-image': isBorderVisible }">
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBorderVisible: false
    };
  },
  methods: {
    toggleBorder() {
      this.isBorderVisible = !this.isBorderVisible;
    }
  },
  props: {
    images: {
      type: Array,
      required: true
    }
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

.bordered-image {
  border: 2px solid red;
}

.image-gallery img {
  width: 300px;
  margin: 10px;
}
</style>