// nuxt.config.ts
export default defineNuxtConfig({
  devServer: {
    port: 5000,  // Cambia este número por el puerto que prefieras
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
  devtools: { enabled: true },

  // No need for '@nuxtjs/dotenv', Nuxt 3 has built-in support for .env files
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
    apiSecret: process.env.API_SECRET || 'default-secret', // sensitive data for the server-side only
  }
})
