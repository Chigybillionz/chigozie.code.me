<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

emailjs.init('hzZg3wKOa7-7irVEH')

// Refs
const form = ref<HTMLFormElement | null>(null)
const isSending = ref(false)
const statusMessage = ref('')
const statusType = ref<'success' | 'error' | ''>('')

// Send email
const sendEmail = () => {
  if (!form.value) return

  isSending.value = true
  statusMessage.value = ''
  statusType.value = ''

  emailjs
    .sendForm('service_pznwzg4', 'template_io3acy9', form.value, 'hzZg3wKOa7-7irVEH')
    .then(() => {
      statusType.value = 'success'
      statusMessage.value = 'Message sent successfully! I will get back to you soon.'
      form.value?.reset()

      // Auto-hide after 5s
      setTimeout(() => {
        statusMessage.value = ''
        statusType.value = ''
      }, 5000)
    })
    .catch((error) => {
      console.error('FAILED...', error.text)
      statusType.value = 'error'
      statusMessage.value = 'Failed to send message. Please check your internet or try again later.'

      setTimeout(() => {
        statusMessage.value = ''
        statusType.value = ''
      }, 5000)
    })
    .finally(() => {
      isSending.value = false
    })
}
</script>

<template>
  <section
    class="relative z-10 py-12 md:py-16 lg:py-24 bg-neutral-950 overflow-hidden rounded-2xl md:rounded-[2.5rem] lg:rounded-[3rem]"
  >
    <div
      class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-emerald-500/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div class="mb-10 md:mb-16 lg:mb-20">
        <h2
          class="text-xl md:text-4xl lg:text-8xl font-syne font-bold text-white uppercase italic tracking-tighter leading-[0.9]"
        >
          Have a bold <span class="text-neutral-700">idea?</span><br />
          <span class="text-emerald-500">Build it</span> with me.
        </h2>
      </div>

      <div class="grid lg:grid-cols-12 gap-6 md:gap-10 lg:gap-16 items-start">
        <!-- LEFT -->
        <div class="lg:col-span-5 space-y-6 md:space-y-8 lg:space-y-12">
          <div class="group">
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-12 h-[1px] bg-emerald-500 group-hover:w-20 transition-all duration-500"
              ></div>
              <h3 class="text-white font-mono uppercase tracking-widest text-sm">Services</h3>
            </div>

            <div class="space-y-5 md:space-y-6 lg:space-y-8">
              <div class="flex gap-4 md:gap-6 items-start">
                <span
                  class="text-neutral-700 md:text-neutral-800 font-syne font-bold text-3xl md:text-4xl italic flex-shrink-0"
                  >01</span
                >
                <div>
                  <h4 class="text-lg md:text-xl text-white font-bold mb-1.5 md:mb-2">
                    Tailored Web Design
                  </h4>
                  <p class="text-sm md:text-base text-neutral-400 leading-relaxed">
                    Fast, modern, and unique websites that convert visitors into customers.
                  </p>
                </div>
              </div>

              <div class="flex gap-4 md:gap-6 items-start">
                <span
                  class="text-neutral-700 md:text-neutral-800 font-syne font-bold text-3xl md:text-4xl italic flex-shrink-0"
                  >02</span
                >
                <div>
                  <h4 class="text-lg md:text-xl text-white font-bold mb-1.5 md:mb-2">
                    Growth Strategy
                  </h4>
                  <p class="text-sm md:text-base text-neutral-400 leading-relaxed">
                    Performance-first solutions for real impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="p-4 md:p-6 lg:p-8 rounded-lg md:rounded-2xl lg:rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-md"
          >
            <div class="flex items-center gap-2.5 md:gap-3 text-emerald-500 mb-2">
              <span class="font-bold uppercase text-[10px] md:text-xs tracking-tighter">
                Current Availability
              </span>
            </div>
            <p class="text-neutral-400 text-xs md:text-sm">
              Now accepting new projects for Q1 2026.
            </p>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="lg:col-span-7">
          <div
            class="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-xl md:rounded-2xl lg:rounded-[2.5rem]"
          >
            <div
              class="bg-neutral-900 rounded-lg md:rounded-2xl lg:rounded-[2.4rem] p-5 md:p-8 lg:p-12"
            >
              <!-- STATUS MESSAGE -->
              <div
                v-if="statusMessage"
                class="mb-8 w-[200px] rounded-lg px-4 py-3 text-sm font-semibold"
                :class="
                  statusType === 'success'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-red-500/20 text-red-400 border border-red-500/40'
                "
              >
                {{ statusMessage }}
              </div>

              <form
                ref="form"
                @submit.prevent="sendEmail"
                class="space-y-6 md:space-y-8 lg:space-y-10"
              >
                <div class="relative group">
                  <input
                    type="text"
                    name="from_name"
                    required
                    class="peer w-full bg-transparent border-b border-white/10 py-3 md:py-4 outline-none focus:border-emerald-500 transition-colors text-white text-base md:text-lg placeholder-transparent"
                    placeholder="Full Name"
                  />
                  <label
                    class="absolute left-0 top-3 md:top-4 text-sm md:text-base text-neutral-500 transition-all peer-focus:-top-5 md:peer-focus:-top-6 peer-focus:text-emerald-500 peer-focus:text-xs peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-valid:-top-5 md:peer-valid:-top-6 peer-valid:text-xs"
                  >
                    Full Name
                  </label>
                </div>

                <div class="relative group">
                  <input
                    type="email"
                    name="from_email"
                    required
                    class="peer w-full bg-transparent border-b border-white/10 py-3 md:py-4 outline-none focus:border-emerald-500 transition-colors text-white text-base md:text-lg placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label
                    class="absolute left-0 top-3 md:top-4 text-sm md:text-base text-neutral-500 transition-all peer-focus:-top-5 md:peer-focus:-top-6 peer-focus:text-emerald-500 peer-focus:text-xs peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-valid:-top-5 md:peer-valid:-top-6 peer-valid:text-xs"
                  >
                    Email Address
                  </label>
                </div>

                <div class="relative group">
                  <textarea
                    name="message"
                    rows="4"
                    required
                    class="peer w-full bg-neutral-950/50 border border-white/10 rounded-lg md:rounded-2xl p-4 md:p-6 outline-none focus:border-emerald-500 transition-colors text-white text-base md:text-lg placeholder-transparent resize-none"
                    placeholder="Message"
                  ></textarea>
                  <label
                    class="absolute left-4 md:left-6 top-4 md:top-6 text-sm md:text-base text-neutral-500 transition-all peer-focus:-top-6 md:peer-focus:-top-8 peer-focus:left-0 peer-focus:text-emerald-500 peer-focus:text-xs peer-placeholder-shown:top-4 md:peer-placeholder-shown:top-6 peer-valid:-top-6 md:peer-valid:-top-8 peer-valid:left-0 peer-valid:text-xs"
                  >
                    Tell me about your project
                  </label>
                </div>

                <button
                  type="submit"
                  :disabled="isSending"
                  class="group relative w-full overflow-hidden rounded-full bg-white px-6 md:px-8 py-4 md:py-6 transition-all hover:bg-emerald-500 disabled:bg-neutral-600 disabled:cursor-not-allowed"
                >
                  <span
                    class="text-black font-bold uppercase tracking-widest text-xs md:text-sm group-hover:text-white transition-colors"
                  >
                    {{ isSending ? 'Sending...' : 'Send Message' }}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-syne {
  font-family: 'Syne', sans-serif;
}
</style>
