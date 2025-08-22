(function () {
  // --- Reveal-on-scroll (safe fallback) ---
  const revealItems = Array.from(document.querySelectorAll('.reveal'));
  const showAll = () => revealItems.forEach(el => el.classList.add('in'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    revealItems.forEach(el => io.observe(el));
  } else {
    showAll();
  }

  // --- Typewriter labels (with time-limit and mobile safety) ---
  const SPEED = 18;
  const bullets = Array.from(document.querySelectorAll('.typed-bullets .bullet'));

  if (!('IntersectionObserver' in window)) {
    // No IO: show all immediately
    bullets.forEach(b => {
      const rest = b.querySelector('.bullet-rest');
      if (rest) rest.style.opacity = 1;
    });
    return;
  }

  const bio = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const bullet  = entry.target;
      const labelEl = bullet.querySelector('.bullet-label');
      const restEl  = bullet.querySelector('.bullet-rest');
      const full    = (labelEl.dataset.type || labelEl.textContent).replace(/:$/, '');

      labelEl.textContent = '';
      labelEl.classList.add('typing');

      let i = 0;
      let cancelled = false;

      const timeout = setTimeout(() => {  // hard stop after 2.5s (iOS timer quirks)
        cancelled = true;
        labelEl.classList.remove('typing');
        labelEl.textContent = full + ':';
        if (restEl) restEl.style.opacity = 1;
        bio.unobserve(bullet);
      }, 2500);

      (function tick(){
        if (cancelled) return;
        if (i <= full.length) {
          labelEl.textContent = full.slice(0, i) + ':';
          i++; setTimeout(tick, SPEED);
        } else {
          clearTimeout(timeout);
          labelEl.classList.remove('typing');
          if (restEl) restEl.style.opacity = 1;
          bio.unobserve(bullet);
        }
      })();
    });
  }, { threshold: 0.35 });

  bullets.forEach(b => bio.observe(b));
})();
