<script setup>
import { Calendar, MapPin } from '@lucide/vue'

defineProps({
  item: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    default: 'experience'
  }
})
</script>

<template>
  <div class="relative pl-8 pb-10 last:pb-0 group">
    <!-- Timeline Dot -->
    <div class="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-primary-500 bg-white dark:bg-slate-950 z-10 group-hover:scale-120 group-hover:bg-primary-500 transition-all duration-300"></div>
    <!-- Timeline Line -->
    <div class="absolute left-1.5 top-5 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 group-last:hidden"></div>

    <div class="glass-card p-6 rounded-2xl transition-all duration-300 group-hover:translate-x-1">
      <div class="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <h4 class="text-lg font-bold text-slate-800 dark:text-slate-100 font-display">
            {{ item.role || item.degree }}
          </h4>
          <p class="text-sm font-semibold text-primary-500 dark:text-primary-400">
            {{ item.company || item.school }}
          </p>
        </div>
        
        <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/40 dark:border-slate-700/30">
          <Calendar class="w-3.5 h-3.5 text-primary-500" />
          {{ item.period }}
        </span>
      </div>

      <div v-if="item.location" class="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mb-4">
        <MapPin class="w-3.5 h-3.5 text-slate-400" />
        <span>{{ item.location }}</span>
      </div>

      <p class="text-sm text-slate-650 dark:text-slate-350 leading-relaxed mb-4">
        {{ item.description || item.details }}
      </p>

      <div v-if="item.tech && item.tech.length" class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/40 dark:border-slate-800/50">
        <span
          v-for="tech in item.tech"
          :key="tech"
          class="text-[10px] font-bold px-2.5 py-0.5 rounded bg-primary-500/5 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-500/10 dark:border-primary-500/20"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>
