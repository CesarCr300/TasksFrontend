// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "My TODO App",
    },
  },
  runtimeConfig: {
    public: {
      apiBaseURL: "http://localhost:4000",
    },
  },
  modules: [
    "@pinia/nuxt",
  ],
});
