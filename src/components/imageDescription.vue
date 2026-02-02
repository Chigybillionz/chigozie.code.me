<template>
  <section class="relative h-full flex flex-col justify-center py-12 px-6 lg:px-0">
    <div
      class="absolute -top-10 -left-10 select-none pointer-events-none opacity-[0.02] text-[10rem] font-black uppercase tracking-tighter text-white"
    >
      Bio
    </div>

    <div class="relative z-10 space-y-8 max-w-xl">
      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <div class="h-[1px] w-12 bg-yellow-500/50"></div>
          <span class="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500"
            >Principal Developer</span
          >
        </div>
        <h2
          class="text-5xl md:text-7xl font-black text-white tracking-tighter font-syne italic leading-none"
        >
          Okorie <span class="text-neutral-500">Chigozie</span>
        </h2>
      </div>

      <p
        class="text-2xl md:text-3xl text-white font-light leading-tight tracking-tight italic border-l-2 border-yellow-500/20 pl-6"
      >
        Creating digital experiences that
        <span class="text-yellow-400 font-bold not-italic">inspire</span> and scale.
      </p>

      <div class="space-y-4">
        <p class="text-lg text-neutral-400 leading-relaxed font-light">
          Building modern, responsive web applications with
          <span class="text-white font-medium">cutting-edge technologies</span>
          that deliver exceptional user experiences through precision and purpose.
        </p>

        <div class="flex items-center gap-6 pt-4">
          <div class="flex -space-x-2">
            <div
              v-for="i in 3"
              :key="i"
              class="h-8 w-8 rounded-full border-2 border-neutral-950 bg-neutral-800 flex items-center justify-center text-[10px] font-bold"
            >
              {{ ['Vue', 'TS', 'Tail'][i - 1] }}
            </div>
          </div>
          <div class="h-4 w-[1px] bg-neutral-800"></div>
          <p class="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            Based in Lagos, NG
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
