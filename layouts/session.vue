<script setup>
import { ref } from 'vue';
import Menu from '~/components/menu.vue';

let showMenu = ref(true); // This can be toggled based on your logic if needed
</script>

<template>
  <div class="flex h-screen">
    <Menu class="w-1/6 h-full" v-if="showMenu" />
    <div class="flex-1">
      <slot /> <!-- Ensure the slot is correctly placed to render child pages -->
    </div>
  </div>
</template>

<style scoped>
/* You can add any styles specific to the session layout here if needed */
</style>
