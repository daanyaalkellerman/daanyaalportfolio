<template lang="html">
  <div class="min-h-screen bg-gray-950">
    <!-- Animated background elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-20 w-4 h-4 rounded-full bg-cyan-400 opacity-20 animate-pulse"></div>
      <div class="absolute top-1/3 right-40 w-6 h-6 rounded-full bg-purple-500 opacity-20 animate-ping"></div>
      <div class="absolute bottom-40 left-1/4 w-8 h-8 rounded-full bg-emerald-400 opacity-20 animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-5 h-5 rounded-full bg-indigo-500 opacity-20 animate-ping"></div>
    </div>

    <!-- Main content -->
    <div class="min-h-screen flex flex-col relative z-10">
      <!-- Header -->
      <header
        class="px-4 sm:px-8 py-6 sm:py-8 flex justify-between items-center border-b border-gray-800 backdrop-blur-sm"
      >
        <div class="text-2xl sm:text-3xl font-bold text-primary">
          <span class="text-cyan-400 font-mono animate-bounce">{"</span>
          <span class="text-white hover:text-cyan-400 transition-colors duration-300">DaanyaalKellerman</span>
          <span class="text-cyan-400 font-mono animate-bounce delay-100">"}</span>
        </div>
        <nav class="hidden md:flex space-x-6 lg:space-x-10">
          <a
            href="#about"
            class="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-base lg:text-lg font-mono hover:scale-105"
            >About()</a
          >
          <a
            href="#projects"
            class="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-base lg:text-lg font-mono hover:scale-105"
            >Projects()</a
          >
          <a
            href="#skills"
            class="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-base lg:text-lg font-mono hover:scale-105"
            >Skills()</a
          >
          <a
            href="#contact"
            class="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-base lg:text-lg font-mono hover:scale-105"
            >Contact()</a
          >
        </nav>
        <button class="md:hidden text-gray-300 hover:text-cyan-400 transition-colors">
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
      <div class="md:hidden bg-gray-900/95 backdrop-blur-sm px-4 py-3 hidden" id="mobile-menu">
        <div class="flex flex-col space-y-3">
          <a
            href="#about"
            class="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-lg font-mono"
            >About()</a
          >
          <a
            href="#projects"
            class="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-lg font-mono"
            >Projects()</a
          >
          <a
            href="#skills"
            class="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-lg font-mono"
            >Skills()</a
          >
          <a
            href="#contact"
            class="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-lg font-mono"
            >Contact()</a
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
                  class="absolute -inset-1 sm:-inset-2 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-sm"
                ></div>
                <div
                  class="relative rounded-xl overflow-hidden w-64 h-64 sm:w-80 sm:h-80 border-4 border-gray-800 transform group-hover:border-cyan-400 transition-all duration-300 group-hover:scale-105"
                >
                  <img
                    src="/IMG_7706.png"
                    alt="Daanyaal Kellerman"
                    class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div class="absolute -bottom-4 -right-4 bg-gray-900 text-cyan-400 px-3 py-1 rounded-lg font-mono text-sm border border-gray-700 shadow-lg">
                  dev@daanyaal:~$
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
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-text">Daanyaal Kellerman</span>
                </h1>
                <h2 class="text-xl sm:text-2xl text-gray-400 font-mono">
                  &gt; Full-Stack Developer (React.js | Next.js | Knex.js)
                </h2>
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span class="text-emerald-400 font-mono text-sm">Currently available for work</span>
                </div>
              </div>
              <p
                class="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed"
              >
                I build exceptional digital experiences with modern web technologies. Specializing in both frontend (React.js, Next.js, Vue.js) and backend (PHP, Knex.js, Node.js), I combine technical precision with creative problem-solving to deliver high-performance full-stack applications.
              </p>
              <div class="flex flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-4">
                <a
                  href="#contact"
                  class="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-lg font-medium transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
                >
                  Contact Me →
                </a>
                <a
                  href="#projects"
                  class="border-2 border-gray-700 hover:border-cyan-400 text-gray-300 hover:text-white px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-lg font-medium transition-all duration-300 text-base sm:text-lg hover:scale-105"
                >
                  View Projects ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="py-16 sm:py-24 bg-gray-900/50 backdrop-blur-sm">
        <div class="container mx-auto px-4 sm:px-8 max-w-5xl">
          <div class="text-center mb-12 sm:mb-20">
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">My Development Journey</span>
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
            <p
              class="text-lg sm:text-xl text-gray-400 mt-4 sm:mt-6 max-w-3xl mx-auto"
            >
              How I discovered my passion for coding and grew as a developer
            </p>
          </div>

          <div class="space-y-8 sm:space-y-16">
            <!-- Current Experience -->
            <div class="experience-card group">
              <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                <div
                  class="flex-shrink-0 bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 w-full sm:w-auto group-hover:border-cyan-400 transition-colors duration-300"
                >
                  <div class="text-cyan-400 font-mono text-base sm:text-lg">
                    July 2025 - Present
                  </div>
                  <div class="text-emerald-400 text-xs mt-1">Current</div>
                </div>
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">
                    FutureRent - Intermediate Developer
                  </h3>
                  <p
                    class="text-gray-300 text-base sm:text-lg leading-relaxed mb-4"
                  >
                    Promoted to Intermediate Developer after demonstrating strong technical leadership. Currently leading development on the main company website (web.futurerent.co.za) and multiple marketing campaigns. Responsible for architecting and implementing complex features while mentoring junior developers.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >React.js</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >Next.js</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >Knex.js</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >Team Leadership</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="experience-card group">
              <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                <div
                  class="flex-shrink-0 bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 w-full sm:w-auto group-hover:border-cyan-400 transition-colors duration-300"
                >
                  <div class="text-cyan-400 font-mono text-base sm:text-lg">
                    July 2024 - July 2025
                  </div>
                </div>
                <div>
                  <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">
                    FutureRent - Junior Developer
                  </h3>
                  <p
                    class="text-gray-300 text-base sm:text-lg leading-relaxed mb-4"
                  >
                    Developed in-house applications designed to streamline workflows and enhance productivity across the organization. Contributed to multiple campaigns and worked on the core platform. Gained extensive experience with React, Next.js, and backend integration.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >Professional Development</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >Full-stack Development</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >Team Collaboration</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="experience-card group">
              <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                <div
                  class="flex-shrink-0 bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 w-full sm:w-auto group-hover:border-cyan-400 transition-colors duration-300"
                >
                  <div class="text-cyan-400 font-mono text-base sm:text-lg">
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
                    Grew my professional skills as a web development intern at LC Studio. Worked on real client projects while on a continued learning journey, expanding my knowledge of modern web development practices.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >Professional Development</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >Client Work</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >Team Collaboration</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Life Choices -->
            <div class="experience-card group">
              <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                <div
                  class="flex-shrink-0 bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 w-full sm:w-auto group-hover:border-cyan-400 transition-colors duration-300"
                >
                  <div class="text-cyan-400 font-mono text-base sm:text-lg">
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
                    My time at Life Choices Academy was transformative. I discovered my passion for frontend development and helped fellow students while building my own fullstack projects. My dedication was recognized with multiple awards including Certificate of Excellence, Top Capstone Project, Top Student, and Top Overall Achiever.
                  </p>
                  <p
                    class="text-gray-300 text-base sm:text-lg leading-relaxed mb-4"
                  >
                    This intensive program gave me both the technical skills and confidence to pursue development professionally.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >Fullstack Projects</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >Academic Excellence</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >Mentorship</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Early Education -->
            <div class="experience-card group">
              <div class="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
                <div
                  class="flex-shrink-0 bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700 w-full sm:w-auto group-hover:border-cyan-400 transition-colors duration-300"
                >
                  <div class="text-cyan-400 font-mono text-base sm:text-lg">
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
                    My journey into tech began at False Bay College in 2019, where I first discovered my love for coding, it planted the seed that would grow into my career path.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >Foundational Skills</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
                      >Career Discovery</span
                    >
                    <span
                      class="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800 text-cyan-400 rounded-full text-xs sm:text-sm"
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
      <section id="projects" class="py-16 sm:py-24 bg-gray-900/50 backdrop-blur-sm">
        <div class="container mx-auto px-4 sm:px-8">
          <div class="text-center mb-12 sm:mb-20">
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Selected Work</span>
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
            <p class="text-gray-400 max-w-2xl mx-auto">Projects I've built with modern technologies and creative solutions</p>
          </div>
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto"
          >
            <!-- Project Card 1 -->
            <div
              v-for="project in $store.state.projects"
              :key="project"
              class="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2"
            >
              <div class="h-48 sm:h-64 bg-gray-900 relative overflow-hidden">
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
                  <h3 class="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {{ project.name }}
                  </h3>
                  <span
                    class="px-3 py-1 sm:px-4 sm:py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-xs sm:text-sm font-mono"
                    >2023</span
                  >
                </div>
                <p class="text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2 sm:gap-3">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-cyan-400 rounded-lg text-xs sm:text-sm font-mono"
                    >{{ tech }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="py-16 sm:py-24 bg-gray-900/50 backdrop-blur-sm">
        <div class="container mx-auto px-4 sm:px-8">
          <div class="text-center mb-12 sm:mb-20">
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Technical Skills</span>
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
            <p class="text-gray-400 max-w-2xl mx-auto">Technologies I work with to build amazing digital experiences</p>
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
                class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-800 flex items-center justify-center mb-2 sm:mb-4 mx-auto transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:shadow-lg group-hover:shadow-cyan-500/30 group-hover:scale-110"
              >
                <img
                  :src="skill.skill"
                  class="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                  :alt="skill.name"
                />
              </div>
              <span
                class="text-center text-base sm:text-lg text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 font-mono"
                >{{ skill.name }}</span
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-16 sm:py-24 bg-gray-900/50 backdrop-blur-sm">
        <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
          <div class="text-center mb-12 sm:mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Get In Touch</span>
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
            <p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>
          <form class="space-y-6 sm:space-y-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <label
                  for="name"
                  class="block text-gray-400 mb-2 sm:mb-3 text-base sm:text-lg font-mono"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  class="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 hover:border-cyan-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-gray-400 mb-2 sm:mb-3 text-base sm:text-lg font-mono"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  class="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 hover:border-cyan-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div>
              <label
                for="message"
                class="block text-gray-400 mb-2 sm:mb-3 text-base sm:text-lg font-mono"
                >Message</label
              >
              <textarea
                id="message"
                rows="5"
                class="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 hover:border-cyan-400"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-4 sm:px-8 sm:py-5 rounded-xl font-medium transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <!-- Footer -->
      <footer
        class="px-4 sm:px-8 py-8 sm:py-12 text-center border-t border-gray-800 backdrop-blur-sm"
      >
        <div class="container mx-auto">
          <div class="flex justify-center space-x-6 sm:space-x-8 mb-6 sm:mb-8">
            <a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
          <p class="text-gray-500 text-base sm:text-lg font-mono">
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

    // Add scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.experience-card, .skill-item');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(elementPosition < screenPosition) {
          element.classList.add('animate-fadeInUp');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@400;500;600;700&display=swap');

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
  overscroll-behavior: none;
  background-color: #0a0a0a;
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
  background-color: #06b6d4;
  color: white;
}

.experience-card {
  background: rgba(17, 24, 39, 0.5);
  border-left: 4px solid #06b6d4;
  padding: 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.experience-card:hover {
  background: rgba(17, 24, 39, 0.8);
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(6, 182, 212, 0.2);
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-text {
  animation: textGradient 8s ease infinite;
  background-size: 200% 200%;
}

@keyframes textGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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

/* Typewriter effect for terminal-like text */
.typewriter {
  overflow: hidden;
  border-right: .15em solid #06b6d4;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #06b6d4 }
}

/* Glowing effect for interactive elements */
.glow-on-hover {
  transition: box-shadow 0.3s ease;
}

.glow-on-hover:hover {
  box-shadow: 0 0 15px rgba(6, 182, 212, 0.5);
}

/* Floating animation */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.floating {
  animation: float 6s ease-in-out infinite;
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
    background-color: rgba(17, 24, 39, 0.95);
    border-bottom: 1px solid rgba(6, 182, 212, 0.3);
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
  box-shadow: 0 10px 25px -5px rgba(6, 182, 212, 0.2);
}
</style>