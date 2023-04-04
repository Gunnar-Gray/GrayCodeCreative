
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.hamburger');
  const menuLinks = document.querySelector('.nav-menu');
  const darkModeBtn = document.querySelector('.mode-toggle');
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
