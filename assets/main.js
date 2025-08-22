/* Helper: reveal-on-scroll */
const reveal = () => {
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))),
    { threshold: 0.15 }
  );
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
};

/* Hero blurb typewriter */
const typeHeroBlurb = () => {
  const el = document.querySelector('[data-typer]');
  if (!el) return;

  const full = el.getAttribute('data-text') || el.textContent || '';
  el.textContent = '';

  const isMobile = window.matchMedia('(max-width: 600px)').matches;
  const BASE = 18;                          // previous speed
  const SPEED = isMobile ? Math.round(BASE / 0.60) : BASE; // 60% of speed on mobile (slower)

  let i = 0;
  (function tick(){
    if (i <= full.length){
      el.textContent = full.slice(0, i);
      i++; setTimeout(tick, SPEED);
    } else {
      el.textContent = full;               // insurance
    }
  })();
};

/* Impact phrase (timeline bullets) typewriter */
const typeImpactBullets = () => {
  const isMobile = window.matchMedia('(max-width: 600px)').matches;
  const BASE = 18;
  const SPEED = isMobile ? Math.round(BASE / 0.60) : BASE; // slower on mobile

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const bullet = entry.target;
      const labelEl = bullet.querySelector('.bullet-label');
      const restEl  = bullet.querySelector('.bullet-rest');
      const full = (labelEl.dataset.type || labelEl.textContent).replace(/:$/, '');
      labelEl.textContent = '';
      labelEl.classList.add('typing');

      let i = 0;
      (function tick(){
        if (i <= full.length){
          labelEl.textContent = full.slice(0, i) + ':';
          i++; setTimeout(tick, SPEED);
        } else {
          labelEl.classList.remove('typing');
          if (restEl) restEl.style.opacity = 1;
          io.unobserve(bullet);
        }
      })();
    });
  }, { threshold: 0.35 });

  document.querySelectorAll('.typed-bullets .bullet').forEach(b => io.observe(b));
};

/* Projects hover preview (desktop + touch) */
const projectPreview = () => {
  const preview = document.querySelector('.hover-preview');
  const img = preview ? preview.querySelector('img') : null;
  const cards = document.querySelectorAll('.proj-card');

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
      preview.style.left = (e.clientX + 16) + 'px';
      preview.style.top  = (e.clientY + 16) + 'px';
    });

    // touch: tap to show, tap elsewhere to hide
    card.addEventListener('touchstart', () => show(src), { passive: true });
  });

  document.addEventListener('touchstart', (e) => {
    if (!preview.contains(e.target) && !e.target.closest('.proj-card')) hide();
  }, { passive: true });
};

/* Active nav link on scroll (small helper) */
const sectionSpy = () => {
  const links = [...document.querySelectorAll('.links a[href^="#"]')];
  const map = new Map(links.map(a => [a.getAttribute('href'), a]));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting){
        links.forEach(a => a.classList.remove('active'));
        const id = '#' + e.target.id;
        const a = map.get(id);
        if (a) a.classList.add('active');
      }
    });
  }, { threshold: 0.55 });

  document.querySelectorAll('main section[id]').forEach(s => io.observe(s));
};

/* Boot */
document.addEventListener('DOMContentLoaded', () => {
  reveal();
  typeHeroBlurb();
  typeImpactBullets();
  projectPreview();
  sectionSpy();
});
