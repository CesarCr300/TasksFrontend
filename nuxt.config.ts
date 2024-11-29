// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "My TODO App",
    },
  },
  runtimeConfig: {},
  modules: ["@pinia/nuxt"],
  plugins: ["~/plugins/errorHandler.plugin.ts"],
});
