<script setup>
  const title = ref('Donation')
  useHead({
    titleTemplate: (titleChunk) => {return titleChunk ? `${title.value} | ${titleChunk}` : 'Resilient Girls Network'},
    meta: [
      { name: 'description', content: '' }
    ],
  })
</script>

<template>
  <v-container class="bg-surface my-5">
    <v-row class="bg-surface py-15 px-5">
      <v-col cols="12">
        <h2 class="text-info text-uppercase">Donation</h2>
      </v-col>

      <v-col cols="12" md="6" class="text-center">
        <h3 class="text-info mb-5">One-Time Donation</h3>
        <v-btn
          size="large"
          href="https://sandbox-flw-web-v3.herokuapp.com/pay/resilient-girls-network-one-time-donation"
          color="success"
          block
        >
          Donate
        </v-btn>
      </v-col>
      

      <v-col cols="12" md="6" class="text-center">
        <h3 class="text-info mb-5">Recurring Donation</h3>
        <v-btn
          size="large"
          href="https://sandbox-flw-web-v3.herokuapp.com/pay/resilient-girls-network-recurring-donation"
          color="success"
          block
        >
          Donate
        </v-btn>
      </v-col>

    </v-row>
  </v-container>

</template>
