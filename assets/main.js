// assets/main.js
document.addEventListener('DOMContentLoaded', () => {
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1) Optional type-in hero */
  const typerEl = document.querySelector('[data-typer]');
  if (typerEl && !prefersReduce) {
    const full = typerEl.getAttribute('data-text') || typerEl.textContent.trim();
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

  /* 2) Delayed section reveal (scroll-in) */
  const reveals = document.querySelectorAll('.reveal');
  if (prefersReduce) {
    reveals.forEach(el => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in');
      });
    }, { threshold: 0.12 });
    setTimeout(() => { reveals.forEach(el => io.observe(el)); }, 900);
  }

  /* 3) Project hover preview (icon cards → image peek) */
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

    const show = (url) => {
      if (!url) return;
      const img = new Image();
      img.onload = () => {
        shellImg.src = url;
        shell.classList.add('in');
      };
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

  /* 4) Mini-nav highlight */
  const sections = [...document.querySelectorAll('section[id]')];
  const navLinks = new Map(
    [...document.querySelectorAll('.site-nav .links a[href^="#"]')]
      .map(a => [a.getAttribute('href').slice(1), a])
  );
  if (sections.length && navLinks.size) {
    const navIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const link = navLinks.get(id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });
    sections.forEach(s => navIO.observe(s));
  }
});
