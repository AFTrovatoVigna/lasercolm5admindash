<script setup>

  const productsAraray = [
    {
        "nombre": "Relicario",
        "color": "Dorado",
        "material": "Acero Inoxidable",
        "medidas": "30 x 30 mm",
        "stock": 5,
        "valor": 50000.00,
        "category": "collares"
    },
    {
        "nombre": "Relicario",
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "medidas": "30 x 30 mm",
        "stock": 5,
        "valor": 50000.00,
        "category": "collares"
    },
    {
        "nombre": "Collar de corazon",
        "color": "Dorado",
        "material": "Acero Inoxidable",
        "medidas": "32 x 30 mm",
        "stock": 10,
        "valor": 48000.00,
        "category": "collares"
    },
    {
        "nombre": "Collar de corazon",
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "medidas": "32 x 30 mm",
        "stock": 8,
        "valor": 48000.00,
        "category": "collares"
    },
    {
        "nombre": "Collar circular",
        "color": "Dorado",
        "material": "Acero Inoxidable",
        "medidas": "30 x 30 mm",
        "stock": 6,
        "valor": 48000.00,
        "category": "collares"
    },
    {
        "nombre": "Collar circular",
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "medidas": "30 x 30 mm",
        "stock": 6,
        "valor": 48000.00,
        "category": "collares"
    },
    {
        "nombre": "Llavero placa",
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "medidas": "30 x 50 mm",
        "stock": 6,
        "valor": 45000.00,
        "category": "llaveros"
    },
    {
        "nombre": "Llavero placa",
        "color": "Dorado",
        "material": "Acero Inoxidable",
        "medidas": "30 x 50 mm",
        "stock": 4,
        "valor": 45000.00,
        "category": "llaveros"
    },
    {
        "nombre": "Llavero con placa adicional",
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "medidas": "30 x 50 y 30 x 30 mm",
        "stock": 6,
        "valor": 45000.00,
        "category": "llaveros"
    },
    {
        "nombre": "Llavero con placa adicional",
        "color": "Dorado",
        "material": "Acero Inoxidable",
        "medidas": "30 x 50 y 30 x 30 mm",
        "stock": 6,
        "valor": 45000.00,
        "category": "llaveros"
    },
    {
        "nombre": "Placa hueso grande",
        "color": "Dorado",
        "material": "Acero Inoxidable",
        "medidas": "50 x 28 mm",
        "stock": 8,
        "valor": 25000.00,
        "category": "placas mascotas"
    },
    {
        "nombre": "Placa hueso grande",
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "medidas": "50 x 28 mm",
        "stock": 10,
        "valor": 25000.00,
        "category": "placas mascotas"
    },
    {
        "nombre": "Placa hueso pequeño",
        "color": "Plateado",
        "material": "Acero Inoxidable",
        "medidas": "40 x 22 mm",
        "stock": 6,
        "valor": 22000.00,
        "category": "placas mascotas"
    },
    {
        "nombre": "Placa hueso pequeño",
        "color": "Dorado",
        "material": "Acero Inoxidable",
        "medidas": "40 x 22 mm",
        "stock": 5,
        "valor": 22000.00,
        "category": "placas mascotas"
    },
    {
        "nombre": "Placa hueso pequeño",
        "color": "Oro rosa",
        "material": "Acero Inoxidable",
        "medidas": "40 x 22 mm",
        "stock": 6,
        "valor": 22000.00,
        "category": "placas mascotas"
    },
    {
        "nombre": "Manilla de identificacion",
        "color": "Negro",
        "material": "Acero Inoxidable y silicona",
        "medidas": "32 x 12 mm",
        "stock": 10,
        "valor": 40000.00,
        "category": "manillas ID"
    },
    {
        "nombre": "Manilla de identificacion",
        "color": "Rosado",
        "material": "Acero Inoxidable y silicona",
        "medidas": "32 x 12 mm",
        "stock": 10,
        "valor": 40000.00,
        "category": "manillas ID"
    },
    {
        "nombre": "Manilla de identificacion",
        "color": "Blanco",
        "material": "Acero Inoxidable y silicona",
        "medidas": "32 x 12 mm",
        "stock": 10,
        "valor": 40000.00,
        "category": "manillas ID"
    }
];
  const aqui = "Leras"

</script>

<template>
  <div>
    <h1>Productos</h1>
    <div class="products-conatiner" >
      <div class= "product-wraper" v-for="product in productsAraray" :key="product.nombre">
        <p>NOMBRE: {{ product.nombre }}</p>
        <p>COLOR: {{ product.color }}</p>
        <p>MATERIAL: {{ product.material }}</p>
        <p>MEDIDAS: {{ product.medidas }}</p>
        <p>STOCK: {{ product.stock }}</p>
        <p>VALOR: {{ product.valor }}</p>
        <p>CATEGORIA: {{ product.category }}</p>
      </div>
    </div>
    
  </div>
</template>

<script setup>

</script>

<style  scoped>
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
</style>