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
  