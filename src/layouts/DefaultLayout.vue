<script setup>
import { ref, onMounted } from 'vue'
import { Menu, X, Mail } from '@lucide/vue'
import { useTheme } from '../composables/useTheme'
import ThemeToggle from '../components/ThemeToggle.vue'
import { portfolioData } from '../data/portfolioData'

const { initTheme } = useTheme()
const isMobileMenuOpen = ref(false)
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
    <header class="sticky top-0 z-45 w-full border-b border-slate-200/40 dark:border-slate-850/45 glass-panel">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold font-display tracking-tight text-gradient-primary hover:scale-102 transition-transform cursor-pointer"
        >
          {{ portfolioData.personalInfo.name }}.
        </router-link>

        <nav class="hidden md:flex items-center gap-8">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            active-class="!text-primary-500 dark:!text-primary-400 font-bold"
          >
            {{ link.name }}
          </router-link>
        </nav>

        <div class="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <router-link
            to="/contact"
            class="text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white hover:shadow-lg hover:shadow-primary-500/20 hover:scale-102 transition-all cursor-pointer"
          >
            Hire Me
          </router-link>
        </div>

        <div class="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 hover:text-primary-500 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-5 h-5" />
            <X v-else class="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>

    <Transition name="drawer">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 top-16 z-40 bg-slate-950/20 dark:bg-slate-950/40 backdrop-blur-md md:hidden"
        @click="closeMobileMenu"
      >
        <div
          class="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 shadow-2xl flex flex-col gap-5"
          @click.stop
        >
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-primary-500 py-2 border-b border-slate-100 dark:border-slate-800/50"
            active-class="text-primary-500 dark:text-primary-400 font-bold"
            @click="closeMobileMenu"
          >
            {{ link.name }}
          </router-link>
          
          <router-link
            to="/contact"
            class="w-full text-center font-bold uppercase tracking-wider py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 text-white"
            @click="closeMobileMenu"
          >
            Hire Me
          </router-link>
        </div>
      </div>
    </Transition>

    <main class="flex-grow flex flex-col">
      <router-view v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>

    <footer class="border-t border-slate-200/50 dark:border-slate-900 bg-white/30 dark:bg-slate-950/30 backdrop-blur-sm py-12 safe-pb">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div class="md:col-span-2 space-y-4">
            <span class="text-xl font-bold font-display text-gradient-primary">
              {{ portfolioData.personalInfo.name }}.
            </span>
            <p class="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              {{ portfolioData.personalInfo.shortBio }}
            </p>
          </div>
          
          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 mb-4 font-display">
              Navigation
            </h4>
            <ul class="space-y-2">
              <li v-for="link in navLinks" :key="link.name">
                <router-link
                  :to="link.path"
                  class="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-100 mb-4 font-display">
              Connect
            </h4>
            <div class="flex items-center gap-3">
              <a
                v-if="portfolioData.personalInfo.socials.github"
                :href="portfolioData.personalInfo.socials.github"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-650 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-105 transition-all cursor-pointer flex items-center justify-center"
                aria-label="GitHub"
              >
                <svg class="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a
                v-if="portfolioData.personalInfo.socials.linkedin"
                :href="portfolioData.personalInfo.socials.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-650 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-105 transition-all cursor-pointer flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg class="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a
                v-if="portfolioData.personalInfo.socials.twitter"
                :href="portfolioData.personalInfo.socials.twitter"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-650 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-105 transition-all cursor-pointer flex items-center justify-center"
                aria-label="Twitter"
              >
                <svg class="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                v-if="portfolioData.personalInfo.socials.email"
                :href="`mailto:${portfolioData.personalInfo.socials.email}`"
                class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-650 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-105 transition-all cursor-pointer"
                aria-label="Email"
              >
                <Mail class="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-slate-200/50 dark:border-slate-850 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-550 dark:text-slate-400">
          <p>© {{ new Date().getFullYear() }} {{ portfolioData.personalInfo.name }}. All rights reserved.</p>
          <p class="flex items-center gap-1">
            Built with Vue 3 & Tailwind v4
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from > div,
.drawer-leave-to > div {
  transform: translateY(-8px);
}
</style>
