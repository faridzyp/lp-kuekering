/**
 * Dapur Manis - Artisan Home Bakery
 * Lightweight Client Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. WhatsApp Click Event Tracking (Analytics Ready)
  const waLinks = document.querySelectorAll('a[href*="wa.me"]');
  waLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const label = link.getAttribute('data-cta') || link.innerText.trim();
      console.log(`[CTA Clicked]: ${label}`);
      // Push to dataLayer if Google Tag Manager exists
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'whatsapp_cta_click',
          cta_label: label
        });
      }
    });
  });

  // 2. Hide Mobile Bottom Bar when near the main CTA or footer if desired, or keep sticky
  const mobileBar = document.getElementById('mobile-sticky-bar');
  if (mobileBar) {
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      // Show immediately on scroll
      mobileBar.style.transform = 'translateY(0)';
      lastScrollY = currentScrollY;
    }, { passive: true });
  }

  // 3. Smooth internal scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
