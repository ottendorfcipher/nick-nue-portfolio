export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "server",
  router: {
    base: "/"
  },
  colorMode: {
    classSuffix: "",
  },
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0' // default: localhost 
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Nick Weiner Portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/app.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // "~/plugins/back-to-top.js"
    { src: '~/plugins/vuelidate' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    // extra config e.g
    BaseURL: 'https://getform.io/f/0c6790a5-fc37-4cf4-a889-461c353d2bf4'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  builds: [
    
  ],
};
