<script setup>
import { ref } from 'vue'
import Expereince from './experience.vue'
import Techstack from './techstack.vue'
import Socials from './socials.vue'
import Projects from './project.vue'
import DeveloperExperience from './developerExperience.vue'
import Testimonials from './Testimonila.vue'
import Certifcations from './certifcations.vue'
import Internship from './internship.vue'
import LetsBuild from './letsBuild.vue'
import Footer from './footer.vue'
</script>

<template>
  <section
    class="relative min-h-screen overflow-hidden px-3 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-[#050505]"
  >
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.03)_0%,transparent_70%)] pointer-events-none"
    ></div>

    <div class="relative mx-auto max-w-7xl w-full">
      <header class="mb-16 w-full flex items-center justify-center animate-slide-up">
        <button
          class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none"
        >
          <div
            class="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FACC15_0%,#404040_50%,#FACC15_100%)] opacity-40 group-hover:opacity-100 transition-opacity"
          ></div>
          <span
            class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-neutral-900"
          >
            <span class="mr-3 flex h-2 w-2">
              <span
                class="absolute h-2 w-2 animate-ping rounded-full bg-yellow-400 opacity-75"
              ></span>
              <span class="relative h-2 w-2 rounded-full bg-yellow-500"></span>
            </span>
            <span class="tracking-widest uppercase text-xs font-bold">About Me</span>
          </span>
        </button>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-auto">
        <div
          class="lg:col-span-4 group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900/30 backdrop-blur-md p-8 md:p-12 transition-all duration-700 hover:border-white/20"
        >
          <div
            class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
          ></div>

          <div class="relative z-10 flex flex-col h-full justify-center">
            <div class="mb-8 flex items-center justify-between">
              <div class="space-y-2">
                <h2 class="text-xs font-black uppercase tracking-[0.3em] text-yellow-500">
                  The Narrative
                </h2>
                <p class="text-4xl font-bold text-white font-syne italic md:text-5xl">My Story</p>
              </div>
              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-2xl group-hover:rotate-12 transition-transform duration-500"
              >
                ✨
              </div>
            </div>

            <div class="space-y-6 max-w-2xl">
              <p class="text-xl md:text-2xl leading-relaxed text-neutral-300 font-light">
                My journey in tech began in
                <span class="text-white font-medium border-b border-yellow-500/50">2024</span>. As a
                <span
                  class="relative inline-block px-2 py-0.5 mx-1 rounded-md bg-white/5 border border-white/10 text-white font-normal italic"
                  >CS Student</span
                >, my curiosity was relentless.
              </p>
              <p class="text-xl md:text-2xl leading-relaxed text-neutral-300 font-light">
                Today, I bridge complex logic and
                <span class="text-white font-semibold">human-centric design</span> to build
                <span class="text-yellow-400 italic">extraordinary</span> experiences.
              </p>
            </div>
          </div>
        </div>

        <div
          class="lg:col-span-2 relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900/20 p-8 transition-all duration-700 hover:border-white/20"
        >
          <span
            class="absolute -right-4 -top-8 select-none text-[12rem] font-serif leading-none text-white/[0.03] group-hover:text-yellow-400/[0.05] transition-colors"
            >”</span
          >
          <div class="relative z-10 flex h-full flex-col justify-between">
            <div
              class="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-yellow-400 group-hover:-rotate-12 transition-transform"
            >
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                ></path>
              </svg>
            </div>
            <div class="space-y-6">
              <p class="font-syne text-2xl font-medium italic leading-tight text-white">
                "Design is not just what it looks like. Design is how it works."
              </p>
              <div class="flex items-center gap-3">
                <div class="h-[1px] w-8 bg-yellow-500/50"></div>
                <span class="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500"
                  >Steve Jobs</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6"></div>

        <div class="lg:col-span-3">
          <Expereince />
        </div>

        <div class="lg:col-span-3 flex flex-col gap-6">
          <Techstack />
          <Socials />
        </div>

        <div class="lg:col-span-6">
          <Projects />
        </div>

        <div class="lg:col-span-6"><DeveloperExperience /></div>
        <div class="lg:col-span-6"><Testimonials /></div>
        <div class="lg:col-span-6 flex flex-col gap-6">
          <Certifcations />
          <Internship />
        </div>

        <div class="lg:col-span-6 mt-12">
          <LetsBuild />
          <Footer />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slide-up {
  animation: slide-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
</style>
