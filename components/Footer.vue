<script setup>
const store = useStore()
</script>

<template>
    <footer class="bg-primary">
        <v-row justify="center" class="my-10" no-gutters>
            <v-col class="my-10">
                <SocialLinks />
            </v-col>
            <v-col color="primary" class="text-center my-10" cols="12">
                &copy; {{ new Date().getFullYear() }} — <strong>{{ store }}</strong>
            </v-col>
        </v-row>
    </footer>
</template>