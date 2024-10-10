<script setup>
defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex items-center justify-between w-full p-6 transition-shadow bg-white border rounded-xl shadow-md hover:shadow-lg">
    <div class="flex flex-col space-y-2">
      <h2 class="text-2xl font-bold text-gray-800">{{ user.name }}</h2>
      <p class="text-lg text-pink-600">Email: {{ user.email }}</p>
      <p class="text-lg text-pink-600">DNI: {{ user.dni }}</p>
    </div>
    <NuxtLink
      :to="`/users/${user.id}`"
      class="px-5 py-3 text-white transition-colors bg-pink-500 rounded-lg hover:bg-pink-600 focus:bg-pink-600"
    >
      Ver Detalles
    </NuxtLink>
  </div>
</template>

<style scoped>

@media (min-width: 768px) {
  .container {
    max-width: 500px;
  }
}
</style>


