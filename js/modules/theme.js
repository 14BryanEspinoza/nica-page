// Key
const THEME_KEY = "nicaPage-theme";

// Get Current Theme for Local Storage or System Preference
export function getTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme) {
    return savedTheme;
  }

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

// Set Theme and Save to Local Storage
export function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);
}

// Toggle Theme
export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  setTheme(newTheme);
}

// Init For Theme
export function initTheme() {
  const theme = getTheme();
  const themeToggle = document.getElementById("theme-toggle");

  setTheme(theme);

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  if (window.matchMedia) {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
          setTheme(e.matches ? "dark" : "light");
        }
      });
  }
}

// Export Theme Functions
export default { initTheme, getTheme, setTheme, toggleTheme };
