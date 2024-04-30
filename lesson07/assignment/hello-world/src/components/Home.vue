<template>
    <NavBar />
   <body>
           <!-- Landing Page Intro -->
        <main class="main">
            <h1 class="display-1 m-5 text-center">Meet My Pets</h1>
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
</template>

<script>
import NavBar from './NavBar.vue'; // Importing the NavBar component

export default {
  name: 'HomePage',
  components: {
    NavBar // Register the NavBar component
  }
}
</script>