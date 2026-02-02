<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import imageDescription from './imageDescription.vue'

const canvas = ref<HTMLCanvasElement | null>(null)
const imageContainer = ref<HTMLDivElement | null>(null)

// Refined Palette: Gold, Emerald, and Teal (High-end "Command Center" colors)
const colors = ['#FACC15', '#10B981', '#06B6D4', '#FFFFFF']

onMounted(() => {
  if (!canvas.value || !imageContainer.value) return
  const ctx = canvas.value.getContext('2d')
  if (!ctx) return

  const updateCanvasSize = () => {
    if (!canvas.value || !imageContainer.value) return
    const rect = imageContainer.value.getBoundingClientRect()
    canvas.value.width = rect.width
    canvas.value.height = rect.height
  }
  updateCanvasSize()

  let blobs: Array<{
    x: number
    y: number
    size: number
    color: string
    opacity: number
    vx: number
    vy: number
  }> = []

  const handleMouseMove = (e: MouseEvent) => {
    if (!imageContainer.value) return
    const rect = imageContainer.value.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    if (mouseX >= 0 && mouseX <= rect.width && mouseY >= 0 && mouseY <= rect.height) {
      blobs.push({
        x: mouseX,
        y: mouseY,
        size: 40 + Math.random() * 60,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.5,
        vx: (Math.random() - 0.5) * 2, // Slow drift
        vy: (Math.random() - 0.5) * 2,
      })
      if (blobs.length > 25) blobs.shift()
    }
  }

  document.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', updateCanvasSize)

  const animate = () => {
    if (!canvas.value || !ctx) return
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

    blobs.forEach((blob, idx) => {
      blob.opacity -= 0.005
      blob.x += blob.vx // Drift effect
      blob.y += blob.vy

      if (blob.opacity <= 0) {
        blobs.splice(idx, 1)
      } else {
        const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.size)
        const hexOpacity = Math.floor(blob.opacity * 255)
          .toString(16)
          .padStart(2, '0')

        grad.addColorStop(0, `${blob.color}${hexOpacity}`)
        grad.addColorStop(1, `${blob.color}00`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.size, 0, Math.PI * 2)
        ctx.fill()
      }
    })
    requestAnimationFrame(animate)
  }
  animate()

  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('resize', updateCanvasSize)
  })
})
</script>

<template>
  <div class="relative group p-[2px] overflow-hidden rounded-[4rem] bg-transparent">
    <div
      class="absolute inset-[-1000%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FACC15_0%,#10B981_25%,#3B82F6_50%,#FACC15_100%)] opacity-30 group-hover:opacity-60 transition-opacity duration-700"
    ></div>

    <div
      class="relative z-10 w-full bg-neutral-950 py-20 px-10 md:px-20 overflow-hidden rounded-[calc(4rem-2px)]"
    >
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-[radial-gradient(circle_at_center,_#FACC1508_0%,_transparent_70%)] blur-[120px]"
      ></div>

      <div
        class="absolute top-8 left-12 h-2 w-2 rounded-full bg-yellow-500 shadow-[0_0_10px_#FACC15]"
      ></div>
      <div class="absolute top-8 right-12 h-2 w-2 rounded-full bg-white/10"></div>
      <div class="absolute bottom-8 left-12 h-2 w-2 rounded-full bg-emerald-500/40"></div>
      <div class="absolute bottom-8 right-12 h-2 w-2 rounded-full bg-white/10"></div>

      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div
          ref="imageContainer"
          class="relative group/img w-full max-w-[400px] aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10 bg-neutral-900 shadow-2xl transition-all duration-700"
        >
          <img
            src="/myphoto.jpg"
            alt="Portrait"
            class="w-full h-full object-cover grayscale opacity-80 group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700"
          />

          <canvas
            ref="canvas"
            class="absolute inset-0 w-full h-full pointer-events-none z-20 mix-blend-screen transition-opacity duration-500"
            style="filter: blur(15px)"
          ></canvas>

          <div class="absolute top-6 right-6 z-30 flex gap-2">
            <div class="h-1.5 w-1.5 rounded-full bg-yellow-500 animate-pulse"></div>
            <div class="h-1.5 w-1.5 rounded-full bg-white/20"></div>
          </div>
        </div>

        <div class="flex-1 w-full z-10">
          <image-description />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Any specific CSS can go here, but Tailwind handles most of it */
</style>
