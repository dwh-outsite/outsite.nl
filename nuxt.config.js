import path from 'path'
import fs from 'fs'

import pkg from './package'

function createRedirects(directory = 'assets/content/redirects') {
  return fs.readdirSync(directory).map(fileName => JSON.parse(fs.readFileSync(path.join(directory, fileName))))
}

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Outsite - LHBT+ vereniging Delft',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#e31c79' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    'nuxt-purgecss',
    'nuxt-svg-loader',
    '@aceforth/nuxt-netlify'
  ],

  i18n: {
    locales: [
      { code: 'nl', iso: 'nl-NL', file: 'nl.js' },
      { code: 'en', iso: 'en-US', file: 'en.js' }
    ],
    defaultLocale: 'nl',
    langDir: 'lang/',
    lazy: true,
    vueI18n: {
      fallbackLocale: 'nl'
    }
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: false,
          skipEmptyLines: true
        }
      })
    }
  },

  netlify: {
    redirects: createRedirects().concat([
      {
        from: 'https://outsite.netlify.com/*',
        to: 'https://outsite.nl/:splat',
        status: '301!'
      }
    ])
  }
}
