<script setup>
defineProps({
  admin: {
    type: Object,
    required: true,
  },
});
</script>

<template>

<div class="flex flex-col items-center justify-between w-full p-6 bg-white border rounded-lg shadow-md transition-shadow duration-200 hover:shadow-lg md:flex-row md:space-x-4">
    <div class="flex flex-col space-y-2 text-center md:text-left">
      <h2 class="text-3xl font-bold text-pink-600">{{ admin.name }}</h2>
      <p class="text-gray-600 text-xl">Email: {{ admin.email }}</p>
      <p class="text-gray-600 text-xl">Teléfono: {{ admin.phone }}</p>
    </div>
 

    <!-- <NuxtLink
      :to="`/users/${user.id}`"
      class="px-4 py-2 text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
    >
      Ver Detalles
    </NuxtLink> -->
  </div>
</template>
<style scoped>
/* Puedes agregar estilos adicionales si es necesario */
</style>
