// Breakthrough Author Live — landing page behavior
// No backend, no build step. Two small jobs: sticky mobile CTA + footer year.

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Light/Dark mode toggle — default (no attribute) is the navy/cream/gold look.
  // Choice is saved to localStorage so it's remembered on the next visit.
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const root = document.documentElement;
    const setPressedState = (isDark) => {
      themeToggle.setAttribute('aria-pressed', String(isDark));
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    };
    setPressedState(root.getAttribute('data-theme') === 'dark');

    themeToggle.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) {
        root.removeAttribute('data-theme');
      } else {
        root.setAttribute('data-theme', 'dark');
      }
      setPressedState(!isDark);
      try {
        localStorage.setItem('bal-theme', isDark ? 'light' : 'dark');
      } catch (e) { /* localStorage unavailable — theme just won't persist */ }
    });
  }

  // Sticky mobile "Join the Challenge" bar — appears once the hero is scrolled past.
  const stickyCta = document.getElementById('stickyCta');
  const hero = document.querySelector('.hero');
  if (stickyCta && hero) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          stickyCta.classList.toggle('visible', !entry.isIntersecting);
        });
      },
      { rootMargin: '0px' }
    );
    observer.observe(hero);
  }

  // Video placeholder: clicking it just explains what to do next.
  // PLACEHOLDER: remove this once a real VSL embed (iframe) replaces .video-frame's contents.
  const playBtn = document.querySelector('.play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      alert('Placeholder video — replace this block in index.html with your real VSL embed (YouTube/Vimeo/Wistia).');
    });
  }
});

/* PLACEHOLDER: Facebook Pixel (per PDF technical notes — PageView, ViewContent,
   InitiateCheckout, Purchase). Add your Pixel ID and uncomment when ready:

!function(f,b,e,v,n,t,s){...}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
*/
