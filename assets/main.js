// main.js

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".proj-card");

  // --- Hover preview ---
  cards.forEach(card => {
    const imgUrl = card.getAttribute("data-img");
    if (imgUrl) {
      card.addEventListener("mouseenter", () => {
        card.style.backgroundImage = `url(${imgUrl})`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
      });

      card.addEventListener("mouseleave", () => {
        card.style.backgroundImage = "";
      });
    }
  });

  // --- Emoji icons ---
  cards.forEach(card => {
    const iconSpan = card.querySelector(".proj-icon");
    // Use emoji if available (coming from projects.yml)
    const emoji = iconSpan?.textContent?.trim();
    if (emoji) {
      iconSpan.textContent = emoji;
    } else {
      // Fallback icon if missing
      iconSpan.textContent = "📌";
    }
  });
});
