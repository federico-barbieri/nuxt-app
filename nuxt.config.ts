// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  modules: ['@nuxt/ui', "@nuxt/image", '@nuxt/icon'],

  colorMode: {
    preference: 'light'
  },

  screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },

  compatibilityDate: '2025-03-20'
})