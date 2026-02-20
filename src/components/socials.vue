<script setup>
import { ref } from 'vue'

const technologies = ref([
  { name: 'Vue.js', color: 'from-emerald-500/20 to-emerald-900/20' },
  { name: 'Tailwind', color: 'from-sky-500/20 to-sky-900/20' },
  { name: 'TypeScript', color: 'from-blue-500/20 to-blue-900/20' },
  { name: 'Node.js', color: 'from-green-500/20 to-green-900/20' },
])

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/mee.pdf'
  link.download = 'Okorie_Chigozie_CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div
    class="relative w-full overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-[3rem] border border-white/10 bg-neutral-900/20 px-4 md:px-8 lg:px-12 py-12 md:py-14 lg:py-16"
  >
    <div
      class="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"
    >
      <div
        class="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>
    </div>

    <div class="relative z-10 flex flex-col gap-12">
      <div class="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-end">
        <div class="text-center lg:text-left">
          <div
            class="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-500"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
              ></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for Hire
          </div>

          <h2
            class="font-syne text-4xl font-bold italic tracking-tight text-white lg:text-6xl lg:leading-[1.1]"
          >
            Let's build <span class="text-neutral-500 font-thin italic">something</span><br />
            extraordinary.
          </h2>
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-3 rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-3 backdrop-blur-xl"
        >
          <a
            href="https://github.com/chigybillionz"
            target="_blank"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all hover:border-white hover:bg-white/5 hover:text-white"
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
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/okorie-chigozie-jehoshaphat-4b255526b/"
            target="_blank"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all hover:border-blue-400 hover:bg-blue-400/5 hover:text-blue-400"
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
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          <a
            href="mailto:f.okoriechigozie99@gmail.com"
            class="group flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-neutral-400 transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-white"
          >
            <span>Get in touch</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="transition-transform group-hover:rotate-12"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-3 lg:justify-start">
        <div
          v-for="tech in technologies"
          :key="tech.name"
          class="group/tag relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.03] px-4 py-2 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
        >
          <div
            :class="[
              'absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover/tag:opacity-100',
              tech.color,
            ]"
          ></div>
          <span
            class="relative z-10 text-sm font-medium text-neutral-400 transition-colors group-hover/tag:text-white"
          >
            {{ tech.name }}
          </span>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row"
      >
        <p class="text-sm text-neutral-500">click the button to download my CV</p>
        <button
          class="h-12 min-w-[180px] rounded-full border border-white/10 bg-white/5 px-8 text-sm font-bold text-white transition-all hover:bg-white hover:text-black active:scale-95"
          @click="downloadCV"
        >
          Download CV
        </button>
      </div>
    </div>
  </div>
</template>
