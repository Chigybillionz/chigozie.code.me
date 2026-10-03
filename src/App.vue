<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeroHeader from './components/HeroHeader.vue'
import ProjectShowcase from './components/ProjectShowcase.vue'
import AboutSection from './components/AboutSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-[#060607] text-white selection:bg-purple-600 selection:text-white relative overflow-x-clip">
    <!-- Subtle Ambient Background Light Accents (Pure CSS, lightning fast) -->
    <div class="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/5 blur-[160px] rounded-full pointer-events-none -z-10"></div>
    <div class="fixed bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[160px] rounded-full pointer-events-none -z-10"></div>

    <!-- Floating Navigation Capsule -->
    <Navbar />

    <!-- Main Content Container -->
    <main class="relative z-10 space-y-4 sm:space-y-8">
      <!-- Top Heading Hero Banner with Overlapping Avatar -->
      <HeroHeader />

      <!-- Project Showcase (2-Column Staggered Masonry) -->
      <ProjectShowcase />

      <!-- About Section (Punchy Narrative & Highlights) -->
      <AboutSection />

      <!-- Tech Stack & Developer Terminal -->
      <TechStackSection />

      <!-- Slide In / Contact Section -->
      <ContactSection />
    </main>

    <!-- Minimal Footer -->
    <FooterSection />
  </div>
</template>

<style scoped></style>
