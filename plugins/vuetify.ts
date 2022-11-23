import { createVuetify, ThemeDefinition } from 'vuetify'
import { md1 } from 'vuetify/blueprints'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#f5f5f5',
    surface: '#FFFFFF',
    primary: '#7E240F',
    'primary-darken-1': '#4A1509',
    secondary: '#FFFFFF',
    'secondary-darken-1': '#8A0A39',
    error: '#4A1509',
    info: '#000000',
    success: '#8A460A',
    warning: '#94380A',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    // blueprint: md2,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      }
    },
    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme,
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
