<script setup>
import { ref } from 'vue'

const whyChooseMe = ref([
  {
    title: 'Expertise',
    subtitle: 'Full-Stack',
    description: 'I bring deep technical knowledge and industry experience to every project.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    color: 'emerald',
  },
  {
    title: 'Reliability',
    subtitle: 'On-Time',
    description: 'I deliver consistent, high-quality results on time and within budget.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: 'sky',
  },
  {
    title: 'Communication',
    subtitle: 'Transparent',
    description: 'Clear, transparent communication keeps projects aligned with your goals.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857',
    color: 'purple',
  },
])

const scrollContainer = ref(null)

const scroll = (direction) => {
  if (scrollContainer.value) {
    // We calculate the width of one card + the gap (16px)
    const cardWidth = scrollContainer.value.querySelector('article').offsetWidth + 16
    scrollContainer.value.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <section id="why-choose-me" class="w-full py-12 px-4 font-sans antialiased overflow-hidden">
    <div class="max-w-5xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div class="space-y-3">
          <div
            class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5"
          >
            <div class="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></div>
            <span class="text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-500"
              >Why Me</span
            >
          </div>
          <h2
            class="text-4xl lg:text-6xl font-syne font-bold italic text-white tracking-tighter uppercase leading-[0.85]"
          >
            Core <span class="text-neutral-600">Strengths</span>
          </h2>
        </div>

        <div class="flex gap-3">
          <button
            @click="scroll('left')"
            aria-label="Slide Left"
            class="group p-3 rounded-full border border-white/5 bg-neutral-900/50 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300"
          >
            <svg
              class="w-5 h-5 text-neutral-500 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 19l-7-7 7-7"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            @click="scroll('right')"
            aria-label="Slide Right"
            class="group p-3 rounded-full border border-white/5 bg-neutral-900/50 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300"
          >
            <svg
              class="w-5 h-5 text-neutral-500 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref="scrollContainer"
        class="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 scroll-smooth"
      >
        <article
          v-for="(card, index) in whyChooseMe"
          :key="index"
          class="min-w-[280px] sm:min-w-[320px] md:flex-1 snap-start group relative p-8 rounded-[2rem] bg-neutral-900/20 border border-white/5 hover:border-white/10 transition-all duration-500"
        >
          <div
            :class="`absolute -top-10 -right-10 w-40 h-40 opacity-0 group-hover:opacity-10 rounded-full blur-[50px] transition-all duration-700 bg-${card.color}-500`"
          ></div>

          <div class="relative z-10 flex flex-col gap-8">
            <div
              :class="`w-10 h-10 rounded-xl flex items-center justify-center bg-${card.color}-500/10 text-${card.color}-500`"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="card.icon"
                />
              </svg>
            </div>

            <div class="space-y-2">
              <h3
                class="text-xl md:text-2xl font-syne font-bold text-white uppercase italic leading-tight"
              >
                {{ card.title }} <br />
                <span class="text-neutral-600 text-lg">{{ card.subtitle }}</span>
              </h3>
              <p class="text-neutral-500 text-sm leading-relaxed">
                {{ card.description }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Staggered load animation */
article {
  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

article:nth-child(1) {
  animation-delay: 0.1s;
}
article:nth-child(2) {
  animation-delay: 0.2s;
}
article:nth-child(3) {
  animation-delay: 0.3s;
}
</style>
