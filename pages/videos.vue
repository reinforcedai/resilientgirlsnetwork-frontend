<script setup>
const title = ref('Videos')
useHead({
  titleTemplate: (titleChunk) => {return titleChunk ? `${title.value} | ${titleChunk}` : 'Resilient Girls Network'},
  meta: [
    { name: 'description', content: '' }
  ],
})
const cycle = ref(true)
const slides = [
  {
    src: "uC0UHJagWNE",
    text: ''
  },
  {
    src: "UwMvGffgq6U",
    text: ''
  },
  {
    src: "Yr25N8OagEw",
    text: ''
  },
  {
    src: "vXkrH_7-LBo",
    text: ''
  },
  {
    src: "MTRYEhNd4II",
    text: ''
  },
  {
    src: "kOfbomJQZQw",
    text: ''
  },
]

</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="text-center">
        <h2 class="text-capitalize mb-4">Video</h2>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col
        v-for="slide in slides"
        :key="slide.src"
        cols="12"
        md="3"
        class="bg-surface ma-1"
      >
        <div class="responsive-video">
          <iframe width="420" height="315" :src="`https://www.youtube.com/embed/${slide.src}`" frameborder="0"></iframe>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

.responsive-video {
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
}

.responsive-video iframe {
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}

</style>