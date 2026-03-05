/* ============================================
   ENHANCE_BY_V — Main JS (runs on every page)
   File: js/main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── NAVBAR: Scroll shadow ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });

  /* ── HAMBURGER MENU ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ── SCROLL REVEAL ── */
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Staggered delay for sibling elements
          const siblings = entry.target.parentElement.querySelectorAll('.reveal');
          let delay = 0;
          siblings.forEach((sib, idx) => {
            if (sib === entry.target) delay = idx * 80;
          });
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

  /* ── ACTIVE NAV LINK on scroll (home page only) ── */
  const sections  = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  if (sections.length > 0) {
    const onScroll = () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) {
          current = sec.getAttribute('id');
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── READ URL PARAM: pre-select service in booking page ── */
  const serviceSelect = document.getElementById('service');
  if (serviceSelect) {
    const params = new URLSearchParams(window.location.search);
    const svc = params.get('service');
    if (svc) {
      Array.from(serviceSelect.options).forEach(opt => {
        if (opt.value.toLowerCase().includes(svc.toLowerCase())) {
          opt.selected = true;
        }
      });
    }
    // Show success message if redirected after form submit
    if (params.get('success') === '1') {
      const successBox = document.getElementById('formSuccess');
      if (successBox) successBox.style.display = 'block';
    }
  }

  /* ── SMOOTH SCROLL for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '76');
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
