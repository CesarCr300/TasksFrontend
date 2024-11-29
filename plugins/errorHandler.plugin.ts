export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, vm, info) => {
    console.error("Global error handler:", error, info);
  };
});
