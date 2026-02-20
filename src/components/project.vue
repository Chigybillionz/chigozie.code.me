<script setup>
const projects = [
  {
    name: 'Emerald Restaurants',
    description: 'A premium culinary ecosystem for Thai Emerald and group brands.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    img: '/backgroundimage.jpeg',
    color: 'emerald',
    liveLink: '/mee.pdf', //am replacing this with my live link to the project
  },
  {
    name: 'Private Exams UK',
    description: 'Exam registration & academic support made easy and affordable.',
    tags: ['React', 'OpenAI', 'Node.js'],
    img: '/backgroundimage.jpeg',
    color: 'blue',
    liveLink: '/ee.png', //am replacing this with my live link to the project
  },
  {
    name: 'Attainment Academy',
    description: 'A dynamic and enriching educational experience for modern students.',
    tags: ['Next.js', 'Postgres', 'Tailwind'],
    img: '/i.png',
    color: 'purple',
    liveLink: '/eee.png', //am replacing this with my live link to the project
  },
  {
    name: 'VidSage',
    description: 'Effortless AI-powered video renaming and organization for Google Drive.',
    tags: ['React', 'OpenAI', 'Python'],
    img: '/myphoto.jpg',
    color: 'orange',
    liveLink: '/i.png', //am replacing this with my live link to the project
  },
]
</script>

<template>
  <section
    class="relative z-10 w-full py-10 md:py-14 lg:py-20 px-3 md:px-6 lg:px-20 overflow-hidden rounded-lg md:rounded-[2rem] lg:rounded-[4rem]"
  >
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[500px] lg:w-[800px] h-[250px] md:h-[500px] lg:h-[800px] bg-emerald-500/[0.03] blur-[80px] md:blur-[120px] lg:blur-[150px] rounded-full pointer-events-none"
    ></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-8 md:mb-12 lg:mb-20 space-y-3 md:space-y-4 lg:space-y-6">
        <div
          class="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div
            class="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"
          ></div>
          <span
            class="text-[8px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400"
            >Featured Work</span
          >
        </div>

        <h2
          class="text-3xl md:text-5xl lg:text-9xl font-syne font-bold italic tracking-tighter text-white leading-tight md:leading-none"
        >
          Things I <span class="text-neutral-700 font-thin not-italic">Built</span>
        </h2>

        <p
          class="text-xs md:text-base lg:text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          A digital laboratory of <span class="text-white">highly-curated</span> experiences built
          with performance and aesthetics.
        </p>
      </div>

      <div class="space-y-3 md:space-y-4 lg:space-y-6">
        <div v-for="(project, index) in projects" :key="project.name" class="group relative">
          <div
            class="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-xl md:rounded-2xl lg:rounded-[4rem] blur-lg md:blur-xl"
          ></div>

          <div
            class="relative flex flex-col p-3 md:p-5 lg:p-8 rounded-lg md:rounded-2xl lg:rounded-[4rem] border border-white/5 bg-neutral-900/40 backdrop-blur-md transition-all duration-700 group-hover:border-emerald-500/30 group-hover:-translate-y-1"
          >
            <div
              class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 md:gap-4 lg:gap-6 w-full"
            >
              <div class="flex flex-col lg:flex-row lg:items-center gap-3 md:gap-4 lg:gap-6 flex-1">
                <span
                  class="hidden sm:block text-[10px] md:text-xs lg:text-xs font-black font-mono text-neutral-700 group-hover:text-emerald-500 transition-colors duration-500 shrink-0"
                >
                  // 0{{ index + 1 }}
                </span>

                <div
                  class="relative w-full lg:w-48 lg:h-40 aspect-video lg:aspect-auto shrink-0 overflow-hidden rounded-lg md:rounded-2xl lg:rounded-[3rem] border border-white/10 bg-neutral-800"
                >
                  <img
                    :src="project.img"
                    class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>

              <div class="space-y-2 md:space-y-2.5 lg:space-y-3 flex-1 text-center lg:text-left">
                <h3
                  class="text-lg md:text-2xl lg:text-3xl font-bold text-white tracking-tighter font-syne italic"
                >
                  {{ project.name }}
                </h3>
                <p
                  class="text-neutral-500 text-xs md:text-sm lg:text-base leading-relaxed line-clamp-2 group-hover:text-neutral-300 transition-colors"
                >
                  {{ project.description }}
                </p>

                <div
                  class="flex flex-wrap justify-center lg:justify-start gap-1.5 md:gap-2 pt-1.5 md:pt-2"
                >
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="text-[7px] md:text-[8px] lg:text-[9px] font-black uppercase tracking-widest px-2 md:px-3 lg:px-4 py-0.5 md:py-1 lg:py-1.5 rounded-full border border-white/5 bg-white/[0.03] text-neutral-500 group-hover:text-white group-hover:border-emerald-500/20 group-hover:bg-emerald-500/5 transition-all"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <div
              class="mt-4 lg:mt-0 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-0 lg:translate-x-8 group-hover:translate-x-0 self-center lg:self-auto"
            >
              <a
                :href="project.liveLink"
                target="_blank"
                class="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 flex items-center justify-center rounded-full bg-white text-black hover:bg-emerald-500 hover:text-white transition-all duration-500 hover:scale-110 shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="md:w-[18px] lg:w-[20px]"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-syne {
  font-family: 'Syne', sans-serif;
}
.group {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
