// Import Modules
import { initTheme } from "./modules/theme.js";
import {
  initScrollEffects,
  initScrollAnimations,
  initSmoothScroll,
} from "./modules/scroll.js";
import {
  initMobileMenu,
  initKeyboardNav,
  setActiveNavLink,
} from "./modules/navigation.js";
import { initLazyLoading, initVideoAutoplay } from "./modules/media.js";
import { initInteractions } from "./modules/interactions.js";

// Initialize All Modules
function init() {
  initTheme();
  setActiveNavLink();
  initScrollEffects();
  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
  initLazyLoading();
  initVideoAutoplay();
  initKeyboardNav();
  initInteractions();
}

// Load on COM Ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Export for Global
export { initTheme, initScrollEffects, initInteractions };
