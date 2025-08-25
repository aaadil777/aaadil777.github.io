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

// Project hover preview (preload + swap-after-load + smooth follow)
const projectPreview = () => {
  const preview = document.querySelector('.hover-preview');
  const imgEl   = preview ? preview.querySelector('img') : null;
  const cards   = document.querySelectorAll('.proj-card[data-img]');
  if (!preview || !imgEl || !cards.length) return;

  // Preload all images into a cache
  const cache = new Map(); // src -> HTMLImageElement
  const preload = (src) => {
    if (!src || cache.has(src)) return cache.get(src);
    const im = new Image();
    im.decoding = 'async';
    im.loading = 'eager';
    try { im.fetchPriority = 'high'; } catch(_) {}
    im.src = src;
    cache.set(src, im);
    return im;
  };
  cards.forEach(card => preload(card.getAttribute('data-img')));

  // Swap only when loaded to avoid flicker
  const showSrc = (src) => {
    if (!src) return;
    const im = preload(src);
    const swap = () => {
      if (imgEl.dataset.src === src) return; // already showing
      imgEl.src = src;
      imgEl.dataset.src = src;
      preview.classList.add('in');
    };
    if (im.complete) {
      swap();
    } else {
      im.addEventListener('load', swap, { once: true });
    }
  };

  const hide = () => preview.classList.remove('in');

  // Smoothly follow the cursor
  let raf = 0;
  const move = (e) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const pad = 16;
      const w = preview.offsetWidth || 420;
      const h = preview.offsetHeight || 230;
      const vw = window.innerWidth, vh = window.innerHeight;
      let x = e.clientX + pad, y = e.clientY + pad;
      const maxX = vw - w - pad, maxY = vh - h - pad;
      if (x > maxX) x = e.clientX - w - pad;
      if (y > maxY) y = e.clientY - h - pad;
      preview.style.left = x + 'px';
      preview.style.top  = y + 'px';
    });
  };

  cards.forEach(card => {
    const src = card.getAttribute('data-img');

    // mouse
    card.addEventListener('mouseenter', (e) => {
      move(e);
      showSrc(src);
    });
    card.addEventListener('mousemove', move);
    card.addEventListener('mouseleave', hide);

    // touch: tap to show; outside tap hides
    card.addEventListener('touchstart', () => {
      showSrc(src);
    }, { passive: true });
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

/* Mobile menu toggle */
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menu-toggle');
  const drawer = document.getElementById('mobile-nav');
  if (!btn || !drawer) return;

  const close = () => {
    drawer.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  };
  const open = () => {
    drawer.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  };

  btn.addEventListener('click', () => {
    drawer.classList.toggle('open');
    const isOpen = drawer.classList.contains('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close when a link is tapped, on Esc, or when clicking outside
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  document.addEventListener('click', e => {
    if (!drawer.contains(e.target) && e.target !== btn && drawer.classList.contains('open')) close();
  }, true);
});
