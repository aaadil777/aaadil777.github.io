// Type-in hero intro + delayed section reveal
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, { threshold: 0.12 });

  setTimeout(() => {
    reveals.forEach(el => io.observe(el));
  }, 900); // sections start animating after hero has been seen
});
