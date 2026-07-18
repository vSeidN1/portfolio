<script setup>
import { ExternalLink } from '@lucide/vue'

defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="glass-card group flex flex-col h-full rounded-2xl overflow-hidden">
    <div class="relative overflow-hidden aspect-video bg-slate-900">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    <div class="p-6 flex flex-col flex-grow">
      <div class="mb-4">
        <span class="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 mb-3 uppercase tracking-widest">
          {{ project.category }}
        </span>
        <h3 class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300 font-display">
          {{ project.title }}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {{ project.description }}
        </p>
      </div>

      <div class="flex flex-wrap gap-1.5 mb-6 mt-auto">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="text-xs px-2.5 py-1 rounded-md bg-slate-150/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 border border-slate-200/40 dark:border-slate-700/30"
        >
          {{ tech }}
        </span>
      </div>

      <div class="flex items-center gap-4 mt-auto border-t border-slate-200/40 dark:border-slate-800/50 pt-4">
        <a
          v-if="project.demoUrl"
          :href="project.demoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors group/link"
        >
          <span>Live Demo</span>
          <ExternalLink class="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </a>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors ml-auto group/github"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <span>Code</span>
        </a>
      </div>
    </div>
  </div>
</template>
