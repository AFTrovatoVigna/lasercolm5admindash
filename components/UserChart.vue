<template>
  <div>
    <canvas ref="userChart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
import  GetAllUsers  from '@/helper/users.helper.js'; // Adjust the path as needed

Chart.register(...registerables);

const userChart = ref(null);
const chartInstance = ref(null);

const renderChart = async () => {
  const page = 1; // Adjust as needed
  const limit = 10; // Adjust as needed
  const users = await GetAllUsers(page, limit);
  console.log('Fetched user data:', data); // Log the fetched data
  const newUserCount = users ? users.length : 0; // Count new users

  if (chartInstance.value) {
    chartInstance.value.destroy(); // Destroy the old chart instance if it exists
  }

  chartInstance.value = new Chart(userChart.value, {
    type: 'bar',
    data: {
      labels: ['New Users'],
      datasets: [{
        label: 'Number of New Users',
        data: [newUserCount],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: 'Clientes Nuevos',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

onMounted(() => {
  renderChart(); // Render the chart when the component is mounted
});
</script>

<style scoped>
canvas {
  max-width: 600px;
  height: 300px; /* Increased for visibility */
}
</style>
