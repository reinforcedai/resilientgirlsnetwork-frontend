<script setup>

const socialLinks = [
    { name: 'Facebook', to: 'https://web.facebook.com/Resilientgirlsnetwork', icon: 'mdi-facebook' },
  { name: 'Instagram', to: 'https://instagram.com/resilientgirlsnetwork', icon: 'mdi-instagram' },
  { name: 'YouTube', to: 'https://www.youtube.com/', icon: 'mdi-youtube' },
  { name: 'Twitter', to: 'https://twitter.com/', icon: 'mdi-twitter' },
]

</script>

<template>
    <v-row justify="center" no-gutters>
        <v-col class="text-center">
            <v-btn v-for="link in socialLinks"
                :key="link.to"
                :href="link.to"
                :icon="link.icon"
                color="success"
                class="ma-1"
                target="_blank"
            >
            </v-btn>
        </v-col>
    </v-row>
</template>
