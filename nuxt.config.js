export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Edmachina',
    title: 'Edmachina',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    // SASS files wont resolve external assets, in nuxt we have to include them in the head tag.
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Round' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/globals.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    treeShake: true,
    theme: {
      options: { customProperties: true },
      dark: true,
      themes: {
        light: {
          primary: "#4436FD",
          secondary: "#fffff",
          accent: "#fefefe",
          error: "#ffffff",
          background: {
            base: "#f6f6f6",
            lighten1: "#fefefe",
            lighten2: "#ffffff",
          },
        },
        dark: {
          primary: "#F1BC01",
          accent: "#2c354c",
          background: {
            base: "#171E31",
            lighten1: "#283046",
            lighten2: "#2f3850",
          },
        },
      }
    },
    icons: {
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
