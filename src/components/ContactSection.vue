<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, Twitter, MessageSquare, Send } from 'lucide-vue-next'

const email = 'f.okoriechigozie99@gmail.com'
const copied = ref(false)

const copyEmail = () => {
  navigator.clipboard.writeText(email)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2500)
}

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/chigybillionz',
    handle: '@chigybillionz',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/okorie-chigozie-jehoshaphat-4b255526b/',
    handle: 'Okorie Chigozie',
    icon: Linkedin,
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com',
    handle: '@chigozie',
    icon: Twitter,
  },
]
</script>

<template>
  <section id="contact" class="relative w-full max-w-5xl mx-auto py-16 sm:py-24 px-4 sm:px-6">
    <!-- Ambient Glow -->
    <div
      class="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/15 blur-[140px] rounded-full pointer-events-none"
    ></div>

    <div
      class="relative rounded-3xl md:rounded-4xl border border-neutral-800/90 bg-neutral-900/40 backdrop-blur-xl p-6 sm:p-10 md:p-14 overflow-hidden shadow-2xl"
    >
      <!-- Corner decor -->
      <div class="absolute top-4 right-4 text-neutral-700 text-sm font-mono select-none">+</div>
      <div class="absolute bottom-4 left-4 text-neutral-700 text-sm font-mono select-none">+</div>

      <div class="max-w-3xl mx-auto text-center space-y-6">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-semibold"
        >
          <MessageSquare class="w-3.5 h-3.5" />
          <span>Slide In</span>
        </div>

        <h2 class="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Have a project in mind?<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
            Let’s build something extraordinary.
          </span>
        </h2>

        <p class="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto">
          I'm currently available for full-time engineering roles, high-impact contract work, or technical consulting. Drop a line and let's discuss.
        </p>

        <!-- Interactive Email Box with Copy Feature -->
        <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div
            class="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 rounded-2xl bg-neutral-950 border border-neutral-800 text-neutral-200 text-xs sm:text-sm font-mono w-full sm:w-auto shadow-inner"
          >
            <div class="flex items-center gap-2 overflow-hidden">
              <Mail class="w-4 h-4 text-purple-400 shrink-0" />
              <span class="truncate">{{ email }}</span>
            </div>

            <button
              @click="copyEmail"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-all text-xs font-sans shrink-0 border border-white/5"
              title="Copy to clipboard"
            >
              <component :is="copied ? Check : Copy" class="w-3.5 h-3.5" :class="copied ? 'text-emerald-400' : ''" />
              <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
            </button>
          </div>

          <a
            :href="'mailto:' + email"
            class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-900/40 w-full sm:w-auto"
          >
            <span>Send Direct Email</span>
            <Send class="w-4 h-4" />
          </a>
        </div>

        <!-- Social Channels -->
        <div class="pt-8 border-t border-neutral-800/80 mt-8">
          <p class="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-semibold">
            Or connect on social networks
          </p>

          <div class="flex flex-wrap items-center justify-center gap-3">
            <a
              v-for="item in socials"
              :key="item.name"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-medium transition-all"
            >
              <component :is="item.icon" class="w-3.5 h-3.5" />
              <span>{{ item.name }}</span>
              <ArrowUpRight class="w-3 h-3 text-neutral-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
