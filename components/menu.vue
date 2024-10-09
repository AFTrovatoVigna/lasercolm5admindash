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
  <nav>
    <div class="header">
      <img src="../assets/images/lasercol-logo.png" class="w-[10px]" alt="">
    </div>
    <div class="main-container">
      <ul>
        <li>
          <NuxtLink to="/home" class="flex items-center">
            <img src="../assets/Icons/home.svg" class="bg-pink-300 rounded-[80px] p-2 ml-3" alt="">
            <span class="ml-4 text-[20px]">Home</span> 
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/orders" class="flex items-center">
            <img src="../assets/Icons/inbox.svg" class="bg-pink-300 rounded-[80px] ml-3 p-2" alt="">
            <span class="ml-4 text-[20px]">Ordenes</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/users" class="flex items-center">
            <img src="../assets/Icons/group.svg" class="bg-pink-300 rounded-[80px] ml-3 p-2" alt="">
            <span class="ml-4 text-[20px]">Clientes</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products" class="flex items-center">
            <img src="../assets/Icons/sell.svg" alt="" class="bg-pink-300  ml-3 rounded-[80px] p-2">
            <span class="ml-4 text-[20px]">Productos</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories" class="flex items-center">
            <img src="../assets/Icons/category.svg" class="bg-pink-300 ml-3 rounded-[80px] p-2" alt="">
            <span class="ml-4 text-[20px]">Categorias</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin" class="flex items-center">
            <img src="../assets/Icons/admin.svg" class="bg-pink-300 ml-3 rounded-[80px] p-2" alt="">
            <span class="ml-4 text-[20px]">Administradores</span>
          </NuxtLink>
        </li>
        <li>
          <!-- Logout button -->
          <button 
          @click="handleLogout" 
          class="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600">
          Logout
          </button>
        </li>
        
      </ul>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background: linear-gradient(to bottom, #ffe4e6, #e9d5ff, #fef9c3);
  height: auto;
  width: 300px;
}

.header {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.header img {
  width: 80%;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 20px 0;
}

.main-container ul li {
  margin: 5px 0;
  padding: 15px;
  list-style: none;
  width: 300px;
  margin-left: 80px;
}

.main-container ul li a {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  text-decoration: none;
  color: black;
}
</style>
