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
  <div class="flex flex-col items-center my-8 px-4">
    <div class="w-full mb-6 text-left">
      <a href="/products" class="text-blue-600 hover:underline text-lg">&#8592; Volver a la tienda</a>
    </div>

 
    <div class="flex flex-col lg:flex-row w-[400px] lg:w-[90%] my-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

      <div class="lg:w-1/2 flex justify-center items-center bg-gray-100">
        <img src="../../assets/images/coming-soon.png" alt="Product Image" class="object-contain p-4 max-w-full h-auto">
      </div>

     
      <div class="lg:w-full bg-pink-100 p-8">
        <h1 class="text-5xl font-bold mb-4">{{ product?.nombre }}</h1>
        <p class="text-gray-700 mb-4">{{ product?.descripcion }}</p>
        <p class="text-3xl font-semibold text-gray-800 mb-4">$ {{ product?.valor }}</p>

        <div class="mb-6">
          <p class="text-3xl"><strong class="text-3xl" >COLOR:</strong> {{ product?.color }}</p>
          <p class="text-3xl"><strong class="text-3xl">MATERIAL:</strong> {{ product?.material }}</p>
          <p class="text-3xl"><strong class="text-3xl">MEDIDAS:</strong> {{ product?.medidas }}</p>
          <p class="text-3xl"><strong class="text-3xl">STOCK:</strong> {{ product?.stock }}</p>
          <p class="text-3xl"><strong class="text-3xl">CATEGORIA:</strong> {{ product?.category }}</p>
        </div>

        <div class="flex space-x-4 mt-6">
          <button class="bg-blue-500 text-white text-lg py-2 px-6 rounded-lg hover:bg-blue-600">Editar</button>
          <button class="bg-red-500 text-white text-lg py-2 px-6 rounded-lg hover:bg-red-600" @click="deleteProduct(productId)">Borrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

