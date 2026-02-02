<script setup>
import { ref } from 'vue'
</script>

<template>
  <div
    class="relative w-full overflow-hidden rounded-[3rem] border border-white/10 bg-neutral-900/20 px-8 py-16 md:px-12"
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
            class="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-500"
          >
            Available for Hire
          </div>
          <h2 class="font-syne text-4xl font-bold italic tracking-tight text-white md:text-6xl">
            Let's build <span class="text-neutral-500 font-thin italic">something</span><br />
            extraordinary.
          </h2>
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-white/5 bg-white/[0.03] p-2 backdrop-blur-xl"
        >
          <a
            href="https://github.com/chigybillionz"
            target="_blank"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all hover:border-white hover:text-white hover:bg-white/5"
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
            href="#"
            target="_blank"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/5"
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
            class="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-bold text-neutral-400 transition-all hover:border-red-400 hover:text-red-400 hover:bg-red-400/5"
          >
            <span class="hidden sm:inline">Get in touch</span>
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
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-center gap-6 pt-8 border-t border-white/5 sm:flex-row"
      >
        <a href="mailto:f.nafiziqbal@gmail.com" class="group/main relative h-14 min-w-[220px]">
          <div
            class="absolute inset-0 rounded-full bg-emerald-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity"
          ></div>
          <div
            class="relative flex h-full items-center justify-center gap-3 rounded-full bg-emerald-500 px-8 text-sm font-black uppercase tracking-widest text-black transition-transform active:scale-95 group-hover:-translate-y-1"
          >
            <span>Start a Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
          </div>
        </a>

        <button
          class="h-14 min-w-[200px] rounded-full border border-white/10 bg-transparent px-8 text-sm font-bold text-white transition-all hover:bg-white hover:text-black"
        >
          Download CV
        </button>
      </div>
    </div>
  </div>
</template>
