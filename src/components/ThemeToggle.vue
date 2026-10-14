<script setup>
import { Sun, Moon } from '@lucide/vue'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-primary-400 dark:hover:border-primary-500 transition-colors duration-300 backdrop-blur-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    :title="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    :aria-pressed="isDark"
  >
    <Sun
      v-if="isDark"
      class="w-5 h-5 text-amber-300 transition-transform duration-500 hover:rotate-45"
    />
    <Moon
      v-else
      class="w-5 h-5 text-indigo-700 transition-transform duration-500 hover:-rotate-12"
    />
  </button>
</template>
