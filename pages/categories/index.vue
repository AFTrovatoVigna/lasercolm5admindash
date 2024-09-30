<script setup>
import { ref, onMounted } from "vue";
let categories =ref([]);
async function fetchCategories () {
  try {
    const response = await fetch("http://localhost:3000/categories");
    categories.value = await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

onMounted(() => {
  fetchCategories();
})
</script>


<template>
  <div>
    <h1>Categorias</h1>
    <div v-for="category in categories" :key="category.id">
      <p>{{ category.name }}</p>
    </div>
  </div>
</template>


<style scoped>
div h1 {
  width: 100vw;
  font-size: 2.4rem;
  text-align: center;
  margin: 30px 0;
}
</style>
find/:category