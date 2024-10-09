<script setup>
import { onMounted, ref } from 'vue';
import { useRuntimeConfig, useRouter } from 'nuxt/app'; // Use useRouter

const config = useRuntimeConfig();
const apiBaseUrl = config.public.apiBaseUrl; // Correctly access the public API base URL

let productsArray = ref([]);
const router = useRouter(); // Get router instance

const fetchProducts = async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/products`);
    console.log('Response:', response); // Log the response object
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const text = await response.text(); // Read the response as text first
    
    const data = JSON.parse(text); // Manually parse the JSON
    productsArray.value = data;
    
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

onMounted(() => {
  fetchProducts();
});

// Navigate to /products/addproduct
const goToAddProduct = () => {
  router.push('/products/addproduct');
};
</script>

<template class="h-[4000px] bg-white">
  <div class="p-8 w-[100%] bg-white h-[1500px]">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-5xl font-bold">Mis productos</h1>
      <button 
        class="bg-pink-300 text-black text-2xl font-bold px-4 py-2 rounded-xl lg:h-[50px] lg:w-[200px] hover:bg-pink-400" 
        @click="goToAddProduct"
      >
        + Agregar producto
      </button>
    </div>

    <div class="mt-10 overflow-x-auto border-pink-800">
      <table class="w-full min-w-full text-center border-pink-700 bg-pink-50 rounded-3xl p-7">
        <thead class="p-7">
          <tr>
            <th class="px-6 py-4 text-2xl border-pink-400">Producto</th>
            <th class="px-6 py-4 text-2xl border-pink-400">Stock</th>
            <th class="px-6 py-4 text-2xl border-pink-400">Precio</th>
            <th class="px-6 py-4 text-2xl border-pink-400">Acciones</th>
          </tr>
        </thead>



        <tbody class="border-pink-400">
          
          <tr v-for="product in productsArray" :key="product.id" :class="product.stock == 0 ? 'bg-red-100' : ''">
            <td class="flex items-center px-6 py-4 border border-pink-100">
              <img :src="product.imgUrl" alt="Imagen producto" class="object-cover w-20 h-20 mr-4" />
              <span class="text-2xl font-semibold text-black">{{ product.nombre }}</span>
            </td>

            <td class="px-6 py-4 border border-pink-100">
              <p class="border-2 border-pink-200 rounded-[30px] p-2 w-24 text-center text-2xl text-black" 
              :class="product.stock === 0 ? 'bg-red-200 border-red-500' : 'bg-white'">
                {{ product.stock }}
              </p>

            </td>

            <td class="px-6 py-4 text-2xl text-black border border-pink-100">
              $ {{ product.valor }}
            </td>

            <td class="px-6 py-4 text-lg text-center border border-pink-100">
              <NuxtLink :to="{ path: `/products/${product.id}` }" class="p-3 text-2xl text-black underline rounded-xl hover:bg-pink-300">
                Ver detalles
              </NuxtLink>
              <button class="ml-4 lg:w-[30px] bg-pink-500 rounded-[80px] lg:h-[30px] text-red-600" @click="deleteProduct(product.id)">
                🗑️
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
