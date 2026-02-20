<script>
// 1. Ensure the file path matches exactly (check if it is 'whyChooseMe.vue' or 'WhyChooseMe.vue')
import WhyChooseMe from './whyChooseMe.vue'

export default {
  name: 'ModernServices',
  // 2. You MUST register the component here
  components: {
    WhyChooseMe,
  },
  data() {
    return {
      services: [
        {
          id: 'web-dev',
          title: 'Web',
          subtitle: 'Development',
          description: 'I provide comprehensive web development services...',
          accent: 'emerald',
          expanded: false,
          iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
        },
      ],
    }
  },
  methods: {
    toggleService(id) {
      const service = this.services.find((s) => s.id === id)
      if (service) {
        service.expanded = !service.expanded
      }
    },
    getServiceDescription(service) {
      const limit = 75
      if (service.expanded) {
        return service.description
      }
      return service.description.slice(0, limit) + '...'
    },
  },
}
</script>
<template>
  <section
    id="service"
    class="min-h-screen w-full py-8 md:py-12 lg:py-20 px-0 sm:px-6 font-sans antialiased"
  >
    <div
      class="max-w-7xl mx-auto rounded-2 sm:rounded-[2rem] md:rounded-[4rem] lg:rounded-[6rem] py-12 md:py-16 lg:py-24 px-4 sm:px-8 md:px-12 border-y sm:border border-white/5 relative overflow-hidden"
    >
      <div class="space-y-4 relative z-10">
        <div
          v-for="service in services"
          :key="service.id"
          class="group relative bg-neutral-900/30 sm:bg-neutral-900/20 rounded-[2rem] border border-white/5 hover:border-emerald-500/30 transition-all duration-700 overflow-hidden"
        >
          <div class="relative z-10 p-6 sm:p-10 md:p-12">
            <div class="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-16">
              <div class="lg:w-1/3">
                <div class="flex items-center gap-3 mb-3">
                  <div
                    :class="
                      service.accent === 'emerald'
                        ? 'bg-emerald-500 shadow-[0_0_8px_#10B981]'
                        : 'bg-sky-500 shadow-[0_0_8px_#0EA5E9]'
                    "
                    class="w-1.5 h-1.5 rounded-full animate-pulse"
                  ></div>
                  <span class="text-[9px] font-mono uppercase tracking-[0.3em] text-neutral-500">{{
                    service.id
                  }}</span>
                </div>
                <h3
                  class="text-2xl sm:text-4xl md:text-5xl font-syne font-bold text-white italic leading-tight"
                >
                  {{ service.title }}
                  <span
                    class="block text-neutral-600 group-hover:text-neutral-300 transition-colors duration-500"
                  >
                    {{ service.subtitle }}
                  </span>
                </h3>
              </div>

              <div class="lg:w-2/3 flex flex-col justify-between">
                <div class="relative">
                  <p
                    class="text-neutral-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-light"
                  >
                    {{ getServiceDescription(service) }}
                  </p>
                </div>

                <div class="mt-8 flex flex-wrap items-center gap-4 sm:gap-8">
                  <button
                    @click.prevent="toggleService(service.id)"
                    class="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 hover:text-white transition-all flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full sm:bg-transparent sm:p-0"
                  >
                    <span>{{ service.expanded ? 'Collapse' : 'Detailed Intel' }}</span>
                    <svg
                      :class="{ 'rotate-45': service.expanded }"
                      class="w-3 h-3 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>

                  <div class="hidden sm:block h-px flex-1 bg-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <WhyChooseMe />
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap');

.font-syne {
  font-family: 'Syne', sans-serif;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
