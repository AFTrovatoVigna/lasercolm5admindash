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
  <div class="flex items-center justify-center min-h-screen bg-pink-100">
    <div v-if="user" class="w-full max-w-xl p-10 bg-white rounded-xl shadow-lg">
      <h2 class="mb-6 text-4xl font-bold text-center text-gray-900">Información del Usuario</h2>
      <div class="mb-6 space-y-4">
        <p class="text-xl lg:text-3xl text-gray-800"><span class="font-bold text-xl lg:text-3xl text-gray-800">Nombre: </span> {{ user.name }}</p>
        <p class="text-xl lg:text-3xl text-gray-800"><span class="font-bold text-xl lg:text-3xl text-gray-800">Email: </span> {{ user.email }}</p>
        <p class="text-xl lg:text-3xl text-gray-800"><span class="font-bold text-xl lg:text-3xl text-gray-800">DNI: </span> {{ user.Dni }}</p>
        <p class="text-xl lg:text-3xl text-gray-800"> <span class="font-bold text-xl lg:text-3xl text-gray-800">Fecha de nacimiento: </span> {{ user.birthDate }}</p>
        <p class="text-xl lg:text-3xl text-gray-800"><span class="font-bold text-xl lg:text-3xl text-gray-800">Teléfono: </span> {{ user.phone }}</p>
        <p class="text-xl lg:text-3xl text-gray-800"><span class="font-bold text-xl lg:text-3xl text-gray-800">País:</span> {{ user.country }}</p>
        <p class="text-xl lg:text-3xl text-gray-800"><span class="font-bold text-xl lg:text-3xl text-gray-800">Ciudad:</span> {{ user.city }}</p>
        <p class="text-xl lg:text-3xl text-gray-800"><span class="font-bold text-xl lg:text-3xl text-gray-800">Dirección: </span>{{ user.address }}</p>
      </div>
      <button @click="goToEditPage" class="w-full px-6 py-4 mt-6 text-xl font-semibold text-white transition bg-pink-500 rounded-lg hover:bg-pink-600 focus:bg-pink-600">
        Actualizar
      </button>
    </div>
    <div v-else class="text-center text-pink-600">
      Cargando usuario...
    </div>
  </div>
</template>

