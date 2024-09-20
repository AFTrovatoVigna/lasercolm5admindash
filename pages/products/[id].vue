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
  <div class= "main-container">
    <h2>{{ product?.nombre }}</h2>
    <div class= "product-wrap">
      <div>
        <img src="../../assets/images/coming-soon.png" alt="">
      </div>
      <div class="product-details">
        <h3>Detalles del producto:</h3>
        <p>COLOR: {{ product?.color }}</p>
        <p>MATERIAL: {{ product?.material }}</p>
        <p>MEDIDAS: {{ product?.medidas }}</p>
        <p>STOCK: {{ product?.stock }}</p>
        <p>VALOR: {{ product?.valor }}</p>
        <p>CATEGORIA: {{ product?.category }}</p>
      </div>
    </div>
    <div class="buttons">
      <button class="btn-edit">Editar</button>
      <button class="btn-delete" @click="deleteProduct(productId)">Borrar</button>
    </div> 
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
}
.main-container h2 {
  font-size: 2.2rem;
}
.product-wrap {
  display: grid;
  grid-template-columns: 30% 70%;
}
.product-wrap div {
  border: 1px solid black;
}
.product-wrap div img{
  width: 100%;
  padding: 15px;
}
.product-wrap .product-details {
  display: flex;
  flex-direction: column;
  justify-content: center ;
  border: 1px solid black;
  padding-left: 30px;
}
.product-wrap .product-details h3 {
  font-size: 1.8rem;
  padding-bottom: 15px;
}
.product-wrap .product-details p {
  font-size: 1.6rem;
  padding-bottom: 10px;
}
.main-container .buttons {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-top: 20px;
}
.main-container .buttons .btn-edit {
  background-color: lightblue;
  font-size: 1.6rem;
  padding: 10px;
  border-radius: 10px;
}
.main-container .buttons .btn-delete{
  background-color: red;
  font-size: 1.6rem;
  padding: 10px;
  border-radius: 10px;
}
</style>
