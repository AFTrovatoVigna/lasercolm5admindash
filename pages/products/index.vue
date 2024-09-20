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
    <h1>Productos</h1>
    <div class="products-conatiner">
      <div class="product-wraper" v-for="product in productsArray" :key="product.id">
        <p>NOMBRE: {{ product.nombre }}</p>
        <p>VALOR: {{ product.valor }}</p>
        <p>CATEGORIA: {{ product.category }}</p>
        <p>id ------ {{ product.id }}</p>
        <NuxtLink :to="{ path: `/products/${product.id}`, state: { productsArray } }">
          Ver detalles
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
div h1 {
  font-size: 2.4rem;
  text-align: center;
  margin: 30px 0;
  background-color: aquamarine;
}
.products-conatiner {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 20px;
}
.products-conatiner div {
  border: 1px solid black;
}
.products-conatiner .product-wraper {
  padding: 10px;
}
.products-conatiner .product-wraper p {
  font-size: 1.6rem;
}
</style>
