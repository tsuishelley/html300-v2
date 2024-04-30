import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap'; // Import Bootstrap JavaScript
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import FAQs from './components/FAQs.vue';
import PetBios from './components/PetBios.vue';
import Gallery from './components/Gallery.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/FAQs', component: FAQs },
  { path: '/PetBios', component: PetBios},
  { path: '/Gallery', component: Gallery}

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
  .use(router)
  .mount('#app');
