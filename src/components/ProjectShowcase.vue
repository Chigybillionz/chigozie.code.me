<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
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
    githubLink: 'https://github.com/Chigybillionz/marketpulse.git',
    featured: true,
  },
  {
    name: 'Launchpad Platform',
    description:
      'AI-powered opportunity discovery and career readiness hub connecting high-potential talent with curated roles, grants, and hackathons.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    img: '/launchpad.png',
    liveLink: 'https://launchpad-iota-seven.vercel.app/',
    githubLink: 'https://github.com/Chigybillionz/launchpad.git',
    featured: true,
  },
  {
    name: 'InfoAssure Attendance',
    description:
      'Enterprise attendance tracking and workforce management platform featuring real-time analytics, automated shift logs, and role-based administration.',
    tags: ['Vue.js', 'Laravel', 'REST API', 'MySQL'],
    img: '/attendance.png',
    liveLink: 'https://attendance-sytem.vercel.app/login?redirect=/dashboard',
    githubLink: 'https://github.com/Chigybillionz/attendance_sytem.git',
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

const cardRefs = ref<(HTMLElement | null)[]>([])
const cardStyles = ref<{ scale: number; brightness: number; opacity: number }[]>([])

const setCardRef = (el: any, index: number) => {
  if (el) cardRefs.value[index] = el
}

let ticking = false
const updateStackingEffects = () => {
  if (cardRefs.value.length === 0) return

  const total = projects.length
  // Desktop navbar is a bit taller/further down, so we give more space
  const topStickyBase = window.innerWidth >= 768 ? 110 : 84
  const stepOffset = 16 // px offset per stacked card
  const distanceWindow = 400 // px window over which docking animation interpolates

  // Calculate arrival progress (0 to 1) for each card docking into sticky position
  const progressList = projects.map((_, i) => {
    if (i === 0) return 1
    const card = cardRefs.value[i]
    if (!card) return 0
    const rect = card.getBoundingClientRect()
    const targetTop = topStickyBase + i * stepOffset
    const currentDistance = rect.top - targetTop
    const rawProgress = 1 - currentDistance / distanceWindow
    return Math.max(0, Math.min(1, rawProgress))
  })

  // For each card, calculate cumulative depth from later cards docking over it
  projects.forEach((_, i) => {
    if (i === total - 1) {
      // Topmost/last card stays unscaled & fully lit
      cardStyles.value[i] = { scale: 1, brightness: 1, opacity: 1 }
      return
    }

    let totalCoverProgress = 0
    for (let j = i + 1; j < total; j++) {
      totalCoverProgress += progressList[j] ?? 0
    }

    const scale = Math.max(0.88, 1 - totalCoverProgress * 0.045)
    const brightness = Math.max(0.48, 1 - totalCoverProgress * 0.22)
    const opacity = Math.max(0.72, 1 - totalCoverProgress * 0.12)

    cardStyles.value[i] = { scale, brightness, opacity }
  })
}

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateStackingEffects()
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('resize', updateStackingEffects, { passive: true })
  window.addEventListener('scroll', handleScroll, { passive: true })
  setTimeout(updateStackingEffects, 100)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateStackingEffects)
  window.removeEventListener('scroll', handleScroll)
})

const getCardStyle = (index: number) => {
  const style = cardStyles.value[index]
  const topStickyBase = window.innerWidth >= 768 ? 110 : 84
  const stepOffset = 16

  return {
    top: `${topStickyBase + index * stepOffset}px`,
    zIndex: 10 + index,
    transform: style ? `scale(${style.scale.toFixed(3)})` : undefined,
    filter: style ? `brightness(${style.brightness.toFixed(3)})` : undefined,
    opacity: style ? style.opacity.toFixed(3) : 1,
  }
}
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

    <!-- Single-Column Sticky Stacking Grid -->
    <div class="flex flex-col gap-12 lg:gap-16 pb-8 sm:pb-0 mx-auto max-w-3xl">
      <div
        v-for="(project, index) in projects"
        :key="project.name"
        :ref="(el) => setCardRef(el, index)"
        :style="getCardStyle(index)"
        :class="[
          'group relative flex flex-col justify-between rounded-3xl border border-neutral-800 bg-[#0e0e12] sm:bg-neutral-900/90 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/95 hover:shadow-2xl hover:shadow-purple-950/20',
          'sticky shadow-[0_-10px_30px_rgba(0,0,0,0.8),0_20px_25px_-5px_rgba(0,0,0,0.9)] origin-top'
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
