export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    // title: process.env.npm_package_name || "",
    title: "Oh Lá Lash",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Dallas Metroplex lash extension salon servicing Dallas, Plano, Frisco, McKinney, Southlake, Garland and Rowlett. Appointments are available. Book now."
      },
      {
        property: "og:title",
        content: "Oh La Lash"
      },
      {
        property: "og:description",
        content:
          "Dallas Metroplex lash extension salon servicing Dallas, Plano, Frisco, McKinney, Southlake, Garland and Rowlett. Appointments are available. Book now."
      },
      {
        property: "og:image",
        content: "http://www.ohlalash.com/images/lashes/lash-home-image.jpg"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:url",
        content: "http://www.ohlalash.com"
      },
      {
        property: "og:site_name",
        content: "www.ohlalash.com"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Alata&family=Permanent+Marker&family=Rozha+One&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Gilda+Display&family=Snippet&family=Montserrat:wght@100;300;400;500;700;800&display=swap"
      },
      {
        rel: "canonical",
        href: "http://www.ohlalash.com"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    "@nuxt/content"
  ],
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-duotone-sea.css"
      }
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: true,
    filenames: {
      css: ({ isDev }) => (isDev ? "[name].css" : "[contenthash].css"),
      app: ({ isDev }) => (isDev ? "[name].js" : "[contenthash].js")
    }
  }
};
