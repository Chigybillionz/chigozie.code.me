<script setup lang="ts">
import { ref } from 'vue'

interface Internship {
  company: string
  role: string
  // duration: string
  outcome: string
  description: string
  image: string
  skills: string[]
}

const internships: Internship[] = [
  {
    company: 'InfoAssure',
    role: 'Infoassure Intern',
    // duration: 'June 2025 — dec 2025',
    outcome: 'Full Commendation',
    description:
      'Collaborated with the engineering team to build secure, user-centric interfaces. Focused on translating complex requirements into clean, scalable Vue.js components.',
    image: '/Internship/infoassure.png',
    skills: ['Vue.js', 'Tailwind CSS', 'Security UI', 'Agile'],
  },
  {
    company: 'Trueminds innovations', // Replace with your 2nd internship details
    role: 'trueminds innovations Intern',
    // duration: 'jan 2026 — Mar 2024',
    outcome: 'Project Lead',
    description:
      'Led the frontend refactor of the internal dashboard, improving load speeds by 40% and implementing a cohesive design system.',
    image: '/Internship/trueminds.jpeg', // Replace with your actual path
    skills: ['React', 'TypeScript', 'Figma', 'Performance Opt'],
  },
]

const activeIndex = ref(0)

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % internships.length
}

const prev = () => {
  activeIndex.value = activeIndex.value === 0 ? internships.length - 1 : activeIndex.value - 1
}
</script>

<template>
  <section class="py-24 bg-neutral-950 overflow-hidden rounded-3xl">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex justify-between items-center mb-12">
        <div class="flex items-center gap-4">
          <span class="h-px w-12 bg-emerald-500"></span>
          <span class="text-emerald-500 font-mono text-sm uppercase tracking-[0.3em]"
            >Professional Experience</span
          >
        </div>

        <div class="flex flex-col gap-2">
          <button
            @click="prev"
            class="p-3 rounded-full border border-white/5 hover:bg-white/10 text-white transition-all"
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
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            @click="next"
            class="p-3 rounded-full border border-white/5 hover:bg-white/10 text-white transition-all"
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
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div class="relative min-h-[700px] lg:min-h-[600px]">
        <div
          v-for="(item, index) in internships"
          :key="index"
          class="absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
          :class="[
            activeIndex === index
              ? 'opacity-100 translate-y-0 scale-100 z-20'
              : 'opacity-0 translate-y-12 scale-95 z-10 pointer-events-none',
          ]"
        >
          <div class="grid lg:grid-cols-12 gap-12 items-start">
            <div class="lg:col-span-6 relative group">
              <div
                class="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              ></div>

              <div
                class="relative bg-neutral-900 border border-white/5 rounded-[2rem] p-4 md:p-8 backdrop-blur-xl overflow-hidden shadow-2xl"
              >
                <img
                  :src="item.image"
                  :alt="item.company"
                  class="w-full h-auto rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
                />

                <a
                  :href="item.image"
                  target="_blank"
                  class="absolute top-6 right-6 p-4 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-emerald-500 hover:text-black transition-all"
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
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </a>
              </div>
            </div>

            <div class="lg:col-span-6 space-y-10">
              <div class="space-y-6">
                <h2
                  class="text-3xl lg:text-7xl font-syne font-bold text-white tracking-tighter leading-none uppercase italic"
                >
                  {{ item.role.split(' ')[0] }} <br />
                  <span class="text-neutral-600">
                    {{ item.role.split(' ').slice(1).join(' ') }}
                  </span>
                </h2>
                <p class="text-xl text-neutral-400 font-light leading-relaxed">
                  {{ item.description }}
                </p>
              </div>

              <div class="grid sm:grid-cols-2 gap-8">
                <div class="space-y-1">
                  <h4
                    class="text-emerald-500 font-bold uppercase text-[10px] tracking-[0.2em] font-mono"
                  >
                    Company
                  </h4>
                  <p class="text-white text-lg font-syne">{{ item.company }}</p>
                </div>
                <div class="space-y-1">
                  <!-- <h4
                    class="text-emerald-500 font-bold uppercase text-[10px] tracking-[0.2em] font-mono"
                  >
                    Duration
                  </h4> -->
                  <p class="text-white text-lg font-syne">{{ item.duration }}</p>
                </div>
                <div class="space-y-1">
                  <h4
                    class="text-emerald-500 font-bold uppercase text-[10px] tracking-[0.2em] font-mono"
                  >
                    Key Focus
                  </h4>
                  <p class="text-white text-lg font-syne">
                    {{ item.skills[0] }} & {{ item.skills[1] }}
                  </p>
                </div>
                <div class="space-y-1">
                  <h4
                    class="text-emerald-500 font-bold uppercase text-[10px] tracking-[0.2em] font-mono"
                  >
                    Outcome
                  </h4>
                  <p class="text-white text-lg font-syne">{{ item.outcome }}</p>
                </div>
              </div>

              <div class="pt-8 border-t border-white/5">
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in item.skills"
                    :key="skill"
                    class="px-4 py-2 rounded-full border border-white/5 bg-white/5 text-neutral-500 text-xs font-mono transition-colors hover:border-emerald-500/40 hover:text-emerald-500"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
