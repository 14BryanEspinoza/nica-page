/**
 * NicaPage - Main JavaScript
 * Vanilla JS para funcionalidades interactivas
 */

(function() {
  'use strict';

  // DOM Elements
  const header = document.querySelector('header');
  const menuToggle = document.getElementById('menu-toggle');
  const menuLinks = document.querySelectorAll('.menu-links a');
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  const themeToggle = document.getElementById('theme-toggle');
  
  // Theme Management
  const THEME_KEY = 'nicaPage-theme';
  
  /**
   * Get current theme from localStorage or system preference
   */
  function getTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }
  
  /**
   * Set theme and save to localStorage
   */
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }
  
  /**
   * Toggle between light and dark theme
   */
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }
  
  /**
   * Initialize theme on page load
   */
  function initTheme() {
    const theme = getTheme();
    setTheme(theme);
    
    // Add click listener to theme toggle button
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  /**
   * Navbar scroll effect
   * Agrega sombra al header cuando se hace scroll
   */
  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  /**
   * Close mobile menu when clicking a link
   */
  function closeMobileMenu() {
    if (menuToggle && menuToggle.checked) {
      menuToggle.checked = false;
    }
  }

  /**
   * Smooth scroll for anchor links
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#" or if it's a different page
        if (href === '#' || href.includes('.html')) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Intersection Observer for scroll animations
   */
  function initScrollAnimations() {
    if (!animateElements.length) return;

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      animateElements.forEach(el => observer.observe(el));
    } else {
      // Fallback: show all elements immediately
      animateElements.forEach(el => el.classList.add('visible'));
    }
  }

  /**
   * Lazy loading for images using Intersection Observer
   */
  function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if (!lazyImages.length) return;

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            imageObserver.unobserve(img);
          }
        });
      }, { rootMargin: '100px' });

      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }

  /**
   * Handle video autoplay restrictions
   * Some browsers block autoplay, so we handle it gracefully
   */
  function initVideoAutoplay() {
    const videos = document.querySelectorAll('video[autoplay]');
    
    videos.forEach(video => {
      // Try to play the video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Autoplay was prevented
          // Add play button or pause state
          video.removeAttribute('autoplay');
          video.setAttribute('controls', '');
        });
      }
    });
  }

  /**
   * Keyboard accessibility for menu
   */
  function initKeyboardNav() {
    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuToggle && menuToggle.checked) {
        menuToggle.checked = false;
        menuToggle.focus();
      }
    });
  }

  /**
   * Set active state for current page in navigation
   */
  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.menu-links a');
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      // Check if current path ends with the link path
      if (currentPath.endsWith(linkPath) || 
          (currentPath.endsWith('/') && linkPath === 'index.html') ||
          (currentPath.endsWith('index.html') && linkPath === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  /**
   * Initialize all functionality
   */
  function init() {
    // Initialize theme first (to avoid flash)
    initTheme();
    
    // Set active nav link
    setActiveNavLink();
    
    // Add scroll listener for header
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    // Close mobile menu on link click
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Initialize smooth scrolling
    initSmoothScroll();

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize lazy loading
    initLazyLoading();

    // Initialize video autoplay handling
    initVideoAutoplay();

    // Initialize keyboard navigation
    initKeyboardNav();
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
