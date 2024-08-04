// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', "@nuxtjs/tailwindcss"],
  css: ['~/assets/base.css'],
  runtimeConfig: {
    fakeApi : process.env.NUXT_BASE_URL ?? "https://fakestoreapi.com"
  },
  router : {
    options : {
      linkActiveClass : 'nuxt-link-exact-active',
      linkExactActiveClass : 'nuxt-link-exact-active',
      scrollBehaviorType: 'smooth'
    }
  },
})