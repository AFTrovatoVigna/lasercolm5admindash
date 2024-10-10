<script setup>
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

// const router = useRouter();

const handleLogout = () => {
  // Show a confirmation dialog
  Swal.fire({
    title: '¿Estás seguro?',
    text: "Estás a punto de cerrar sesión",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, cerrar sesión',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // If the user confirms, proceed with the logout
      localStorage.removeItem('userSession');
      window.location.href = '/'; // Redirect to the home or login page
    } 
    // If the user cancels, nothing happens
  });
};
</script>

<template>
  <nav class="h-full lg:h-[740px] bg-white shadow-lg lg:w-[300px] w-[50px]">
    <div class="flex justify-center p-5">
      <img src="../assets/images/lasercol-logo.png" class="w-[50px] lg:w-3/4" alt="Lasercol Logo">
    </div>
    <div class="flex flex-col items-center lg:p-20">
      <ul class=" w-[50px] lg:w-full ml-4">
        <li>
          <NuxtLink to="/home" class="flex items-center p-3 nav-item lg:mb-7">
            <img src="../assets/Icons/home.svg" class="w-8 h-8 lg:w-[50px] lg:h-[50px]" alt="Home">
            <span class="ml-2 text-xl lg:text-3xl hidden lg:inline">Mi panel</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/orders" class="flex items-center p-3 nav-item lg:mb-7">
            <img src="../assets/Icons/inbox.svg" class="w-8 h-8 lg:w-[50px] lg:h-[50px]" alt="Orders">
            <span class="ml-2 text-xl lg:text-3xl hidden lg:inline">Ordenes</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/users" class="flex items-center p-3 nav-item lg:mb-7">
            <img src="../assets/Icons/group.svg" class="w-8 h-8 lg:w-[50px] lg:h-[50px]" alt="Clients">
            <span class="ml-2 text-xl lg:text-3xl hidden lg:inline">Clientes</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products" class="flex items-center p-3 nav-item lg:mb-7">
            <img src="../assets/Icons/sell.svg" class="w-8 h-8 lg:w-[50px] lg:h-[50px]" alt="Products">
            <span class="ml-2 text-xl lg:text-3xl hidden lg:inline">Productos</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories" class="flex items-center p-3 nav-item lg:mb-7">
            <img src="../assets/Icons/category.svg" class="w-8 h-8 lg:w-[50px] lg:h-[50px]" alt="Categories">
            <span class="ml-2 text-xl lg:text-3xl hidden lg:inline">Categorias</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin" class="flex items-center p-3 nav-item lg:mb-7">
            <img src="../assets/Icons/admin.svg" class="w-8 h-8 lg:w-[50px] lg:h-[50px]" alt="Admin">
            <span class="ml-2 text-xl lg:text-3xl hidden lg:inline">Administradores</span>
          </NuxtLink>
        </li>
        <li>
          <button 
            @click="handleLogout" 
            class="px-2 py-2 mt-4 text-sm text-white bg-red-600 rounded hover:bg-red-800 lg:text-xl lg:w-full">
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav-item {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-item:hover {
  background-color: #f1f5f9; /* Fondo en hover */
  border-radius: 12px; /* Borde redondeado */
  color: #c911a1; /* Color del texto en hover */
}
</style>





