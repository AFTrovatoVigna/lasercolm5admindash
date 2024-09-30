// nuxt.config.ts o nuxt.config.js
export default defineNuxtConfig({
  devServer: {
    port: 5001,  // Cambia este número por el puerto que prefieras
    host: '0.0.0.0'  // Opcional, para que sea accesible desde cualquier dirección
  },
  css: [
    '~/assets/styles/reset.css', // Ruta al archivo reset.css
    '~/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
