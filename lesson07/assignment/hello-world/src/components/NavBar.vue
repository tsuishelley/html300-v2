<template>
  <div>
    <router-link v-for="link in navLinks" :key="link.path" :to="link.path">{{ link.text }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      navLinks: [
        { path: '/', text: 'Home' },
        { path: '/FAQs', text: 'FAQs' },
        { path: '/PetBios', text: 'PetBios'},
                { path: '/Gallery', text: 'Gallery'}
                      ]
    };
  }
}
</script>

<style>
/* Add styling for navigation bar */
</style>