<script setup>
import { ref } from "vue";
const nombre = ref("");
const color = ref("");
const material = ref("");
const medidas = ref("");
const stock = ref(0);
const valor = ref(0);
const imgUrl = ref("");
const category = ref("");

const submitForm = () => {
  const product = {
    nombre : nombre.value,
    color : color.value,
    material: material.value,
    medidas: medidas.value,
    stock: stock.value,
    valor: valor.value,
    imgUrl: imgUrl.value,
    category: category.value
  };
  console.log (product);
}


</script>

<template>
  <div class="flex justify-center w-full m-4 lg:mt-20">
    <form
      @submit.prevent="submitForm"
      class="flex flex-col mt-4 p-8 text-black bg-pink-200 shadow-lg rounded-xl max-w-[700px] w-full h-auto"
    >
      <!-- Form Fields -->
      <div class="mb-4">
        <label for="nombre" class="block mb-1 text-xl font-semibold">Nombre</label>
        <input
          id="nombre"
          placeholder="Ingresa el nombre"
          class="w-full p-3 text-black bg-white border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-600"
          required
          type="text"
          v-model="nombre"
          name="name"
        />
      </div>

      <div class="mb-4">
        <label for="color" class="block mb-1 text-xl font-semibold">Color</label>
        <input
          id="color"
          placeholder="Ingresa el color"
          class="w-full p-3 text-black bg-white border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-600"
          required
          type="text"
          v-model="color"
          name="color"
        />
      </div>

      <div class="mb-4">
        <label for="material" class="block mb-1 text-xl font-semibold">Material</label>
        <input
          id="material"
          placeholder="Ingresa el material"
          class="w-full p-3 text-black bg-white border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-600"
          required
          type="text"
          v-model="material"
          name="material"
        />
      </div>

      <div class="mb-4">
        <label for="medidas" class="block mb-1 text-xl font-semibold">Medidas</label>
        <input
          id="medidas"
          placeholder="Ingresa las medidas"
          class="w-full p-3 text-black bg-white border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-600"
          required
          type="text"
          v-model="medidas"
          name="medidas"
        />
      </div>

      <div class="mb-4">
        <label for="stock" class="block mb-1 text-xl font-semibold">Stock</label>
        <input
          id="stock"
          placeholder="Ingresa el stock"
          class="w-full p-3 text-black bg-white border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-600"
          required
          type="number"
          v-model="stock"
          name="stock"
        />
      </div>

      <div class="mb-4">
        <label for="valor" class="block mb-1 text-xl font-semibold">Precio</label>
        <input
          id="valor"
          placeholder="Ingresa el precio"
          class="w-full p-3 text-black bg-white border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-600"
          required
          type="number"
          v-model="valor"
          name="valor"
        />
      </div>

      <!-- Image Upload Field -->
      <div class="mb-4">
        <label for="imgUrl" class="block mb-1 text-xl font-semibold">Subir Imagen</label>
        <input
          id="imgUrl"
          class="w-full p-3 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-600"
          type="file"
          accept="image/*"
          @change="onFileSelected"
          name="imgUrl"
        />
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="px-6 py-3 mt-4 text-lg text-white bg-pink-600 rounded-lg shadow-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-600"
      >
        Agregar producto +
      </button>
    </form>
  </div>
</template>

<style scoped>
/* Opcional: estilos adicionales para mejorar la apariencia */
label {
  font-family: 'Arial', sans-serif;
}
</style>

