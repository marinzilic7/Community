export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: ["@/assets/main.scss", "bootstrap/dist/css/bootstrap.min.css"],
  plugins: [
    {
      src: "@/plugins/boostrap.js",
      mode: "client",
    },
  ],
});
