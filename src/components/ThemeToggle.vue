<script setup>
import { Sun, Moon } from '@lucide/vue'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="relative p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500/50"
    aria-label="Toggle dark mode"
  >
    <Sun
      v-if="isDark"
      class="w-5 h-5 transition-transform duration-500 rotate-0 hover:rotate-45"
    />
    <Moon
      v-else
      class="w-5 h-5 transition-transform duration-500 rotate-0 hover:-rotate-12"
    />
  </button>
</template>
