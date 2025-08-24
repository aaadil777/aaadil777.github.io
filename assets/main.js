// Reveal-on-scroll
const reveal = () => {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      obs.unobserve(e.target);
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
};

// Typewriter for the hero blurb
const typeHeroBlurb = () => {
  const el = document.querySelector('[data-typer]');
  if (!el) return;
  const full = el.getAttribute('data-text') || el.textContent || '';
  el.textContent = '';
  const isMobile = matchMedia('(max-width:600px)').matches;
  const SPEED = isMobile ? 30 : 18;
  let i = 0;
  (function tick(){
    if (i <= full.length) {
      el.textContent = full.slice(0, i++);
      setTimeout(tick, SPEED);
    } else {
      el.textContent = full;
    }
  })();
};

// Typewriter for impact phrase bullets
const typeImpactBullets = () => {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const li = entry.target;
      const label = li.querySelector('.bullet-label');
      const rest  = li.querySelector('.bullet-rest');
      const full = (label.dataset.type || label.textContent).replace(/:$/, '');
      label.textContent = '';
      label.classList.add('typing');  // caret only while typing
      const isMobile = matchMedia('(max-width:600px)').matches;
      const SPEED = isMobile ? 30 : 18;
      let i = 0;
      (function tick(){
        if (i <= full.length) {
          label.textContent = full.slice(0, i++) + ':';
          setTimeout(tick, SPEED);
        } else {
          label.classList.remove('typing'); // remove caret when done
          if (rest) rest.style.opacity = 1;
          obs.unobserve(li);
        }
      })();
    });
  }, { threshold: 0.35 });
  document.querySelectorAll('.typed-bullets .bullet').forEach(b => io.observe(b));
};

// Project hover preview
const projectPreview = () => {
  const preview = document.querySelector('.hover-preview');
  const img = preview ? preview.querySelector('img') : null;
  const cards = document.querySelectorAll('.proj-card[data-img]');
  if (!preview || !img || !cards.length) return;

  const show = (src) => {
    if (!src) return;
    img.src = src;
    preview.classList.add('in');
  };
  const hide = () => preview.classList.remove('in');

  cards.forEach(card => {
    const src = card.getAttribute('data-img');

    // mouse
    card.addEventListener('mouseenter', () => show(src));
    card.addEventListener('mouseleave', hide);
    card.addEventListener('mousemove', (e) => {
      const pad = 16;
      const w = preview.offsetWidth || 420;
      const h = preview.offsetHeight || 230;
      let x = e.clientX + pad, y = e.clientY + pad;
      const maxX = innerWidth - w - pad, maxY = innerHeight - h - pad;
      if (x > maxX) x = e.clientX - w - pad;
      if (y > maxY) y = e.clientY - h - pad;
      preview.style.left = x + 'px';
      preview.style.top  = y + 'px';
    });

    // touch: tap to show, tap elsewhere to hide
    card.addEventListener('touchstart', () => show(src), { passive: true });
  });

  document.addEventListener('touchstart', (e) => {
    if (!preview.contains(e.target) && !e.target.closest('.proj-card')) hide();
  }, { passive: true });
};

// Tiny section spy
const sectionSpy = () => {
  const links = [...document.querySelectorAll('.links a[href^="#"]')];
  if (!links.length) return;
  const map = new Map(links.map(a => [a.getAttribute('href'), a]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => a.classList.remove('active'));
        const a = map.get('#' + e.target.id);
        if (a) a.classList.add('active');
      }
    });
  }, { threshold: 0.55 });
  document.querySelectorAll('main section[id]').forEach(s => io.observe(s));
};

// Boot
document.addEventListener('DOMContentLoaded', () => {
  reveal();
  typeHeroBlurb();
  typeImpactBullets();
  projectPreview();
  sectionSpy();
});
