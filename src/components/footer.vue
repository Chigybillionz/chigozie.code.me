<script setup>
import { Github, Linkedin, Twitter, Mail } from 'lucide-vue-next'

const socialLinks = [
  {
    name: 'Github',
    icon: Github,
    url: 'https://github.com/chigybillionz',
  },
  {
    name: 'Linkedin',
    icon: Linkedin,
    url: 'https://linkedin.com/in/okorie-chigozie-jehoshaphat-4b255526b/',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/chigoziOkorie',
  },
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <!-- Main Footer Wrapper with Gradient & Noise -->
  <footer class="relative z-10 pt-32 pb-12 overflow-hidden bg-[#030303] rounded-3xl">
    <!-- 1. Background Grain/Noise Overlay -->
    <div
      class="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
    ></div>

    <!-- 2. Decorative Glows -->
    <div
      class="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"
    ></div>
    <div
      class="absolute top-0 right-0 w-[600px] h-[300px] bg-gradient-to-b from-white/[0.02] to-transparent blur-3xl pointer-events-none"
    ></div>

    <!-- 3. Top Border Gradient -->
    <div
      class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
    ></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        <!-- Brand Info -->
        <div class="lg:col-span-7 space-y-8">
          <div class="space-y-4">
            <h3
              class="text-4xl md:text-5xl font-syne font-extrabold text-white uppercase italic tracking-tighter leading-none"
            >
              Okorie

              <span class="text-neutral-700 block md:inline text-3xl md:text-4xl">Chigozie</span>
            </h3>
            <p class="text-neutral-400 text-lg leading-relaxed max-w-md italic font-light">
              "Crafting high-performance digital interfaces with a focus on precision and modern
              aesthetics."
            </p>
          </div>

          <!-- Social Links -->
          <div class="flex gap-4">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              target="_blank"
              class="group flex items-center justify-center w-14 h-14 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-emerald-500 hover:border-emerald-500 hover:-translate-y-1 transition-all duration-500"
            >
              <component
                :is="link.icon"
                class="w-5 h-5 text-neutral-400 group-hover:text-black transition-colors"
              />
            </a>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="lg:col-span-5 flex flex-col justify-end lg:items-end">
          <div class="space-y-8 w-full lg:max-w-xs">
            <div class="space-y-2">
              <h4
                class="text-emerald-500 font-mono text-[10px] font-bold uppercase tracking-[0.4em]"
              >
                Get In Touch
              </h4>
              <div class="h-px w-12 bg-emerald-500/30"></div>
            </div>

            <div class="space-y-6">
              <a
                href="mailto:okoriechigozie99@gmail.com"
                class="group flex items-center gap-5 text-neutral-400 hover:text-white transition-all"
              >
                <div
                  class="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/50 transition-all"
                >
                  <Mail class="w-5 h-5 text-emerald-500" />
                </div>
                <div class="flex flex-col">
                  <span class="text-[10px] uppercase tracking-widest text-neutral-600 font-bold"
                    >Email Me</span
                  >
                  <span class="text-sm font-medium">okoriechigozie99@gmail.com</span>
                </div>
              </a>

              <div class="flex items-center gap-5 text-neutral-400">
                <div
                  class="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
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
                <div class="flex flex-col">
                  <span class="text-[10px] uppercase tracking-widest text-neutral-600 font-bold"
                    >Status</span
                  >
                  <span class="text-sm font-medium">Available for new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright Area -->
      <div
        class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div
          class="flex items-center text-neutral-600 text-[10px] font-mono uppercase tracking-widest"
        >
          <span>© 2026 Okorie Chigozie</span>
          <span class="mx-4 opacity-20">/</span>
          <span class="flex items-center gap-2">
            Made with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
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
          class="group relative flex items-center gap-3 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-2xl overflow-hidden transition-all duration-500"
        >
          <!-- Button Background -->
          <div
            class="absolute inset-0 bg-white/[0.03] border border-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500"
          ></div>

          <span class="relative z-10 group-hover:text-black transition-colors">Back to top</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="relative z-10 group-hover:text-black group-hover:-translate-y-1 transition-all duration-300"
          >
            <path d="m5 12 7-7 7 7"></path>
            <path d="M12 19V5"></path>
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.font-syne {
  font-family: 'Syne', sans-serif;
}
</style>
