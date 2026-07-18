<script setup>
import { ref, computed } from "vue";
import { Search, Grid } from "@lucide/vue";
import { portfolioData } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard.vue";

const projects = portfolioData.projects;
const searchQuery = ref("");
const selectedCategory = ref("All");

const categories = computed(() => {
  const list = ["All"];
  projects.forEach((project) => {
    if (project.category && !list.includes(project.category)) {
      list.push(project.category);
    }
  });
  return list;
});

const filteredProjects = computed(() => {
  return projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      project.description
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase()) ||
      project.tech.some((t) =>
        t.toLowerCase().includes(searchQuery.value.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory.value === "All" ||
      project.category === selectedCategory.value;

    return matchesSearch && matchesCategory;
  });
});

const selectCategory = (cat) => {
  selectedCategory.value = cat;
};
</script>

<template>
  <div class="relative py-12 md:py-16 overflow-hidden w-full flex-grow">
    <!-- Glowing background elements -->
    <div
      class="absolute top-1/10 left-1/10 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"
    ></div>

    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12"
    >
      <!-- Header -->
      <div class="text-center max-w-xl mx-auto space-y-2">
        <h1
          class="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 font-display"
        >
          My <span class="text-gradient-primary">Projects</span>
        </h1>
        <p class="text-sm text-slate-550 dark:text-slate-400">
          A showcase of real-world applications, tools, and platforms I have
          architected and developed.
        </p>
      </div>

      <!-- Filters & Search Toolbar -->
      <div
        class="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl border border-slate-200/40 dark:border-slate-850/50 glass-card"
      >
        <!-- Category Filters -->
        <div class="flex flex-wrap items-center gap-2 order-2 md:order-1">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectCategory(cat)"
            class="px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border"
            :class="
              selectedCategory === cat
                ? 'bg-primary-500 border-primary-500 text-white shadow-md shadow-primary-500/10'
                : 'border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80'
            "
          >
            {{ cat }}
          </button>
        </div>

        <!-- Search Bar -->
        <div class="relative w-full md:w-72 order-1 md:order-2">
          <span
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500"
          >
            <Search class="w-4 h-4" />
          </span>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search projects or tech..."
            class="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-850/60 bg-white/40 dark:bg-slate-900/40 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:focus:ring-primary-500/30 transition-all"
          />
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="relative min-h-[300px]">
        <TransitionGroup
          name="project-grid"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="project-grid-item"
          >
            <ProjectCard :project="project" />
          </div>
        </TransitionGroup>

        <!-- Empty State -->
        <div
          v-if="filteredProjects.length === 0"
          class="flex flex-col items-center justify-center py-16 text-center"
        >
          <div
            class="p-4 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-600 mb-4"
          >
            <Grid class="w-8 h-8" />
          </div>
          <h3
            class="text-lg font-bold text-slate-800 dark:text-slate-200 font-display"
          >
            No projects found
          </h3>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xs">
            Try adjusting your search query or selecting a different category
            filter.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-grid-move,
.project-grid-enter-active,
.project-grid-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-grid-enter-from,
.project-grid-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

.project-grid-leave-active {
  position: absolute;
}
</style>
