<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue'
import { ExternalLink, Github } from 'lucide-vue-next'
import ShowcaseBadge from './ShowcaseBadge.vue'

const categories = ['All', 'Fullstack', 'Frontend', 'Backend'] as const
type CategoryType = (typeof categories)[number]
const activeCategory = ref<CategoryType>('All')

const projects = [
  {
    name: 'MarketPulse AI',
    category: ['Fullstack'],
    description:
      'Voice-first bookkeeping and AI-powered intelligence engine tracking sales, expenses, and real-time profits for modern merchants.',
    tags: ['React', 'Node.js', 'Express', 'Supabase', 'Voice AI', 'Tailwind'],
    img: '/marketpulse.png',
    liveLink: 'https://marketpulse-kohl.vercel.app/',
    githubLink: 'https://github.com/Chigybillionz/marketpulse.git',
    featured: true,
  },
  {
    name: 'Launchpad Platform',
    category: ['Fullstack'],
    description:
      'AI-powered opportunity discovery and career readiness hub engineered with React, Node.js, and Neon database connecting high-potential talent with curated roles.',
    tags: ['React', 'Node.js', 'Neon DB', 'TypeScript', 'Tailwind'],
    img: '/launchpad.png',
    liveLink: 'https://launchpad-iota-seven.vercel.app/',
    githubLink: 'https://github.com/Chigybillionz/launchpad.git',
    featured: true,
  },
  {
    name: 'InfoAssure Attendance',
    category: ['Fullstack'],
    description:
      'Enterprise attendance tracking and workforce management platform featuring real-time analytics, automated shift logs, and role-based administration.',
    tags: ['Vue.js', 'Laravel', 'REST API', 'MySQL'],
    img: '/attendance.png',
    liveLink: 'https://attendance-sytem.vercel.app/login?redirect=/dashboard',
    githubLink: 'https://github.com/Chigybillionz/attendance_sytem.git',
    featured: false,
  },
  {
    name: 'Travel Genesis',
    category: ['Fullstack'],
    description:
      'Fullstack travel booking platform engineered with Node.js, Express, and PostgreSQL database for seamless flight discovery and reservation management.',
    tags: ['HTML5', 'CSS3', 'Node.js', 'Express', 'PostgreSQL'],
    img: '/travel.png',
    liveLink: 'https://travelgenisis.vercel.app/',
    githubLink: 'https://github.com/chigybillionz',
    featured: false,
  },
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter((p) => p.category.includes(activeCategory.value))
})

const getCategoryCount = (cat: CategoryType) => {
  if (cat === 'All') return projects.length
  return projects.filter((p) => p.category.includes(cat)).length
}

const setCategory = (cat: CategoryType) => {
  activeCategory.value = cat
  cardRefs.value = []
  cardStyles.value = []
  nextTick(() => {
    updateStackingEffects()
  })
}

const cardRefs = ref<(HTMLElement | null)[]>([])
const cardStyles = ref<{ scale: number; brightness: number; opacity: number }[]>([])

const setCardRef = (el: any, index: number) => {
  if (el) cardRefs.value[index] = el
}

