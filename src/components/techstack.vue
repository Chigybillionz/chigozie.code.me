<script setup>
// Adding icons via a simple CDN or icon set makes it look 10x more professional
const technologies = [
  { name: 'JavaScript', color: 'from-yellow-400/20' },
  { name: 'TypeScript', color: 'from-blue-500/20' },
  { name: 'Vue.js', color: 'from-emerald-500/20' },
  { name: 'React', color: 'from-sky-400/20' },
  { name: 'PHP', color: 'from-indigo-400/20' },
  { name: 'Laravel', color: 'from-red-500/20' },
  { name: 'Tailwind', color: 'from-cyan-400/20' },
  { name: 'MYSQL', color: 'from-blue-500/60' },
]
</script>

<template>
  <div
    class="w-full group relative overflow-hidden rounded-lg md:rounded-2xl lg:rounded-[2.5rem] border border-white/10 bg-neutral-900/30 backdrop-blur-md p-4 md:p-6 lg:p-8 transition-all duration-500 hover:border-emerald-500/30"
  >
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <div
        class="absolute inset-[-100%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#10b981_360deg)]"
      ></div>
    </div>
    <div
      class="absolute inset-[1px] rounded-lg md:rounded-2xl lg:rounded-[2.4rem] bg-[#0a0a0a] z-0"
    ></div>

    <div class="relative z-10 flex flex-col h-full">
      <div class="mb-3 md:mb-5 lg:mb-6 flex items-center justify-between">
        <div class="space-y-0.5 md:space-y-1">
          <h2
            class="text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500"
          >
            Toolkit
          </h2>
          <p class="text-sm md:text-lg lg:text-2xl font-bold text-white font-syne italic">
            Tech Stack
          </p>
        </div>
        <div
          class="flex h-7 md:h-9 lg:h-10 w-7 md:w-9 lg:w-10 items-center justify-center rounded-md md:rounded-xl bg-white/5 border border-white/10 text-emerald-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="md:w-[16px] lg:w-[20px]"
          >
            <path d="m21 11-8-8-5 5" />
            <path
              d="M13.414 20.9a2 2 0 0 1-2.827 0L6.344 16.657a2 2 0 0 1 0-2.829l10.585-10.586a2 2 0 0 1 2.829 0l4.242 4.242a2 2 0 0 1 0 2.829z"
            />
            <path d="m2 14 2 2" />
            <path d="m7 8-5 5" />
            <path d="m19 19-2 2" />
          </svg>
        </div>
      </div>

      <div class="flex flex-wrap gap-1.5 md:gap-2 lg:gap-3">
        <div
          v-for="tech in technologies"
          :key="tech.name"
          class="group/tag relative overflow-hidden rounded-md md:rounded-lg lg:rounded-xl border border-white/5 bg-white/[0.03] px-2 md:px-2.5 lg:px-4 py-1 md:py-1.5 lg:py-2 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:-translate-y-1"
        >
          <div
            :class="[
              'absolute inset-0 bg-gradient-to-br opacity-0 group-hover/tag:opacity-100 transition-opacity',
              tech.color,
            ]"
          ></div>

          <span
            class="relative z-10 text-[11px] md:text-xs lg:text-sm font-medium text-neutral-400 group-hover/tag:text-white transition-colors"
          >
            {{ tech.name }}
          </span>
        </div>
      </div>

      <div
        class="mt-auto pt-3 md:pt-4 lg:pt-6 opacity-20 group-hover:opacity-50 transition-opacity"
      >
        <div
          class="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Only necessary if you aren't using a custom tailwind config for the spin */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
