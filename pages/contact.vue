<script setup>

  const title = ref('Contact')
  useHead({
    titleTemplate: (titleChunk) => {return titleChunk ? `${title.value} | ${titleChunk}` : 'Resilient Girls Network'},
    meta: [
      { name: 'description', content: '' }
    ],
  })

  const socialLinks = [
      { name: 'Facebook', to: 'https://web.facebook.com/Resilientgirlsnetwork', icon: 'mdi-facebook' },
    { name: 'Instagram', to: 'https://instagram.com/resilientgirlsnetwork', icon: 'mdi-instagram' },
    { name: 'YouTube', to: 'https://www.youtube.com/', icon: 'mdi-youtube' },
    { name: 'Twitter', to: 'https://twitter.com/', icon: 'mdi-twitter' },
  ]

</script>

<template>
  <v-container class="bg-surface my-5">
    <v-row class="bg-surface py-15 px-5">
      <v-col cols="12">
        <h1 class="text-success text-uppercase">
          
          <v-icon
            size="x-large"
            color="success"
          >
            mdi-message-text-outline
          </v-icon>
          Contact Us
        </h1>
        <p>
          Email: resilientgirlsnetwork@gmail.com
        </p>
        <!-- <p>
          Email: info@resilientgirlsnetwork.org
        </p> -->
      </v-col>

      <v-col>
         <h5 class="text-success text-uppercase">Follow Us</h5>
        <v-btn v-for="link in socialLinks"
          :key="link.to"
          :href="link.to"
          :prepend-icon="link.icon"
          color="success"
          class="ma-1"
          target="_blank"
        >
          {{ link.name }}
        </v-btn>
      </v-col>

    </v-row>
  </v-container>
</template>
