<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  skills: {
    type: Array,
    required: true
  },
  icon: {
    type: Function,
    required: false
  }
})

const isAnimated = ref(false)

onMounted(() => {
  setTimeout(() => {
    isAnimated.value = true
  }, 100)
})
</script>

<template>
  <div class="glass-card p-6 rounded-2xl">
    <div class="flex items-center gap-3 mb-6">
      <div v-if="icon" class="p-2.5 rounded-xl bg-primary-500/10 text-primary-500 dark:bg-primary-500/20">
        <component :is="icon" class="w-5 h-5" />
      </div>
      <h3 class="text-xl font-bold text-slate-800 dark:text-slate-100 font-display">
        {{ title }}
      </h3>
    </div>
    
    <div class="space-y-4">
      <div v-for="skill in skills" :key="skill.name" class="space-y-1.5">
        <div class="flex justify-between items-center text-sm">
          <span class="font-medium text-slate-700 dark:text-slate-300">
            {{ skill.name }}
          </span>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {{ skill.level }}%
          </span>
        </div>
        <div class="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-primary-500 to-teal-accent rounded-full transition-all duration-1000 ease-out"
            :style="{ width: isAnimated ? `${skill.level}%` : '0%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
