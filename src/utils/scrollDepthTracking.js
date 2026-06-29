const DEFAULT_MILESTONES = [25, 50, 75, 90];

export function initScrollDepthTracking(options = {}) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return () => {};
  }

  const milestones = [...new Set(options.milestones || DEFAULT_MILESTONES)].sort(
    (a, b) => a - b
  );
  const eventName = options.eventName || 'scroll';
  const sentMilestones = new Set();
  let ticking = false;

  function getScrollPercent() {
    const documentElement = document.documentElement;
    const scrollTop = window.scrollY || documentElement.scrollTop || 0;
    const scrollableHeight = documentElement.scrollHeight - window.innerHeight;

    if (scrollableHeight <= 0) {
      return 0;
    }

    return (scrollTop / scrollableHeight) * 100;
  }

  function sendMilestone(milestone) {
    if (typeof window.gtag !== 'function') {
      return;
    }

    window.gtag('event', eventName, {
      percent_scrolled: milestone,
    });

    sentMilestones.add(milestone);
  }

  function evaluateScrollDepth() {
    ticking = false;
    const scrollPercent = getScrollPercent();

    milestones.forEach((milestone) => {
      if (scrollPercent >= milestone && !sentMilestones.has(milestone)) {
        sendMilestone(milestone);
      }
    });
  }

  function onScroll() {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(evaluateScrollDepth);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('load', onScroll, { passive: true });

  onScroll();

  return function destroyScrollDepthTracking() {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    window.removeEventListener('load', onScroll);
  };
}

export function initNavigationAwareScrollDepthTracking(options = {}) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  let destroyScrollDepthTracking = initScrollDepthTracking(options);
  let currentRoute = getRouteKey();

  function restartTracking() {
    destroyScrollDepthTracking();
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    destroyScrollDepthTracking = initScrollDepthTracking(options);
    currentRoute = getRouteKey();
  }

  function handleNavigation() {
    const nextRoute = getRouteKey();

    if (nextRoute === currentRoute) {
      return;
    }

    window.requestAnimationFrame(restartTracking);
  }

  const originalPushState = window.history.pushState;
  const originalReplaceState = window.history.replaceState;

  window.history.pushState = function pushState(...args) {
    originalPushState.apply(this, args);
    handleNavigation();
  };

  window.history.replaceState = function replaceState(...args) {
    originalReplaceState.apply(this, args);
    handleNavigation();
  };

  window.addEventListener('popstate', handleNavigation);
  window.addEventListener('hashchange', handleNavigation);

  return function destroyNavigationAwareScrollDepthTracking() {
    destroyScrollDepthTracking();
    window.history.pushState = originalPushState;
    window.history.replaceState = originalReplaceState;
    window.removeEventListener('popstate', handleNavigation);
    window.removeEventListener('hashchange', handleNavigation);
  };
}

function getRouteKey() {
  const { pathname, search } = window.location;
  return `${pathname}${search}`;
}
