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
    <v-row class="bg-surface py-15">
      <v-col cols="12">
        <h2 class="text-info text-uppercase">About Us</h2>
        <p class="text-justify">  
          Resilient Girls Network is a growing network of young girls and women who aspire to be great in life through Godly principles, pushing through every challenge to become all that God intends for them to be.
          Resilient Girls Network is a response  to God's agenda for everyone to fulfil their purpose in life, in so doing, making a difference in the society. Education, mentorship and prayer are some of our core values. At RGN, we believe that through education and with the right guidance and counsel sealed with prayers, every girl is empowered to become great.
          RGN started as a burden in my heart for women to become all that God intends for them. One of the greatest battles in life is the battle over one's destiny. The Kingdom of darkness has its own agenda against women especially women of God. As a woman who loves and fears God, I have faced my own share of battles. I have had series of health challenges which almost cost me my Education, I have endured hardship, suffered loss and faced all manner  of attacks from agents of darkness both in dreams and physical confrontations. 2 Corinthians 10:4 tells us we are in a warfare but not a physical one, this is why we are not addressing the issues women face in our world today physically alone but also spiritually to ensure women come into the fullness of their potential.
          We hold an annual WOMEN Become Conference. It is a channel for learning, healing, deliverance and an opportunity to connect and build friendship. It is my desire that women see themselves the way God sees them. There is a plan of God for every woman and it is my dream that women will become all of God's plan for them, the agenda of the devil to truncate this divine plan not withstanding.
        </p>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="bg-surface my-5">
    <v-row class="bg-surface py-15">
      <v-col cols="12" md="2" class="px-0">
        <v-img
          alt="profile photo"
           src="/profile-img.png"
        ></v-img>
      </v-col>
      <v-col cols="12" md="10" class="px-3">
        <h4 class="text-info">Zigabel Faith</h4>
        <i>Founder, Resilient Girls Network</i>
        <p class="text-justify mt-3">
          Zigabel Faith is the founder of Resilient Girls Network, a non-governmental organization that helps young women to live according to God’s purpose. She has BSc and masters degrees from Constanta Maritime University, Romania. She is a believer, public speaker and a teacher of God's word, and has always had passion for young women which she finds expression through programmes for women. Her vision is to improve the lives of women and motivate them to become whom God has created them to be.
        </p>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="bg-surface my-5">
    <v-row class="bg-surface py-15">
      <v-col cols="12">
        <h2 class="text-info text-uppercase">Our Vision</h2>
        <p class="text-justify">
          To connect and inspire greatness in women who are determined to become the women God intends for them to be regardless of the challenge or obstacle they may face thereby creating impact and making a difference in the society.
        </p>
      </v-col>
    </v-row>
  </v-container>

</template>
