
// =============================
// ✨ SELECCIÓN + MODAL
// =============================
const cards = document.querySelectorAll(".card-area");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    
    // efecto selección
    card.classList.add("selected");

    setTimeout(() => {
      card.classList.remove("selected");

      // abrir modal
      const target = card.getAttribute("data-bs-target");
      if (target) {
        const modal = new bootstrap.Modal(document.querySelector(target));
        modal.show();
      }

    }, 200); // delay corto para efecto
  });
});


// =============================
// 🌟 GLOW DINÁMICO
// =============================
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
  });
});