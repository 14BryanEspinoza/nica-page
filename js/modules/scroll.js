// Scroll Effects
export function initScrollEffects() {
  const header = document.querySelector("header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
}

// Animation on Scroll
export function initScrollAnimations() {
  const animateElements = document.querySelectorAll(".animate-on-scroll");

  if (!animateElements.length) return;

  // Verificar soporte de IntersectionObserver
  if ("IntersectionObserver" in window) {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animateElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback: mostrar todos los elementos inmediatamente
    animateElements.forEach((el) => el.classList.add("visible"));
  }
}

// Scroll Smooth
export function initSmoothScroll() {
  const header = document.querySelector("header");

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Saltar si es solo "#" o si es una página diferente
      if (href === "#" || href.includes(".html")) return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight -
          20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Export Scroll Functions
export default { initScrollEffects, initScrollAnimations, initSmoothScroll };
