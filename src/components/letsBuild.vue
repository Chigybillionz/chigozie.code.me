<script></script>

<template>
  <section class="relative z-10 py-24 bg-neutral-950 overflow-hidden">
    <div
      class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-20">
        <h2
          class="text-6xl md:text-8xl font-syne font-bold text-white uppercase italic tracking-tighter leading-[0.9]"
        >
          Have a bold <span class="text-neutral-700">idea?</span><br />
          <span class="text-emerald-500">Build it</span> with me.
        </h2>
      </div>

      <div class="grid lg:grid-cols-12 gap-16 items-start">
        <div class="lg:col-span-5 space-y-12">
          <div class="group">
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-12 h-[1px] bg-emerald-500 group-hover:w-20 transition-all duration-500"
              ></div>
              <h3 class="text-white font-mono uppercase tracking-widest text-sm">Services</h3>
            </div>

            <div class="space-y-8">
              <div class="flex gap-6 items-start">
                <span class="text-neutral-800 font-syne font-bold text-4xl italic">01</span>
                <div>
                  <h4 class="text-xl text-white font-bold mb-2">Tailored Web Design</h4>
                  <p class="text-neutral-400 leading-relaxed">
                    Fast, modern, and unique websites that don't just look good, but convert
                    visitors into customers.
                  </p>
                </div>
              </div>

              <div class="flex gap-6 items-start">
                <span class="text-neutral-800 font-syne font-bold text-4xl italic">02</span>
                <div>
                  <h4 class="text-xl text-white font-bold mb-2">Growth Strategy</h4>
                  <p class="text-neutral-400 leading-relaxed">
                    Performance-first solutions designed for impact, from portfolio revamps to
                    full-scale SaaS platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="p-8 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-md">
            <div class="flex items-center gap-3 text-emerald-500 mb-2">
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
                class="lucide lucide-zap"
              >
                <path
                  d="M4 14.5a2 2 0 0 1-1.53-3.32l4.83-5.79a2 2 0 0 1 1.53-.89H17a2 2 0 0 1 1.53 3.32l-4.83 5.79a2 2 0 0 1-1.53.89H7Z"
                />
                <path d="M14 2 8 8" />
                <path d="m16 16-6 6" />
              </svg>
              <span class="font-bold uppercase text-xs tracking-tighter">Current Availability</span>
            </div>
            <p class="text-neutral-400 text-sm">Now accepting new projects for Q2 2026.</p>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem]">
            <div class="bg-neutral-900 rounded-[2.4rem] p-8 md:p-12">
              <form class="space-y-10">
                <div class="relative group">
                  <input
                    type="text"
                    name="from_name"
                    required
                    class="peer w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-emerald-500 transition-colors text-white text-lg placeholder-transparent"
                    placeholder="Full Name"
                  />
                  <label
                    class="absolute left-0 top-4 text-neutral-500 transition-all peer-focus:-top-4 peer-focus:text-emerald-500 peer-focus:text-xs peer-placeholder-shown:text-lg peer-valid:-top-4 peer-valid:text-xs"
                    >Full Name</label
                  >
                </div>

                <div class="relative group">
                  <input
                    type="email"
                    name="from_email"
                    required
                    class="peer w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-emerald-500 transition-colors text-white text-lg placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label
                    class="absolute left-0 top-4 text-neutral-500 transition-all peer-focus:-top-4 peer-focus:text-emerald-500 peer-focus:text-xs peer-placeholder-shown:text-lg peer-valid:-top-4 peer-valid:text-xs"
                    >Email Address</label
                  >
                </div>

                <div class="relative group">
                  <textarea
                    name="message"
                    rows="4"
                    required
                    class="peer w-full bg-neutral-950/50 border border-white/10 rounded-2xl p-6 outline-none focus:border-emerald-500 transition-colors text-white text-lg placeholder-transparent resize-none"
                    placeholder="Message"
                  ></textarea>
                  <label
                    class="absolute left-6 top-6 text-neutral-500 transition-all peer-focus:-top-8 peer-focus:left-0 peer-focus:text-emerald-500 peer-focus:text-xs peer-placeholder-shown:top-6 peer-valid:-top-8 peer-valid:left-0 peer-valid:text-xs"
                    >Tell me about your project</label
                  >
                </div>

                <button
                  type="submit"
                  class="group relative w-full overflow-hidden rounded-full bg-white px-8 py-6 transition-all hover:bg-emerald-500"
                >
                  <div class="relative z-10 flex items-center justify-center gap-3">
                    <span
                      class="text-black font-bold uppercase tracking-widest text-sm group-hover:text-white transition-colors"
                      >Send Message</span
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
                      class="text-black group-hover:text-white group-hover:translate-x-1 transition-all"
                    >
                      <path d="m5 12 14 0" />
                      <path d="m13 18 6-6-6-6" />
                    </svg>
                  </div>
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
