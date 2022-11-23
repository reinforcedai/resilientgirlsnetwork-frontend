<script setup>
  const title = ref('Partnership')
  useHead({
    titleTemplate: (titleChunk) => {return titleChunk ? `${title.value} | ${titleChunk}` : 'Resilient Girls Network'},
    meta: [
      { name: 'description', content: '' }
    ],
  })
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="text-center">
        <h2 class="text-capitalize mb-4">Partner with Us</h2>
        <v-btn
          size="large"
          to="/contact"
          color="success"
        >
          Contact Us For Partnership
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row no-gutters>
      <v-col class="text-center">
        <h2 class="text-capitalize mb-4">Donation</h2>
        <v-btn
          size="large"
          to="/donate"
          color="success"
        >
          Donate
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
