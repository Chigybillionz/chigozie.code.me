<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

const toggleReadMore = () => {
  isExpanded.value = !isExpanded.value
}

const features = [
  {
    title: 'Type Safety',
    desc: 'Fully typed events and payloads prevent runtime errors before they even happen.',
    color: 'emerald',
  },
  {
    title: 'Auto-Cleanup',
    desc: 'Smart lifecycle management prevents memory leaks by unsubscribing on unmount.',
    color: 'yellow', // Gold
  },
  {
    title: 'SoC',
    desc: 'Separation of concerns ensures UI components stay focused on rendering, not logic.',
    color: 'emerald',
  },
]
</script>

<template>
  <div class="w-full bg-black py-20 px-4 md:px-10">
    <section
      class="relative bg-neutral-950 rounded-[4rem] md:rounded-[6rem] py-24 px-8 overflow-hidden border border-white/5"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.1),transparent_70%)]"
      ></div>

      <div class="max-w-6xl mx-auto relative z-10">
        <div class="text-center mb-20 space-y-6">
          <div
            class="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span class="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400"
              >Developer Experience</span
            >
          </div>

          <h2 class="text-6xl md:text-8xl font-syne font-bold italic tracking-tighter text-white">
            Clean Code <span class="text-neutral-700 font-thin not-italic">&</span> Maintainability
          </h2>

          <div
            class="max-w-2xl mx-auto overflow-hidden transition-all duration-700 ease-in-out"
            :style="{ maxHeight: isExpanded ? '500px' : '60px' }"
          >
            <p class="text-lg md:text-xl text-neutral-400 leading-relaxed">
              Great software isn't just about what users see—it's about the
              <span class="text-white">ergonomics</span> of the codebase.
              <span
                :class="{ 'opacity-0': !isExpanded, 'opacity-100': isExpanded }"
                class="transition-opacity duration-700"
              >
                By focusing on scalable architecture, we ensure that every line of code serves a
                purpose, reducing technical debt and allowing for rapid iteration in production
                environments.
              </span>
            </p>
          </div>

          <button
            @click="toggleReadMore"
            class="text-xs font-black uppercase tracking-widest text-emerald-500 hover:text-yellow-500 transition-colors duration-300"
          >
            {{ isExpanded ? '[ Show Less ]' : '[ Read More ]' }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div
            v-for="f in features"
            :key="f.title"
            class="group relative p-8 rounded-[3rem] bg-neutral-900/40 border border-white/5 hover:border-emerald-500/30 transition-all duration-500"
          >
            <div
              :class="[
                'mb-6 inline-flex p-4 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3',
                f.color === 'emerald'
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-yellow-500/10 text-yellow-400',
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 class="text-white font-syne font-bold text-xl mb-3 italic tracking-tight uppercase">
              {{ f.title }}
            </h3>
            <p
              class="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors"
            >
              {{ f.desc }}
            </p>
          </div>
        </div>

        <div class="group relative p-[1px] rounded-[3rem] overflow-hidden bg-transparent">
          <div
            class="absolute inset-[-500%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FACC15_0%,#10B981_50%,#FACC15_100%)] opacity-20 group-hover:opacity-40 transition-opacity"
          ></div>

          <div
            class="relative z-10 bg-[#0a0a0a] rounded-[calc(3rem-1px)] border border-white/10 overflow-hidden"
          >
            <div
              class="flex items-center justify-between px-8 py-4 border-b border-white/5 bg-white/5"
            >
              <div class="flex gap-2">
                <div
                  class="w-2.5 h-2.5 rounded-full bg-red-500/50 group-hover:bg-red-500 transition-colors"
                ></div>
                <div
                  class="w-2.5 h-2.5 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500 transition-colors"
                ></div>
                <div
                  class="w-2.5 h-2.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors"
                ></div>
              </div>
              <span class="text-[10px] text-neutral-500 font-mono uppercase tracking-widest"
                >useEventBus.ts</span
              >
            </div>
            <div class="relative">
              <img
                src="/public/codesample.png"
                alt="Code Illustration"
                class="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.font-syne {
  font-family: 'Syne', sans-serif;
}
</style>
