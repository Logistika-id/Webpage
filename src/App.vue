<script setup>
	import { RouterLink, RouterView } from 'vue-router'
	import Navbar from './layout/Navbar.vue'
  import Footer from './layout/Footer.vue'
</script>

<template>
  <Navbar />

  <RouterView />

  <Footer />
</template>
