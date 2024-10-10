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
      <a href="/products" class="text-xl text-blue-600 hover:underline">&#8592; Volver a la tienda</a>
    </div>

    <div class="flex flex-col lg:flex-row w-full lg:w-[80%] my-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="flex items-center justify-center bg-gray-100 lg:w-1/2 p-4">
        <img :src="product?.imgUrl" alt="Product Image" class="object-contain h-64 w-full max-w-sm mx-auto">
      </div>

      <div class="p-6 bg-pink-200 lg:w-1/2">
        <h1 class="mb-4 text-4xl font-bold text-pink-800">{{ product?.nombre }}</h1>
        <p class="mb-4 text-2xl font-semibold text-gray-800">$ {{ product?.valor }}</p>

        <div class="mb-6">
          <p class="text-xl lg:text-3xl"><span class="text-xl lg:text-3xl">Color:</span> {{ product?.color }}</p>
          <p class="text-xl lg:text-3xl"><span class="text-xl lg:text-3xl">Material:</span> {{ product?.material }}</p>
          <p class="text-xl lg:text-3xl"><span class="text-xl lg:text-3xl">Medidas:</span> {{ product?.medidas }}</p>
          <p class="text-xl lg:text-3xl"><span class="text-xl lg:text-3xl">Stock:</span> {{ product?.stock }}</p>
        </div>

        <div class="flex justify-between mt-6 space-x-4">
          <button class="flex-1 px-4 py-2 text-lg lg:text-xl text-white bg-pink-600 rounded-lg hover:bg-pink-700">Editar</button>
          <button class="flex-1 px-4 py-2 text-lg lg:text-xl text-white bg-pink-800 rounded-lg hover:bg-pink-900" @click="deleteProduct(productId)">Borrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1, p {
  font-family: 'Arial', sans-serif;
}

/* Mejorar la adaptabilidad en pantallas pequeñas */
@media (max-width: 640px) {
  .flex-1 {
    margin-bottom: 1rem;
  }
}
</style>
