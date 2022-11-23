<script setup>
  const title = ref('About')
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
        <h2 class="text-info text-uppercase">About Us</h2>
        <p class="text-justify">  
          Resilient Girls Network is a growing network of young girls and women who aspire to be great in life through Godly principles, pushing through every challenge to become all that God intends for them to be.
          Resilient Girls Network is a response  to God's agenda for everyone to fulfil their purpose in life, in so doing, making a difference in the society. Education, mentorship and prayer are some of our core values. At RGN, we believe that through education and with the right guidance and counsel sealed with prayers, every girl is empowered to become.
          RGN started as a burden in my heart for women to become all that God intends for them. One of the greatest battles in life is the battle over one's destiny. The Kingdom of darkness has its own agenda against women especially women of God. As a woman who loves and fears God, I have faced my own share of battles. I have had series of health challenges which almost cost me my Education, I have endured hardship, suffered loss and faced all manner  of attacks from agents of darkness both in dreams and physical confrontations. 2 Corinthians 10:4 tells us we are in a warfare but not a physical one, this is why we are not addressing the issues women face in our world today physically alone but also spiritually to ensure women come into the fullness of their potential.
          We hold an annual WOMEN Become Conference. It is a channel for learning, healing, deliverance and an opportunity to connect and build friendship. It is my desire that women see themselves the way God sees them. There is a plan of God for every woman and it is my dream that women will become all of God's plan for them, the agenda of the devil to truncate this divine plan not withstanding.
        </p>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="bg-surface my-5">
    <v-row class="bg-surface py-15">
      <v-col cols="12" md="2" class="ml-5">
        <v-img
          alt="profile photo"
           src="/2.jpeg"
        ></v-img>
      </v-col>
      <v-col cols="12" md="8" class="pl-0">
        <p class="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat dolores adipisci quidem veritatis sint delectus corporis rem! Accusantium alias quidem incidunt voluptatem laudantium odio. Ullam soluta expedita necessitatibus aliquam consectetur?
        </p>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="bg-surface my-5">
    <v-row class="bg-surface py-15 px-5">
      <v-col cols="12">
        <h2 class="text-info text-uppercase">Our Vision</h2>
        <p class="text-justify">
          To connect and inspire greatness in women who are determined to become the women God intends for them to be regardless of the challenge or obstacle they may face thereby creating impact and making a difference in the society.
        </p>
      </v-col>
    </v-row>
  </v-container>

</template>
