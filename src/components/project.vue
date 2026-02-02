<script setup>
const projects = [
  {
    name: 'Emerald Restaurants',
    description: 'A premium culinary ecosystem for Thai Emerald and group brands.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    img: '/backgroundimage.jpeg',
    color: 'emerald',
  },
  {
    name: 'Private Exams UK',
    description: 'Exam registration & academic support made easy and affordable.',
    tags: ['React', 'OpenAI', 'Node.js'],
    img: '/backgroundimage.jpeg',
    color: 'blue',
  },
  {
    name: 'Attainment Academy',
    description: 'A dynamic and enriching educational experience for modern students.',
    tags: ['Next.js', 'Postgres', 'Tailwind'],
    img: '/i.png',
    color: 'purple',
  },
  {
    name: 'VidSage',
    description: 'Effortless AI-powered video renaming and organization for Google Drive.',
    tags: ['React', 'OpenAI', 'Python'],
    img: '/myphoto.jpg',
    color: 'orange',
  },
]
</script>

<template>
  <section
    class="relative z-10 w-full bg-neutral-950 py-20 px-10 md:px-20 overflow-hidden rounded-[calc(4rem-2px)]"
  >
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/[0.03] blur-[150px] rounded-full pointer-events-none"
    ></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-20 space-y-6">
        <div
          class="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div
            class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"
          ></div>
          <span class="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400"
            >Featured Work</span
          >
        </div>

        <h2 class="text-6xl md:text-9xl font-syne font-bold italic tracking-tighter text-white">
          Things I <span class="text-neutral-700 font-thin not-italic">Love</span>
        </h2>

        <p class="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          A digital laboratory of <span class="text-white">highly-curated</span> experiences built
          with performance and aesthetics.
        </p>
      </div>

      <div class="space-y-6">
        <div v-for="(project, index) in projects" :key="project.name" class="group relative">
          <div
            class="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[4rem] blur-xl"
          ></div>

          <div
            class="relative flex flex-col md:flex-row items-center justify-between p-4 md:p-8 rounded-[4rem] border border-white/5 bg-neutral-900/40 backdrop-blur-md transition-all duration-700 group-hover:border-emerald-500/30 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-emerald-500/10"
          >
            <div class="flex flex-col md:flex-row items-center gap-8 w-full">
              <span
                class="hidden md:block text-xs font-black font-mono text-neutral-700 group-hover:text-emerald-500 transition-colors duration-500"
              >
                // 0{{ index + 1 }}
              </span>

              <div
                class="relative w-28 h-28 md:w-36 md:h-36 shrink-0 overflow-hidden rounded-[3rem] border border-white/10 bg-neutral-800"
              >
                <img
                  :src="project.img"
                  class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-emerald-950/20 group-hover:opacity-0 transition-opacity"
                ></div>
              </div>

              <div class="space-y-4 flex-1 text-center md:text-left px-4">
                <h3
                  class="text-3xl md:text-4xl font-bold text-white tracking-tighter font-syne italic"
                >
                  {{ project.name }}
                </h3>
                <p
                  class="text-neutral-500 text-sm md:text-base max-w-md leading-relaxed line-clamp-2 group-hover:text-neutral-300 transition-colors"
                >
                  {{ project.description }}
                </p>

                <div class="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.03] text-neutral-500 group-hover:text-white group-hover:border-emerald-500/20 group-hover:bg-emerald-500/5 transition-all"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <div
              class="mt-8 md:mt-0 px-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-10 group-hover:translate-x-0"
            >
              <a
                href="#"
                class="h-16 w-16 flex items-center justify-center rounded-full bg-white text-black hover:bg-emerald-500 hover:text-white transition-all duration-500 hover:scale-110 shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </div>
          </div>

          <div
            class="absolute top-10 right-10 h-1.5 w-1.5 rounded-full bg-white/5 group-hover:bg-emerald-500 transition-colors duration-700"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom Cubic Bezier for smooth project reveal */
.group {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
