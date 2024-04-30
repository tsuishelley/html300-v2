<template>
  <div>
    <NavBar />
    <main class="main">
      <h1 class="display-1 m-5 text-center">FAQs About My Pets</h1>
      <!-- Accordion Container -->
      <div class="accordion" id="accordionExample">
        <!-- Accordion items -->
        <div v-for="(faq, index) in faqs" :key="index" class="accordion-item">
          <h2 class="accordion-header" :id="'heading' + index">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" :aria-expanded="index === 0" :aria-controls="'collapse' + index">
              {{ faq.question }}
            </button>
          </h2>
          <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ 'show': index === 0 }" :aria-labelledby="'heading' + index" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'; // Importing the NavBar component

export default {
  name: 'FAQs',
  components: {
    NavBar // Register the NavBar component
  },
  data() {
    return {
      faqs: [
        {
          question: "Am I looking at those photos right or are your dogs missing their legs?",
          answer: "They are! Both are missing their front right leg. Mei unfortunately had an accident prior to us owning her in which she damaged her leg so the rescue amputated. We got Yuna about one year later, a silly little cattle dog who was amputated due to a birth defect. It felt like kismet."
        },
        {
          question: "Where did the names for your pets come from?",
          answer: "They are from Studio Ghibli films, mainly My Neighbor Totoro! Totoro is named after (you can guess) Totoro, Mei is named after the little girl who befriends Totoro. Yuna is the name of the employees at the bathhouse in Spirited Away."
        },
        {
          question: "Who is your favorite pet?",
          answer: "That's awful. That's like asking a mother to pick her favorite child. But we all know they have one. My answer is Mei. My husband's is Yuna. But Totoro gets the most spoiled."
        }
      ]
    };
  }
}
</script>

<style>
/* Add your styles for the accordion here */
</style>
