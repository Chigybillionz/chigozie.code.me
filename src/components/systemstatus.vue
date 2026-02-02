<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Myservice from './myservcise.vue'

const skills = [
  { name: 'Vue.js', level: 80 },
  { name: 'Tailwind', level: 85 },
  { name: 'React.js', level: 50 },
  { name: 'TypeScript', level: 55 },
  { name: 'Laravel', level: 65 },
]

const currentTime = ref('')
const amPm = ref('')

const updateTime = () => {
  const now = new Date()

  // This colon now works because of lang="ts"
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Africa/Lagos',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }

  const timeString = new Intl.DateTimeFormat('en-US', options).format(now)

  // split handles the "03:27:15 PM" format
  const [time, period] = timeString.split(' ')
  currentTime.value = time
  amPm.value = period
}

// Fixed the timer type to work with browser intervals
let timer: ReturnType<typeof setInterval>

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
<template>
  <section class="w-full py-20" id="command-center">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16 space-y-4">
        <div class="flex justify-center">
          <button
            class="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none"
          >
            <div
              class="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FACC15_0%,#404040_50%,#FACC15_100%)] opacity-40"
            ></div>
            <span
              class="inline-flex h-full w-full cursor-default items-center justify-center rounded-full bg-neutral-950 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-3xl"
            >
              <span class="mr-2 flex h-2 w-2">
                <span
                  class="absolute h-2 w-2 animate-ping rounded-full bg-green-400 opacity-75"
                ></span>
                <span class="relative h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              System Status: Online
            </span>
          </button>
        </div>

        <h2
          class="text-5xl md:text-7xl uppercase italic font-black text-white leading-tight font-syne"
        >
          Command <span class="text-yellow-500">Center</span>
        </h2>
        <p class="text-lg text-neutral-500 max-w-2xl mx-auto font-light">
          Real-time telemetry from my digital workspace and technical evolution.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
        <div
          class="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900/20 p-8 transition-all duration-500 hover:border-emerald-500/30"
        >
          <div class="relative z-10 flex flex-col h-full">
            <div class="flex justify-between items-center mb-10">
              <div class="space-y-1">
                <h3 class="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">
                  Live Activity
                </h3>
                <p class="text-2xl font-bold text-white font-syne">Code Activity</p>
              </div>
              <div class="px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <span class="text-emerald-400 text-sm font-mono font-bold">267 Contributions</span>
              </div>
            </div>

            <div class="flex-1 mb-8 overflow-hidden">
              <div class="grid grid-rows-7 grid-flow-col gap-2 h-32">
                <div
                  v-for="n in 140"
                  :key="n"
                  :class="[
                    'rounded-[3px] w-full h-full transition-all duration-500',
                    n % 7 === 0
                      ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]'
                      : n % 3 === 0
                        ? 'bg-emerald-700'
                        : n % 5 === 0
                          ? 'bg-emerald-900/40'
                          : 'bg-neutral-800',
                  ]"
                ></div>
              </div>
            </div>

            <div class="flex items-center justify-between mt-auto">
              <p class="text-neutral-500 text-xs">
                Analysis synced from <span class="text-white font-medium">GitHub</span>
              </p>
              <a
                href="https://github.com/Chigybillionz"
                target="_blank"
                class="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-emerald-500 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 7l10 10M17 7V17H7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          class="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900/20 p-8 transition-all duration-500 hover:border-yellow-500/30"
        >
          <div class="relative z-10">
            <div class="mb-10 space-y-1">
              <h3 class="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500">
                Expertise
              </h3>
              <p class="text-2xl font-bold text-white font-syne">Proficiency</p>
            </div>

            <div class="space-y-8">
              <div v-for="skill in skills" :key="skill.name" class="group/skill">
                <div class="flex justify-between items-end mb-3">
                  <span
                    class="text-xs font-black uppercase tracking-widest text-neutral-500 group-hover/skill:text-white transition-colors"
                    >{{ skill.name }}</span
                  >
                  <span class="text-[10px] font-mono text-neutral-600">{{ skill.level }}%</span>
                </div>
                <div class="relative h-[4px] w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    class="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="absolute -bottom-10 -right-10 h-32 w-32 bg-yellow-500/5 blur-[50px] group-hover:bg-yellow-500/10 transition-all"
          ></div>
        </div>

        <div
          class="group relative p-[1px] rounded-[3rem] overflow-hidden bg-neutral-900 md:col-span-2"
        >
          <div
            class="absolute inset-[-500%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FACC15_0%,#10B981_50%,#FACC15_100%)] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          ></div>

          <div
            class="relative h-full w-full bg-neutral-950 rounded-[calc(3rem-1px)] p-8 flex flex-col justify-between overflow-hidden"
          >
            <div
              class="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full"
            ></div>

            <div class="relative z-10 flex flex-col items-start">
              <div class="flex items-center gap-2 mb-6">
                <div class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span
                  class="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 italic"
                  >Operational Base</span
                >
              </div>

              <div class="flex items-baseline gap-4">
                <h3
                  class="text-6xl font-syne font-bold text-white tracking-tighter italic leading-none"
                >
                  {{ currentTime }}

                  <span class="text-xl text-neutral-600 not-italic ml-2 lowercase tracking-widest">
                    {{ amPm }}
                  </span>
                </h3>
              </div>

              <div class="mt-4 flex flex-col gap-1">
                <p class="text-lg text-white font-medium tracking-tight">Lagos, Nigeria</p>
                <div class="flex items-center gap-2">
                  <span
                    class="text-[10px] font-mono text-neutral-600 uppercase tracking-widest px-2 py-0.5 rounded-md bg-white/5 border border-white/5"
                  >
                    WAT (UTC+1)
                  </span>
                </div>
              </div>
            </div>

            <div
              class="relative z-10 flex items-end justify-between mt-12 group-hover:translate-x-1 transition-transform duration-500"
            >
              <div>
                <div class="font-syne font-bold text-white text-sm uppercase tracking-widest mb-1">
                  Local Time
                </div>
                <div class="text-neutral-500 text-[11px] max-w-[180px] leading-relaxed">
                  Syncing development cycles with West African Time.
                </div>
              </div>

              <div
                class="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-emerald-500 group-hover:border-emerald-500/50 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-clock"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Myservice />
      </div>
    </div>
  </section>
</template>
