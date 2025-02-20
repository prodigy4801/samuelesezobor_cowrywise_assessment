// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  imports: {
    dirs: ['stores'],
  },
  compatibilityDate: '2025-02-20',
  css: ['./assets/css/main.css'],
  googleFonts: {
    families: {
      Roboto: true,
      Inter: [400, 700],
      Lato: [100, 300],
    },
  },
  runtimeConfig: {
    public: {
      unsplashUrl: process.env.UNSPLASH_BASE_URL,
      unsplashKey: process.env.UNSPLASH_APIKEY,
    },
  },
});
