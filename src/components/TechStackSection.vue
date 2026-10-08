<script setup lang="ts">
import { ref } from 'vue'
import { Layers, Terminal, Check, Copy } from 'lucide-vue-next'

const categories = [
  {
    title: 'Frontend Architecture',
    skills: [
      { name: 'Vue.js', level: 'Advanced', icon: '<svg viewBox="0 0 128 128" width="24" height="24"><path fill="#41b883" d="M78.8,10.4L64,36.1L49.2,10.4H0l64,111l64-111H78.8z"/><path fill="#35495e" d="M78.8,10.4L64,36.1L49.2,10.4H25.5L64,77.1l38.5-66.7H78.8z"/></svg>' },
      { name: 'TypeScript', level: 'Advanced', icon: '<svg viewBox="0 0 128 128" width="24" height="24"><path fill="#007acc" d="M2.9,2.9h122.2v122.2H2.9V2.9z"/><path fill="#fff" d="M68.8,96.6c0,8.3-4.6,15.7-18.7,15.7c-11.4,0-17.7-6.2-18.4-13.6l9.6-1.5c0.6,4,3.7,6.9,8.7,6.9c5.1,0,8-2.6,8-7.7 c0-11.9-22-6.5-22-22.3c0-7.3,4.6-14.7,16.5-14.7c10,0,16.2,5.2,17.4,12.5l-9.1,1.5c-0.8-3.4-3.5-5.5-8.1-5.5 c-4.6,0-7.2,2.3-7.2,6.4C43.5,86.2,68.8,79.9,68.8,96.6z"/><polygon fill="#fff" points="112.5,41.9 112.5,50 96.9,50 96.9,111 86.8,111 86.8,50 71.3,50 71.3,41.9 "/></svg>' },
      { name: 'React', level: 'Proficient', icon: '⚛️' },
      { name: 'Tailwind CSS', level: 'Expert', icon: '<svg viewBox="0 0 128 128" width="24" height="24"><path fill="#38bdf8" d="M64,25.6c-17.1,0-27.7,8.5-32,25.6c4.3-8.5,10.7-12.8,19.2-12.8c6,0,10.3,2.7,14,6.1 c4.4,4.1,8.1,7.6,18,7.6c17.1,0,27.7-8.5,32-25.6c-4.3,8.5-10.7,12.8-19.2,12.8c-6,0-10.3-2.7-14-6.1C77.6,29,73.9,25.6,64,25.6z M32,51.2c-17.1,0-27.7,8.5-32,25.6c4.3-8.5,10.7-12.8,19.2-12.8c6,0,10.3,2.7,14,6.1c4.4,4.1,8.1,7.6,18,7.6 c17.1,0,27.7-8.5,32-25.6c-4.3,8.5-10.7,12.8-19.2,12.8c-6,0-10.3-2.7-14-6.1C45.6,54.6,41.9,51.2,32,51.2z"/></svg>' },
      { name: 'Pinia / State', level: 'Advanced', icon: '<img src="https://api.iconify.design/logos:pinia.svg" alt="Pinia" class="w-full h-full object-contain" />' },
    ],
  },
  {
    title: 'Backend & Systems',
    skills: [
      { name: 'Node.js', level: 'Advanced', icon: '<svg viewBox="0 0 128 128" width="24" height="24"><path fill="#539E43" d="M116.6 83.1c-1.3.8-2.9 1.2-4.5 1.2H112l-16 9.2v-5l9.5-5.5V56l-41.5-24-41.5 24v48.1l35.1 20.3v-43l27.1-15.6-5.4-9.3-21.7 12.5V81.3l-24.3-14v-22l30.7-17.7 30.7 17.7v28.8l10.2-5.9v21l-36.9 21.3L20.8 87V40.7l43.2-24.9 43.2 24.9v40L116.6 83.1zM58.6 88.7l5.4 9.3 35.8-20.7v-21l-5.4-9.3-35.8 20.7V88.7zM12.8 45.3L64 15.7l51.2 29.6v59.2L64 134.1l-51.2-29.6V45.3z"/></svg>' },
      { name: 'Express.js', level: 'Advanced', icon: '<svg viewBox="0 0 128 128" width="24" height="24"><path fill="#fff" d="M128 20v88H0V20h128z"/><path d="M57 91.5c-4.4 0-7.8-1.7-10.3-4.7s-3.7-7-3.7-11.4c0-4.5 1.3-8.1 4-10.9 2.7-2.8 6.4-4.2 10.9-4.2 8.3 0 13.5 5.5 13.5 14.5v1.4H47.1c.1 3 1.2 5.5 3.1 7.2 2 1.7 4.5 2.5 7.6 2.5 2.1 0 3.8-.4 5.2-1.2 1.4-.8 2.6-2 3.6-3.6l3.6 2c-1.3 2-2.9 3.5-4.9 4.7-2.1 1.2-4.8 1.7-8.3 1.7zm1.2-27.1c-2.3 0-4.2.7-5.9 2-1.6 1.3-2.6 3.1-2.9 5.1H67c-.2-2-1.1-3.7-2.7-5s-3.7-2.1-6.1-2.1zM89 90.7l-9.1-13-8.8 13h-4.7L77.6 74 66.8 58.7h4.8L79.9 71l7.8-12.3H92L82.6 74l11 16.7H89zm23.2.8c-2.1 0-3.9-.5-5.3-1.4-1.4-.9-2.6-2.1-3.3-3.7l3.6-2.1c.7 1.3 1.5 2.2 2.6 2.9 1 .6 2.3.9 3.6.9 1.4 0 2.6-.3 3.4-.8.8-.5 1.2-1.3 1.2-2.3 0-.8-.3-1.5-1-1.9-.7-.5-1.9-1-3.6-1.5-2.2-.6-3.9-1.2-5.1-1.8s-2.1-1.3-2.7-2.3c-.6-.9-.9-2-.9-3.2 0-1.5.5-2.8 1.4-3.9s2.1-1.9 3.6-2.4c1.5-.5 3.1-.7 4.9-.7 2 0 3.8.4 5.2 1.1s2.5 1.7 3.3 3.1l-3.5 2.2c-.6-1-1.4-1.8-2.3-2.2-1-.4-2.1-.7-3.4-.7-1.3 0-2.4.2-3.1.7s-1.1 1.1-1.1 2c0 .7.3 1.2.8 1.6.5.4 1.7.9 3.6 1.4 1.9.5 3.5 1 4.7 1.6 1.2.6 2.2 1.4 2.8 2.3.7 1 1 2.2 1 3.5 0 1.5-.5 2.9-1.4 4s-2.1 2-3.7 2.5c-1.5.7-3.2 1-5.2 1zM28.3 90.7l-9.1-13-8.8 13H5.7L16.9 74 6.1 58.7h4.8L19.2 71l7.8-12.3h4.4l-9.4 15.3 11 16.7h-4.7z M41.1 91.5c-2.1 0-3.9-.5-5.3-1.4-1.4-.9-2.6-2.1-3.3-3.7l3.6-2.1c.7 1.3 1.5 2.2 2.6 2.9 1 .6 2.3.9 3.6.9 1.4 0 2.6-.3 3.4-.8.8-.5 1.2-1.3 1.2-2.3 0-.8-.3-1.5-1-1.9-.7-.5-1.9-1-3.6-1.5-2.2-.6-3.9-1.2-5.1-1.8s-2.1-1.3-2.7-2.3c-.6-.9-.9-2-.9-3.2 0-1.5.5-2.8 1.4-3.9s2.1-1.9 3.6-2.4c1.5-.5 3.1-.7 4.9-.7 2 0 3.8.4 5.2 1.1s2.5 1.7 3.3 3.1l-3.5 2.2c-.6-1-1.4-1.8-2.3-2.2-1-.4-2.1-.7-3.4-.7-1.3 0-2.4.2-3.1.7s-1.1 1.1-1.1 2c0 .7.3 1.2.8 1.6.5.4 1.7.9 3.6 1.4 1.9.5 3.5 1 4.7 1.6 1.2.6 2.2 1.4 2.8 2.3.7 1 1 2.2 1 3.5 0 1.5-.5 2.9-1.4 4s-2.1 2-3.7 2.5c-1.6.7-3.3 1-5.2 1zM29.5 45.4h22.6v3.7H29.5zm0-8.9h22.6v3.7H29.5zm0-8.9h22.6v3.7H29.5z" fill="#000"/></svg>' },
      { name: 'REST APIs', level: 'Expert', icon: '<svg viewBox="0 0 64 64" width="24" height="24" fill="currentColor"><path d="M46 16c-4.4 0-8.2 2.8-9.6 6.8-1.5-1.5-3.6-2.5-5.9-2.7C29.6 13 22.2 8.3 14 11.2c-5.8 2-9.7 7.5-10 13.6C1.6 26 .1 28.5.1 31.4c0 4.6 3.8 8.4 8.4 8.4h37.4c6.6 0 12-5.4 12-12S52.6 16 46 16zM46 35.8H8.5c-2.4 0-4.4-2-4.4-4.4 0-2.2 1.6-4 3.8-4.3l1.8-.3-.5-1.8c-.8-2.6-.3-5.5 1.5-7.5 1.8-2.1 4.5-3.1 7.2-2.7 3.9.5 7.1 3.2 8.3 7l.6 1.9 2-.2c1.7-.2 3.4.4 4.7 1.6 1.2 1.2 2 2.8 2.1 4.6l.1 1.9 1.9-.1c.5 0 1-.1 1.5-.1 4.4 0 8 3.6 8 8 0 4.3-3.5 7.9-7.8 8l-.3.2z"/><path d="M48.8 26.5c-1.3-1.3-3.4-1.3-4.7 0l-1.4 1.4-1.4-1.4c-1.3-1.3-3.4-1.3-4.7 0s-1.3 3.4 0 4.7l1.4 1.4-1.4 1.4c-1.3 1.3-1.3 3.4 0 4.7.6.6 1.5 1 2.4 1s1.7-.3 2.4-1l1.4-1.4 1.4 1.4c.6.6 1.5 1 2.4 1s1.7-.3 2.4-1c1.3-1.3 1.3-3.4 0-4.7L47.5 32.6l1.4-1.4C50.1 29.9 50.1 27.8 48.8 26.5z"/></svg>' },
      { name: 'MySQL', level: 'Advanced', icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" class="w-full h-full object-contain" />' },
      { name: 'PostgreSQL', level: 'Proficient', icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL" class="w-full h-full object-contain" />' },
      { name: 'MongoDB / DB', level: 'Proficient', icon: '<svg viewBox="0 0 128 128" width="24" height="24"><path fill="#439743" d="M92.6 35.6c0 0-15.5-31.5-27-35.4 0 0-6.7 28.8-19.1 41.4-14.4 14.5-18.1 31.3-11.2 45.3 8.5 17.4 26.4 25.4 32.7 40.7 2-12.8 11-23.7 21.9-29.3 15-7.9 13.6-44.5 2.7-62.7z"/><path fill="#584846" d="M68 127.6c-4.8.7-9.5-6.7-9.5-6.7 5.5-3.1 7.5 4 9.5 6.7z"/></svg>' },
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
  primaryStack: ["Vue.js", "React.js", "TypeScript", "Node.js", "Tailwind"],
  focus: "Resilient systems, clean code & intuitive UX",
  availableForHire: true,
  contact: () => "okoriechigozie99@gmail.com"
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
              <div v-if="skill.icon.startsWith('<')" class="w-6 h-6 flex items-center justify-center shrink-0" v-html="skill.icon"></div>
              <span v-else class="text-lg w-6 text-center shrink-0">{{ skill.icon }}</span>
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
    <span class="text-sky-400">"React.js"</span>, 
    <span class="text-sky-400">"TypeScript"</span>, 
    <span class="text-sky-400">"Node.js"</span>,
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
