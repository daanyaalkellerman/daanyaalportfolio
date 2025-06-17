<template lang="html">
  <div class="min-h-screen bg-gray-900">
    <!-- Main content -->
    <div class="min-h-screen flex flex-col">
      <!-- Header -->
      <header
        class="px-4 sm:px-8 py-6 sm:py-8 flex justify-between items-center border-b border-gray-800"
      >
        <div class="text-2xl sm:text-3xl font-bold text-primary">
          <span class="text-white font-mono">{"</span>
          <span class="text-white">DaanyaalKellerman</span>
          <span class="text-white font-mono">"}</span>
        </div>
        <nav class="hidden md:flex space-x-6 lg:space-x-10">
          <a
            href="#about"
            class="text-gray-300 hover:text-primary transition-colors duration-200 text-base lg:text-lg"
            >About</a
          >
          <a
            href="#projects"
            class="text-gray-300 hover:text-primary transition-colors duration-200 text-base lg:text-lg"
            >Projects</a
          >
          <a
            href="#skills"
            class="text-gray-300 hover:text-primary transition-colors duration-200 text-base lg:text-lg"
            >Skills</a
          >
          <a
            href="#contact"
            class="text-gray-300 hover:text-primary transition-colors duration-200 text-base lg:text-lg"
            >Contact</a
          >
        </nav>
        <button class="md:hidden text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 sm:h-8 sm:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      <!-- Mobile Menu (hidden by default) -->
      <div class="md:hidden bg-gray-800 px-4 py-3 hidden" id="mobile-menu">
        <div class="flex flex-col space-y-3">
          <a
            href="#about"
            class="text-gray-300 hover:text-primary transition-colors duration-200 text-lg"
            >About</a
          >
          <a
            href="#projects"
            class="text-gray-300 hover:text-primary transition-colors duration-200 text-lg"
            >Projects</a
          >
          <a
            href="#skills"
            class="text-gray-300 hover:text-primary transition-colors duration-200 text-lg"
            >Skills</a
          >
          <a
            href="#contact"
            class="text-gray-300 hover:text-primary transition-colors duration-200 text-lg"
            >Contact</a
          >
        </div>
      </div>

      <!-- Hero Section with Profile -->
      <section id="about" class="flex-grow flex items-center py-12 sm:py-20">
        <div class="container mx-auto px-4 sm:px-8">
          <div class="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
            <!-- Profile Picture -->
            <div class="w-full md:w-2/5 flex justify-center order-2 md:order-1">
              <div class="relative group">
                <div
                  class="absolute -inset-1 sm:-inset-2 rounded-xl bg-primary opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                ></div>
                <div
                  class="relative rounded-xl overflow-hidden w-64 h-64 sm:w-80 sm:h-80 border-4 border-gray-800 transform group-hover:border-primary transition-all duration-300"
                >
                  <img
                    src="/IMG_7706.png"
                    alt="Daanyaal Kellerman"
                    class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            <!-- About Me Content -->
            <div
              class="w-full md:w-3/5 space-y-6 sm:space-y-8 order-1 md:order-2"
            >
              <div class="space-y-2 sm:space-y-4">
                <h1
                  class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  <span class="text-gray-400">Hello, I'm</span><br />
                  <span class="text-primary">Daanyaal Kellerman</span>
                </h1>
                <h2 class="text-xl sm:text-2xl text-gray-400 font-mono">
                  &gt; Full-Stack Developer
                </h2>
              </div>
              <p
                class="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed"
              >
                I build exceptional digital experiences with modern web
                technologies. Specializing in Vue.js, PHP, and JavaScript, I
                combine technical precision with creative problem-solving to
                deliver high-performance applications.
              </p>
              <div class="flex flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-4">
                <a
                  href="#contact"
                  class="bg-primary hover:bg-primary-dark text-white px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-lg font-medium transition-colors duration-300 text-base sm:text-lg shadow-lg hover:shadow-primary/30"
                >
                  Contact Me →
                </a>
                <a
                  href="#projects"
                  class="border-2 border-gray-700 hover:border-primary text-gray-300 hover:text-white px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-lg font-medium transition-colors duration-300 text-base sm:text-lg"
                >
                  View Projects ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="py-16 sm:py-24 bg-gray-850">
        <div class="container mx-auto px-4 sm:px-8 max-w-5xl">
          <div class="text-center mb-12 sm:mb-20">
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
              My Development Journey
            </h2>
            <div class="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p
              class="text-lg sm:text-xl text-gray-400 mt-4 sm:mt-6 max-w-3xl mx-auto"
            >
              How I discovered my passion for coding and grew as a developer
            </p>
          </div>

          <div class="space-y-8 sm:space-y-16">
            <!-- Current Experience -->
            <div class="experience-card">
              <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                <div
                  class="flex-shrink-0 bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 w-full sm:w-auto"
                >
                  <div class="text-primary font-mono text-base sm:text-lg">
                    July 2024 - Present
                  </div>
                </div>
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">
                    FutureRent
                  </h3>
                  <p
                    class="text-gray-300 text-base sm:text-lg leading-relaxed mb-4"
                  >
                    Currently serving as a Junior Developer at FutureRent, where
                    I develop in-house applications designed to streamline
                    workflows and enhance productivity across the organization.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 text-primary rounded-full text-xs sm:text-sm"
                      >Professional Development</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 text-primary rounded-full text-xs sm:text-sm"
                      >Client Work</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 text-primary rounded-full text-xs sm:text-sm"
                      >Team Collaboration</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="experience-card">
              <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                <div
                  class="flex-shrink-0 bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 w-full sm:w-auto"
                >
                  <div class="text-primary font-mono text-base sm:text-lg">
                    March - July 2024
                  </div>
                </div>
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">
                    LC Studio Internship
                  </h3>
                  <p
                    class="text-gray-300 text-base sm:text-lg leading-relaxed mb-4"
                  >
                    I grew my professional skills as a web development intern at
                    LC Studio. This experience allowed me to work on real client
                    projects while on a continued learning journey.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 text-primary rounded-full text-xs sm:text-sm"
                      >Professional Development</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 text-primary rounded-full text-xs sm:text-sm"
                      >Client Work</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 text-primary rounded-full text-xs sm:text-sm"
                      >Team Collaboration</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Life Choices -->
            <div class="experience-card">
              <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                <div
                  class="flex-shrink-0 bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 w-full sm:w-auto"
                >
                  <div class="text-primary font-mono text-base sm:text-lg">
                    2023-2024
                  </div>
                </div>
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">
                    Life Choices Coding Academy
                  </h3>
                  <p
                    class="text-gray-300 text-base sm:text-lg leading-relaxed mb-4"
                  >
                    My time at Life Choices Academy was transformative. I
                    discovered my passion for frontend development and helped
                    fellow students while building my own fullstack projects. My
                    dedication was recognized with multiple awards including
                    Certificate of Excellence, Top Capstone Project, Top
                    Student, and Top Overall Achiever.
                  </p>
                  <p
                    class="text-gray-300 text-base sm:text-lg leading-relaxed mb-4"
                  >
                    This intensive program gave me both the technical skills and
                    confidence to pursue development professionally.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 text-primary rounded-full text-xs sm:text-sm"
                      >Fullstack Projects</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 text-primary rounded-full text-xs sm:text-sm"
                      >Academic Excellence</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 text-primary rounded-full text-xs sm:text-sm"
                      >Mentorship</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Early Education -->
            <div class="experience-card">
              <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                <div
                  class="flex-shrink-0 bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 w-full sm:w-auto"
                >
                  <div class="text-primary font-mono text-base sm:text-lg">
                    2019-2019
                  </div>
                </div>
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">
                    Discovering My Passion
                  </h3>
                  <p
                    class="text-gray-300 text-base sm:text-lg leading-relaxed mb-4"
                  >
                    My journey into tech began at False Bay College in 2019,
                    where I first discovered my love for coding, it planted the
                    seed that would grow into my career path.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 text-primary rounded-full text-xs sm:text-sm"
                      >Foundational Skills</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 text-primary rounded-full text-xs sm:text-sm"
                      >Career Discovery</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 text-primary rounded-full text-xs sm:text-sm"
                      >Academic Foundation</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-16 sm:py-24 bg-gray-800">
        <div class="container mx-auto px-4 sm:px-8">
          <div class="text-center mb-12 sm:mb-20">
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
              Selected Work
            </h2>
            <div class="w-24 h-1 bg-primary mx-auto mb-4"></div>
          </div>
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto"
          >
            <!-- Project Card 1 -->
            <div
              v-for="project in $store.state.projects"
              :key="project"
              class="bg-gray-850 rounded-xl overflow-hidden border border-gray-700 hover:border-primary transition-colors duration-300 group"
            >
              <div class="h-48 sm:h-64 bg-secondary relative overflow-hidden">
                <div
                  class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"
                ></div>
                <a :href="project.netlify" target="_blank">
                  <img
                    :src="project.image"
                    alt="Project screenshot"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </a>
              </div>
              <div class="p-6 sm:p-8">
                <div class="flex justify-between items-start mb-4 sm:mb-6">
                  <h3 class="text-xl sm:text-2xl font-bold text-white">
                    {{ project.name }}
                  </h3>
                  <span
                    class="px-3 py-1 sm:px-4 sm:py-1 bg-primary text-white rounded-full text-xs sm:text-sm font-mono"
                    >2023</span
                  >
                </div>
                <p class="text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2 sm:gap-3">
                  <span
                    class="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-primary rounded-lg text-xs sm:text-sm font-mono"
                    >Vue.js</span
                  >
                  <span
                    class="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-primary rounded-lg text-xs sm:text-sm font-mono"
                    >PHP</span
                  >
                  <span
                    class="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-primary rounded-lg text-xs sm:text-sm font-mono"
                    >Laravel</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="py-16 sm:py-24 bg-gray-900">
        <div class="container mx-auto px-4 sm:px-8">
          <div class="text-center mb-12 sm:mb-20">
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <div class="w-24 h-1 bg-primary mx-auto mb-4"></div>
          </div>
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
          >
            <!-- Skills -->
            <div
              v-for="skill in $store.state.skills"
              :key="skill"
              class="skill-item group"
            >
              <div
                class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-800 flex items-center justify-center mb-2 sm:mb-4 mx-auto transition-all duration-300 group-hover:bg-primary"
              >
                <img
                  :src="skill.skill"
                  class="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  :alt="skill.name"
                />
              </div>
              <span
                class="text-center text-base sm:text-lg text-gray-300 group-hover:text-white transition-colors duration-300"
                >{{ skill.name }}</span
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-16 sm:py-24 bg-gray-800">
        <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
          <div class="text-center mb-12 sm:mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div class="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you.
            </p>
          </div>
          <form class="space-y-6 sm:space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <label
                  for="name"
                  class="block text-gray-400 mb-2 sm:mb-3 text-base sm:text-lg"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  class="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-gray-400 mb-2 sm:mb-3 text-base sm:text-lg"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  class="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                />
              </div>
            </div>
            <div>
              <label
                for="message"
                class="block text-gray-400 mb-2 sm:mb-3 text-base sm:text-lg"
                >Message</label
              >
              <textarea
                id="message"
                rows="5"
                class="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-primary hover:bg-primary-dark text-white px-6 py-4 sm:px-8 sm:py-5 rounded-xl font-medium transition-colors duration-300 text-base sm:text-lg shadow-lg hover:shadow-primary/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <!-- Footer -->
      <footer
        class="px-4 sm:px-8 py-8 sm:py-12 text-center border-t border-gray-800"
      >
        <div class="container mx-auto">
          <div class="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
            <!-- Social icons would go here -->
          </div>
          <p class="text-gray-500 text-base sm:text-lg">
            &copy; 2025 Daanyaal Kellerman. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioPage",
  mounted() {
    // Mobile menu toggle functionality
    const mobileMenuButton = document.querySelector("button.md\\:hidden");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      // Close menu when clicking on a link
      const mobileLinks = mobileMenu.querySelectorAll("a");
      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
        });
      });
    }
  },
};
</script>

