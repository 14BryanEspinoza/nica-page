// Lazy Loading
export function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  if (!lazyImages.length) return;

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            imageObserver.unobserve(img);
          }
        });
      },
      { rootMargin: "100px" },
    );

    lazyImages.forEach((img) => imageObserver.observe(img));
  }
}

// Autoplay de videos
export function initVideoAutoplay() {
  const videos = document.querySelectorAll("video[autoplay]");

  videos.forEach((video) => {
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay fue prevenido
        video.removeAttribute("autoplay");
        video.setAttribute("controls", "");
      });
    }
  });
}

// Export Media Functions
export default { initLazyLoading, initVideoAutoplay };
