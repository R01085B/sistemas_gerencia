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
  
  // Función para manejar el despliegue de las semanas al hacer clic en una unidad
function toggleWeeks(unidadId, semanasId) {
  const semanas = document.getElementById(semanasId);
  const unidad = document.getElementById(unidadId);
  
  // Verifica si las semanas ya están visibles, si es así, las oculta, si no, las muestra
  if (semanas.style.display === "block") {
    semanas.style.display = "none";
  } else {
    semanas.style.display = "block";
  }
}

// Asignación de los eventos de clic a las unidades
document.getElementById('unidad1').addEventListener('click', function() {
  toggleWeeks('unidad1', 'semanas1');
});

document.getElementById('unidad2').addEventListener('click', function() {
  toggleWeeks('unidad2', 'semanas2');
});

document.getElementById('unidad3').addEventListener('click', function() {
  toggleWeeks('unidad3', 'semanas3');
});

document.getElementById('unidad4').addEventListener('click', function() {
  toggleWeeks('unidad4', 'semanas4');
});
