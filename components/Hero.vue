<script setup>
import { ref } from 'vue'

const cycle = ref(true)
const slides = [
  {
    src: "/1.jpeg",
    text: ''
  },
  {
    src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg",
    text: ''
  },
  {
    src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    text: ''
  },
]

</script>

<template>
    <v-carousel
        :cycle="cycle"
        :show-arrows="false"
        hide-delimiter-background
        hide-delimiters
        class=""
        >
        <v-carousel-item
            v-for="(slide,i) in slides"
            :key="i"
            :src="slide.src"
            cover
        >
            <v-row align="center" justify="center" class="fill-height">
                <v-col class="text-center">
                    <h1>{{ slide.text }}</h1>
                </v-col>
            </v-row>
      </v-carousel-item>
    </v-carousel>
</template>