<script setup>
import { ref } from 'vue';
// import { useRouter } from 'vue-router';
import { Login } from '@/helper/auth.helper.js';
import Swal from 'sweetalert2';

const email = ref("");
const password = ref("");

// const router = useRouter(); // Get router instance

const handleLogin = async () => {
  try {
    const logRes = await Login(email.value, password.value);

    const userSession = {
      token: logRes.token,
      id: logRes.id
    };
    localStorage.setItem('userSession', JSON.stringify(userSession));

    // Show the success message and wait for user confirmation before redirecting
    Swal.fire({
      title: "Te logueaste correctamente",
      icon: "success",
      confirmButtonText: "OK"
    }).then(() => {
      // Redirect to the home page after the user presses OK
      window.location.href = '/';
    });
  } catch (error) {
    console.error("Login failed:", error);
    Swal.fire({
      title: "No pudimos corroborar tus datos. Inténtalo nuevamente",
      icon: "error",
      confirmButtonText: "OK"
    });
  }
};

</script>

<template>
  <div class="flex flex-col w-full max-w-sm mx-auto">
    <h1 class="mt-8 text-[2.2rem] font-semibold text-gray-700 lg:mt-0">
      Bienvenido 
    </h1>
    <p class="mt-2 text-[1rem] text-gray-400">Por favor ingrese sus credenciales</p>

    <label class="mt-5 text-[1.6rem] font-semibold text-gray-500" for="email">Email</label>
    <input
      id="email"
      class="w-full px-3 py-2 mt-1 text-[1.6rem] border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
      type="email" v-model="email"
    />

    <label class="mt-5 text-[1.6rem] font-semibold text-gray-500" for="password">Password</label>
    <input
      id="password"
      class="w-full px-3 py-2 mt-1 text-[1.6rem] border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
      type="password" v-model="password"
    />

    <button
      class="w-full px-5 py-2 mt-5 text-[1.6rem] font-semibold text-white bg-indigo-500 rounded shadow hover:bg-indigo-600" @click="handleLogin"
    >
      Sign in
    </button>
  </div>
</template>
