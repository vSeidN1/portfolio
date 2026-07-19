<script setup>
import { ref, reactive } from "vue";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, CheckCircle } from "@lucide/vue";
import { portfolioData } from "../data/portfolioData";

const personalInfo = portfolioData.personalInfo;

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSending = ref(false);
const isSuccess = ref(false);

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateForm = () => {
  let isValid = true;

  if (!form.name.trim()) {
    errors.name = "Name is required";
    isValid = false;
  } else if (form.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
    isValid = false;
  } else {
    errors.name = "";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!validateEmail(form.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  } else {
    errors.email = "";
  }

  if (!form.subject.trim()) {
    errors.subject = "Subject is required";
    isValid = false;
  } else if (form.subject.length < 4) {
    errors.subject = "Subject must be at least 4 characters";
    isValid = false;
  } else {
    errors.subject = "";
  }

  if (!form.message.trim()) {
    errors.message = "Message is required";
    isValid = false;
  } else if (form.message.length < 10) {
    errors.message = "Message must be at least 10 characters";
    isValid = false;
  } else {
    errors.message = "";
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  isSending.value = true;

  try {
    await emailjs.send(
      "service_ax3b1vp",
      "template_bv0l1xd",
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "tIOaIhVPAgQOCd9fA",
    );

    isSuccess.value = true;

    form.name = "";
    form.email = "";
    form.subject = "";
    form.message = "";

    setTimeout(() => {
      isSuccess.value = false;
    }, 5000);
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send message. Please try again.");
  } finally {
    isSending.value = false;
  }
};
</script>

<template>
  <div
    class="relative py-12 md:py-16 overflow-hidden w-full flex-grow flex flex-col justify-center"
  >
    <!-- Glowing background elements -->
    <div
      class="absolute bottom-1/10 right-1/10 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <!-- Header -->
      <div class="text-center max-w-xl mx-auto space-y-2 mb-12">
        <h1
          class="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 font-display"
        >
          Contact <span class="text-gradient-primary">Me</span>
        </h1>
        <p class="text-sm text-slate-550 dark:text-slate-400">
          Have an exciting project or want to collaborate? Reach out using the
          form below!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Contact Cards / Info -->
        <div class="lg:col-span-5 space-y-6">
          <div class="glass-card p-6 rounded-2xl space-y-6">
            <h3
              class="text-xl font-bold text-slate-800 dark:text-slate-100 font-display"
            >
              Contact Information
            </h3>

            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div
                  class="p-3 rounded-xl bg-primary-500/10 text-primary-500 dark:bg-primary-500/20"
                >
                  <Mail class="w-5 h-5" />
                </div>
                <div>
                  <p
                    class="text-xs text-slate-450 dark:text-slate-500 font-bold uppercase tracking-wider"
                  >
                    Email
                  </p>
                  <a
                    :href="`mailto:${personalInfo.socials.email}`"
                    class="text-sm font-semibold text-slate-750 dark:text-slate-200 hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    {{ personalInfo.socials.email }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="p-3 rounded-xl bg-primary-500/10 text-primary-500 dark:bg-primary-500/20"
                >
                  <MapPin class="w-5 h-5" />
                </div>
                <div>
                  <p
                    class="text-xs text-slate-450 dark:text-slate-500 font-bold uppercase tracking-wider"
                  >
                    Location
                  </p>
                  <p
                    class="text-sm font-semibold text-slate-750 dark:text-slate-200"
                  >
                    {{ personalInfo.socials.location }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Stylized Radar Map Card -->
          <div
            class="relative h-48 bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-850/50 flex items-center justify-center p-4"
          >
            <div
              class="absolute inset-0 bg-[radial-gradient(#ddd_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-60"
            ></div>

            <!-- Radar scan circle -->
            <div class="relative w-28 h-28 flex items-center justify-center">
              <span
                class="absolute w-full h-full rounded-full border border-primary-500/20 dark:border-primary-500/30 animate-ping"
              ></span>
              <span
                class="absolute w-1/2 h-1/2 rounded-full border border-primary-500/40 dark:border-primary-500/40 animate-ping"
              ></span>
              <div
                class="relative w-4 h-4 rounded-full bg-primary-500 z-10 shadow-lg shadow-primary-500/50 flex items-center justify-center"
              >
                <span
                  class="absolute w-2 h-2 rounded-full bg-white animate-pulse"
                ></span>
              </div>
            </div>

            <div
              class="absolute bottom-4 left-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/50 dark:border-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300"
            >
              Loc: {{ personalInfo.socials.location }}
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-7">
          <form
            @submit.prevent="handleSubmit"
            class="glass-card p-6 md:p-8 rounded-3xl space-y-5"
          >
            <!-- Form Header Notifications -->
            <Transition name="fade">
              <div
                v-if="isSuccess"
                class="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm"
              >
                <CheckCircle class="w-5 h-5 flex-shrink-0" />
                <span
                  >Thank you! Your message has been sent successfully. I will
                  get back to you shortly.</span
                >
              </div>
            </Transition>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Name Input -->
              <div class="space-y-1.5">
                <label
                  for="name"
                  class="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="John Doe"
                  class="w-full px-4 py-3 rounded-xl border bg-white/40 dark:bg-slate-900/40 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                  :class="
                    errors.name
                      ? 'border-rose-500 focus:ring-rose-500/30'
                      : 'border-slate-200 dark:border-slate-800'
                  "
                />
                <span
                  v-if="errors.name"
                  class="text-xs text-rose-500 font-medium block"
                >
                  {{ errors.name }}
                </span>
              </div>

              <!-- Email Input -->
              <div class="space-y-1.5">
                <label
                  for="email"
                  class="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  class="w-full px-4 py-3 rounded-xl border bg-white/40 dark:bg-slate-900/40 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                  :class="
                    errors.email
                      ? 'border-rose-500 focus:ring-rose-500/30'
                      : 'border-slate-200 dark:border-slate-800'
                  "
                />
                <span
                  v-if="errors.email"
                  class="text-xs text-rose-500 font-medium block"
                >
                  {{ errors.email }}
                </span>
              </div>
            </div>

            <!-- Subject Input -->
            <div class="space-y-1.5">
              <label
                for="subject"
                class="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400"
              >
                Subject
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                placeholder="Project Discussion"
                class="w-full px-4 py-3 rounded-xl border bg-white/40 dark:bg-slate-900/40 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                :class="
                  errors.subject
                    ? 'border-rose-500 focus:ring-rose-500/30'
                    : 'border-slate-200 dark:border-slate-800'
                "
              />
              <span
                v-if="errors.subject"
                class="text-xs text-rose-500 font-medium block"
              >
                {{ errors.subject }}
              </span>
            </div>

            <!-- Message Input -->
            <div class="space-y-1.5">
              <label
                for="message"
                class="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400"
              >
                Message
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="Tell me about your project details..."
                class="w-full px-4 py-3 rounded-xl border bg-white/40 dark:bg-slate-900/40 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all resize-none"
                :class="
                  errors.message
                    ? 'border-rose-500 focus:ring-rose-500/30'
                    : 'border-slate-200 dark:border-slate-800'
                "
              ></textarea>
              <span
                v-if="errors.message"
                class="text-xs text-rose-500 font-medium block"
              >
                {{ errors.message }}
              </span>
            </div>

            <button
              type="submit"
              :disabled="isSending"
              class="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 hover:scale-[1.01] hover:-translate-y-0.5 active:scale-98 transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              <span v-if="isSending">Sending...</span>
              <span v-else>Send Message</span>
              <Send class="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
