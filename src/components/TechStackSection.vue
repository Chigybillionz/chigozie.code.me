<script setup lang="ts">
import { ref } from 'vue'
import { Layers, Terminal, Check, Copy } from 'lucide-vue-next'

const categories = [
  {
    title: 'Frontend Architecture',
    skills: [
      { name: 'Vue.js', level: 'Advanced', icon: '🟢' },
      { name: 'TypeScript', level: 'Advanced', icon: '🔷' },
      { name: 'React', level: 'Proficient', icon: '⚛️' },
      { name: 'Tailwind CSS', level: 'Expert', icon: '🎨' },
      { name: 'Next.js', level: 'Proficient', icon: '▲' },
      { name: 'Pinia / State', level: 'Advanced', icon: '🍍' },
    ],
  },
  {
    title: 'Backend & Systems',
    skills: [
      { name: 'Laravel (PHP)', level: 'Advanced', icon: '🔴' },
      { name: 'Node.js', level: 'Proficient', icon: '🌿' },
      { name: 'REST APIs', level: 'Expert', icon: '🔌' },
      { name: 'MySQL', level: 'Advanced', icon: '🐬' },
      { name: 'PostgreSQL', level: 'Proficient', icon: '🐘' },
      { name: 'Solidity', level: 'Intermediate', icon: '⛓️' },
    ],
  },
  {
    title: 'DevOps & Tooling',
    skills: [
      { name: 'Git & GitHub', level: 'Expert', icon: '🐙' },
      { name: 'Vite', level: 'Expert', icon: '⚡' },
      { name: 'Vercel / CI/CD', level: 'Advanced', icon: '🚀' },
      { name: 'Postman', level: 'Advanced', icon: '📮' },
      { name: 'Linux / Bash', level: 'Proficient', icon: '💻' },
      { name: 'Web Audio / AI', level: 'Hands-on', icon: '🎙️' },
    ],
  },
]

const codeSnippet = `const developer = {
  name: "Okorie Chigozie",
  title: "Fullstack Software Engineer",
  primaryStack: ["Vue.js", "TypeScript", "Laravel", "Tailwind"],
  focus: "Resilient systems, clean code & intuitive UX",
  availableForHire: true,
  contact: () => "f.okoriechigozie99@gmail.com"
};`

const copied = ref(false)
const copySnippet = () => {
  navigator.clipboard.writeText(codeSnippet)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <section id="techstack" class="relative w-full max-w-5xl mx-auto py-16 sm:py-24 px-4 sm:px-6">
    <!-- Section Header -->
    <div class="space-y-3 mb-12 sm:mb-16">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-semibold"
      >
        <Layers class="w-3.5 h-3.5" />
        <span>My Tech Stack</span>
      </div>
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        Engineered with modern tools.
      </h2>
      <p class="text-neutral-400 text-base sm:text-lg max-w-2xl">
        Carefully chosen technologies and frameworks I use to engineer robust, high-performance web applications.
      </p>
    </div>

    <!-- 2 Column Layout: Skills Categories & Terminal Preview -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
      <!-- Left: Categorized Skills Pills (7 cols) -->
      <div class="lg:col-span-7 space-y-6">
        <div
          v-for="cat in categories"
          :key="cat.title"
          class="rounded-3xl border border-neutral-800/80 bg-neutral-900/30 backdrop-blur-md p-5 sm:p-6"
        >
          <h3 class="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            {{ cat.title }}
          </h3>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div
              v-for="skill in cat.skills"
              :key="skill.name"
              class="group flex items-center gap-3 p-3 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
            >
              <span class="text-lg">{{ skill.icon }}</span>
              <div class="overflow-hidden">
                <p class="text-xs sm:text-sm font-semibold text-white truncate">{{ skill.name }}</p>
                <p class="text-[11px] text-neutral-500 truncate">{{ skill.level }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Terminal Snippet Card (5 cols) -->
      <div class="lg:col-span-5 flex flex-col">
        <div
          class="h-full rounded-3xl border border-neutral-800 bg-neutral-950 p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
        >
          <!-- Terminal Top Bar -->
          <div>
            <div class="flex items-center justify-between pb-4 border-b border-neutral-800/80">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span class="ml-2 text-xs font-mono text-neutral-500">engineer.config.ts</span>
              </div>

              <button
                @click="copySnippet"
                class="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white px-2.5 py-1 rounded-lg hover:bg-neutral-800 transition-colors"
                title="Copy config"
              >
                <component :is="copied ? Check : Copy" class="w-3.5 h-3.5" :class="copied ? 'text-emerald-400' : ''" />
                <span>{{ copied ? 'Copied' : 'Copy' }}</span>
              </button>
            </div>

            <!-- Code Content -->
            <pre class="mt-5 font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed overflow-x-auto selection:bg-purple-900/60">
<code><span class="text-purple-400">const</span> <span class="text-yellow-400">developer</span> = {
  <span class="text-neutral-400">name:</span> <span class="text-emerald-400">"Okorie Chigozie"</span>,
  <span class="text-neutral-400">title:</span> <span class="text-emerald-400">"Fullstack Engineer"</span>,
  <span class="text-neutral-400">primaryStack:</span> [
    <span class="text-sky-400">"Vue.js"</span>, 
    <span class="text-sky-400">"TypeScript"</span>, 
    <span class="text-sky-400">"Laravel"</span>,
    <span class="text-sky-400">"Tailwind"</span>
  ],
  <span class="text-neutral-400">location:</span> <span class="text-emerald-400">"Lagos, Nigeria"</span>,
  <span class="text-neutral-400">availableForHire:</span> <span class="text-purple-400">true</span>,
  <span class="text-neutral-400">craft:</span> <span class="text-emerald-400">"Fast, scalable systems"</span>
};</code></pre>
          </div>

          <!-- Bottom interactive badge -->
          <div class="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-neutral-500">
            <span class="font-mono flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Ready for collaboration
            </span>
            <span class="font-mono">v3.5 (Active)</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
