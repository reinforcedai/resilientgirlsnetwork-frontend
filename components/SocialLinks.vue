<script setup>

const socialLinks = [
  { name: 'LinkedIn', to: 'https://www.linkedin.com/in/', icon: 'mdi-linkedin' },
  { name: 'Twitter', to: 'https://twitter.com/', icon: 'mdi-twitter' },
  { name: 'Facebook', to: 'https://web.facebook.com/', icon: 'mdi-facebook' },
  { name: 'Instagram', to: 'https://instagram.com/', icon: 'mdi-instagram' },
]

</script>

<template>
    <v-row justify="center" no-gutters>
        <v-col class="text-center">
            <v-btn v-for="link in socialLinks"
                :key="link.to"
                :href="link.to"
                :icon="link.icon"
                color="info"
                class="mx-1"
                target="_blank"
            >
            </v-btn>
        </v-col>
    </v-row>
</template>
