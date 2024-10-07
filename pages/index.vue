<script setup>
definePageMeta({
  middleware: 'auth'
});
</script>

<template>
   <div class="container h-auto p-4 mx-auto">
    <h1 class="text-center text-[30px] bg-pink-200 rounded-[80px] font-semibold mt-7">MI PANEL</h1>
    <div class="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
      <div class="flex items-center p-4 mt-10 bg-pink-200 rounded-lg shadow ">
        <div class="mr-4">
          <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
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
      <div class="flex items-center p-4 mt-10 bg-pink-200 border-pink-500 rounded-lg shadow">
        <div class="mr-4">
          <svg class="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
          </svg>
        </div>
        <div class="">
          <h3 class="text-3xl font-bold">Pedidos Activos</h3>
          <p class="text-3xl">25</p>
        </div>
      </div>
      <div class="flex items-center p-4 mt-10 bg-pink-200 rounded-lg shadow">
        <div class="mr-4">
          <svg class="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
          </svg>
        </div>
        <div>
          <h3 class="text-3xl font-bold">Clientes Nuevos</h3>
          <p class="text-3xl">5</p>
        </div>
      </div>
      <div class="flex items-center p-4 mt-10 bg-pink-200 rounded-lg shadow">
        <div class="mr-4">
          <svg class="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
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
      <h2 class="mb-10 text-4xl font-bold">Gráficos y Reportes</h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="p-4 bg-white rounded-lg shadow">
          <h3 class="mb-4 text-3xl font-semibold">Gráfico de Ventas</h3>

          <div class="h-32 bg-gray-200"></div>
        </div>
        <div class="p-4 bg-white rounded-lg shadow">
          <h3 class="mb-4 text-3xl font-semibold">Pedidos por Estado</h3>
     
          <div class="h-32 bg-gray-200"></div>
        </div>
       
      </div>
    </div>

   
    <div class="mb-8">
      <h2 class="text-4xl font-bold mt-[40px] mb-10">Órdenes Recientes</h2>
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th class="px-4 py-2 text-3xl bg-pink-200 border-b">Cliente</th>
            <th class="px-4 py-2 text-3xl bg-pink-200 border-b">Monto</th>
            <th class="px-4 py-2 text-3xl bg-pink-200 border-b">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr class="p-7">
            <td class="px-4 py-2 text-3xl border-b">Cliente 1</td>
            <td class="px-4 py-2 text-3xl border-b">$10000</td>
            <td class="px-4 py-2 text-3xl border-b">Completado</td>
          </tr>
          <tr>
            <td class="px-4 py-2 text-3xl border-b">Cliente 2</td>
            <td class="px-4 py-2 text-3xl border-b">$20000</td>
            <td class="px-4 py-2 text-3xl border-b">Pendiente</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <h2 class="text-4xl font-bold mb-4 mt-[40px]">Últimas Actividades:</h2>
      <ul class="p-4 bg-white rounded-lg shadow">
        <li class="text-3xl">Cambio de estado en orden #5678 a completado.</li>
        <li class="text-3xl">Nuevo cliente registrado: Cliente 4.</li>
        <li class="text-3xl">Producto B añadido al inventario.</li>
      </ul>
    </div>
  </div>
</template>


