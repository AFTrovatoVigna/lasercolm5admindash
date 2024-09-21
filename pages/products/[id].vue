<script setup>
import { useRoute, useRouter } from 'vue-router';
// Importa el archivo JSON desde la carpeta utils
import productsDemo from '../../utils/productsArray.json';

// Usa la ruta para obtener el id y asignarlo a productId
const route = useRoute();
const router = useRouter(); 
const productId = Number(route.params.id);

// Intentamos obtener el array de productos desde localStorage
let productsArray = JSON.parse(localStorage.getItem('productsArray')) || productsDemo;

// Obtener el producto mediante su Id 
const product = productsArray.find((product) => productId === product.id);

// Función para borrar el producto mediante su id
function deleteProduct(productId) {
  // Filtrar el array para eliminar el producto
  productsArray = productsArray.filter(product => productId !== product.id);
  
  // Actualizamos el localStorage con el nuevo array
  localStorage.setItem('productsArray', JSON.stringify(productsArray));

  // Redireccionamos a la lista de productos
  router.push('/products');
}
</script>


<template>
  <div class="flex flex-col items-center mt-16">
    <h2 class="text-3xl">{{ product?.nombre }}</h2>
    <div class="grid grid-cols-[30%_70%] gap-4 w-full">
      <div class="border border-black">
        <img src="../../assets/images/coming-soon.png" alt="" class="w-full p-4">
      </div>
      <div class="flex flex-col justify-center border border-black pl-8">
        <h3 class="text-2xl pb-4">Detalles del producto:</h3>
        <p class="text-xl pb-2">COLOR: {{ product?.color }}</p>
        <p class="text-xl pb-2">MATERIAL: {{ product?.material }}</p>
        <p class="text-xl pb-2">MEDIDAS: {{ product?.medidas }}</p>
        <p class="text-xl pb-2">STOCK: {{ product?.stock }}</p>
        <p class="text-xl pb-2">VALOR: {{ product?.valor }}</p>
        <p class="text-xl pb-2">CATEGORIA: {{ product?.category }}</p>
      </div>
    </div>
    <div class="flex w-full justify-around pt-5">
      <button class="bg-lightblue-500 text-xl py-2 px-4 rounded-lg">Editar</button>
      <button class="bg-red-500 text-xl py-2 px-4 rounded-lg" @click="deleteProduct(productId)">Borrar</button>
    </div>
  </div>
</template>
