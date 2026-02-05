<script></script>
<template>
  <footer class="relative z-10 pt-24 pb-12 overflow-hidden">
    <div
      class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
    ></div>

    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
        <div class="lg:col-span-7 space-y-8">
          <div class="space-y-4">
            <h3
              class="text-4xl font-syne font-extrabold text-white uppercase italic tracking-tighter"
            >
              Chigozie <span class="text-neutral-700 text-3xl">Okorie</span>
            </h3>
            <p class="text-neutral-400 text-lg leading-relaxed max-w-md italic">
              "Crafting high-performance digital interfaces with a focus on precision and modern
              aesthetics."
            </p>
          </div>

          <div class="flex gap-3">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              target="_blank"
              class="group flex items-center justify-center w-12 h-12 rounded-full border border-white/5 bg-white/5 hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-500"
            >
              <component
                :is="link.icon"
                class="w-5 h-5 text-white group-hover:text-black transition-colors"
              />
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 flex flex-col justify-end lg:items-end">
          <div class="space-y-6 w-full lg:max-w-xs">
            <h4 class="text-emerald-500 font-mono text-xs uppercase tracking-[0.3em] font-bold">
              Get In Touch
            </h4>

            <div class="space-y-4">
              <a
                href="mailto:chigozie.dev@email.com"
                class="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors"
              >
                <div
                  class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-emerald-500"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <span class="text-sm font-medium">chigozie.dev@email.com</span>
              </a>

              <div class="flex items-center gap-4 text-neutral-400">
                <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-emerald-500"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <span class="text-sm font-medium">Available for new opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div class="flex items-center text-neutral-500 text-xs font-mono uppercase tracking-widest">
          <span>© 2026 Chigozie Okorie</span>
          <span class="mx-3 opacity-20">|</span>
          <span class="flex items-center gap-2">
            Made with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-emerald-500 fill-emerald-500/20"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
            in Nigeria
          </span>
        </div>

        <button
          @click="scrollToTop"
          class="group flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full border border-white/5 bg-white/5 hover:bg-white hover:text-black transition-all duration-500"
        >
          Back to top
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="group-hover:-translate-y-1 transition-transform duration-300"
          >
            <path d="m5 12 7-7 7 7"></path>
            <path d="M12 19V5"></path>
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Github, Linkedin, Twitter, Mail } from 'lucide-vue-next'

const socialLinks = [
  { name: 'Github', icon: Github, url: 'https://github.com/yourusername' },
  { name: 'Linkedin', icon: Linkedin, url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername' },
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.font-syne {
  font-family: 'Syne', sans-serif;
}
</style>
