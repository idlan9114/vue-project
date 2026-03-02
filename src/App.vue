<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="app-wrapper">
    <Navbar />
    <router-view />
  </div>
</template>



<style>
body {
  margin: 0;
  background-color: #0f172a;
}
</style>