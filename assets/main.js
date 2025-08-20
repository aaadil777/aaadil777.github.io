// assets/main.js
console.log('main.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Typewriter
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

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if (prefersReduce) {
    reveals.forEach(el => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in'); });
    }, { threshold: 0.12 });
    setTimeout(() => { reveals.forEach(el => io.observe(el)); }, 900);
  }

  // Hover preview for project cards
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
