// script.js

window.addEventListener('load', () => {
    const entrada = document.querySelector('.entrada');
    setTimeout(() => {
      entrada.classList.add('visible');
    }, 600);
  });
  
  // Resaltar el botón activo según la URL actual
window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.boton-nav');
    const currentPage = window.location.pathname.split('/').pop();
  
    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  });
  