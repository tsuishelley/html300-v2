<template>
    <NavBar />
<main class="main">
        <h1 class="display-1 m-5 text-center">The Stories of Our Pets</h1>
        <div class="container">
            <div class="row">
              <!-- Small size column -->
              <div class="col-sm-12 col-md-6 col-lg-3">
                <div class="card">
                  <div class="card-body">
                    <a href="#" rel="tooltip" title="5 year old Siberian cat">Totoro</a>
                    <p class="card-text">Totoro was meant to be my graduation gift, but we ended up getting him early. He is an extremely cuddly, soft, and social cat who loves to meow and shout for what he wants. He's not afraid of anything, not even the dogs.</p>
                  </div>
                </div>
              </div>
              <!-- Medium size column -->
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <a href="#" rel="tooltip" title="2 year old ACD mix">Yuna</a>
                    <p class="card-text">Mei's old foster parent reached out to us. They knew we had a front right leg tripawd (three-legged dog) and figured we would want another. Yuna is dumb, brave, and incredibly hungry for love and words of affirmation. If you're offering pets she's there.</p>
                  </div>
                </div>
              </div>
          
              <!-- Large size column -->
              <div class="col-sm-12 col-md-12 col-lg-3">
                <div class="card">
                  <div class="card-body">
                    <a href="#" rel="tooltip" title="3 year old Border Collie mix">Mei</a>
                    <p class="card-text">Mei was also meant to be my graduation gift, we also ended up getting her early. We actually didn't know she was a three-legged dog until we met her — the most important thing to us at the time was that she was medium-sized and liked cats. She still does.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </main>
</template>

<script>
import NavBar from './NavBar.vue'; // Importing the NavBar component

export default {
  name: 'PetBios',
  components: {
    NavBar // Register the NavBar component
  }
}
</script>