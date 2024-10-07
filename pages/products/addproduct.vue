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
  <div class="flex justify-center w-full m-4">
    <form
      @submit.prevent="submitForm"
      class="flex flex-col mt-4 p-6 text-black bg-pink-200 shadow-xl rounded-xl h-[90vh] w-[60vw]"
    >
      <!-- Form Fields -->
      <div class="flex-1 ">
        <label for="nombre" class="block mb-1">Nombre</label>
        <input
          id="nombre"
          placeholder="Ingresa el nombre"
          class="w-full p-2 text-black bg-white border rounded-lg shadow-md focus:outline-none focus:border-pink-900"
          required
          type="text"
          v-model="nombre"
          name="name"
        />
      </div>

      <div class="flex-1 ">
        <label for="color" class="block mb-1">Color</label>
        <input
          id="color"
          placeholder="Ingresa el color"
          class="w-full p-2 text-black bg-white border rounded-lg shadow-md focus:outline-none focus:border-pink-900"
          required
          type="text"
          v-model="color"
          name="color"
        />
      </div>

      <div class="flex-1 ">
        <label for="material" class="block mb-1">Material</label>
        <input
          id="material"
          placeholder="Ingresa el material"
          class="w-full p-2 text-black bg-white border rounded-lg shadow-md focus:outline-none focus:border-pink-900"
          required
          type="text"
          v-model="material"
          name="material"
        />
      </div>

      <div class="flex-1 ">
        <label for="medidas" class="block mb-1">Medidas</label>
        <input
          id="medidas"
          placeholder="Ingresa las medidas"
          class="w-full p-2 text-black bg-white border rounded-lg shadow-md focus:outline-none focus:border-pink-900"
          required
          type="text"
          v-model="medidas"
          name="medidas"
        />
      </div>

      <div class="flex-1 ">
        <label for="stock" class="block mb-1">Stock</label>
        <input
          id="stock"
          placeholder="Ingresa el stock"
          class="w-full p-2 text-black bg-white border rounded-lg shadow-md focus:outline-none focus:border-pink-900"
          required
          type="number"
          v-model="stock"
          name="stock"
        />
      </div>

      <div class="flex-1 ">
        <label for="valor" class="block mb-1">Precio</label>
        <input
          id="valor"
          placeholder="Ingresa el precio"
          class="w-full p-2 text-black bg-white border rounded-lg shadow-md focus:outline-none focus:border-pink-900"
          required
          type="number"
          v-model="valor"
          name="valor"
        />
      </div>

      <!-- Image Upload Field -->
      <div class="flex-1 w-full">
        <label for="imgUrl" class="block mb-1">Subir Imagen</label>
        <input
          id="imgUrl"
          class="w-full p-2 text-black rounded-lg shadow-md focus:outline-none focus:border-pink-900"
          type="file"
          accept="image/*"
          @change="onFileSelected"
          name="imgUrl"
        />
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="px-4 py-2 mt-4 text-white bg-pink-600 rounded-lg shadow-md hover:bg-pink-500 focus:outline-none"
      >
        Registrar
      </button>
    </form>
  </div>
</template>


<style scoped>

</style>