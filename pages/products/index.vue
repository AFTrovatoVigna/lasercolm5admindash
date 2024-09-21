<script setup>
import { useRoute } from 'vue-router';
// Importa el archivo JSON desde la carpeta utils
import productsDemo from '../../utils/productsArray.json';

// Obtener la ruta
const route = useRoute();

// Inicializamos la variable para los productos
let productsArray = productsDemo;

// Usamos el método onMounted para asegurarnos de que este código se ejecute solo en el lado del cliente
import { onMounted } from 'vue';

onMounted(() => {
  // Comprobamos si localStorage está disponible (en el lado del cliente)
  if (typeof localStorage !== 'undefined') {
    const storedProducts = localStorage.getItem('productsArray');
    // Si existe el array en localStorage, lo parseamos, si no, usamos productsDemo
    productsArray = storedProducts ? JSON.parse(storedProducts) : productsDemo;
  }
  
  console.log(productsArray);
});
</script>

<template>
  <div>
    <h1 class="text-2xl text-center my-8">Productos</h1>
    <div class="grid grid-cols-5 gap-x-2 gap-y-5">
      <div class="border border-black p-2" v-for="product in productsArray" :key="product.id">
        <p class="text-lg">NOMBRE: {{ product.nombre }}</p>
        <p class="text-lg">VALOR: {{ product.valor }}</p>
        <p class="text-lg">CATEGORIA: {{ product.category }}</p>
        <p class="text-lg">id ------ {{ product.id }}</p>
        <NuxtLink :to="{ path: `/products/${product.id}`, state: { productsArray } }" class="text-blue-600 underline">
          Ver detalles
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
