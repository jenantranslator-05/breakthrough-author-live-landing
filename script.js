// Breakthrough Author Live — landing page behavior
// No backend, no build step. Two small jobs: sticky mobile CTA + footer year.

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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
