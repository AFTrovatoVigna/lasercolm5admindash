<script setup>
import menu from '~/components/menu.vue';
</script>

<template>
  <div class="main-container">
    <Menu class="menu-warp"/>
    <slot />
  </div>
</template>



<style scoped>
.main-container {
  display: flex;
  height: 100vh;
}
.main-container .menu-warp {
  height: 100%;
  width: 15%;
}
</style>