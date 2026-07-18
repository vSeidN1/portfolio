<script setup>
import { Layers, Server, Database, Terminal, Award } from "@lucide/vue";
import { portfolioData } from "../data/portfolioData";
import StatCard from "../components/StatCard.vue";
import SkillCard from "../components/SkillCard.vue";
import TimelineItem from "../components/TimelineItem.vue";
import TestimonialSlider from "../components/TestimonialSlider.vue";

const personalInfo = portfolioData.personalInfo;
const stats = portfolioData.stats;
const skills = portfolioData.skills;
const experience = portfolioData.experience;
const education = portfolioData.education;
const certifications = portfolioData.certifications;
const testimonials = portfolioData.testimonials;
</script>

<template>
  <div class="relative py-12 md:py-16 overflow-hidden w-full grow">
    <!-- Glowing background elements -->
    <div
      class="absolute top-1/10 right-1/10 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"
    ></div>
    <div
      class="absolute bottom-1/5 left-1/10 w-96 h-96 bg-teal-accent/5 rounded-full blur-3xl pointer-events-none"
    ></div>

    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20"
    >
      <!-- Section 1: Intro / Bio -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6">
          <h1
            class="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 font-display"
          >
            About <span class="text-gradient-primary">Me</span>
          </h1>
          <p
            class="text-sm md:text-base text-slate-650 dark:text-slate-350 leading-relaxed"
          >
            I am a passionate Web developer specializing in building modern
            Websites & web applications that prioritize performance, user
            experience, and accessibility.
          </p>
          <p
            class="text-sm md:text-base text-slate-650 dark:text-slate-350 leading-relaxed"
          >
            I'm a web developer dedicated to building modern, responsive, and
            scalable websites and Web applications. I enjoy transforming ideas into seamless
            digital experiences by developing intuitive user interfaces and
            backend APIs. My approach emphasizes clean architecture,
            performance, security, and maintainable code to deliver reliable,
            high-quality solutions.
          </p>
        </div>

        <!-- Big Stat List -->
        <div class="lg:col-span-5 grid grid-cols-2 gap-4">
          <div v-for="stat in stats" :key="stat.label">
            <StatCard :value="stat.value" :label="stat.label" />
          </div>
        </div>
      </section>

      <!-- Section 2: Skills Grid -->
      <section class="space-y-8">
        <div class="text-center max-w-xl mx-auto space-y-2">
          <h2
            class="text-3xl font-extrabold text-slate-800 dark:text-slate-100 font-display"
          >
            My Skill Set
          </h2>
          <p class="text-sm text-slate-550 dark:text-slate-400">
            A comprehensive overview of the languages, frameworks, databases,
            and DevOps utilities I utilize regularly.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            title="Frontend"
            :skills="skills.frontend"
            :icon="Layers"
          />
          <SkillCard title="Backend" :skills="skills.backend" :icon="Server" />
          <SkillCard
            title="Databases"
            :skills="skills.database"
            :icon="Database"
          />
          <SkillCard
            title="Tools & DevOps"
            :skills="skills.toolsDevops"
            :icon="Terminal"
          />
        </div>
      </section>

      <!-- Section 3: Experience & Education Timeline -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Work Experience -->
        <div class="space-y-8">
          <h3
            class="text-2xl font-bold text-slate-800 dark:text-slate-100 font-display"
          >
            Work Experience
          </h3>
          <div class="relative">
            <TimelineItem
              v-for="item in experience"
              :key="item.id"
              :item="item"
              type="experience"
            />
          </div>
        </div>

        <!-- Education & Certifications -->
        <div class="space-y-12">
          <!-- Education -->
          <div class="space-y-8">
            <h3
              class="text-2xl font-bold text-slate-800 dark:text-slate-100 font-display"
            >
              Education
            </h3>
            <div class="relative">
              <TimelineItem
                v-for="item in education"
                :key="item.id"
                :item="item"
                type="education"
              />
            </div>
          </div>

          <!-- Certifications -->
          <div class="space-y-6 pt-4">
            <h3
              class="text-2xl font-bold text-slate-800 dark:text-slate-100 font-display"
            >
              Certifications
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="cert in certifications"
                :key="cert.id"
                class="glass-card p-5 rounded-2xl flex items-start gap-3.5"
              >
                <div
                  class="p-2.5 rounded-xl bg-primary-500/10 text-primary-500 dark:bg-primary-500/20 mt-0.5"
                >
                  <Award class="w-5 h-5" />
                </div>
                <div>
                  <h4
                    class="text-sm font-bold text-slate-800 dark:text-slate-100 leading-snug"
                  >
                    {{ cert.name }}
                  </h4>
                  <p
                    class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium"
                  >
                    {{ cert.issuer }} • {{ cert.year }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Testimonials Slider -->
      <section class="space-y-8 pt-4">
        <div class="text-center max-w-xl mx-auto space-y-2">
          <h2
            class="text-3xl font-extrabold text-slate-800 dark:text-slate-100 font-display"
          >
            Recommendations
          </h2>
          <p class="text-sm text-slate-550 dark:text-slate-400">
            What some of my clients and team leads have to say about working
            with me.
          </p>
        </div>
        <TestimonialSlider :testimonials="testimonials" />
      </section>
    </div>
  </div>
</template>
