<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
    default: ''
  }
})

const displayValue = ref('0')

onMounted(() => {
  const match = props.value.match(/^(\d+\.?\d*)(.*)$/)
  if (match) {
    const endValue = parseFloat(match[1])
    const suffix = match[2] || ''
    const isFloat = match[1].includes('.')
    
    let startValue = 0
    const duration = 1500 // ms
    const steps = 30
    const stepDuration = duration / steps
    const stepValue = endValue / steps
    
    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      startValue = Math.min(stepValue * currentStep, endValue)
      
      if (isFloat) {
        displayValue.value = `${startValue.toFixed(1)}${suffix}`
      } else {
        displayValue.value = `${Math.round(startValue)}${suffix}`
      }
      
      if (currentStep >= steps) {
        clearInterval(timer)
        displayValue.value = props.value
      }
    }, stepDuration)
  } else {
    displayValue.value = props.value
  }
})
</script>

<template>
  <div class="glass-card p-6 rounded-2xl flex flex-col justify-between h-full group hover:-translate-y-1 transition-all duration-300">
    <div>
      <span class="text-4xl lg:text-5xl font-extrabold tracking-tight text-gradient-primary block mb-2 font-display">
        {{ displayValue }}
      </span>
      <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
        {{ label }}
      </h3>
    </div>
    <p v-if="description" class="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
