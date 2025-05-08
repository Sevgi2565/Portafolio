document.addEventListener('DOMContentLoaded', function () {
    // Alerta de bienvenida
    Swal.fire({
      title: '¡Bienvenido!',
      text: 'Gracias por visitar Mi WEBnezuela 🌄',
      icon: 'success',
      confirmButtonText: 'Explorar'
    });
  
    // Animación de bloques al hacer scroll
    const blocks = document.querySelectorAll('.col-lg-4');
  
    // Función para comprobar si un elemento está en la vista
    function checkInView() {
      blocks.forEach(block => {
        const rect = block.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          block.classList.add('in-view');
        }
      });
    }
  
    // Llamamos a la función al hacer scroll
    window.addEventListener('scroll', checkInView);
    checkInView(); // Llamamos una vez para ver si ya están visibles al cargar la página
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Alerta de bienvenida
    Swal.fire({
      title: '¡Bienvenido!',
      text: 'Gracias por visitar Mi WEBnezuela 🌄',
      icon: 'success',
      confirmButtonText: 'Explorar'
    });
  
    // Animación de bloques al hacer scroll utilizando IntersectionObserver
    const blocks = document.querySelectorAll('.col-lg-4');
  
    // Configuración del IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Deja de observar el bloque una vez se ha animado
        }
      });
      
    }, { threshold: 0.5 }); // Umbral del 50% de visibilidad para activar la animación
  
    // Observamos todos los bloques
    blocks.forEach(block => {
      observer.observe(block);
    });
  });
  