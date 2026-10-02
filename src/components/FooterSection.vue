<script setup lang="ts">
import { ArrowUp } from 'lucide-vue-next'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 border-t border-neutral-900">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
        <span>© {{ currentYear }} Okorie Chigozie. All rights reserved.</span>
      </div>

      <div class="flex items-center gap-6">
        <span>Crafted with Vue.js & Tailwind</span>
        <button
          @click="scrollToTop"
          class="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
          title="Back to top"
        >
          <span>Top</span>
          <ArrowUp class="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  </footer>
</template>
