<script setup>
import { ref } from 'vue'
import Expereince from './experience.vue'
import Techstack from './techstack.vue'
import Socials from './socials.vue'
import Projects from './project.vue'
import DeveloperExperience from './developerExperience.vue'
import Systemstatus from './systemstatus.vue'
import Testimonials from './Testimonila.vue'
import Certifcations from './certifcations.vue'
import Internship from './internship.vue'
import LetsBuild from './letsBuild.vue'
import Footer from './footer.vue'
</script>

<template>
  <section class="relative min-h-fit overflow-hidden px-2 py-16 md:px-8 lg:px-16">
    <div class="relative mx-auto md:container w-full">
      <!-- Header -->
      <header class="mb-12 w-full flex items-center justify-center opacity-0 animate-slide-up">
        <div>
          <button
            class="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none"
          >
            <div
              class="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FACC15_0%,#404040_50%,#FACC15_100%)] opacity-40 group-hover:opacity-100 transition-opacity"
            ></div>

            <span
              class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-neutral-900"
            >
              <span class="mr-2 flex h-2 w-2 items-center justify-center">
                <span
                  class="absolute h-1.5 w-1.5 animate-ping rounded-full bg-yellow-400 opacity-75"
                ></span>
                <span class="relative h-1 w-1 rounded-full bg-yellow-500"></span>
              </span>

              <span class="tracking-wide">About Me</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-2 h-0 w-0 opacity-0 transition-all duration-300 group-hover:h-4 group-hover:w-4 group-hover:opacity-100"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </span>

            <div
              class="absolute inset-0 rounded-full bg-yellow-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
          </button>
        </div>
      </header>

      <!-- Grid Container -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]"
        style="opacity: 1"
      >
        <!-- Profile Card (Large) -->
        <div
          class="md:col-span-2 lg:row-span-2 hidden lg:block"
          style="opacity: 1; transform: none"
        >
          <div
            class="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-transparent p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <div class="flex h-full flex-col">
              <div class="relative mb-6 h-48 w-48 overflow-hidden rounded-2xl mx-auto lg:mx-0">
                <img
                  alt="Nafiz Iqbal"
                  loading="lazy"
                  decoding="async"
                  class="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-full"
                  src=""
                />
                <div class="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                <div
                  class="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 backdrop-blur-md border border-white/10"
                >
                  <span class="relative flex h-2 w-2">
                    <span
                      class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"
                    ></span>
                    <span class="relative inline-flex h-2 w-2 rounded-full bg-gray-400"></span>
                  </span>
                  <span class="text-xs font-medium text-foreground">Available</span>
                </div>
              </div>
              <div class="flex-1">
                <h1
                  class="mb-2 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance"
                >
                  Nafiz Iqbal
                </h1>
                <p class="mb-4 text-lg text-primary font-medium">Full Stack Developer</p>
                <p class="mb-4 text-muted-foreground leading-relaxed">
                  I build modern, responsive web applications with cutting-edge technologies that
                  deliver exceptional user experiences.
                </p>
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-map-pin h-4 w-4"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
              <div
                class="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20"
              ></div>
            </div>
          </div>
        </div>

        <!-- My Story Card -->
        <div
          class="lg:col-span-2 group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900/30 backdrop-blur-md p-8 transition-all duration-700 hover:border-white/20"
        >
          <div
            class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
          ></div>

          <div class="relative z-10 flex flex-col h-full">
            <div class="mb-8 flex items-center justify-between">
              <div class="space-y-1">
                <h2 class="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500">
                  About Me
                </h2>
                <p class="text-3xl font-bold text-white font-syne italic">My Story</p>
              </div>
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-xl group-hover:scale-110 transition-transform duration-500"
              >
                ✨
              </div>
            </div>

            <div class="space-y-6 max-w-2xl">
              <p class="text-lg md:text-xl leading-relaxed text-neutral-300 font-light">
                My journey in tech began in
                <span class="text-white font-medium border-b border-yellow-500/50">2021</span>. As a
                <span
                  class="relative inline-block px-2 py-0.5 mx-1 rounded-md bg-white/5 border border-white/10 text-white font-normal italic"
                  >Non-CS Student</span
                >, the path wasn't always clear, but my curiosity was relentless.
              </p>

              <p class="text-lg md:text-xl leading-relaxed text-neutral-300 font-light">
                Today, I bridge the gap between complex logic and
                <span class="text-white font-semibold">human-centric design</span>, building digital
                experiences that aren't just functional, but
                <span class="text-yellow-400 italic">extraordinary</span>.
              </p>
            </div>

            <div
              class="mt-12 flex flex-wrap gap-3 opacity-40 group-hover:opacity-100 transition-opacity duration-700"
            >
              <span class="text-[10px] font-bold uppercase tracking-widest text-neutral-500"
                >• Self Taught</span
              >
              <span class="text-[10px] font-bold uppercase tracking-widest text-neutral-500"
                >• Problem Solver</span
              >
              <span class="text-[10px] font-bold uppercase tracking-widest text-neutral-500"
                >• Design Enthusiast</span
              >
            </div>
          </div>

          <div
            class="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-yellow-500/5 blur-[80px] group-hover:bg-yellow-500/10 transition-all duration-700"
          ></div>
        </div>

        <!-- Quote Card -->
        <div
          class="relative group h-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900/20 p-8 transition-all duration-700 hover:border-white/20"
        >
          <span
            class="absolute -right-4 -top-8 select-none text-[12rem] font-serif leading-none text-white/[0.03] transition-colors group-hover:text-yellow-400/[0.05]"
          >
            ”
          </span>

          <div
            class="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-yellow-500/10 blur-[60px] transition-all duration-700 group-hover:bg-yellow-500/20 group-hover:scale-150"
          ></div>

          <div class="relative z-10 flex h-full flex-col justify-between">
            <div
              class="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-yellow-400 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110"
            >
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                ></path>
              </svg>
            </div>

            <div class="space-y-6">
              <p
                class="font-syne text-xl font-medium italic leading-tight tracking-tight text-white md:text-2xl"
              >
                "Design is not just what it
                <span
                  class="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent font-bold"
                  >looks like</span
                >. Design is how it
                <span
                  class="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent font-bold"
                  >works</span
                >."
              </p>

              <div class="flex items-center gap-3">
                <div class="h-[1px] w-8 bg-yellow-500/50"></div>
                <span
                  class="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 group-hover:text-yellow-400 transition-colors"
                >
                  Steve Jobs
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- By the Numbers Card -->
        <div
          class="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/40 p-1 transition-all duration-500 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/5"
        >
          <div
            class="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-yellow-500/10 blur-[50px] transition-all duration-700 group-hover:bg-yellow-500/20"
          ></div>

          <div
            class="relative z-10 flex h-full flex-col justify-between rounded-[1.8rem] bg-neutral-950/50 p-6 backdrop-blur-sm"
          >
            <div class="mb-8 flex items-center justify-between">
              <h2 class="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500/80">
                Analytics
              </h2>
              <div class="h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse"></div>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div class="group/item relative space-y-1">
                <div class="flex items-baseline gap-1">
                  <span
                    class="text-4xl font-bold tracking-tighter text-white font-mono leading-none"
                    >02</span
                  >
                  <span class="text-lg font-bold text-yellow-500">+</span>
                </div>
                <p
                  class="text-[10px] font-bold uppercase tracking-wider text-neutral-500 group-hover/item:text-neutral-300 transition-colors"
                >
                  Years Experience
                </p>
              </div>

              <div class="group/item relative space-y-1">
                <div class="flex items-baseline gap-1">
                  <span
                    class="text-4xl font-bold tracking-tighter text-white font-mono leading-none"
                    >04</span
                  >
                  <span class="text-lg font-bold text-yellow-500">+</span>
                </div>
                <p
                  class="text-[10px] font-bold uppercase tracking-wider text-neutral-500 group-hover/item:text-neutral-300 transition-colors"
                >
                  Completed Projects
                </p>
              </div>

              <div class="group/item relative space-y-1">
                <div class="flex items-baseline gap-1">
                  <span
                    class="text-4xl font-bold tracking-tighter text-white font-mono leading-none"
                    >03</span
                  >
                  <span class="text-lg font-bold text-yellow-500">+</span>
                </div>
                <p
                  class="text-[10px] font-bold uppercase tracking-wider text-neutral-500 group-hover/item:text-neutral-300 transition-colors"
                >
                  Happy Clients
                </p>
              </div>
            </div>

            <div
              class="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
            ></div>
          </div>
        </div>

        <!-- Experience Card -->

        <Expereince />

        <Techstack class="bg-green-400 border-radius-20"></Techstack>

        <Socials
          class="bg-green-400 border-radius-20"
          style="border: 1px solid black; border-radius: 2rem; margin-top: 1rem"
        ></Socials>
        <Projects />
        <DeveloperExperience />
        <Systemstatus />
        <Testimonials />
        <Certifcations />
        <Internship />
        <LetsBuild />
        <Footer />
      </div>
    </div>
  </section>
</template>
<style scoped>
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
}

@keyframes rotate-circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-rotate-circle {
  animation: rotate-circle 4s linear infinite;
}
</style>
