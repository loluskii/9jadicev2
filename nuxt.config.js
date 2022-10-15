const webpack = require("webpack");
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Dice.ng | Nigeria's No.1 Dice gaming platform.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      { name: "theme-color", content: "#000000" },
      { name: "description", content: "Win big with Nigeria's No.1 Dice gaming platform." },
      { name: "keywords", content: "Diceng, tournament, dice tournament, dicecom, single dice, odd even, under over, mega ten, public games, private games, celebrity, verified, biggest prizes, luxury games, bonus games, free games, virtual, Nigeria, Virtual Betting, Sport, Odds, Live, Bonus, Free, Premier League, Premier, win, live betting, mobile, deposit, football, 9ja, betting website, livescore, predict" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Orbitron:700" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '~/assets/css/index.css',
    '~/assets/css/navbar.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/bootstrap.js',
    '~/plugins/util.js',
    { src: '~/plugins/vue-persist.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/auth-next',
    '@nuxtjs/moment'
  ],

  // loading: '~/components/Loading.vue',

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://v2.dice.ng/api',
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        localStorage:{
          prefix: 'auth.'
        },
        token: {
          prefix: 'token.',
          property: 'data.authorization.token',
          maxAge: 1800,
          global: true,
        },
        user: {
          property: false,
          autoFetch: false
        },
        refreshToken:{
          prefix: 'refresh_token.',
          property: 'data.authorization.token',
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          refresh: { url: '/refresh', method: 'post'},
          user: false
        }
      }
    },
    redirect: {
      login: '/auth/login',
      logout: '/',
      home: '/',
    },
    // plugins: ['~/plugins/auth.js']
  },

  toast: {
    position: 'top-right',
    duration: 2000
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery",
        "window.jQuery": "jquery",
      }),
    ],
  },

  generate: {
    fallback: true
  }

}
