<template>
  <div
    class="md:hidden bg-white text-black dark:bg-[#0a0a0d] dark:text-white overflow-x-hidden transition-colors duration-500"
  >
    <div
      class="fixed inset-0 -z-10 bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-black dark:via-[#0f172a] dark:to-black transition-colors duration-500"
    ></div>

    <header
      class="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl dark:border-white/5 dark:bg-black/50"
    >
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div class="rounded-[2rem] p-3">
          <p class="mt-1 text-sm font-semibold tracking-[0.18em]">DAANYAAL KELLERMAN</p>
        </div>
      </div>
    </header>

    <main class="px-4 pb-20 pt-24">
      <section id="about" class="pt-6">
        <p
          class="text-[0.7rem] uppercase tracking-[0.38em] text-gray-500 dark:text-gray-400"
        >
          Full-Stack Developer
        </p>
        <h1 class="mt-5 text-4xl font-bold leading-tight">
          Engineering digital experiences with impact.
        </h1>
        <p class="mt-5 max-w-md text-base leading-7 text-gray-600 dark:text-gray-300">
          Building scalable applications with React, Vue, Next.js, Node.js and modern
          backend architecture.
        </p>

        <div class="mt-8 flex flex-col gap-3">
          <a
            href="#projects"
            class="inline-flex items-center justify-center rounded-full border border-black px-6 py-3 text-xs uppercase tracking-[0.25em] transition hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
          >
            View Work
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-xs uppercase tracking-[0.25em] text-gray-600 transition dark:border-white/10 dark:text-gray-300"
          >
            Let’s Talk
          </a>
        </div>

        <div
          class="mt-8 overflow-hidden rounded-[2rem] border border-black/10 shadow-2xl dark:border-white/10"
        >
          <img
            src="/IMG_7706.png"
            alt="Daanyaal Kellerman portrait"
            class="h-[26rem] w-full object-cover object-top"
          />
        </div>
      </section>

      <section
        id="projects"
        class="border-t border-black/5 pb-16 pt-20 dark:border-white/5"
      >
        <p
          class="text-[0.7rem] uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400"
        >
          Portfolio Highlights
        </p>
        <h2 class="mt-4 text-3xl font-bold">Selected Work</h2>
        <p class="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
          Real-world systems built with scalability and performance in mind.
        </p>

        <div v-if="projects.length > 0" class="mt-8 space-y-6">
          <article
            v-for="(project, index) in projects"
            :key="index"
            class="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 p-4 shadow-[0_22px_70px_-52px_rgba(15,23,42,0.55)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div class="absolute inset-0"></div>

            <div class="relative">
              <div class="mb-4 flex items-center justify-between gap-3">
                <span
                  class="rounded-full border border-black/10 bg-black/[0.04] px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-gray-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-gray-300"
                >
                  {{ project.category || "Featured Project" }}
                </span>
                <span
                  class="text-[0.65rem] uppercase tracking-[0.32em] text-gray-500 dark:text-gray-400"
                >
                  {{ String(index + 1).padStart(2, "0") }}
                </span>
              </div>

              <div
                class="relative overflow-hidden rounded-[1.5rem] border border-black/10 dark:border-white/10"
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
                  class="h-56 w-full object-cover object-top"
                  :class="project.loaded ? 'opacity-100' : 'opacity-0'"
                />
              </div>

              <h3 class="mt-6 text-2xl font-semibold leading-tight">
                {{ project.title }}
              </h3>

              <p class="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {{ project.description }}
              </p>

              <div
                v-if="project.highlights && project.highlights.length"
                class="mt-5 space-y-3"
              >
                <div
                  v-for="(highlight, highlightIndex) in project.highlights"
                  :key="highlightIndex"
                  class="rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm text-gray-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200"
                >
                  {{ highlight }}
                </div>
              </div>

              <div class="mt-6 flex flex-wrap gap-2.5">
                <span
                  v-for="(tech, techIndex) in project.stack"
                  :key="techIndex"
                  class="rounded-full border border-black/10 px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-gray-600 dark:border-white/10 dark:text-gray-300"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="mt-6 flex flex-col gap-3">
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
          </article>
        </div>
      </section>

      <section
        id="experience"
        class="border-t border-black/5 pb-16 pt-20 dark:border-white/5"
      >
        <p
          class="text-[0.7rem] uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400"
        >
          Experience
        </p>
        <h2 class="mt-4 text-3xl font-bold">Professional Journey</h2>

        <div class="mt-8 space-y-5">
          <article
            v-for="(job, index) in experience"
            :key="index"
            class="rounded-[1.75rem] border border-black/10 bg-black/[0.03] p-5 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <p
              class="text-[0.65rem] uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400"
            >
              {{ job.period }}
            </p>
            <h3 class="mt-3 text-xl font-semibold leading-tight">
              {{ job.role }}
            </h3>
            <p class="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
              {{ job.description }}
            </p>
          </article>
        </div>
      </section>

      <section
        id="skills"
        class="border-t border-black/5 pb-14 pt-20 dark:border-white/5"
      >
        <div>
          <p
            class="text-[0.7rem] uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400"
          >
            Skills
          </p>
          <h2 class="mt-4 text-3xl font-bold">Core Skills</h2>
          <p class="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
            A working stack built around modern interfaces, structured data, and scalable
            product delivery.
          </p>

          <div class="mt-6 grid grid-cols-3 gap-3">
            <div
              class="rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <p
                class="text-[0.6rem] uppercase tracking-[0.26em] text-gray-500 dark:text-gray-400"
              >
                Areas
              </p>
              <p class="mt-2 text-2xl font-semibold">{{ skills.length }}</p>
            </div>
            <div
              class="rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <p
                class="text-[0.6rem] uppercase tracking-[0.26em] text-gray-500 dark:text-gray-400"
              >
                Tools
              </p>
              <p class="mt-2 text-2xl font-semibold">{{ totalSkillItems }}</p>
            </div>
            <div
              class="rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <p
                class="text-[0.6rem] uppercase tracking-[0.26em] text-gray-500 dark:text-gray-400"
              >
                Focus
              </p>
              <p
                class="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gray-700 dark:text-gray-200"
              >
                Full Stack
              </p>
            </div>
          </div>
        </div>

        <div class="mt-6 space-y-4">
          <article
            v-for="(skill, index) in skills"
            :key="index"
            class="relative overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/80 p-5 shadow-[0_20px_60px_-50px_rgba(15,23,42,0.55)] dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div class="absolute inset-0"></div>
            <div class="relative">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p
                    class="text-[0.65rem] uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400"
                  >
                    {{ String(index + 1).padStart(2, "0") }}
                  </p>
                  <h3 class="mt-3 text-xl font-semibold">
                    {{ skill.category }}
                  </h3>
                </div>
                <div
                  class="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.25em] text-gray-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300"
                >
                  {{ skill.items.length }} tools
                </div>
              </div>

              <p class="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {{ skill.summary }}
              </p>

              <ul class="mt-5 flex flex-wrap gap-2.5">
                <li
                  v-for="(item, itemIndex) in skill.items"
                  :key="itemIndex"
                  class="rounded-full border border-black/10 bg-black/[0.03] px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-gray-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-200"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section
        id="contact"
        class="border-t border-black/5 pb-10 pt-16 dark:border-white/5"
      >
        <p
          class="text-[0.7rem] uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400"
        >
          Contact
        </p>
        <h2 class="mt-4 text-3xl font-bold">Let’s build something exceptional.</h2>
        <p class="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
          Open to collaborations and innovative builds.
        </p>

        <form @submit.prevent="submitForm" class="mt-8 space-y-4 text-left">
          <input
            v-model="form.name"
            type="text"
            placeholder="Your name"
            required
            class="w-full rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 focus:outline-none focus:border-black dark:border-white/10 dark:bg-white/[0.04] dark:focus:border-white"
          />

          <input
            v-model="form.email"
            type="email"
            placeholder="Your email"
            required
            class="w-full rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 focus:outline-none focus:border-black dark:border-white/10 dark:bg-white/[0.04] dark:focus:border-white"
          />

          <textarea
            v-model="form.message"
            rows="5"
            placeholder="Your message"
            required
            class="w-full rounded-2xl border border-black/10 bg-black/[0.03] px-5 py-4 focus:outline-none focus:border-black dark:border-white/10 dark:bg-white/[0.04] dark:focus:border-white"
          ></textarea>

          <button
            type="submit"
            class="w-full rounded-full border border-black py-4 text-xs uppercase tracking-[0.25em] transition hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
          >
            Send Message
          </button>

          <p v-if="submitted" class="text-center text-green-500 dark:text-green-400">
            Message sent successfully.
          </p>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "MobileLandingPage",
  props: {
    projects: {
      type: Array,
      required: true,
    },
    experience: {
      type: Array,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    totalSkillItems: {
      type: Number,
      required: true,
    },
    form: {
      type: Object,
      required: true,
    },
    submitted: {
      type: Boolean,
      required: true,
    },
    submitForm: {
      type: Function,
      required: true,
    },
  },
};
</script>
