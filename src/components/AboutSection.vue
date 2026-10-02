<script setup lang="ts">
import { FileDown, Terminal, MapPin, CheckCircle2 } from 'lucide-vue-next'

const highlights = [
  'Fullstack Engineering: Vue.js, React, TypeScript, and Node.js architectures.',
  'Performance-first: Sub-second load times, smooth transitions, and clean code.',
  'Clean API Design: Structured REST APIs, database schemas, and microservice integration.',
]
</script>

<template>
  <section id="about" class="relative w-full max-w-5xl mx-auto py-16 sm:py-24 px-4 sm:px-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <!-- Left Narrative Column -->
      <div class="lg:col-span-7 space-y-6">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-semibold"
        >
          <Terminal class="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Coding, Break, Debug, Ship, Repeat 😎
        </h2>

        <div class="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
          <p>
            Hey! I'm <strong class="text-white">Okorie Chigozie</strong>, a Fullstack Software Engineer based in Lagos, Nigeria. I build resilient, performant web applications and software systems that translate complex user needs into effortless digital experiences.
          </p>
          <p class="text-neutral-400 text-sm sm:text-base">
            Whether I'm engineering reactive frontends in Vue.js and React, architecting scalable backend APIs in Node.js and Express, or optimizing production deployments, I obsess over quality, security, and developer craftsmanship.
          </p>
        </div>

        <!-- Key Bullet Highlights -->
        <div class="space-y-3 pt-2">
          <div
            v-for="(item, idx) in highlights"
            :key="idx"
            class="flex items-start gap-3 text-sm sm:text-base text-neutral-300"
          >
            <CheckCircle2 class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <span>{{ item }}</span>
          </div>
        </div>

        <!-- Action / Resume Download -->
        <div class="pt-4 flex flex-wrap items-center gap-4">
          <a
            href="/mee.pdf"
            download="Okorie_Chigozie_CV.pdf"
            class="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-neutral-900 border border-white/10 hover:border-white/30 text-white font-semibold text-sm transition-all hover:bg-neutral-800 hover:scale-105 active:scale-95 shadow-lg"
          >
            <FileDown class="w-4 h-4 text-purple-400" />
            <span>Download Resume</span>
          </a>

          <div class="flex items-center gap-2 text-xs text-neutral-400">
            <MapPin class="w-4 h-4 text-neutral-500" />
            <span>Based in Lagos, Nigeria</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Visual Photo Card -->
      <div class="lg:col-span-5 relative">
        <div
          class="relative mx-auto max-w-[360px] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/60 p-3 shadow-2xl group"
        >
          <!-- Subtle Glow Behind Card -->
          <div
            class="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-emerald-500/20 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition-opacity"
          ></div>

          <div class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-950">
            <img
              src="/myphoto.jpg"
              alt="Okorie Chigozie"
              class="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"
            ></div>

            <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
              <span class="font-mono text-[11px] text-neutral-400">@chigybillionz</span>
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400 font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
