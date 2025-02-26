export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules:[
    '@nuxt/image'
  ],
  image: {
    screens:{
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    }
  },
  css: ["@/assets/main.scss", "bootstrap/dist/css/bootstrap.min.css"],
  plugins: [
    {
      src: "@/plugins/boostrap.js",
      mode: "client",
    },
  ],
});
