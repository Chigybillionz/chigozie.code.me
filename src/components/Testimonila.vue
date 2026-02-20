<script setup lang="ts">
import { ref } from 'vue'
const testimonials = [
  {
    quote:
      'The detailed roadmap provided saved us weeks of back-and-forth. Extremely professional and organized.',
    name: 'Alex Thompson',
    role: 'Project Manager',
  },
  {
    quote:
      'I was worried about the short deadline, but he delivered the MVP 3 days early. The code quality was spotless.',
    name: 'Sarah Jenning',
    role: 'Startup Founder',
  },
  {
    quote:
      "He didn't just write code; he suggested UI improvements that actually increased our user conversion by 15%.",
    name: 'Michael Chen',
    role: 'Marketing Director',
  },
  {
    quote:
      'The communication was transparent. He verified every requirement before starting so there were no surprises.',
    name: 'David Park',
    role: 'CTO',
  },
  {
    quote:
      "Fixed a database bottleneck that three other freelancers couldn't solve. Highly recommended for complex backend issues.",
    name: 'James Wilson',
    role: 'Lead Developer',
  },
]
</script>

<template>
  <section class="py-24 overflow-hidden relative z-20 bg-neutral-950 rounded-3xl">
    <div class="lg:container mx-auto px-4 mb-16">
      <div class="text-center space-y-4">
        <div
          class="inline-block px-6 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-sm font-medium tracking-widest uppercase"
        >
          Testimonials
        </div>
        <h2
          class="text-4xl lg:text-7xl uppercase italic font-thin text-white/80 font-syne tracking-tighter"
        >
          Trust from <span class="text-neutral-500">Clients</span>
        </h2>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto">What people say about working with me</p>
      </div>
    </div>

    <div
      class="relative flex w-full flex-col items-center justify-center overflow-hidden antialiased"
    >
      <div
        class="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]"
      >
        <div class="flex flex-nowrap gap-6 py-4 animate-scroll hover:[animation-play-state:paused]">
          <div
            v-for="(item, index) in [...testimonials, ...testimonials]"
            :key="index"
            class="relative flex-shrink-0 w-[350px] md:w-[450px] rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-emerald-500/30 group"
          >
            <blockquote class="text-lg leading-relaxed text-neutral-300 mb-8 italic">
              "{{ item.quote }}"
            </blockquote>

            <div class="flex items-center justify-between">
              <div class="flex flex-col">
                <span
                  class="text-base font-bold text-white group-hover:text-emerald-400 transition-colors"
                  >{{ item.name }}</span
                >
                <span class="text-sm text-neutral-500">{{ item.role }}</span>
              </div>

              <div class="flex gap-1">
                <svg
                  v-for="i in 5"
                  :key="i"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="text-emerald-500/80"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 12px));
  }
}

.animate-scroll {
  display: flex;
  width: max-content;
  animation: scroll 40s linear infinite;
}

/* Optional: Pause on hover */
.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
