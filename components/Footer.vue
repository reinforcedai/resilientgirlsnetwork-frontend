<script setup>
const siteName = useSiteName()
</script>

<template>
    <footer class="bg-primary py-15">
        <v-container class="bg-primary-darken-1">
            <v-row justify="center" class="my-15" no-gutters>
                <v-col cols="6" class="">
                    <v-btn to="/contact" class="bg-success ma-1">contact</v-btn>
                    <v-btn to="/videos" class="bg-success ma-1">videos</v-btn>
                    <v-btn to="/partnership" class="bg-success ma-1">Become A Partner</v-btn>
                </v-col>
                <v-col cols="4" class="">
                    <SocialLinks />
                </v-col>
            </v-row>
            <v-row justify="center" class="my-10" no-gutters>
                <v-col color="primary" class="text-center my-10" cols="12">
                    Copyright &copy; {{ new Date().getFullYear() }} - {{ siteName }}.
                </v-col>
            </v-row>
        </v-container>
    </footer>
</template>
