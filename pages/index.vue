<script setup>
  const title = ref('Home')
  useHead({
    titleTemplate: (titleChunk) => {return titleChunk ? `${title.value} | ${titleChunk}` : 'Resilient Girls Network'},
    meta: [
      { name: 'description', content: '' }
    ],
  })


const items = [
  {
    icon: "mdi-school-outline",
    text: 'Education'
  },
  {
    icon: "mdi-account-group-outline",
    text: 'Mentorship'
  },
  {
    icon: "mdi-hands-pray",
    text: 'Prayer'
  },
]

</script>

<template>
  <v-layout class="ma-n4">
    <Hero/>
  </v-layout>

  <v-layout>
    <v-row class="bg-surface text-center mt-10 py-15">
      <v-col cols="12">
        <h1 class="text-info text-uppercase">We are on a vision</h1>
          <v-img
            alt="image"
            src="/5.svg"
            width="350"
            class="mx-auto"
          />
        <p class="text-center px-15 pt-15">
          To connect and inspire greatness in women who are determined to become the women God intends for them to be
        </p>
        <p class="text-center px-15">
          regardless of the challenge or obstacle they may face thereby creating impact and making a difference in the society
        </p>
      </v-col>
      <v-col cols="12" class="pt-15">
        <v-btn to="/partnership" class="bg-success" size="x-large">Become A Partner</v-btn>
      </v-col>
    </v-row>
  </v-layout>

  <v-layout>
    <v-row justify="center" align="center" class="bg-surface text-center py-15">
      <v-col
        v-for="item in items"
        :key="item.icon"
        cols="12"
        md="3"
      >
        <v-icon
          size="50"
          color="success"
        >
          {{ item.icon }}
        </v-icon>
        <h5>
          {{ item.text }}
        </h5>
      </v-col>
    </v-row>
  </v-layout>

  <v-layout class="bg-surface my-5">
    <v-row class="bg-surface text-center py-15">
      <v-col cols="12">
        <h1 class="text-info text-uppercase">Latest Event</h1>
      </v-col>
      <v-col cols="12">
        <Latest/>
      </v-col>
    </v-row>
  </v-layout>

  <!-- <v-layout class="bg-surface my-5">
    <v-row class="bg-surface text-center py-15">
      <v-col cols="12">
        <h1 class="text-info text-uppercase">Our Partners</h1>
      </v-col>
      <v-col cols="12">
        <p class="px-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat dolores adipisci quidem veritatis sint delectus corporis rem! Accusantium alias quidem incidunt voluptatem laudantium odio. Ullam soluta expedita necessitatibus aliquam consectetur?
        </p>
      </v-col>
    </v-row>
  </v-layout> -->

  <v-layout class="bg-surface my-5">
    <v-img
        alt="outreach"
        src="/outreach.jpeg"
        gradient="to bottom, rgba(0,0,0,.7), rgba(0,0,0,.6)"
        max-height="400"
        cover
        class="mx-auto"
      >
        <v-row justify="center" align="center" class="fill-height">
          <v-col cols="12" class="text-center">
            <h1 class="text-surface">Outreach Programs</h1>
          </v-col>
        </v-row>
    </v-img>

  </v-layout>

</template>
