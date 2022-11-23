// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    ssr: false,

    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'Resilient Girls Network',
          meta: [
            { name: 'description', content: 'A Non-Governmental Organization Focused On Inspiring Women To Accomplish Their God\'s Given Purpose And Making Positive Impact In The Society.' }
          ],
        }
      },
    
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
