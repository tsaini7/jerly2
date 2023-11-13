//Cambiar fondo Nav

window.onscroll = function() {
    cambiarFondoNavbar();
  };
  
  function cambiarFondoNavbar() {
    const navbar = document.querySelector(".navbar");
    const scrollPos = window.scrollY;
  
    console.log(navbar);
  
    if (scrollPos > 30) { // Cambia 100 al desplazamiento deseado en píxeles
      navbar.style.position = "fixed"; // Cambia "blue" al color que desees
      navbar.style.width = "100%";
      navbar.style.justifyContent = "space-around";
      navbar.style.margin = "0";
      navbar.style.borderRadius = "0";

      /* margin: 1rem auto;
      border-radius: 8px; */
    } else {
      navbar.style.position = "static"; // Color de fondo predeterminado
      navbar.style.width = "90%";
      navbar.style.justifyContent = "space-around";
      navbar.style.margin = "1rem auto";
      navbar.style.borderRadius = "8px";
    }
  }
  

  const sliderContent = document.querySelector('.slider-content');
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].clientWidth;
  let currentIndex = 0;

  function nextSlide() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  }

  function updateSlider() {
    const newPosition = -currentIndex * slideWidth;
    sliderContent.style.transform = `translateX(${newPosition}px)`;
  }

  // Configurar el intervalo para cambiar automáticamente los slides
  setInterval(nextSlide, 3500); // Cambia de slide cada 3000 milisegundos (3 segundos)