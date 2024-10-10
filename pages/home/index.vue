<script setup>
definePageMeta({
  middleware: 'auth'
});
</script>

<template>
  <div class="container">
    <div class="content bg-white lg:mt-[-60px] mt-[-240px] bg-opacity-80 p-10 rounded-lg shadow-lg text-center max-w-4xl w-full">
      <h1 class="text-4xl lg:text-7xl font-bold text-pink-600 mb-6 md:mb-14">¡Hola! Estás en el panel de control de tu tienda😎</h1>
      <p class="text-lg lg:text-5xl text-gray-700 mb-6 md:mb-14">
        Desde el menú a tu izquierda, podrás acceder a todas las funcionalidades que necesitas para gestionar tu web de manera eficiente.
      </p>
      <p class="text-base lg:text-4xl text-gray-700 mb-6 md:mb-14">
        Explora y disfruta de la facilidad para
        <span class="text-pink-600 lg:text-4xl font-semibold"> ver órdenes recientes, </span>
        <span class="text-pink-600 lg:text-4xl font-semibold"> agregar productos, </span>
        <span class="text-pink-600 lg:text-4xl font-semibold"> nombrar más administradores, </span>
        <span class="text-pink-600 lg:text-4xl font-semibold"> gestionar tus clientes, </span>
        <span class="text-pink-600 lg:text-4xl font-semibold"> actualizar stock, </span>
        <span class="text-pink-600 lg:text-4xl font-semibold"> y ver tus categorías.</span>
      </p>
      <p class="text-xl lg:text-4xl text-gray-700 mb-6 md:mb-14">
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
  padding: 2rem; /* Reduce el padding para pantallas pequeñas */
  background-image: url('/assets/images/fondo1.png');
  background-size: cover;
  background-position: center;
}

.content {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem; /* Aumenta el padding para pantallas grandes */
}

@media (min-width: 768px) {
  .content {
    padding: 4rem; /* Mantiene el padding original en pantallas grandes */
  }
}
</style>