<style>
:root {
  --primary: #948979;
  --primary-dark: #7a7261;
  --secondary: #393e46;
  --dark: #222831;
  --light: #dfd0b8;
}

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  color: #e5e7eb;
}

.font-mono {
  font-family: "Fira Code", monospace;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom selection color */
::selection {
  background-color: var(--primary);
  color: white;
}

.experience-card {
  background: linear-gradient(
    to right,
    rgba(57, 62, 70, 0.3),
    rgba(34, 40, 49, 0.1)
  );
  border-left: 4px solid #948979;
  padding: 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.experience-card:hover {
  background: linear-gradient(
    to right,
    rgba(57, 62, 70, 0.5),
    rgba(34, 40, 49, 0.3)
  );
  transform: translateY(-2px);
}

/* Section headings consistency */
.section-heading {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.section-heading::after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary);
}

/* Mobile-specific styles */
@media (max-width: 767px) {
  .experience-card {
    padding: 1rem;
  }

  #mobile-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 50;
    background-color: rgba(34, 40, 49, 0.95);
    border-bottom: 1px solid rgba(148, 137, 121, 0.3);
    backdrop-filter: blur(5px);
  }

  header {
    position: relative;
  }

  .hero-section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .profile-picture {
    margin-bottom: 2rem;
  }

  .skill-item {
    padding: 0.5rem;
  }

  /* Improve button tap targets on mobile */
  a,
  button {
    min-width: 44px;
    min-height: 44px;
  }

  /* Adjust section padding for mobile */
  section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

/* Animation for hover effects */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Project card hover effect */
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(148, 137, 121, 0.2);
}
</style>
