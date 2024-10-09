<script setup>
defineProps({
  admin: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex items-center justify-between w-full p-4 transition-shadow bg-white border rounded-lg shadow-md hover:shadow-lg">
    <div class="flex flex-col space-y-1">
      <h2 class="text-xl font-bold">{{ admin.name }}</h2>
      <p class="text-gray-600">Email: {{ admin.email }}</p>
      <p class="text-gray-600">DNI: {{ admin.phone }}</p>
    </div>
    <!-- <NuxtLink
      :to="`/users/${user.id}`"
      class="px-4 py-2 text-white transition-colors bg-blue-500 rounded hover:bg-blue-600"
    >
      Ver Detalles
    </NuxtLink> -->
  </div>
</template>
