document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const progressBar = document.querySelector(".progress");
  const content = document.getElementById("content");

  progressBar.style.width = "100%";

  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    setTimeout(() => {
      loadingScreen.style.display = "none";
      content.style.opacity = "1";
    }, 800);
  }, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.nav-buttons-area');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeMenuBtn = document.getElementById('closeMenu');

  menuButton.addEventListener('click', () => {
    menuOverlay.classList.toggle('active');
  });

  closeMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
  });

  // Fecha o menu ao clicar em qualquer link
  menuOverlay.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      menuOverlay.classList.remove('active');
    }
  });
});