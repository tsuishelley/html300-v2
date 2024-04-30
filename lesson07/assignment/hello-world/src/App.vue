<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import FAQs from './components/FAQs.vue';
import PetBios from './components/PetBios.vue';
import Gallery from './components/Gallery.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/FAQs', component: FAQs },
    { path: '/PetBios', component: PetBios},
    { path: '/Gallery', component: Gallery}

    // Add more routes as needed
  ]
});

export default createApp({
  router
}).mount('#app');
</script>

<style>
</style>