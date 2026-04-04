// Close Menu Links on Click (Mobile)
export function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const menuLinks = document.querySelectorAll(".menu-links a");

  if (!menuToggle) return;

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuToggle.checked) {
        menuToggle.checked = false;
      }
    });
  });
}

// Init Keyboard Navigation
export function initKeyboardNav() {
  const menuToggle = document.getElementById("menu-toggle");

  document.addEventListener("keydown", (e) => {
    // Cerrar menú con Escape
    if (e.key === "Escape" && menuToggle && menuToggle.checked) {
      menuToggle.checked = false;
      menuToggle.focus();
    }

    // Cerrar modal de cultura con Escape
    if (e.key === "Escape") {
      const modal = document.getElementById("cultureModal");
      if (modal && modal.classList.contains("active")) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
      }
    }
  });
}

// Set Active Nav Link
export function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".menu-links a");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");

    // Verificar si la ruta actual coincide con el enlace
    const isMatch =
      currentPath.endsWith(linkPath) ||
      (currentPath.endsWith("/") && linkPath === "index.html") ||
      (currentPath.endsWith("index.html") && linkPath === "index.html");

    if (isMatch) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Export Navigation Functions
export default { initMobileMenu, initKeyboardNav, setActiveNavLink };
