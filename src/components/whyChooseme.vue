<script>
import { ref } from 'vue'

const whyChooseMe = ref([
  {
    title: 'Expertise',
    description: 'I bring deep technical knowledge and industry experience to every project.',
  },
  {
    title: 'Reliability',
    description: 'I deliver consistent, high-quality results on time and within budget.',
  },
  {
    title: 'Communication',
    description: 'Clear, transparent communication keeps projects aligned with your goals.',
  },
])
</script>

<template>
  <section id="why-choose-me" class="w-full py-16 sm:py-24 px-0 sm:px-6 font-sans antialiased">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12 sm:mb-20 space-y-4 px-6 sm:px-0">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <span
            class="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400"
            >Core Strengths</span
          >
        </div>

        <h2
          class="text-4xl min-[400px]:text-5xl sm:text-7xl lg:text-8xl font-syne font-bold italic text-white tracking-tighter uppercase leading-[0.9]"
        >
          Why I'm Your <br class="hidden sm:block" />
          <span class="text-neutral-600 hover:text-white transition-colors duration-700"
            >Ideal Partner</span
          >
        </h2>

        <p
          class="text-neutral-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto font-light leading-relaxed"
        >
          I bridge the gap between technical complexity and intuitive user experiences.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 px-4 sm:px-0">
        <article
          class="md:col-span-8 group relative p-6 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3rem] bg-neutral-900/20 border border-white/5 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden"
        >
          <div
            class="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] group-hover:bg-emerald-500/10 transition-all duration-700"
          ></div>

          <div class="relative z-10 flex flex-col h-full justify-between">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6 sm:mb-12"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div>
              <h3
                class="text-2xl sm:text-3xl lg:text-4xl font-syne font-bold text-white mb-2 sm:mb-4 uppercase italic"
              >
                Full-Stack Excellence
              </h3>
              <p class="text-neutral-400 text-sm sm:text-base lg:text-lg max-w-md">
                Complete web applications from frontend to backend with seamless integration.
              </p>
            </div>
          </div>
        </article>

        <article
          class="md:col-span-4 group p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-neutral-900/20 border border-white/5 hover:border-sky-500/50 transition-all duration-500"
        >
          <div
            class="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500 mb-6"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 class="text-xl sm:text-2xl font-syne font-bold text-white mb-2 uppercase italic">
            Lightning Delivery
          </h3>
          <p class="text-neutral-500 text-xs sm:text-sm leading-relaxed">
            Efficient workflows to get your project live without technical debt.
          </p>
        </article>

        <article
          class="md:col-span-4 group p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-neutral-900/20 border border-white/5 hover:border-purple-500/50 transition-all duration-500"
        >
          <div
            class="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
              />
            </svg>
          </div>
          <h3 class="text-xl sm:text-2xl font-syne font-bold text-white mb-2 uppercase italic">
            Vision Driven
          </h3>
          <p class="text-neutral-500 text-xs sm:text-sm leading-relaxed">
            I prioritize your vision. Every line of code serves your business goals.
          </p>
        </article>

        <article
          class="md:col-span-8 group relative p-6 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3rem] bg-neutral-900/20 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
        >
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div class="space-y-2">
              <h3 class="text-2xl sm:text-3xl font-syne font-bold text-white uppercase italic">
                Future-Proof Tech
              </h3>
              <p class="text-neutral-500 text-sm sm:text-base max-w-sm">
                Staying ahead with Vue 3, Next.js, and Node.js.
              </p>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in ['Vue', 'Node', 'Tailwind']"
                :key="tech"
                class="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] text-white font-mono uppercase tracking-widest"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
