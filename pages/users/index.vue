<script setup>
import { ref, onMounted } from 'vue';
import GetAllUsers from '@/helper/users.helper.js'; // Update the path as needed
import UserCard from '~/components/UserCard.vue'; // Update the path as needed

const usersArray = ref([]); // Create a ref to hold the users
const isLoading = ref(true); // Create a loading state

const fetchUsers = async () => {
  const page = 1; // Adjust as needed
  const limit = 10; // Adjust as needed
  try {
    const users = await GetAllUsers(page, limit);
    if (users) {
      usersArray.value = users; // Set the usersArray with the fetched data
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    isLoading.value = false; // Set loading to false after fetching
  }
};

// Fetch users when the component is mounted
onMounted(fetchUsers);
</script>

<template>
  <div class="mt-8">
    <h1 class="mb-8 text-3xl font-semibold text-center">Usuarios</h1>
    <div class="flex flex-col space-y-4">
      <div v-if="isLoading" class="text-lg text-gray-500">Cargando usuarios...</div>
      <UserCard
        v-for="user in usersArray"
        :key="user.id"
        :user="user"
      />
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles are removed as Tailwind handles everything */
</style>
