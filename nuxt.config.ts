// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    ssr: false,
    
    css: [
        'vuetify/lib/styles/main.sass'
    ],

    build: {
        transpile: ['vuetify']
    },

    vite: {
        define: {'process.env.DEBUG': false}
    },
    
    modules: [
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(vuetify()))
        }
    ],


})