let ticking = false
const updateStackingEffects = () => {
  const currentList = filteredProjects.value
  if (cardRefs.value.length === 0 || currentList.length === 0) return

  const total = currentList.length
  const topStickyBase = window.innerWidth >= 768 ? 110 : 84
  const stepOffset = 16
  const distanceWindow = 400

  const progressList = currentList.map((_, i) => {
    if (i === 0) return 1
    const card = cardRefs.value[i]
    if (!card) return 0
    const rect = card.getBoundingClientRect()
    const targetTop = topStickyBase + i * stepOffset
    const currentDistance = rect.top - targetTop
    const rawProgress = 1 - currentDistance / distanceWindow
    return Math.max(0, Math.min(1, rawProgress))
  })

  currentList.forEach((_, i) => {
    if (i === total - 1) {
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
      class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 blur-[130px] rounded-full pointer-events-none"
    ></div>

    <!-- Section Header -->
    <div class="space-y-6 mb-8 sm:mb-10">
      <ShowcaseBadge />
      <div class="space-y-3">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 dark:text-white tracking-tight transition-colors">
          Thoughtfully crafted for quality.
        </h2>
        <p class="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-2xl transition-colors">
          A selection of digital products, fullstack platforms, and experiments engineered for performance, precision, and scale.
        </p>
      </div>
    </div>

    <!-- Category Filter Navigation Tabs -->
    <div class="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-10 sm:mb-12 p-1.5 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-md w-fit shadow-sm transition-colors">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="setCategory(cat)"
        class="relative px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer"
        :class="activeCategory === cat 
          ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30' 
          : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'"
      >
        <span>{{ cat }}</span>
        <span 
          class="text-[10px] sm:text-[11px] font-mono px-1.5 py-0.5 rounded-full"
          :class="activeCategory === cat ? 'bg-white/20 text-white' : 'bg-black/5 dark:bg-white/10 text-neutral-500 dark:text-neutral-400'"
        >
          {{ getCategoryCount(cat) }}
        </span>
      </button>
    </div>

    <!-- Empty State when filtered count is 0 -->
    <div
      v-if="filteredProjects.length === 0"
      class="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/40 backdrop-blur-md p-10 sm:p-14 text-center space-y-4 max-w-2xl mx-auto shadow-sm transition-colors"
    >
      <div class="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 mx-auto flex items-center justify-center text-2xl">
        ⚡
      </div>
      <div class="space-y-2">
        <h3 class="text-xl font-bold text-neutral-900 dark:text-white">
          Dedicated {{ activeCategory }} Projects Coming Soon
        </h3>
        <p class="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
          Currently, my featured products are complete fullstack architectures spanning modern frontend clients, reactive interfaces, and scalable backend services.
        </p>
      </div>
      <button
        @click="setCategory('Fullstack')"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-purple-600/30 cursor-pointer"
      >
        <span>View Fullstack Projects (4)</span>
      </button>
    </div>

    <!-- Single-Column Sticky Stacking Grid -->
    <div v-else class="flex flex-col gap-12 lg:gap-16 pb-8 sm:pb-0 mx-auto max-w-3xl">
      <div
        v-for="(project, index) in filteredProjects"
        :key="project.name"
        :ref="(el) => setCardRef(el, index)"
        :style="getCardStyle(index)"
        :class="[
          'group relative flex flex-col md:flex-row justify-between gap-6 md:gap-8 lg:gap-12 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#0e0e12] sm:dark:bg-neutral-900/90 backdrop-blur-md p-5 sm:p-6 md:p-8 lg:p-10 transition-all duration-300 hover:border-purple-300 dark:hover:border-neutral-700 hover:bg-white dark:hover:bg-neutral-900/95 hover:shadow-2xl hover:shadow-purple-900/10 dark:hover:shadow-purple-950/20',
          'sticky shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_-10px_30px_rgba(0,0,0,0.8),0_20px_25px_-5px_rgba(0,0,0,0.9)] origin-top'
        ]"
      >
        <!-- Pixel corner accent dot -->
        <div class="absolute top-3 right-3 text-neutral-300 dark:text-neutral-700 text-xs font-mono select-none">+</div>
        <div class="absolute bottom-3 left-3 text-neutral-300 dark:text-neutral-700 text-xs font-mono select-none">+</div>

        <!-- Project Preview Image (Top on mobile, Left on desktop) -->
        <div
          class="relative w-full md:w-[45%] lg:w-1/2 shrink-0 aspect-[16/10] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-neutral-950/80 group-hover:border-purple-300 dark:group-hover:border-white/20 transition-colors"
        >
          <img
            :src="project.img"
            :alt="project.name"
            class="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-neutral-950/40 dark:from-neutral-950/60 via-transparent to-transparent opacity-60"
          ></div>
        </div>

        <!-- Project Info & Actions (Bottom on mobile, Right on desktop) -->
        <div class="flex flex-col justify-center flex-grow space-y-6 sm:space-y-8 md:py-4">
          <!-- Project Metadata -->
          <div class="space-y-3 sm:space-y-4">
            <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
              {{ project.name }}
            </h3>
            <p class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg transition-colors">
              {{ project.description }}
            </p>
          </div>

          <!-- Tags & Actions -->
          <div class="space-y-6">
            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1.5 rounded-full text-xs font-medium border border-black/5 dark:border-white/5 bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 shadow-sm"
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
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-md shadow-purple-900/30"
              >
                <span>Live Preview</span>
                <ExternalLink class="w-4 h-4" />
              </a>

              <a
                :href="project.githubLink"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white text-xs sm:text-sm font-medium transition-all"
              >
                <Github class="w-4 h-4" />
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
