document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.navbar__toggle');
  const nav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.navbar__link');

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('is-open');
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggleBtn.focus();
      }
    });
  }
});
