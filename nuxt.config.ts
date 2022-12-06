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
        { name: 'description', content: 'A Non-Governmental Organization Focused On Inspiring Women To Accomplish Their God\'s Given Purpose And Making Positive Impact In The Society.' },
        { hid: 'twitter:title', name: "twitter:title", content: 'Resilient Girls Network', },
        { hid: 'description', name: "description", content: 'A Non-Governmental Organization Focused On Inspiring Women To Accomplish Their God\'s Given Purpose And Making Positive Impact In The Society.', },
        { hid: 'twitter:description', name: "twitter:description", content: 'A Non-Governmental Organization Focused On Inspiring Women To Accomplish Their God\'s Given Purpose And Making Positive Impact In The Society.' },
        { hid: 'image', name: "image", content: 'https://res.cloudinary.com/reinforcedai/image/upload/v1670329557/resilient-girls-network/share-image_nsz3zx.png', },
        { hid: 'twitter:image', name: "twitter:image", content: 'https://res.cloudinary.com/reinforcedai/image/upload/v1670329557/resilient-girls-network/share-image_nsz3zx.png', },
        { hid: 'og:title', property: "og:title", content: 'Resilient Girls Network', },
        { hid: 'og:description', property: "og:description", content: 'A Non-Governmental Organization Focused On Inspiring Women To Accomplish Their God\'s Given Purpose And Making Positive Impact In The Society.', },
        { hid: 'og:image', property: "og:image", content: 'https://res.cloudinary.com/reinforcedai/image/upload/v1670329557/resilient-girls-network/share-image_nsz3zx.png', },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://res.cloudinary.com/reinforcedai/image/upload/v1670329557/resilient-girls-network/share-image_nsz3zx.png' },
        { hid: 'twitter:card', name: "twitter:card", content: "summary_large_image" },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Resilient Girls Network Share Image' },
        { hid: 'twitter:site', name: 'twitter:site', content: 'Resilient Girls Network' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://resilientgirlsnetwork.org/' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'Resilient Girls Network Share Image' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Resilient Girls Network' },
        { hid: 'og:type', property: 'og:type', content: 'Resilient Girls Network' },
        { hid: 'og:url', property: 'og:url', content: 'https://resilientgirlsnetwork.org/' },
      ],
    }
  },
  
  css: [
    'vuetify/lib/styles/main.sass',
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
    },
    '@nuxtjs/robots',
    ['@nuxtjs/robots',
      {
        UserAgent: '*',
        Disallow: ''
      },
      { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml`}

        
    ]
  ],

  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    download: true,
    inject: true,
    overwriting: false,
    fontsDir: 'fonts',
    fontsPath: '~assets/fonts'

  }

})
