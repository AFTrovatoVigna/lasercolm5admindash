<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Usa la ruta para obtener el id del producto
const route = useRoute();
const router = useRouter();
const productId = route.params.id;

// Crear un ref reactivo para almacenar los productos y el producto individual
const productsArray = ref([]);
const product = ref(null);

// Función para obtener los productos desde el backend
const fetchProducts = async () => {
  try {
    const response = await fetch(`http://localhost:3000/products/${productId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    // productsArray.value = data;
    
    // Encontrar el producto por id
    // product.value = productsArray.value.find((item) => item.id === productId);
    product.value = data;
    
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Llamar a la función fetchProducts cuando el componente se monta
onMounted(() => {
  fetchProducts();
});

// Función para borrar el producto mediante su id
function deleteProduct(productId) {
  // Filtrar el array para eliminar el producto
  productsArray.value = productsArray.value.filter(product => product.id !== productId);
  
  // Actualizamos el localStorage con el nuevo array
  localStorage.setItem('productsArray', JSON.stringify(productsArray.value));

  // Redireccionamos a la lista de productos
  router.push('/products');
}
</script>

<template>
  <div class="flex flex-col items-center px-4 my-8">
    <div class="w-full mb-6 text-left">
      <a href="/products" class="text-lg text-blue-600 hover:underline">&#8592; Volver a la tienda</a>
    </div>

    <div class="flex flex-col lg:flex-row w-[400px] lg:w-[90%] my-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="flex items-center justify-center bg-gray-100 lg:w-1/2">
        <img :src="product?.imgUrl" alt="Product Image" class="object-contain h-auto max-w-full p-4">
      </div>

      <div class="p-8 bg-pink-100 lg:w-full">
        <h1 class="mb-4 text-5xl font-bold">{{ product?.nombre }}</h1>
        <p class="mb-4 text-3xl font-semibold text-gray-800">$ {{ product?.valor }}</p>

        <div class="mb-6">
          <p class="text-3xl"><strong>COLOR:</strong> {{ product?.color }}</p>
          <p class="text-3xl"><strong>MATERIAL:</strong> {{ product?.material }}</p>
          <p class="text-3xl"><strong>MEDIDAS:</strong> {{ product?.medidas }}</p>
          <p class="text-3xl"><strong>STOCK:</strong> {{ product?.stock }}</p>
          <!-- <p class="text-3xl"><strong>CATEGORÍA:</strong> {{ product?.category.name }}</p> -->
        </div>

        <div class="flex mt-6 space-x-4">
          <button class="px-6 py-2 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-600">Editar</button>
          <button class="px-6 py-2 text-lg text-white bg-red-500 rounded-lg hover:bg-red-600" @click="deleteProduct(productId)">Borrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
