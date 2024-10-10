<script setup>
// definePageMeta({
//   middleware: 'auth'
// });
</script>

<template>
  <div class="container">
    <div class="content bg-white lg:mt-[-60px] bg-opacity-80 p-10 rounded-lg shadow-lg text-center max-w-4xl w-full">
      <h1 class="lg:text-7xl font-bold  text-pink-600 mb-8">Bienvenido al administrador de tu tienda 🚀</h1>
      <p class="lg:text-5xl text-gray-700 mb-6">
        Desde el menú a tu izquierda, podrás acceder a todas las funcionalidades que necesitas para gestionar tu web de manera eficiente.
      </p>
      <p class="lg:text-4xl text-gray-700 mb-6">
        Explora y disfruta de la facilidad para
        <span class="text-pink-600 lg:text-4xl font-semibold"> ver órdenes recientes, </span>
        <span class="text-pink-600 lg:text-4xl font-semibold"> agregar productos, </span>
        <span class="text-pink-600 lg:text-4xl font-semibold"> nombrar más administradores, </span>
        <span class="text-pink-600 lg:text-4xl font-semibold"> gestionar tus clientes, </span>
        <span class="text-pink-600 lg:text-4xl font-semibold"> actualizar stock, </span>
        <span class="text-pink-600 lg:text-4xl font-semibold">y ver tus categorías.</span>
      </p>
      <p class="text-2xl text-gray-700 lg:text-4xl mb-6">
        ¡Comienza a optimizar tu gestión y disfruta de una experiencia sin igual!
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 116vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  background-image: url('/assets/images/fondo1.png');
  background-size: cover;
  background-position: center;
}

.content {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>




