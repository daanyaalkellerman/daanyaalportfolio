<template>
  <div>
    <MobileLandingPage
      v-if="isMobile"
      :projects="projects"
      :experience="experience"
      :skills="skills"
      :social-links="socialLinks"
      :total-skill-items="totalSkillItems"
      :form="form"
      :submitted="submitted"
      :submit-form="submitForm"
    />

    <div
      v-else
      class="bg-white text-black dark:bg-[#0a0a0d] dark:text-white overflow-x-hidden transition-colors duration-500"
    >
      <div
        class="fixed inset-0 -z-10 bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-black dark:via-[#0f172a] dark:to-black transition-colors duration-500"
      ></div>

      <header
        class="fixed w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-black/40 border-b border-black/5 dark:border-white/5"
      >
        <div
          class="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center"
        >
          <span class="tracking-widest text-sm md:text-base font-semibold">
            DAANYAAL KELLERMAN
          </span>

          <nav
            class="hidden md:flex gap-10 text-xs uppercase tracking-widest text-gray-400 dark:text-gray-400"
          >
            <a href="#about" class="hover:text-black dark:hover:text-white transition">
              About
            </a>
            <a href="#projects" class="hover:text-black dark:hover:text-white transition">
              Work
            </a>
            <a
              href="#experience"
              class="hover:text-black dark:hover:text-white transition"
            >
              Experience
            </a>
            <a href="#skills" class="hover:text-black dark:hover:text-white transition">
              Skills
            </a>
            <a href="#contact" class="hover:text-black dark:hover:text-white transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section id="about" class="min-h-screen flex items-center pt-28 sm:pt-32 relative">
        <div
          class="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14 md:gap-24 items-center"
        >
          <div>
            <h1
              class="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-8 sm:mb-10"
            >
              Engineering digital
              <span class="block text-gray-500 dark:text-gray-400">
                experiences with impact.
              </span>
            </h1>

            <p
              class="text-gray-600 dark:text-gray-400 text-lg sm:text-xl max-w-xl mb-10 sm:mb-12"
            >
              Full-Stack Developer building scalable applications with React, VueJs, PHP,
              Node.js and modern backend architecture.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-center">
              <a
                href="#projects"
                class="inline-flex items-center justify-center border border-black/20 dark:border-white/20 px-8 py-4 rounded-full uppercase tracking-widest text-xs hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition"
              >
                View Work
              </a>
              <a
                href="#contact"
                class="inline-flex items-center text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white transition uppercase text-xs tracking-widest"
              >
                Let’s Talk →
              </a>
            </div>
          </div>

          <div
            class="relative perspective overflow-hidden rounded-3xl"
            @mousemove="handleHeroMove"
            @mouseleave="resetHero"
          >
            <div
              v-if="!heroLoaded"
              class="absolute inset-0 bg-gray-300 dark:bg-gray-800 animate-pulse rounded-3xl shadow-2xl"
            ></div>
            <img
              ref="heroImage"
              src="/DK-OTHER.webp"
              alt="Daanyaal Kellerman portrait"
              fetchpriority="high"
              decoding="async"
              @load="heroLoaded = true"
              :class="[
                'rounded-3xl shadow-2xl will-change-transform transition-transform duration-700 ease-out',
                heroLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
              ]"
            />
          </div>
        </div>
      </section>

      <section
        id="projects"
        class="py-24 sm:py-32 md:py-40 border-t border-black/5 dark:border-white/5"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="mb-14 sm:mb-20 md:mb-24 reveal">
            <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p
                  class="text-[0.7rem] uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400"
                >
                  Portfolio Highlights
                </p>
                <h3 class="mt-4 text-4xl sm:text-5xl font-bold">Selected Work</h3>
              </div>
              <p class="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl">
                Real-world systems built with scalability and performance in mind.
              </p>
            </div>
          </div>

          <div v-if="projects.length > 0" class="space-y-8 sm:space-y-10 md:space-y-12">
            <article
              v-for="(project, index) in projects"
              :key="index"
              class="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/75 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)] backdrop-blur-sm reveal dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div class="absolute inset-0 opacity-90"></div>

              <div
                class="relative grid gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(24rem,0.95fr)]"
              >
                <div
                  :class="index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'"
                  class="p-7 lg:p-8"
                >
                  <div
                    class="relative overflow-hidden rounded-[1.8rem] border border-black/10 bg-black/[0.03] dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <div
                      v-if="!project.loaded"
                      class="absolute inset-0 animate-pulse bg-gray-300/70 dark:bg-gray-800/70"
                    ></div>
                    <img
                      :src="project.image"
                      :alt="`${project.title} project preview`"
                      loading="lazy"
                      decoding="async"
                      @load="project.loaded = true"
                      class="h-[32rem] w-full object-cover object-top transition duration-700 hover:scale-[1.03]"
                      :class="project.loaded ? 'opacity-100' : 'opacity-0'"
                    />

                    <div
                      class="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6"
                    >
                      <div>
                        <p
                          class="text-[0.65rem] uppercase tracking-[0.35em] text-white/70"
                        >
                          Featured Project
                        </p>
                        <p class="mt-2 text-sm font-medium text-white/90">
                          {{ project.category || "Web Application" }}
                        </p>
                      </div>
                      <div
                        class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-white backdrop-blur"
                      >
                        {{ String(index + 1).padStart(2, "0") }}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  :class="index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'"
                  class="flex flex-col justify-between p-8 lg:p-10"
                >
                  <div>
                    <div class="mb-6 flex flex-wrap items-center gap-3">
                      <span
                        class="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-gray-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-gray-300"
                      >
                        {{ project.category || "Case Study" }}
                      </span>
                      <span
                        v-if="project.year"
                        class="rounded-full border border-black/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-gray-500 dark:border-white/10 dark:text-gray-400"
                      >
                        {{ project.year }}
                      </span>
                    </div>

                    <h4 class="max-w-xl text-4xl font-semibold leading-tight">
                      {{ project.title }}
                    </h4>

                    <p
                      class="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300"
                    >
                      {{ project.description }}
                    </p>

                    <div
                      v-if="project.highlights && project.highlights.length"
                      class="mt-7 grid gap-3 xl:grid-cols-2"
                    >
                      <div
                        v-for="(highlight, highlightIndex) in project.highlights"
                        :key="highlightIndex"
                        class="rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm text-gray-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200"
                      >
                        {{ highlight }}
                      </div>
                    </div>
                  </div>

                  <div class="mt-8">
                    <div class="flex flex-wrap gap-2.5">
                      <span
                        v-for="(tech, techIndex) in project.stack"
                        :key="techIndex"
                        class="rounded-full border border-black/10 px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-gray-600 dark:border-white/10 dark:text-gray-300"
                      >
                        {{ tech }}
                      </span>
                    </div>

                    <div class="mt-8 flex flex-wrap items-center gap-3">
                      <a
                        v-if="project.live"
                        :href="project.live"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-xs uppercase tracking-[0.25em] transition hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
                      >
                        View Live Site
                      </a>

                      <a
                        v-if="project.github"
                        :href="project.github"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-xs uppercase tracking-[0.25em] text-gray-600 transition hover:border-black hover:text-black dark:border-white/10 dark:text-gray-300 dark:hover:border-white dark:hover:text-white"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div v-else class="text-center py-40 reveal">
            <h4 class="text-4xl font-semibold mb-6 text-gray-500 dark:text-gray-400">
              Projects Coming Soon
            </h4>
            <p class="text-gray-400 dark:text-gray-500 text-lg">
              Exciting projects are on the way! Stay tuned for updates.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" class="py-40 border-t border-black/5 dark:border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="mb-24 reveal">
            <h3 class="text-5xl font-bold mb-6">Experience</h3>
            <p class="text-gray-600 dark:text-gray-400 max-w-2xl">
              Professional journey building high-impact digital systems.
            </p>
          </div>

          <div class="space-y-16">
            <div
              v-for="(job, index) in experience"
              :key="index"
              class="reveal border-l border-black/10 dark:border-white/10 pl-10 relative"
            >
              <div
                class="absolute w-3 h-3 bg-black dark:bg-white rounded-full -left-[7px] top-2"
              ></div>

              <span
                class="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-widest"
              >
                {{ job.period }}
              </span>

              <h4 class="text-2xl font-semibold mt-2 mb-4">
                {{ job.role }}
              </h4>

              <p class="text-gray-600 dark:text-gray-400">
                {{ job.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        class="pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-40 md:pb-24 border-t border-black/5 dark:border-white/5"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="mb-16 reveal">
            <div
              class="rounded-[2.5rem] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div
                class="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between"
              >
                <div class="max-w-3xl">
                  <p
                    class="text-[0.72rem] uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400"
                  >
                    Skill Stack
                  </p>
                  <h3 class="mt-4 text-5xl font-bold">Core Skills</h3>
                  <p class="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    The tools and frameworks I rely on to design interfaces, ship product,
                    and build dependable backends.
                  </p>
                </div>

                <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div
                    class="rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <p
                      class="text-[0.65rem] uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400"
                    >
                      Areas
                    </p>
                    <p class="mt-2 text-3xl font-semibold">{{ skills.length }}</p>
                  </div>
                  <div
                    class="rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <p
                      class="text-[0.65rem] uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400"
                    >
                      Tools
                    </p>
                    <p class="mt-2 text-3xl font-semibold">{{ totalSkillItems }}</p>
                  </div>
                  <div
                    class="rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <p
                      class="text-[0.65rem] uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400"
                    >
                      Focus
                    </p>
                    <p
                      class="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-700 dark:text-gray-200"
                    >
                      Full Stack
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid gap-6 lg:grid-cols-2 reveal">
            <div
              v-for="(skill, index) in skills"
              :key="index"
              class="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_-56px_rgba(15,23,42,0.38)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20"
            >
              <div class="absolute inset-0"></div>
              <div class="relative">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p
                      class="text-[0.65rem] uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400"
                    >
                      {{ String(index + 1).padStart(2, "0") }}
                    </p>
                    <h4 class="mt-3 text-2xl font-semibold">
                      {{ skill.category }}
                    </h4>
                  </div>
                  <div
                    class="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.28em] text-gray-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300"
                  >
                    {{ skill.items.length }} tools
                  </div>
                </div>

                <p
                  class="mt-4 max-w-lg text-sm leading-7 text-gray-600 dark:text-gray-300"
                >
                  {{ skill.summary }}
                </p>

                <ul class="mt-6 flex flex-wrap gap-3">
                  <li
                    v-for="(item, i) in skill.items"
                    :key="i"
                    class="rounded-full border border-black/10 bg-black/[0.03] px-4 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-gray-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        class="pt-20 pb-24 sm:pt-24 sm:pb-28 md:pt-24 md:pb-40 border-t border-black/5 dark:border-white/5"
      >
        <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h3 class="text-5xl font-bold mb-8 reveal">
            Let’s build something exceptional.
          </h3>

          <p class="text-gray-600 dark:text-gray-400 mb-16 reveal">
            Open to collaborations and innovative builds.
          </p>

          <div class="mb-12 flex flex-wrap items-center justify-center gap-4 reveal">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="link.label"
              :title="link.label"
              class="inline-flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-gray-700 transition hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
            >
              <svg
                v-if="link.icon === 'linkedin'"
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="h-5 w-5 fill-current"
              >
                <path
                  d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.01 2.01 0 0 0 3.25 5c0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2ZM20.75 13.06c0-3.47-2.2-4.91-4.57-4.91-1.91 0-3.07 1.05-3.57 1.79V8.5H9.37c.04.95 0 11.5 0 11.5h3.24v-6.42c0-.34.02-.68.13-.92.27-.68.9-1.39 1.95-1.39 1.38 0 1.93 1.05 1.93 2.59V20h3.24v-6.94Z"
                />
              </svg>
              <svg
                v-else-if="link.icon === 'github'"
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="h-5 w-5 fill-current"
              >
                <path
                  d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.97c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.6.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
                />
              </svg>
            </a>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6 text-left reveal">
            <input
              v-model="form.name"
              type="text"
              placeholder="Your name"
              required
              class="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-black dark:focus:border-white transition"
            />

            <input
              v-model="form.email"
              type="email"
              placeholder="Your email"
              required
              class="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-black dark:focus:border-white transition"
            />

            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Your message"
              required
              class="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-black dark:focus:border-white transition"
            ></textarea>

            <button
              type="submit"
              class="w-full border border-black dark:border-white py-4 rounded-full uppercase tracking-widest text-xs hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition duration-300"
            >
              Send Message
            </button>

            <p v-if="submitted" class="text-green-400 text-center mt-6">
              Message sent successfully.
            </p>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted, onUnmounted } from "vue";
import MobileLandingPage from "./MobileLandingPage.vue";

export default {
  name: "CinematicPortfolio",
  components: {
    MobileLandingPage,
  },
  setup() {
    const heroImage = ref(null);
    const heroLoaded = ref(false);
    const isMobile = ref(false);

    const form = ref({ name: "", email: "", message: "" });
    const submitted = ref(false);
    const socialLinks = ref([
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/daanyaal-kellerman-1aba78300",
        icon: "linkedin",
      },
      {
        label: "GitHub",
        href: "https://github.com/daanyaalkellerman",
        icon: "github",
      },
    ]);

    const theme = ref("system");
    let colorSchemeQuery = null;
    let themeTransitionTimeout = null;

    const applyTheme = () => {
      const root = document.documentElement;
      root.classList.add("theme-switching");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", prefersDark);
      window.clearTimeout(themeTransitionTimeout);
      themeTransitionTimeout = window.setTimeout(() => {
        root.classList.remove("theme-switching");
      }, 450);
    };

    const projects = ref([
      {
        title: "Personal - Asset Management System",
        description:
          "This is a personal project I built to manage a company's assets and expenses. It features a Vue.js frontend with a Node.js backend and a MariaDB database. The system allows me to track my investments, expenses, and overall net worth in one place.",
        stack: ["Vue.js", "MariaDB", "Tailwind", "Firebase", "Render", "Node.js"],
        category: "Finance Platform",
        year: "2026",
        highlights: [
          "Tracks assets, expenses, investments, and net worth in one workflow.",
          "Built with a dedicated backend and persistent relational data model.",
        ],
        image: "/ATool.png",
        live: "https://assetmanagement-6c645.web.app/",
        github: "",
        loaded: false,
      },
    ]);

    const experience = ref([
      {
        period: "July 2025 - Present",
        role: "FutureRent - Mid-Level Developer",
        description:
          "Promoted to Mid-Level Developer after demonstrating strong technical leadership. Currently leading development on the main company website (www.futurerent.co.za) and multiple marketing campaigns. Responsible for architecting and implementing complex features while mentoring junior developers.",
        highlights: ["React.js", "Vue.js", "Next.js", "Knex.js", "Team Leadership"],
      },
      {
        period: "July 2024 - July 2025",
        role: "FutureRent - Junior Developer",
        description:
          "Developed in-house applications designed to streamline workflows and enhance productivity across the organization. Contributed to multiple campaigns and worked on the core platform. Gained extensive experience with React, Next.js, and backend integration.",
        highlights: [
          "Professional Development",
          "Full-stack Development",
          "Team Collaboration",
        ],
      },
      {
        period: "March - July 2024",
        role: "LC Studio - Web Development Intern",
        description:
          "Grew my professional skills as a web development intern at LC Studio. Worked on real client projects while continuing to expand knowledge of modern web development practices.",
        highlights: ["Professional Development", "Client Work", "Team Collaboration"],
      },
      {
        period: "2023 - 2024",
        role: "Life Choices Coding Academy",
        description:
          "Discovered my passion for frontend development and built fullstack projects while mentoring fellow students. Recognized with multiple awards including Certificate of Excellence, Top Capstone Project, Top Student, and Top Overall Achiever.",
        highlights: ["Fullstack Projects", "Academic Excellence", "Mentorship"],
      },
      {
        period: "2019",
        role: "Discovering My Passion - False Bay College",
        description:
          "My journey into tech began at False Bay College in 2019, where I first discovered my love for coding. This experience planted the seed for my career path in development.",
        highlights: ["Foundational Skills", "Career Discovery", "Academic Foundation"],
      },
    ]);

    const skills = ref([
      {
        category: "Frontend",
        summary:
          "Component-driven interfaces focused on performance, responsiveness, and maintainable design systems.",
        items: ["React", "Next.js", "Vue", "Tailwind"],
      },
      {
        category: "Backend",
        summary:
          "APIs and server-side architecture built for business workflows, integrations, and scalable logic.",
        items: ["Node", "Express", "Knex", "PHP"],
      },
      {
        category: "Database",
        summary:
          "Relational and document-based storage for products that need clear data modeling and reliable querying.",
        items: ["MySQL", "PostgreSQL", "MongoDB"],
      },
      {
        category: "Mobile",
        summary:
          "Cross-platform app development with shared product thinking and fast iteration across devices.",
        items: ["React Native", "Expo"],
      },
    ]);

    const totalSkillItems = computed(() =>
      skills.value.reduce((sum, skill) => sum + skill.items.length, 0)
    );

    const submitForm = async () => {
      const response = await fetch("https://formspree.io/f/xpwrlajv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form.value),
      });

      if (response.ok) {
        submitted.value = true;
        form.value = { name: "", email: "", message: "" };
        setTimeout(() => (submitted.value = false), 3000);
      }
    };

    const scrollOffset = ref(0);
    const mouseX = ref(0);
    const mouseY = ref(0);
    let mobileQuery = null;

    const updateTransform = () => {
      if (!heroImage.value) return;
      heroImage.value.style.transform = `
        translateY(${scrollOffset.value}px)
        rotateY(${mouseX.value}deg)
        rotateX(${mouseY.value * -1}deg)
      `;
    };

    const handleScroll = () => {
      scrollOffset.value = window.scrollY * 0.15;
      updateTransform();
    };

    const handleHeroMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.value = x * 10;
      mouseY.value = y * 10;
      updateTransform();
    };

    const resetHero = () => {
      mouseX.value = 0;
      mouseY.value = 0;
      updateTransform();
    };

    const syncViewportMode = () => {
      isMobile.value = window.matchMedia("(max-width: 767px)").matches;
    };

    onMounted(() => {
      syncViewportMode();
      mobileQuery = window.matchMedia("(max-width: 767px)");
      if (mobileQuery.addEventListener) {
        mobileQuery.addEventListener("change", syncViewportMode);
      } else {
        mobileQuery.addListener(syncViewportMode);
      }

      applyTheme();
      colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      if (colorSchemeQuery.addEventListener) {
        colorSchemeQuery.addEventListener("change", applyTheme);
      } else {
        colorSchemeQuery.addListener(applyTheme);
      }

      window.addEventListener("scroll", handleScroll);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("active");
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(themeTransitionTimeout);
      if (mobileQuery?.removeEventListener) {
        mobileQuery.removeEventListener("change", syncViewportMode);
      } else if (mobileQuery?.removeListener) {
        mobileQuery.removeListener(syncViewportMode);
      }
      if (colorSchemeQuery?.removeEventListener) {
        colorSchemeQuery.removeEventListener("change", applyTheme);
      } else if (colorSchemeQuery?.removeListener) {
        colorSchemeQuery.removeListener(applyTheme);
      }
    });

    return {
      heroImage,
      heroLoaded,
      isMobile,
      projects,
      experience,
      skills,
      socialLinks,
      form,
      submitted,
      submitForm,
      theme,
      totalSkillItems,
      handleHeroMove,
      resetHero,
    };
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

.perspective {
  perspective: 1200px;
}

img {
  transition: opacity 0.7s ease, transform 0.7s ease;
}

html.theme-switching *,
html.theme-switching *::before,
html.theme-switching *::after {
  transition: background-color 0.45s ease, border-color 0.45s ease, color 0.45s ease,
    fill 0.45s ease, stroke 0.45s ease, box-shadow 0.45s ease;
}
</style>
