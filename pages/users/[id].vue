<script setup>
import { useRoute, useRouter } from 'nuxt/app';
import { computed, ref, onMounted, watch } from 'vue';
import { GetUserById } from '@/helper/users.helper.js';

const route = useRoute();
const router = useRouter();
const userId = computed(() => route.params.id);
const user = ref(null); // Store the user data

const fetchUserData = async () => {
  const sessionData = JSON.parse(localStorage.getItem('userSession'));
  const token = sessionData ? sessionData.token : null;

  if (token && userId.value) {
    try {
      const userData = await GetUserById(userId.value, token);
      user.value = userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
};

// Fetch user data when the component is mounted and when userId changes
onMounted(fetchUserData);
watch(userId, fetchUserData); // Fetch new user data when userId changes

// Function to navigate to the edit page with user data
const goToEditPage = () => {
  router.push({ path: `/users/updateUser`, query: { id: userId.value } });
};
</script>


<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div v-if="user" class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h2 class="mb-4 text-2xl font-bold text-center">Información del Usuario</h2>
      <div class="mb-4">
        <p class="text-gray-800"><strong>Nombre:</strong> {{ user.name }}</p>
        <p class="text-gray-800"><strong>Email:</strong> {{ user.email }}</p>
        <p class="text-gray-800"><strong>DNI:</strong> {{ user.Dni }}</p>
        <p class="text-gray-800"><strong>Fecha de Nacimiento:</strong> {{ user.birthDate }}</p>
        <p class="text-gray-800"><strong>Teléfono:</strong> {{ user.phone }}</p>
        <p class="text-gray-800"><strong>País:</strong> {{ user.country }}</p>
        <p class="text-gray-800"><strong>Ciudad:</strong> {{ user.city }}</p>
        <p class="text-gray-800"><strong>Dirección:</strong> {{ user.address }}</p>
      </div>
      <button @click="goToEditPage" class="w-full px-4 py-2 mt-4 text-white transition bg-blue-500 rounded-lg hover:bg-blue-600">
        Actualizar
      </button>
    </div>
    <div v-else class="text-center text-gray-600">
      Cargando usuario...
    </div>
  </div>
</template>

<style scoped>
/* Custom styles (if needed) */
</style>
