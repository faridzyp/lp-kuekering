/**
 * Dapur Manis - Artisan Home Bakery
 * Lightweight Client Script
 */

document.addEventListener("DOMContentLoaded", () => {
  const yearNode = document.getElementById("current-year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  // 1. WhatsApp Click Event Tracking (Analytics Ready)
  const waLinks = document.querySelectorAll('a[href*="wa.me"]');
  waLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const label = link.getAttribute("data-cta") || link.innerText.trim();
      if (window.console) {
        console.log(`[CTA Clicked]: ${label}`);
      }

      if (window.dataLayer) {
        window.dataLayer.push({
          event: "whatsapp_cta_click",
          cta_label: label,
        });
      }
    });
  });

  // 2. Mobile bottom bar behavior
  const mobileBar = document.getElementById("mobile-sticky-bar");
  if (mobileBar) {
    const toggleMobileBar = () => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        mobileBar.style.transform = "translateY(0)";
        return;
      }

      const shouldHide = window.scrollY > 180;
      mobileBar.style.transform = shouldHide ? "translateY(120%)" : "translateY(0)";
    };

    toggleMobileBar();
    window.addEventListener("scroll", toggleMobileBar, { passive: true });
    window.addEventListener("resize", toggleMobileBar);
  }

  // 3. Smooth internal scroll for anchors
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
          });
        }
      }
    });
  });
});
