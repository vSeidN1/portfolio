<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { ChevronLeft, ChevronRight, Quote } from "@lucide/vue";

const props = defineProps({
  testimonials: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);
let autoplayInterval = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.testimonials.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.testimonials.length) %
    props.testimonials.length;
};

const setSlide = (index) => {
  currentIndex.value = index;
};

const startAutoplay = () => {
  stopAutoplay();
  autoplayInterval = setInterval(nextSlide, 6000);
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<template>
  <div
    class="relative max-w-4xl mx-auto px-4 py-4"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <div
      class="relative overflow-hidden h-[340px] sm:h-[260px] md:h-[220px] rounded-3xl glass-card p-8 md:p-12 flex flex-col justify-center"
    >
      <div
        class="absolute top-6 left-6 text-slate-350 dark:text-slate-800 pointer-events-none opacity-20"
      >
        <Quote class="w-16 h-16 transform rotate-180" />
      </div>

      <div class="relative w-full h-full">
        <TransitionGroup name="fade-slide">
          <div
            v-for="(item, index) in testimonials"
            v-show="index === currentIndex"
            :key="item.id"
            class="absolute inset-0 flex flex-col justify-between"
          >
            <p
              class="text-sm md:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed z-10"
            >
              "{{ item.quote }}"
            </p>

            <div class="flex items-center gap-4 mt-6">
              <img
                :src="item.avatar"
                :alt="item.name"
                class="w-12 h-12 rounded-full object-cover border-2 border-primary-500"
              />
              <div>
                <h4
                  class="font-bold text-slate-800 dark:text-slate-100 font-display text-sm md:text-base"
                >
                  {{ item.name }}
                </h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">
                  {{ item.role }} at
                  <span
                    class="font-semibold text-primary-500 dark:text-primary-400"
                    >{{ item.company }}</span
                  >
                </p>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>

    <div class="flex justify-center items-center gap-4 mt-6">
      <button
        @click="prevSlide"
        class="p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all cursor-pointer"
        aria-label="Previous testimonial"
      >
        <ChevronLeft class="w-5 h-5" />
      </button>

      <div class="flex gap-2">
        <button
          v-for="(_, index) in testimonials"
          :key="index"
          @click="setSlide(index)"
          class="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer"
          :class="
            index === currentIndex
              ? 'bg-primary-500 w-6'
              : 'bg-slate-350 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
          "
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>

      <button
        @click="nextSlide"
        class="p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all cursor-pointer"
        aria-label="Next testimonial"
      >
        <ChevronRight class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
