<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { GetAllAdmins } from '@/helper/admin.helper.js'; 
import AdminCard from '~/components/AdminCard.vue'; 

const adminsArray = ref([]); 
const isLoading = ref(true);
const fetchError = ref(null);

const router = useRouter(); // Use Vue Router

const fetchAdmins = async () => {
  isLoading.value = true; // Set loading to true
  const page = 1; 
  const limit = 10; 
  try {
    const admins = await GetAllAdmins(page, limit);
    if (admins) {
      adminsArray.value = admins; 
      fetchError.value = null; // Clear error if successful
    } else {
      fetchError.value = 'No admins found'; // Set error if no data
    }
  } catch (error) {
    fetchError.value = error.message; // Capture error message
  } finally {
    isLoading.value = false; // Set loading to false regardless of success
  }
};

// Navigate to the create admin page
const goToAddAdmin = () => {
  router.push('/admin/createAdmin');
};

onMounted(fetchAdmins);
</script>


<template>
  <div class="mt-8 lg:mt-14">
    <h1 class="mb-8 text-3xl lg:text-5xl font-semibold text-center">Administradores</h1>
    
    <div v-if="isLoading" class="text-center">Loading...</div>
    <div class="flex justify-end mb-4"> <!-- Use flex to align the button -->
    <button 
      class="bg-pink-300 text-black text-2xl mr-10 font-bold px-4 py-2 rounded-xl lg:h-[50px] lg:w-[200px] hover:bg-pink-400" 
      @click="goToAddAdmin"
    >
      + Agregar Administrador
    </button>
    </div>
    <div v-if="fetchError" class="text-center text-red-500">{{ fetchError }}</div>
    <div class="flex flex-col space-y-4" v-if="!isLoading && !fetchError">
      <AdminCard
        v-for="admin in adminsArray"
        :key="admin.id"
        :admin="admin"
      />
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles are removed as Tailwind handles everything */
</style>
