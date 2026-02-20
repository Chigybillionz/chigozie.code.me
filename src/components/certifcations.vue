<script setup lang="ts">
import { ref } from 'vue'

interface Certification {
  title: string
  issuer: string
  date: string
  image: string
  color: string
  description: string
}

const certifications: Certification[] = [
  {
    title: 'Frontend development at GIDA bootcamp',
    issuer: 'Kevin Chibuoyim',
    date: '2025',
    image: '/certifactions_images/Gidabootcamp.png',
    color: 'from-blue-600/20',
    description:
      'Intensive learning at the GIDA bootcamp, mastering modern frontend frameworks, responsive design, and best practices for building dynamic user interfaces.',
  },
  {
    title: 'Frontend development at Genesy upskill 2.0',
    issuer: 'Nmadi Anika',
    date: '2025',
    image: '/certifactions_images/Genesy.jpeg',
    color: 'from-emerald-600/20',
    description:
      'Advanced specialization in component-based architecture, state management, and performance optimization through the Genesy upskill 2.0 program.',
  },
]

const activeIndex = ref(0)

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % certifications.length
}

const prev = () => {
  activeIndex.value = activeIndex.value === 0 ? certifications.length - 1 : activeIndex.value - 1
}
</script>

<template>
  <section class="py-24 bg-neutral-950 overflow-hidden rounded-3xl">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div class="space-y-4">
          <div
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-mono uppercase tracking-widest"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
              ></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Learning Path
          </div>
          <h2
            class="text-5xl lg:text-6xl font-syne font-bold text-white uppercase italic tracking-tighter"
          >
            Verified <span class="text-neutral-700">Skills</span>
          </h2>
        </div>

        <div class="flex gap-3">
          <button
            @click="prev"
            class="group p-5 rounded-full border border-white/5 bg-white/5 hover:border-emerald-500/50 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-white group-hover:text-emerald-500 transition-colors"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            @click="next"
            class="group p-5 rounded-full border border-white/5 bg-white/5 hover:border-emerald-500/50 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-white group-hover:text-emerald-500 transition-colors"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div class="relative min-h-[600px] w-full">
        <div
          v-for="(cert, index) in certifications"
          :key="index"
          class="absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
          :class="[
            activeIndex === index
              ? 'opacity-100 translate-x-0 scale-100 z-20'
              : 'opacity-0 translate-x-20 scale-95 z-10 pointer-events-none',
          ]"
        >
          <div class="grid lg:grid-cols-12 h-full gap-12 items-center">
            <div class="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:h-[550px] group">
              <div
                :class="`absolute inset-0 blur-[100px] opacity-20 bg-gradient-to-br ${cert.color} to-transparent`"
              ></div>

              <div
                class="relative h-full w-full flex items-center justify-center bg-neutral-900/40 rounded-[2.5rem] border border-white/5 p-6 backdrop-blur-sm overflow-hidden"
              >
                <img
                  :src="cert.image"
                  :alt="cert.title"
                  class="max-w-full max-h-full object-contain rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div
                  class="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-emerald-500/30"
                ></div>
                <div
                  class="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-emerald-500/30"
                ></div>
              </div>
            </div>

            <div class="lg:col-span-5 space-y-8">
              <div class="space-y-4">
                <p class="text-emerald-500 font-mono font-bold tracking-[0.2em] uppercase text-sm">
                  Issued by {{ cert.issuer }}
                </p>
                <h3 class="text-4xl lg:text-6xl font-syne font-bold text-white leading-tight">
                  {{ cert.title }}
                </h3>
              </div>

              <div class="flex items-center gap-6">
                <span class="text-4xl font-syne italic text-neutral-800 font-black">{{
                  cert.date
                }}</span>
                <div class="h-[1px] flex-1 bg-gradient-to-r from-neutral-800 to-transparent"></div>
              </div>

              <p class="text-neutral-400 text-lg leading-relaxed italic" contenteditable="false">
                "{{ cert.description }}"
              </p>

              <div class="flex flex-wrap gap-4 pt-4">
                <a
                  :href="cert.image"
                  target="_blank"
                  class="px-8 py-4 rounded-full bg-emerald-500 text-neutral-950 font-bold uppercase text-xs tracking-widest hover:bg-white transition-all duration-300"
                >
                  Verify Certificate
                </a>
                <button
                  @click="next"
                  class="px-8 py-4 rounded-full border border-white/10 text-white font-bold uppercase text-xs tracking-widest hover:bg-white/5 transition-all"
                >
                  Next Credential
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-3 mt-16">
        <div
          v-for="(_, index) in certifications"
          :key="index"
          @click="activeIndex = index"
          class="h-1.5 transition-all duration-500 cursor-pointer rounded-full"
          :class="
            activeIndex === index
              ? 'w-24 bg-emerald-500'
              : 'w-8 bg-neutral-800 hover:bg-neutral-700'
          "
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap');

.font-syne {
  font-family: 'Syne', sans-serif;
}

/* Smooth transition for the scaling effect */
.ease-custom {
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
}
</style>
