<template>
  <div>
    <NavBar />
    <body>
      <!-- Landing Page Intro -->
      <main class="main">
              <!-- Button to toggle text content -->
        <button @click="toggleTextContent" class="btn btn-primary">Toggle pet description</button>
        <!-- Conditional text content -->
        <div v-if="showTextContent" class="m-5 text-center">
          <h1>Meet my wonderful pets</h1>
        </div>
        <div v-else class="m-5 text-center">
          <h1>Meet my stupid pets</h1>
        </div>
        <h4 class="m-5 text-center">They are all wonderful and stupid in their unique ways.</h4>
        <!-- Three photos of pets -->
        <div class="row">
          <div class="col-sm-4">
            <img src="../assets/img/yuna.jpeg" class="img-fluid">
          </div>
          <div class="col-sm-4">
            <img src="../assets/img/totoro.jpeg" class="img-fluid">
          </div>
          <div class="col-sm-4">
            <img src="../assets/img/mei.jpeg" class="img-fluid">
          </div>
        </div>
      </main>
    </body>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'; // Importing the NavBar component

export default {
  name: 'HomePage',
  components: {
    NavBar // Register the NavBar component
  },
  data() {
    return {
      showTextContent: false // Initially hiding the text content
    };
  },
  methods: {
    toggleTextContent() {
      this.showTextContent = !this.showTextContent; // Toggles the visibility of text content
    }
  }
}
</script>