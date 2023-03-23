
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menuLinks = document.querySelector('.menu-links');
  const darkModeBtn = document.querySelector('.dark-mode-btn');
  const body = document.querySelector('body');

  // Navbar menu toggle
  menuBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('open');
    menuBtn.classList.toggle('open');
  });

  // Light/dark mode toggle
  darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeBtn.classList.toggle('dark-mode');
  });
});

