<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import SessionLayout from '~/layouts/session.vue';
import SignInLayout from '~/layouts/signIn.vue';

let isUserLoggedIn = ref(false);

const checkUserSession = () => {
  const userSession = localStorage.getItem('userSession');
  isUserLoggedIn.value = !!userSession; // Set to true if a session exists
};

onMounted(() => {
  checkUserSession();
  window.addEventListener('storage', checkUserSession);
});

onBeforeUnmount(() => {
  window.removeEventListener('storage', checkUserSession);
});
</script>

<template>
  <div class="flex h-screen">
    <div class="w-full h-full">
      <!-- Conditionally render the session or sign-in layout based on the user session -->
      <SessionLayout v-if="isUserLoggedIn">
        <slot />
      </SessionLayout>
      <SignInLayout v-else />
    </div>
  </div>
</template>
