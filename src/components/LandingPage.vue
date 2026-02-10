<template>
  <div class="bg-white text-black dark:bg-[#0a0a0d] dark:text-white overflow-x-hidden transition-colors duration-500">

    <!-- Background Gradient -->
    <div class="fixed inset-0 -z-10
      bg-gradient-to-b from-gray-100 via-white to-gray-100
      dark:from-black dark:via-[#0f172a] dark:to-black transition-colors duration-500">
    </div>

    <!-- HEADER -->
    <header class="fixed w-full z-50 backdrop-blur-xl
      bg-white/70 dark:bg-black/40
      border-b border-black/5 dark:border-white/5">
      <div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 class="tracking-widest text-sm md:text-base font-semibold">
          DAANYAAL KELLERMAN
        </h1>

        <!-- Nav -->
        <nav class="hidden md:flex gap-10 text-xs uppercase tracking-widest text-gray-400 dark:text-gray-400">
          <a href="#about" class="hover:text-black dark:hover:text-white transition">About</a>
          <a href="#projects" class="hover:text-black dark:hover:text-white transition">Work</a>
          <a href="#experience" class="hover:text-black dark:hover:text-white transition">Experience</a>
          <a href="#skills" class="hover:text-black dark:hover:text-white transition">Skills</a>
          <a href="#contact" class="hover:text-black dark:hover:text-white transition">Contact</a>
        </nav>

        <!-- Theme Switcher -->
        <div class="flex items-center gap-2 text-xs">
          <button
            @click="setTheme('light')"
            :class="theme==='light' ? 'font-semibold text-black dark:text-white' : 'text-gray-400 dark:text-gray-400'"
            class="hover:text-black dark:hover:text-white transition px-2 py-1 rounded">
            Light
          </button>
          <button
            @click="setTheme('dark')"
            :class="theme==='dark' ? 'font-semibold text-black dark:text-white' : 'text-gray-400 dark:text-gray-400'"
            class="hover:text-black dark:hover:text-white transition px-2 py-1 rounded">
            Dark
          </button>
        </div>
      </div>
    </header>

    <!-- HERO -->
    <section id="about" class="min-h-screen flex items-center pt-32 relative">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

        <div>
          <h2 class="text-6xl md:text-7xl font-bold leading-tight mb-10">
            Engineering digital
            <span class="block text-gray-500 dark:text-gray-400">
              experiences with impact.
            </span>
          </h2>

          <p class="text-gray-600 dark:text-gray-400 text-xl max-w-xl mb-12">
            Full-Stack Developer building scalable applications with
            React, Vue, Next.js, Node.js and modern backend architecture.
          </p>

          <div class="flex gap-8 items-center">
            <a href="#projects"
               class="border border-black/20 dark:border-white/20 px-8 py-4 rounded-full uppercase tracking-widest text-xs hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition">
              View Work
            </a>
            <a href="#contact"
               class="text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white transition uppercase text-xs tracking-widest">
              Let’s Talk →
            </a>
          </div>
        </div>

        <!-- Hero Image with shimmer + fade + scale -->
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
            src="/IMG_7706.png"
            @load="heroLoaded = true"
            :class="[
              'rounded-3xl shadow-2xl will-change-transform transition-transform duration-700 ease-out',
              heroLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            ]"
          />
        </div>

      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="py-40 border-t border-black/5 dark:border-white/5">
      <div class="max-w-7xl mx-auto px-6">

        <div class="mb-32 reveal">
          <h3 class="text-5xl font-bold mb-6">Selected Work</h3>
          <p class="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            Real-world systems built with scalability and performance in mind.
          </p>
        </div>

        <!-- Projects -->
        <div v-if="projects.length > 0">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="grid md:grid-cols-2 gap-24 items-center mb-40 reveal"
          >
            <div>
              <span class="text-gray-600 dark:text-gray-400 uppercase tracking-widest text-xs">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <h4 class="text-4xl font-semibold mt-4 mb-6">
                {{ project.title }}
              </h4>

              <p class="text-gray-600 dark:text-gray-400 mb-8">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-4 text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-8">
                <span v-for="(tech, t) in project.stack" :key="t">
                  {{ tech }}
                </span>
              </div>

              <div class="flex gap-6 text-sm items-center">
                <a v-if="project.live"
                  :href="project.live"
                  target="_blank"
                  class="border border-black/20 dark:border-white/20 px-6 py-2 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition">
                  Live →
                </a>

                <a v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white transition">
                  GitHub
                </a>
              </div>
            </div>

            <!-- Project Image with shimmer + fade + scale -->
            <div class="relative overflow-hidden rounded-3xl group border border-black/5 dark:border-white/5 h-80">
              <div 
                v-if="!project.loaded" 
                class="absolute inset-0 bg-gray-300 dark:bg-gray-800 animate-pulse"
              ></div>
              <img
                :src="project.image"
                @load="project.loaded = true"
                class="h-80 w-full object-cover rounded-3xl transform group-hover:scale-105 transition duration-700"
                :class="project.loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
              />
            </div>
          </div>
        </div>

        <!-- No projects -->
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

    <!-- EXPERIENCE -->
    <section id="experience" class="py-40 border-t border-black/5 dark:border-white/5">
      <div class="max-w-7xl mx-auto px-6">

        <div class="mb-24 reveal">
          <h3 class="text-5xl font-bold mb-6">Experience</h3>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl">
            Professional journey building high-impact digital systems.
          </p>
        </div>

        <div class="space-y-16">
          <div v-for="(job, index) in experience"
              :key="index"
              class="reveal border-l border-black/10 dark:border-white/10 pl-10 relative">

            <div class="absolute w-3 h-3 bg-black dark:bg-white rounded-full -left-[7px] top-2"></div>

            <span class="text-gray-600 dark:text-gray-400 text-sm uppercase tracking-widest">
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

    <!-- SKILLS -->
    <section id="skills" class="py-40 border-t border-black/5 dark:border-white/5">
      <div class="max-w-7xl mx-auto px-6">

        <div class="mb-24 reveal">
          <h3 class="text-5xl font-bold mb-6">Core Skills</h3>
          <p class="text-gray-600 dark:text-gray-400 max-w-2xl">
            Technologies and tools I use daily.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-10 reveal">
          <div v-for="(skill, index) in skills"
               :key="index"
               class="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-8 hover:border-black dark:hover:border-white transition group">

            <h4 class="text-lg font-semibold mb-6 group-hover:text-cyan-400 transition">
              {{ skill.category }}
            </h4>

            <ul class="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
              <li v-for="(item, i) in skill.items" :key="i">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="py-40 border-t border-black/5 dark:border-white/5">
      <div class="max-w-3xl mx-auto px-6 text-center">

        <h3 class="text-5xl font-bold mb-8 reveal">
          Let’s build something exceptional.
        </h3>

        <p class="text-gray-600 dark:text-gray-400 mb-16 reveal">
          Open to collaborations and innovative builds.
        </p>

        <form @submit.prevent="submitForm"
              class="space-y-6 text-left reveal">

          <input type="text"
                 v-model="form.name"
                 placeholder="Your name"
                 required
                 class="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-black dark:focus:border-white transition" />

          <input type="email"
                 v-model="form.email"
                 placeholder="Your email"
                 required
                 class="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-black dark:focus:border-white transition" />

          <textarea v-model="form.message"
                    rows="5"
                    placeholder="Your message"
                    required
                    class="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-black dark:focus:border-white transition"></textarea>

          <button type="submit"
                  class="w-full border border-black dark:border-white py-4 rounded-full uppercase tracking-widest text-xs hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition duration-300">
            Send Message
          </button>

          <p v-if="submitted" class="text-green-400 text-center mt-6">
            Message sent successfully.
          </p>

        </form>
      </div>
    </section>

  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "CinematicPortfolio",
  setup() {

    const heroImage = ref(null);
    const heroLoaded = ref(false);

    const form = ref({ name: "", email: "", message: "" });
    const submitted = ref(false);

    const theme = ref("system");

    const applyTheme = (mode) => {
      const root = document.documentElement;
      if (mode === "dark") root.classList.add("dark");
      else if (mode === "light") root.classList.remove("dark");
      else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        root.classList.toggle("dark", prefersDark);
      }
    };

    const setTheme = (mode) => {
      theme.value = mode;
      localStorage.setItem("theme", mode);
      applyTheme(mode);
    };

    const projects = ref([]);

    const experience = ref([
      {
        period: "July 2025 - Present",
        role: "FutureRent - Intermediate Developer",
        description: "Promoted to Intermediate Developer after demonstrating strong technical leadership. Currently leading development on the main company website (web.futurerent.co.za) and multiple marketing campaigns. Responsible for architecting and implementing complex features while mentoring junior developers.",
        highlights: ["React.js", "Next.js", "Knex.js", "Team Leadership"]
      },
      {
        period: "July 2024 - July 2025",
        role: "FutureRent - Junior Developer",
        description: "Developed in-house applications designed to streamline workflows and enhance productivity across the organization. Contributed to multiple campaigns and worked on the core platform. Gained extensive experience with React, Next.js, and backend integration.",
        highlights: ["Professional Development", "Full-stack Development", "Team Collaboration"]
      },
      {
        period: "March - July 2024",
        role: "LC Studio - Web Development Intern",
        description: "Grew my professional skills as a web development intern at LC Studio. Worked on real client projects while continuing to expand knowledge of modern web development practices.",
        highlights: ["Professional Development", "Client Work", "Team Collaboration"]
      },
      {
        period: "2023 - 2024",
        role: "Life Choices Coding Academy",
        description: "Discovered my passion for frontend development and built fullstack projects while mentoring fellow students. Recognized with multiple awards including Certificate of Excellence, Top Capstone Project, Top Student, and Top Overall Achiever.",
        highlights: ["Fullstack Projects", "Academic Excellence", "Mentorship"]
      },
      {
        period: "2019",
        role: "Discovering My Passion - False Bay College",
        description: "My journey into tech began at False Bay College in 2019, where I first discovered my love for coding. This experience planted the seed for my career path in development.",
        highlights: ["Foundational Skills", "Career Discovery", "Academic Foundation"]
      }
    ]);

    const skills = ref([
      { category: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind"] },
      { category: "Backend", items: ["Node", "Express", "Knex"] },
      { category: "Database", items: ["MySQL", "PostgreSQL", "MongoDB"] },
      { category: "Mobile", items: ["React Native", "Expo"] }
    ]);

    const submitForm = async () => {
      const response = await fetch("https://formspree.io/f/xpwrlajv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form.value)
      });

      if (response.ok) {
        submitted.value = true;
        form.value = { name: "", email: "", message: "" };
        setTimeout(() => submitted.value = false, 3000);
      }
    };

    const scrollOffset = ref(0);
    const mouseX = ref(0);
    const mouseY = ref(0);

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

    onMounted(() => {
      const saved = localStorage.getItem("theme") || "system";
      theme.value = saved;
      applyTheme(saved);

      window.addEventListener("scroll", handleScroll);

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      }, { threshold: 0.1 });

      document.querySelectorAll(".reveal")
        .forEach(el => observer.observe(el));
    });

    onUnmounted(() => window.removeEventListener("scroll", handleScroll));

    return {
      heroImage, heroLoaded, projects, experience, skills, form, submitted, submitForm,
      theme, setTheme, handleHeroMove, resetHero
    };
  }
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
</style>
