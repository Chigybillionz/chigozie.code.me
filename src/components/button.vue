<script setup>
import { ref } from 'vue'
import Photo from './myPhoto.vue'
import About from './about.fixed.vue'

const count = ref(0)
</script>

<template>
  <Photo />
  <About />
</template>

<style scoped></style>
