<script setup lang="ts">
import { ExternalLink, Github } from 'lucide-vue-next'
import ShowcaseBadge from './ShowcaseBadge.vue'

const projects = [
  {
    name: 'MarketPulse AI',
    description:
      'Voice-first bookkeeping and AI-powered intelligence engine tracking sales, expenses, and real-time profits for modern merchants.',
    tags: ['React', 'Voice AI', 'Tailwind CSS', 'Web Audio API'],
    img: '/marketpulse.png',
    liveLink: 'https://marketpulse-kohl.vercel.app/',
    githubLink: 'https://github.com/chigybillionz',
    featured: true,
  },
  {
    name: 'Launchpad Platform',
    description:
      'AI-powered opportunity discovery and career readiness hub connecting high-potential talent with curated roles, grants, and hackathons.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    img: '/launchpad.png',
    liveLink: 'https://launchpad-iota-seven.vercel.app/',
    githubLink: 'https://github.com/chigybillionz',
    featured: true,
  },
  {
    name: 'InfoAssure Attendance',
    description:
      'Enterprise attendance tracking and workforce management platform featuring real-time analytics, automated shift logs, and role-based administration.',
    tags: ['Vue.js', 'Laravel', 'REST API', 'MySQL'],
    img: '/attendance.png',
    liveLink: 'https://attendance-sytem.vercel.app/login?redirect=/dashboard',
    githubLink: 'https://github.com/chigybillionz',
    featured: false,
  },
  {
    name: 'Attainment Academy',
    description:
      'Dynamic and enriching educational ecosystem delivering interactive digital curriculum for modern students and educators.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
    img: '/eee.png',
    liveLink: 'https://github.com/chigybillionz',
    githubLink: 'https://github.com/chigybillionz',
    featured: false,
  },
]
</script>

<template>
  <section id="projects" class="relative w-full max-w-5xl mx-auto py-16 sm:py-24 px-4 sm:px-6">
    <!-- Ambient Section Glow -->
    <div
      class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none"
    ></div>

    <!-- Section Header -->
    <div class="space-y-6 mb-12 sm:mb-16">
      <ShowcaseBadge />
      <div class="space-y-3">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Thoughtfully crafted for quality.
        </h2>
        <p class="text-neutral-400 text-base sm:text-lg max-w-2xl">
          A selection of digital products, fullstack platforms, and experiments engineered for performance, precision, and scale.
        </p>
      </div>
    </div>

    <!-- 2-Column Staggered Masonry Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      <div
        v-for="(project, index) in projects"
        :key="project.name"
        :class="[
          'group relative flex flex-col justify-between rounded-3xl border border-neutral-800/90 bg-neutral-900/40 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/70 hover:shadow-2xl hover:shadow-purple-950/20',
          index % 2 === 1 ? 'md:translate-y-10' : ''
        ]"
      >
        <!-- Pixel corner accent dot -->
        <div class="absolute top-3 right-3 text-neutral-700 text-xs font-mono select-none">+</div>
        <div class="absolute bottom-3 left-3 text-neutral-700 text-xs font-mono select-none">+</div>

        <!-- Project Preview Image -->
        <div class="space-y-5">
          <div
            class="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/80 group-hover:border-white/20 transition-colors"
          >
            <img
              :src="project.img"
              :alt="project.name"
              class="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-60"
            ></div>
          </div>

          <!-- Project Metadata -->
          <div class="space-y-3">
            <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
              {{ project.name }}
            </h3>
            <p class="text-sm sm:text-base text-neutral-400 leading-relaxed">
              {{ project.description }}
            </p>
          </div>
        </div>

        <!-- Tags & Actions Footer -->
        <div class="pt-6 space-y-4">
          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 sm:gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-2.5 py-1 rounded-full text-xs font-medium border border-white/5 bg-white/5 text-neutral-300"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-3 pt-2">
            <a
              :href="project.liveLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-purple-900/30"
            >
              <span>Live Preview</span>
              <ExternalLink class="w-3.5 h-3.5" />
            </a>

            <a
              :href="project.githubLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs sm:text-sm font-medium transition-all"
            >
              <Github class="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
