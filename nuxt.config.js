import colors from 'vuetify/es5/util/colors'
const bodyParser = require('body-parser')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - first-nuxt-app',
    title: 'first-nuxt-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap'}
    ]
  },

  loading: {color: colors.blue.darken2, height: '5px'},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/date-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    { path: '~/components/ui', extensions: ['vue'] },
    { path: '~/components/posts', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  router: {
    middleware: 'log'
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.FB_DATABASE_URL,
      credentials: false
    },
    baseURL: process.env.FB_DATABASE_URL,
    registerURL: process.env.FB_REGISTER_URL + process.env.FB_WEBAPI_KEY,
    loginURL: process.env.FB_LOGIN_URL + process.env.FB_WEBAPI_KEY
  },

  privateRuntimeConfig: {},

  router: {
    extendRoutes(routes,resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  serverMiddleware: [
    bodyParser.json(),
    '~/server/api'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
