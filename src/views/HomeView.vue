<script setup>
import { ArrowRight, Download, Mail, Code } from '@lucide/vue'
import { portfolioData } from '../data/portfolioData'
import ProjectCard from '../components/ProjectCard.vue'
import StatCard from '../components/StatCard.vue'

const personalInfo = portfolioData.personalInfo
const stats = portfolioData.stats.slice(0, 3)
const featuredProjects = portfolioData.projects.slice(0, 2)
</script>

<template>
  <div class="relative overflow-hidden w-full flex-grow flex flex-col justify-center">
    <!-- Animated background glowing blobs -->
    <div class="absolute top-1/4 left-1/10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
    <div class="absolute top-1/3 right-1/10 w-96 h-96 bg-teal-accent/5 rounded-full blur-3xl animate-float pointer-events-none"></div>

    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 w-full">
      <!-- Left Info -->
      <div class="flex-1 space-y-6 text-center md:text-left">
        <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold bg-primary-500/10 text-primary-600 dark:text-primary-400 uppercase tracking-widest border border-primary-500/10">
          <Code class="w-3.5 h-3.5" />
          Available for Opportunities
        </span>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-800 dark:text-slate-100 font-display">
          Hi, I'm <span class="text-gradient-primary">{{ personalInfo.name }}</span>
        </h1>
        <h2 class="text-xl sm:text-2xl font-bold text-slate-600 dark:text-slate-300">
          {{ personalInfo.title }}
        </h2>
        <p class="text-base sm:text-md text-slate-550 dark:text-slate-400 max-w-xl leading-relaxed mx-auto md:mx-0">
          {{ personalInfo.shortBio }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
          <router-link
            to="/projects"
            class="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 hover:scale-102 hover:-translate-y-0.5 active:scale-98 transition-all cursor-pointer group"
          >
            <span>View Projects</span>
            <ArrowRight class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </router-link>
          
          <router-link
            to="/contact"
            class="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold hover:bg-slate-100 dark:hover:bg-slate-850 hover:scale-102 hover:-translate-y-0.5 active:scale-98 transition-all cursor-pointer"
          >
            <Mail class="w-4 h-4" />
            <span>Contact Me</span>
          </router-link>
          
          <a
            :href="personalInfo.resumeUrl"
            class="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-350 font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-102 hover:-translate-y-0.5 active:scale-98 transition-all cursor-pointer"
          >
            <Download class="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>
      </div>

      <!-- Right Avatar -->
      <div class="flex-shrink-0 relative">
        <div class="absolute inset-0 bg-gradient-to-tr from-primary-500 to-teal-accent rounded-3xl blur-2xl opacity-20 transform rotate-6 scale-95 pointer-events-none"></div>
        <div class="relative glass-panel p-4 rounded-[2.5rem] overflow-hidden">
          <img
            :src="personalInfo.avatar"
            :alt="personalInfo.name"
            class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[2rem] shadow-2xl relative z-10 bg-slate-100 dark:bg-slate-900"
          />
        </div>
      </div>
    </section>

    <!-- Stats Banner -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-y border-slate-200/40 dark:border-slate-850/45 w-full my-6">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div v-for="stat in stats" :key="stat.label">
          <StatCard :value="stat.value" :label="stat.label" :description="stat.description" />
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div class="space-y-2 text-center sm:text-left">
          <h2 class="text-3xl font-extrabold text-slate-800 dark:text-slate-100 font-display">
            Featured Projects
          </h2>
          <p class="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            A small selection of my recent works. Check out the projects page for more.
          </p>
        </div>
        <router-link
          to="/projects"
          class="flex items-center gap-1.5 text-sm font-bold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 group mx-auto sm:mx-0 cursor-pointer"
        >
          <span>See all projects</span>
          <ArrowRight class="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="project in featuredProjects" :key="project.id" class="h-full">
          <ProjectCard :project="project" />
        </div>
      </div>
    </section>
  </div>
</template>
