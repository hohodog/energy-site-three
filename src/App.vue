<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <Navbar />
  <main class="page-shell">
    <RouterView />
  </main>
  <SiteFooter />
</template>
