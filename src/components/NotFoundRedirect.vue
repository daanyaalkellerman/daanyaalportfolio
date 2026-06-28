<template>
  <div
    :class="[
      'not-found-shell min-h-screen overflow-x-hidden bg-black text-white',
      { 'is-leaving': isLeaving },
    ]"
  >
    <div class="not-found-noise"></div>

    <main
      class="relative mx-auto flex min-h-screen max-w-6xl items-center px-4 py-12 sm:px-6 sm:py-16"
    >
      <section
        class="grid w-full items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_28rem] lg:gap-20"
      >
        <div>
          <p class="text-[0.72rem] uppercase tracking-[0.38em] text-white/45">
            Redirecting
          </p>
          <h1
            class="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            Oops, you're not supposed to be here.
          </h1>
          <p
            class="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:mt-6 sm:text-lg sm:leading-8"
          >
            You'll be sent back home in
            <span class="font-semibold text-white">{{ secondsRemaining }}</span>
            seconds.
          </p>

          <div class="mt-6 max-w-xl">
            <div class="redirect-progress-track">
              <div
                class="redirect-progress-bar"
                :style="{ transform: `scaleX(${progress})` }"
              ></div>
            </div>
            <div
              class="mt-3 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.24em] text-white/38"
            >
              <span>Returning to home</span>
              <span>{{ progressLabel }}</span>
            </div>
          </div>

          <div class="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center">
            <a
              href="/"
              class="inline-flex items-center justify-center rounded-full border border-white px-7 py-3.5 text-xs uppercase tracking-[0.28em] transition duration-300 hover:bg-white hover:text-black sm:px-8 sm:py-4"
            >
              Go Home Now
            </a>
          </div>
        </div>

        <div class="not-found-art mx-auto">
          <img src="/N-LITE.gif" alt="Glitching monochrome face" class="not-found-gif" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, ref } from "vue";

export default {
  name: "NotFoundRedirect",
  setup() {
    const secondsRemaining = ref(10);
    const elapsedMs = ref(0);
    const isLeaving = ref(false);
    const currentPath = window.location.pathname;
    let intervalId = null;
    let progressId = null;
    let timeoutId = null;
    let leaveTimeoutId = null;

    const totalDurationMs = 10000;
    const leaveDurationMs = 650;
    const progress = computed(() => Math.min(elapsedMs.value / totalDurationMs, 1));
    const progressLabel = computed(() => `${Math.round(progress.value * 100)}%`);

    onMounted(() => {
      const root = document.documentElement;
      root.classList.add("dark");

      const startTime = Date.now();
      intervalId = window.setInterval(() => {
        secondsRemaining.value = Math.max(0, secondsRemaining.value - 1);
      }, 1000);

      progressId = window.setInterval(() => {
        elapsedMs.value = Math.min(Date.now() - startTime, totalDurationMs);
      }, 50);

      leaveTimeoutId = window.setTimeout(() => {
        isLeaving.value = true;
      }, totalDurationMs - leaveDurationMs);

      timeoutId = window.setTimeout(() => {
        window.location.replace("/");
      }, totalDurationMs);
    });

    onUnmounted(() => {
      window.clearInterval(intervalId);
      window.clearInterval(progressId);
      window.clearTimeout(timeoutId);
      window.clearTimeout(leaveTimeoutId);
    });

    return {
      currentPath,
      isLeaving,
      progress,
      progressLabel,
      secondsRemaining,
    };
  },
};
</script>

<style scoped>
.not-found-shell {
  position: relative;
  opacity: 1;
  transform: translateY(0);
  transition: none;
}

.not-found-shell.is-leaving {
  opacity: 1;
  transform: translateY(0);
  filter: none;
}

.not-found-noise {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.08;
  background-image: linear-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 100% 3px, 3px 100%;
  mix-blend-mode: screen;
}

.not-found-art {
  position: relative;
  width: min(30rem, 92vw);
  min-height: 23rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found-gif {
  position: relative;
  z-index: 2;
  width: min(26rem, 88vw);
  image-rendering: pixelated;
  filter: contrast(1.18) brightness(1.05);
  animation: gif-drift 3.8s ease-in-out infinite;
}

.redirect-progress-track {
  overflow: hidden;
  height: 2px;
  transform-origin: left center;
  background: rgba(255, 255, 255, 0.12);
}

.redirect-progress-bar {
  height: 100%;
  transform-origin: left center;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 1));
  transition: transform 0.08s linear;
}

.not-found-grid,
.not-found-noise::before {
  will-change: transform, opacity;
}

@keyframes gif-drift {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-0.45rem);
  }
}

@media (max-width: 1023px) {
  .not-found-art {
    order: -1;
    min-height: 18rem;
  }
}

@media (max-width: 639px) {
  .not-found-art {
    width: min(22rem, 94vw);
    min-height: 15rem;
  }

  .not-found-gif {
    width: min(18rem, 88vw);
  }
}
</style>
