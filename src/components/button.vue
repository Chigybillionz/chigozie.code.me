<script setup>
import { ref } from 'vue'
import Photo from './myPhoto.vue'
import About from './about.vue'

const count = ref(0)
</script>

<template>
  <Photo />
  <About />

  <!-- <button @click="count++">Clicked {{ count }} times.</button> -->
</template>

<style scoped></style>
