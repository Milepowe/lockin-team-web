import { plugin } from "postcss";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
  cssPath: '~/assets/css/main.css',
    configPath: './tailwind.config.js',
    },
    app:{
      baseURL: '/lockin-team-web/',
      buildAssetsDir: 'assets',
    }
  })