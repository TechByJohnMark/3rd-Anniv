const menuToggle = document.getElementById('menu-toggle');
const fullscreenNavbar = document.getElementById('fullscreen-navbar');

// Toggle the fullscreen navbar and icons
menuToggle.addEventListener('click', () => {
  fullscreenNavbar.classList.toggle('active');
  menuToggle.classList.toggle('active');
});