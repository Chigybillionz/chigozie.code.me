<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUpRight, FileDown, Sun, Moon } from 'lucide-vue-next'
import { isResumeModalOpen } from '../composables/useResumeModal'
import { isDark, toggleTheme } from '../composables/useTheme'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw] transition-all duration-300"
  >
    <nav
      class="flex items-center gap-1 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-5 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-2xl dark:shadow-black/60 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300"
    >
      <a
        href="#"
        class="px-2.5 sm:px-3 py-1.5 rounded-full hover:text-neutral-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium"
      >
        Home
      </a>
      <a
        href="#projects"
        class="px-2.5 sm:px-3 py-1.5 rounded-full hover:text-neutral-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium"
      >
        Projects
      </a>
      <a
        href="#about"
        class="px-2.5 sm:px-3 py-1.5 rounded-full hover:text-neutral-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium hidden sm:inline-block"
      >
        About
      </a>
      <a
        href="#techstack"
        class="px-2.5 sm:px-3 py-1.5 rounded-full hover:text-neutral-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium"
      >
        Stack
      </a>
      <button
        @click.prevent="isResumeModalOpen = true"
        class="px-2.5 sm:px-3 py-1.5 rounded-full hover:text-neutral-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium flex items-center gap-1.5 hidden md:inline-flex"
      >
        <FileDown class="w-3.5 h-3.5" />
        <span>CV</span>
      </button>

      <!-- Theme Switcher Toggle Button -->
      <button
        type="button"
        @click="toggleTheme"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        :title="isDark ? 'Switch to Light mode' : 'Switch to Dark mode'"
        class="p-1.5 sm:p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all flex items-center justify-center active:scale-90"
      >
        <Sun v-if="isDark" class="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform duration-300" />
        <Moon v-else class="w-4 h-4 text-purple-600 hover:-rotate-12 transition-transform duration-300" />
      </button>

      <div class="h-4 w-[1px] bg-black/10 dark:bg-white/10 mx-0.5 sm:mx-1"></div>

      <a
        href="#contact"
        class="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm shadow-[0_0_15px_rgba(147,51,234,0.4)] transition-all transform hover:scale-105 active:scale-95"
      >
        <span>Let's work</span>
        <span>💻</span>
      </a>
    </nav>
  </header>
</template>
