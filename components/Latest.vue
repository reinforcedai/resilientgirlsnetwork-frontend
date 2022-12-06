<script setup>
const slides = [
  {
    src: "PhegR8TRyUc",
    text: ''
  },
]

</script>

<template>
    <!-- <v-row justify="center" align="center">
      <v-col
        cols="12"
        class="bg-surface"
      >
        <video width="820" height="240" controls>
          <source src="video.mp4" type="video/mp4">
        </video>
      </v-col>
    </v-row> -->

    <v-row justify="center" align="center">
      <v-col
        v-for="slide in slides"
        :key="slide.src"
        cols="12"
        md="6"
        class="bg-surface ma-1"
      >
        <div class="responsive-video">
          <iframe width="420" height="315" :src="`https://www.youtube.com/embed/${slide.src}`" frameborder="0"></iframe>
        </div>
      </v-col>
    </v-row>
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