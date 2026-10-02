<script setup lang="ts">
import { ref } from 'vue'
import { Github, Linkedin, Mail, Twitter, Youtube, ExternalLink } from 'lucide-vue-next'

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/chigybillionz',
    icon: Github,
    hoverClass: 'hover:text-white hover:border-white/40',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com',
    icon: Twitter,
    hoverClass: 'hover:text-sky-400 hover:border-sky-400/40',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/okorie-chigozie-jehoshaphat-4b255526b/',
    icon: Linkedin,
    hoverClass: 'hover:text-blue-400 hover:border-blue-400/40',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: Youtube,
    hoverClass: 'hover:text-red-400 hover:border-red-400/40',
  },
  {
    name: 'Email',
    url: 'mailto:f.okoriechigozie99@gmail.com',
    icon: Mail,
    hoverClass: 'hover:text-emerald-400 hover:border-emerald-400/40',
  },
]
</script>

<template>
  <section class="relative w-full max-w-5xl mx-auto pt-20 sm:pt-24 px-4 sm:px-6">
    <!-- Top Banner Card -->
    <div
      class="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 group"
    >
      <!-- Banner Background Image -->
      <img
        src="/banner.jpg"
        alt="Mountain landscape banner"
        class="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
        loading="eager"
      />

      <!-- Subtle Dark Overlay Gradient for Readability -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none"
      ></div>

      <!-- Center Philosophy Quote -->
      <div class="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
        <h2
          class="font-quote italic text-white/95 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] text-center select-none"
        >
          Build · Ship · Learn · Repeat
        </h2>
      </div>
    </div>

    <!-- Profile Avatar Overlapping the Bottom of the Banner -->
    <div class="relative px-2 sm:px-4">
      <div class="relative -mt-16 sm:-mt-20 md:-mt-24 mb-4 sm:mb-6 flex items-end justify-between">
        <div class="relative">
          <!-- Circular Avatar with Border Ring -->
          <div
            class="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full p-1 bg-[#050505] shadow-2xl relative"
          >
            <div
              class="w-full h-full rounded-full overflow-hidden border-2 border-emerald-500/80 bg-neutral-900 relative group"
            >
              <img
                src="/myphoto.jpg"
                alt="Okorie Chigozie"
                class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <!-- Subtle green radial tint like reference -->
              <div
                class="absolute inset-0 bg-emerald-500/10 mix-blend-color pointer-events-none"
              ></div>
            </div>

            <!-- Online / Available Status Indicator Dot -->
            <div
              class="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#050505] flex items-center justify-center"
            >
              <div
                class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 animate-pulse ring-2 ring-emerald-400/50"
              ></div>
            </div>
          </div>
        </div>

        <!-- Available Badge on Right Side -->
        <div class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Available for roles & freelance</span>
        </div>
      </div>

      <!-- Identity & Subtitle -->
      <div class="space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-baseline gap-2">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Okorie Chigozie
          </h1>
        </div>

        <!-- Role / Skills Subtitle Line with Separator Dots -->
        <p
          class="text-neutral-300 sm:text-neutral-400 text-sm sm:text-base md:text-lg font-normal flex flex-wrap items-center gap-1.5 sm:gap-2 leading-relaxed"
        >
          <span>Fullstack Software Engineer</span>
          <span class="text-neutral-600 font-bold">·</span>
          <span>Vue.js</span>
          <span class="text-neutral-600 font-bold">·</span>
          <span>Laravel</span>
          <span class="text-neutral-600 font-bold">·</span>
          <span>TypeScript</span>
          <span class="text-neutral-600 font-bold">·</span>
          <span>Tailwind</span>
          <span class="text-neutral-600 font-bold">·</span>
          <span>Solidity</span>
          <span>👨‍💻</span>
        </p>

        <!-- Social Icons Row Styled Exactly Like the User Screenshot -->
        <div class="flex items-center gap-3 pt-2">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :title="social.name"
            class="flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-neutral-900/50 text-neutral-400 transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
            :class="social.hoverClass"
          >
            <component :is="social.icon" class="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
