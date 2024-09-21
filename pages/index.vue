<template>
   <div class="container mx-auto p-4 h-auto">
<h1 class="text-center text-[30px] bg-pink-200 rounded-[80px] font-semibold mt-7">MI PANEL</h1>
    <div class="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class=" bg-pink-200 shadow mt-10 rounded-lg p-4 flex items-center">
        <div class="mr-4">
          <svg class="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
          </svg>
        </div>
        <div >
          <h3 class="text-3xl font-bold">Ventas Totales</h3>
          <p class="text-3xl">Hoy: $1000</p>
          <p class="text-3xl">Semana: $5000</p>
          <p class="text-3xl">Mes: $20,000</p>
        </div>
      </div>
      <div class="bg-pink-200 border-pink-500 mt-10  shadow rounded-lg p-4 flex items-center">
        <div class="mr-4">
          <svg class="h-8 w-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
          </svg>
        </div>
        <div class="">
          <h3 class="text-3xl font-bold">Pedidos Activos</h3>
          <p class="text-3xl">25</p>
        </div>
      </div>
      <div class="bg-pink-200 mt-10 shadow rounded-lg p-4 flex items-center">
        <div class="mr-4">
          <svg class="h-8 w-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
          </svg>
        </div>
        <div>
          <h3 class="text-3xl font-bold">Clientes Nuevos</h3>
          <p class="text-3xl">5</p>
        </div>
      </div>
      <div class="bg-pink-200 shadow rounded-lg p-4 flex mt-10 items-center">
        <div class="mr-4">
          <svg class="h-8 w-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
          </svg>
        </div>
        <div>
          <h3 class="text-3xl font-bold">Productos Sin Stock</h3>
          <p class="text-3xl">3</p>
        </div>
      </div>
    </div>


    <div class="mb-8">
      <h2 class="text-4xl font-bold mb-10">Gráficos y Reportes</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white shadow rounded-lg p-4">
          <h3 class="text-3xl font-semibold mb-4">Gráfico de Ventas</h3>

          <div class="h-32 bg-gray-200"></div>
        </div>
        <div class="bg-white shadow rounded-lg p-4">
          <h3 class="text-3xl font-semibold mb-4">Pedidos por Estado</h3>
     
          <div class="h-32 bg-gray-200"></div>
        </div>
       
      </div>
    </div>

   
    <div class="mb-8">
      <h2 class="text-4xl font-bold mt-[40px] mb-10">Órdenes Recientes</h2>
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th class="py-2 px-4 text-3xl bg-pink-200 border-b">Cliente</th>
            <th class="py-2 px-4 text-3xl bg-pink-200 border-b">Monto</th>
            <th class="py-2 px-4 text-3xl bg-pink-200 border-b">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr class="p-7">
            <td class="py-2 px-4 text-3xl border-b">Cliente 1</td>
            <td class="py-2 px-4 text-3xl border-b">$10000</td>
            <td class="py-2 px-4 text-3xl border-b">Completado</td>
          </tr>
          <tr>
            <td class="py-2 px-4 text-3xl border-b">Cliente 2</td>
            <td class="py-2 px-4 text-3xl border-b">$20000</td>
            <td class="py-2 px-4 text-3xl border-b">Pendiente</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <h2 class="text-4xl font-bold mb-4 mt-[40px]">Últimas Actividades:</h2>
      <ul class="bg-white shadow rounded-lg p-4">
        <li class="text-3xl">Cambio de estado en orden #5678 a completado.</li>
        <li class="text-3xl">Nuevo cliente registrado: Cliente 4.</li>
        <li class="text-3xl">Producto B añadido al inventario.</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

