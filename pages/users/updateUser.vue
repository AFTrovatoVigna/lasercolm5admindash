<script setup>
import { useRouter, useRoute } from 'nuxt/app';
import { ref, onMounted, computed, watch } from 'vue';
import { GetUserById, UpdateUser } from '@/helper/users.helper.js';

const router = useRouter();
const route = useRoute();
const userId = computed(() => route.query.id); // Computed property for userId

const user = ref({
  name: '',
  email: '',
  Dni: '',
  birthDate: '',
  phone: '',
  country: '',
  city: '',
  address: ''
});

const fetchUserData = async () => {
  const sessionData = localStorage.getItem('userSession');
  const token = sessionData ? JSON.parse(sessionData).token : null;

  // Ensure userId is available before making the request
  if (token && userId.value) {
    try {
      const userData = await GetUserById(userId.value, token);
      user.value = userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  } else {
    console.error('User ID is not available');
  }
};

// Fetch the user data when the component is mounted
onMounted(fetchUserData);

// Watch userId and fetch user data if it changes
watch(userId, (newUserId) => {
  if (newUserId) {
    fetchUserData();
  }
});

import Swal from 'sweetalert2'; // Import SweetAlert
const saveChanges = async () => {
  const sessionData = localStorage.getItem('userSession');
  const token = sessionData ? JSON.parse(sessionData).token : null;

  if (token && userId.value) {
    try {
      const updatedUser = {
        name: user.value.name,
        birthDate: user.value.birthDate,
        country: user.value.country,
        city: user.value.city,
        address: user.value.address,
      };

      const userUpdated = await UpdateUser(userId.value, updatedUser, token);

      if (userUpdated) {
        // Show a success message using Swal
        Swal.fire({
          icon: 'success',
          title: 'Usuario actualizado',
          confirmButtonText: 'OK'
        }).then(() => {
          // Redirect to the users list after the user clicks "OK"
          router.push('/users');
        });
      }
    } catch (error) {
      console.error('Error updating user:', error);
      // Handle the error (e.g., show an alert or error message in the UI)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema actualizando el usuario. Inténtalo de nuevo más tarde.',
        confirmButtonText: 'OK'
      });
    }
  } else {
    console.error('Token or User ID is missing');
  }
};



const cancelEdit = () => {
  router.push('/users'); // Redirect to the users list
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <form class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h2 class="mb-4 text-2xl font-bold text-center">Editar Usuario</h2>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700">Nombre</label>
        <input v-model="user.name" type="text" class="w-full px-3 py-2 border rounded-md" />
      </div>
      <!-- <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700">DNI</label>
        <input v-model="user.Dni" type="text" class="w-full px-3 py-2 border rounded-md" />
      </div> -->
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700">Fecha de Nacimiento</label>
        <input v-model="user.birthDate" type="date" class="w-full px-3 py-2 border rounded-md" />
      </div>
      <!-- <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700">Teléfono</label>
        <input v-model="user.phone" type="tel" class="w-full px-3 py-2 border rounded-md" />
      </div> -->
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700">País</label>
        <input v-model="user.country" type="text" class="w-full px-3 py-2 border rounded-md" />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700">Ciudad</label>
        <input v-model="user.city" type="text" class="w-full px-3 py-2 border rounded-md" />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-bold text-gray-700">Dirección</label>
        <input v-model="user.address" type="text" class="w-full px-3 py-2 border rounded-md" />
      </div>
      <div class="flex justify-between">
        <button @click.prevent="saveChanges" class="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
          Guardar Cambios
        </button>
        <button @click.prevent="cancelEdit" class="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
          Cancelar
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* Custom styles (if needed) */
</style>
