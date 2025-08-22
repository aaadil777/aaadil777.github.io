// assets/main.js
console.log('main.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Hero typewriter (headline sublede) --- */
  const typerEl = document.querySelector('[data-typer]');
  if (typerEl) {
    const full = typerEl.getAttribute('data-text') || typerEl.textContent.trim();
    if (prefersReduce) {
      typerEl.textContent = full;
    } else {
      typerEl.textContent = '';
      let i = 0;
      const step = () => {
        if (i <= full.length) {
          typerEl.textContent = full.slice(0, i++);
          setTimeout(step, 20);
        }
      };
      setTimeout(step, 350);
    }
  }

  /* --- Reveal-on-scroll for sections --- */
  const reveals = document.querySelectorAll('.reveal');
  if (prefersReduce) {
    reveals.forEach(el => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in'); });
    }, { threshold: 0.12 });
    setTimeout(() => { reveals.forEach(el => io.observe(el)); }, 900);
  }

  /* --- Typewriter bullets (Experience labels) --- */
  const bullets = document.querySelectorAll('.typed-bullets .bullet');
  if (bullets.length) {
    const bio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const bullet = entry.target;
        const labelEl = bullet.querySelector('.bullet-label');
        const restEl  = bullet.querySelector('.bullet-rest');
        const full = (labelEl.dataset.type || labelEl.textContent).replace(/:$/, '');
        if (prefersReduce) {
          labelEl.textContent = full + ':';
          restEl.style.opacity = 1;
          bio.unobserve(bullet);
          return;
        }
        labelEl.textContent = '';
        labelEl.classList.add('typing');  // show caret only while typing
        let i = 0;
        const tick = () => {
          if (i <= full.length) {
            labelEl.textContent = full.slice(0, i) + ':';
            i++; setTimeout(tick, 18);
          } else {
            labelEl.classList.remove('typing'); // caret off; no lingering line
            restEl.style.opacity = 1;
            bio.unobserve(bullet);
          }
        };
        tick();
      });
    }, { threshold: 0.35 });

    bullets.forEach(b => bio.observe(b));
  }

  /* --- Project cards: lightweight hover preview --- */
  const projCards = document.querySelectorAll('.proj-card[data-img]');
  if (projCards.length) {
    let shell = document.querySelector('.hover-preview');
    if (!shell) {
      shell = document.createElement('div');
      shell.className = 'hover-preview';
      shell.innerHTML = '<img alt="">';
      document.body.appendChild(shell);
    }
    const shellImg = shell.querySelector('img');

    // Follow cursor softly
    const move = (e) => {
      const x = e.clientX + 18;
      const y = e.clientY + 18;
      shell.style.left = `${x}px`;
      shell.style.top  = `${y}px`;
    };
    window.addEventListener('mousemove', move, { passive: true });

    const show = (url) => {
      if (!url) return;
      const img = new Image();
      img.onload = () => { shellImg.src = url; shell.classList.add('in'); };
      img.src = url;
    };
    const hide = () => shell.classList.remove('in');

    projCards.forEach(card => {
      const url = card.getAttribute('data-img');
      card.addEventListener('mouseenter', () => show(url));
      card.addEventListener('mouseleave', hide);
      card.addEventListener('focusin', () => show(url));
      card.addEventListener('focusout', hide);
    });
  }
});
