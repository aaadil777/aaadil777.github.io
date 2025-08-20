// assets/main.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) Emoji: ensure it renders inside the square
  document.querySelectorAll('.proj-card .proj-icon').forEach(icon => {
    const txt = (icon.textContent || '').trim();
    icon.textContent = txt || '📌';
  });

  // 2) Hover preview as background image
  const cards = document.querySelectorAll('.proj-card[data-img]');
  cards.forEach(card => {
    const imgUrl = card.getAttribute('data-img');
    if (!imgUrl) return;

    card.addEventListener('mouseenter', () => {
      card.style.backgroundImage = `url(${imgUrl})`;
      card.style.backgroundSize = 'cover';
      card.style.backgroundPosition = 'center';
      card.style.backgroundBlendMode = 'multiply';
    });

    card.addEventListener('mouseleave', () => {
      card.style.backgroundImage = '';
      card.style.backgroundBlendMode = '';
    });
  });
});
