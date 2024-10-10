<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { CreateNewAdmin } from '@/helper/admin.helper.js'; // Adjust the import path as necessary
import Swal from 'sweetalert2'; // Import SweetAlert2

const router = useRouter();

// Form fields
const name = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const passwordConfirmation = ref('');

// Function to handle form submission
const submitForm = async () => {
  // Construct admin data from the form
  const adminData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    password: password.value,
    passwordConfirmation: passwordConfirmation.value,
  };

  // Call CreateNewAdmin and await its response
  const response = await CreateNewAdmin(adminData);

  if (response) {
    console.log('Admin created:', response);
    // Show success message using SweetAlert
    Swal.fire({
      title: 'Éxito!',
      text: 'Administrador creado exitosamente',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      router.push('/admin'); // Redirect back to the main admin page after confirmation
    });
  } else {
    console.error('Failed to create admin');
    // Optionally show an error message to the user
    Swal.fire({
      title: 'Error!',
      text: 'No se pudo crear el administrador',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};

const cancel = () => {
  router.push('/admin'); // Redirect back to the main admin page if canceled
};
</script>


<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 bg-pink-50">
    <h1 class="mb-6 text-5xl font-semibold text-gray-800">Crear Administrador</h1>
    <form @submit.prevent="submitForm" class="w-full max-w-md p-8 bg-white rounded-lg shadow-md space-y-6">
      <div>
        <label class="block mb-2 text-lg font-medium text-gray-800" for="name">Nombre:</label>
        <input
          v-model="name"
          type="text"
          id="name"
          class="w-full px-5 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
      </div>
      <div>
        <label class="block mb-2 text-lg font-medium text-gray-800" for="email">Email:</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="w-full px-5 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
      </div>
      <div>
        <label class="block mb-2 text-lg font-medium text-gray-800" for="phone">Teléfono:</label>
        <input
          v-model="phone"
          type="number"
          id="phone"
          class="w-full px-5 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
      </div>
      <div>
        <label class="block mb-2 text-lg font-medium text-gray-800" for="password">Contraseña:</label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="w-full px-5 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
      </div>
      <div>
        <label class="block mb-2 text-lg font-medium text-gray-800" for="passwordConfirmation">Confirmar Contraseña:</label>
        <input
          v-model="passwordConfirmation"
          type="password"
          id="passwordConfirmation"
          class="w-full px-5 py-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
      </div>
      <div class="flex justify-between">
        <button
          type="button"
          @click="cancel"
          class="px-5 py-3 text-lg text-white bg-pink-600 rounded-lg hover:bg-pink-800"
        >
          Cancelar
        </button>
        <button
          type="submit"
          class="px-5 py-3 text-lg text-white bg-pink-600 rounded-lg hover:bg-pink-800"
        >
          Crear Administrador
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* Add styles if necessary */
</style>
