<script setup>
import { ref } from 'vue'

const store = useStore()

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
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
        <template v-slot:prepend>
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                class="hidden-md-and-up"
            >
            </v-app-bar-nav-icon>
        </template>


            <nuxt-link to="/" exact class="text-decoration-none d-flex flex-row align-center">
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
                    <!-- <v-app-bar-title class="text-secondary ml-3">{{store}}</v-app-bar-title> -->
                </div>
            </nuxt-link>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down mr-15">
            <v-btn v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
            >
                {{link.name}}
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        color="primary"
        app
        temporary
    >
        <v-list >
            <v-list-item
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                :title="link.name"
            ></v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>

