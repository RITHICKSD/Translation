/* ============================================================
   LinguaGlobal — Main JS (Theme, RTL, Mobile Menu, Animations)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggle Logic ---
  const savedTheme = localStorage.getItem('lg_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const themeBtns = document.querySelectorAll('.theme-toggle');
  themeBtns.forEach(btn => {
    updateThemeIcon(btn, savedTheme);
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('lg_theme', nextTheme);
      themeBtns.forEach(b => updateThemeIcon(b, nextTheme));
    });
  });

  function updateThemeIcon(btn, theme) {
    btn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  }

  // --- LTR / RTL Toggle Logic ---
  const savedDir = localStorage.getItem('lg_dir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);

  const rtlBtns = document.querySelectorAll('.rtl-toggle');
  rtlBtns.forEach(btn => {
    updateRTLText(btn, savedDir);
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir');
      const nextDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', nextDir);
      localStorage.setItem('lg_dir', nextDir);
      rtlBtns.forEach(b => updateRTLText(b, nextDir));
    });
  });

  function updateRTLText(btn, dir) {
    btn.innerText = dir === 'rtl' ? 'LTR' : 'RTL';
    btn.setAttribute('title', dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL');
  }

  // --- Mobile Hamburger Menu ---
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      nav.classList.toggle('open');
    });
  }

  // Mobile dropdown toggle — always attach; check viewport on each click
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown');
    if (dropdown && link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          const isOpen = item.classList.contains('mobile-open');
          // Close all other open dropdowns first
          navItems.forEach(other => {
            if (other !== item) other.classList.remove('mobile-open');
          });
          item.classList.toggle('mobile-open', !isOpen);
        }
      });
    }
  });

  // Close mobile nav and dropdowns when clicking a non-dropdown link
  document.querySelectorAll('.nav-link:not([href="#"])').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1024) {
        const parentItem = link.closest('.nav-item');
        if (!parentItem || !parentItem.querySelector('.dropdown')) {
          if (nav) nav.classList.remove('open');
          if (hamburger) hamburger.classList.remove('open');
        }
      }
    });
  });

  // Reset mobile-open states when resizing back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      navItems.forEach(item => item.classList.remove('mobile-open'));
      if (nav) nav.classList.remove('open');
      if (hamburger) hamburger.classList.remove('open');
    }
  });

  // --- Scroll Observer for Animations ---
  const aosElements = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, { threshold: 0.1 });

  aosElements.forEach(el => observer.observe(el));
});
