<script setup>
import { ref } from 'vue'
</script>

<template>
  <div
    class="w-full group relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] border border-white/10 bg-neutral-900/30 backdrop-blur-sm p-5 md:p-6 lg:p-8 transition-all duration-500 hover:border-emerald-500/30"
  >
    <div class="mb-6 md:mb-8 lg:mb-10 flex items-center justify-between">
      <div class="space-y-1">
        <h2
          class="text-[9px] md:text-sm lg:text-3xl font-black uppercase tracking-[0.3em] text-emerald-500"
        >
          Career Path
        </h2>
        <p class="text-lg md:text-2xl lg:text-3xl font-bold text-white font-syne italic">
          Experience
        </p>
      </div>

      <a
        href="/mee.pdf"
        target="_blank"
        class="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-3 md:px-4 lg:px-5 py-1.5 md:py-2 text-xs md:text-sm lg:text-base font-bold text-black transition-all hover:pr-6 md:hover:pr-8 active:scale-95"
      >
        <span>Resume</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="absolute right-3 opacity-0 transition-all group-hover/btn:opacity-100 group-hover/btn:translate-x-0 -translate-x-2"
        >
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        </svg>
      </a>
    </div>

    <div
      class="relative space-y-8 md:space-y-10 lg:space-y-12 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-[1px] before:bg-white/10"
    >
      <div class="group/item relative pl-8">
        <div
          class="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-emerald-500 bg-black transition-all group-hover/item:scale-125 group-hover/item:shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        ></div>

        <div
          class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-2 mb-2 md:mb-3"
        >
          <h3
            class="text-base md:text-xl lg:text-3xl font-bold text-white group-hover/item:text-emerald-400 transition-colors"
          >
            Full Stack Engineer
          </h3>
          <span
            class="text-[9px] md:text-xs lg:text-sm font-mono text-neutral-500 bg-neutral-800/50 px-2 py-1 rounded"
            >Dec 2025 — Present</span
          >
        </div>

        <p class="text-emerald-500/80 font-medium mb-2 md:mb-3 text-sm md:text-base lg:text-lg">
          GCB Holdings
        </p>

        <p class="text-xs md:text-sm lg:text-base text-neutral-400 leading-relaxed max-w-3xl">
          Architecting internal systems using <span class="text-neutral-200">Vue.js</span> and
          <span class="text-neutral-200">MYSQL</span>. Focused on optimizing database queries and
          containerizing microservices for scalable deployments.
        </p>

        <div class="mt-3 md:mt-4 flex flex-wrap gap-1.5">
          <span
            v-for="tech in ['React', 'TypeScript', 'vue.js', 'laravel', 'MYSQL']"
            :key="tech"
            class="rounded-md border border-white/5 bg-white/[0.03] px-2 md:px-2.5 py-0.5 md:py-1 text-[8px] md:text-[10px] lg:text-xs font-medium text-neutral-400 transition-colors hover:border-emerald-500/30 hover:text-emerald-400"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <div class="group/item relative pl-8">
        <div
          class="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-neutral-700 bg-black transition-all group-hover/item:border-emerald-500/50 group-hover/item:scale-125"
        ></div>

        <div
          class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-2 mb-2 md:mb-3"
        >
          <h3
            class="text-base md:text-xl lg:text-3xl font-bold text-white group-hover/item:text-emerald-400 transition-colors"
          >
            Full Stack Developer
          </h3>
          <span
            class="text-[9px] md:text-xs lg:text-sm font-mono text-neutral-500 bg-neutral-800/50 px-2 py-1 rounded"
            >Apr 2024 — Dec 2025</span
          >
        </div>

        <p class="text-emerald-500/80 font-medium mb-2 md:mb-3 text-sm md:text-base lg:text-lg">
          Antopolis
        </p>

        <p class="text-xs md:text-sm lg:text-base text-neutral-400 leading-relaxed max-w-3xl">
          Led end-to-end development for client projects. Managed transition from monolithic
          architectures to <span class="text-neutral-200">serverless functions</span> resulting in
          40% faster load times.
        </p>

        <div class="mt-3 md:mt-4 flex flex-wrap gap-1.5">
          <span
            v-for="tech in ['React', 'TypeScript', 'MYSQL', 'vue.js', 'TailwindCSS']"
            :key="tech"
            class="rounded-md border border-white/5 bg-white/[0.03] px-2 md:px-2.5 py-0.5 md:py-1 text-[8px] md:text-[10px] lg:text-xs font-medium text-neutral-400 hover:border-emerald-500/30 hover:text-emerald-400"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
