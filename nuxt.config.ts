import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "nuxt-icon"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "en",
        language: "en-US",
        file: "en.yaml",
        dir: "ltr",
      },
      {
        code: "ar",
        language: "ar-SA",
        file: "ar.yaml",
        dir: "rtl",
      },
    ],
    defaultLocale: "en",
    langDir: "locales",
    detectBrowserLanguage: false,
    strategy: "prefix_except_default",
    compilation: {
      strictMessage: false,
    },
  },
});
