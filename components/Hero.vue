<script setup>
import { ref } from 'vue'

const cycle = ref(true)
const slides = [
  {
    src: "/1.png",
    text: 'Connecting'
  },
  {
    src: "/2.png",
    text: 'Inspiring'
  },
  {
    src: "/3.png",
    text: 'According To God\'s Purpose'
  },
]

</script>

<template>
  <v-carousel
    :cycle="cycle"
    :show-arrows="false"
    hide-delimiter-background
    hide-delimiters
    >
    <v-carousel-item
      v-for="(slide,i) in slides"
      :key="i"
      :src="slide.src"
      cover
    >
      <div class="d-flex fill-height align-center">
        <div class="text-h5 text-md-h3 text-surface font-weight-black pa-3">
          {{ slide.text }}
        </div>
        <div class="overlay"></div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped>
.v-carousel {
  position: relative;
}
.overlay {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  z-index: -1;
}
</style>