<script setup>
import { ref } from 'vue'

const state = useState()

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Videos', to: '/videos' },
  { name: 'Partnership', to: '/partnership' },
  { name: 'Contact', to: '/contact' },
]

const drawer = ref(false)

function toggleDrawar(){
    drawer.value = !drawer.value
  }



</script>

<template>
    <v-app-bar color="primary">
        <template v-slot:append>
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                class="hidden-md-and-up"
            >
            </v-app-bar-nav-icon>
        </template>


        <nuxt-link to="/" exact class="text-decoration-none d-flex flex-row align-center ml-5">
            <div>
                <v-img
                    alt="logo"
                    contain
                    src="/rgn-logo.jpeg"
                    transition="scale-transition"
                    width="50"
                    class="shrink"
                />
            </div>
            <div>
                <!-- <v-app-bar-title class="text-secondary ml-3">{{ state }}</v-app-bar-title> -->
            </div>
        </nuxt-link>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
            >
                {{link.name}}
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn
            size="large"
            class="hidden-sm-and-down bg-success mr-15"
            to="/donate"
        >
            Donate
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer
        app
        temporary
        v-model="drawer"
        color="primary"
        class="px-1"
        location="right"
    >
        <v-list >
            <v-list-item
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                :title="link.name"
            ></v-list-item>
        </v-list>
        <v-btn
            block
            size="large"
            to="/donate"
            variant="outlined"
        >
            Donate
        </v-btn>

    </v-navigation-drawer>
</template>

