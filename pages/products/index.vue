<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute();
let productsArray = ref([]);

const fetchProducts = async () => {
  try {
    const response = await fetch('http://localhost:4000/products');
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    productsArray.value = data;
    
    // Guardar los productos en localStorage
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('productsArray', JSON.stringify(data));
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

onMounted(() => {
  // Comprobar si hay productos almacenados en localStorage
  if (typeof localStorage !== 'undefined') {
    const storedProducts = localStorage.getItem('productsArray');
    if (storedProducts) {
      productsArray.value = JSON.parse(storedProducts);
    } else {
      // Si no hay productos en localStorage, hacer la petición HTTP
      fetchProducts();
    }
  }
});
</script>

<template class="h-[4000px] bg-white">
  <div class="p-8 w-[1200px] bg-white h-[1500px]">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-5xl font-bold">Mis productos</h1>
      <button class="bg-pink-300 text-black text-2xl font-bold px-4 py-2 rounded-xl lg:h-[50px] lg:w-[200px] hover:bg-pink-400">
        + Agregar producto 
      </button>
    </div>

    <div class="overflow-x-auto border-pink-800 mt-10">
      <table class="min-w-full bg-pink-50 rounded-3xl p-7 border-pink-700 text-center w-full">
        <thead class="p-7">
          <tr>
            <th class="px-6 py-4 border-pink-400 text-2xl">Producto</th>
            <th class="px-6 py-4 border-pink-400 text-2xl">Stock</th>
            <th class="px-6 py-4 border-pink-400 text-2xl">Precio</th>
            <th class="px-6 py-4 border-pink-400 text-2xl">Acciones</th>
          </tr>
        </thead>

        <tbody class="border-pink-400">
          <tr v-for="product in productsArray" :key="product.id" :class="product.stock == 0 ? 'bg-red-100' : ''">
            <td class="px-6 py-4 border flex items-center border-pink-100">
              <img :src="product.imageUrl" alt="Imagen producto" class="h-20 w-20 object-cover mr-4" />
              <span class="font-semibold text-black text-2xl">{{ product.nombre }}</span>
            </td>

            <td class="px-6 py-4 border border-pink-100">
              <input 
                type="number" 
                v-model="product.stock" 
                class="border-2 border-pink-200 rounded-[30px] p-2 w-24 text-center text-2xl text-black"
                :class="product.stock == 0 ? 'bg-red-200 border-red-500' : 'bg-white'" 
              />
            </td>

            <td class="px-6 py-4 border-pink-100 border text-black text-2xl">
              $ {{ product.valor }}
            </td>

            <td class="px-6 py-4 border-pink-100 border text-center text-lg">
              <NuxtLink :to="{ path: `/products/${product.id}` }" class="text-black text-2xl p-3 rounded-xl underline hover:bg-pink-300">
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
