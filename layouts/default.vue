<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import Menu from '~/components/menu.vue';

const router = useRouter();
let showMenu = ref(false);

const checkUserSession = () => {
  const userSession = localStorage.getItem('userSession');
  showMenu.value = !!userSession; // Toggle menu based on session presence
};

onMounted(() => {
  // Check for user session on mount
  checkUserSession();

  // Listen for 'storage' changes (e.g., across tabs)
  window.addEventListener('storage', checkUserSession);

  // If no userSession, redirect to login
  if (!showMenu.value) {
    router.push('/login'); 
  }
});

onBeforeUnmount(() => {
  // Clean up event listener on component unmount
  window.removeEventListener('storage', checkUserSession);
});
</script>

<template>
  <div class="flex h-screen">
    <!-- Conditionally render Menu if user session exists -->
    <Menu class="w-1/6 h-full" v-if="showMenu" />
    <slot />
  </div>
</template>
