console.log("hola")
console.log("Cargando Modos")

document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("themeSwitch");
    const body = document.body;
  
    // Aplicar el tema guardado
    if (localStorage.getItem("dark-mode") === "true") {
      body.classList.add("dark-mode");
    }
  
    themeSwitch.addEventListener("click", () => {
      const isDarkMode = body.classList.toggle("dark-mode");
      localStorage.setItem("dark-mode", isDarkMode);
    });
  });
  
  

console.log("Modos cargados")
/*===== LOGIN SHOW and HIDDEN =====*/
console.log("Cargando Fondo")

console.log("fondoCargado")


// Espera a que el documento esté listo
console.log("Cargando scroll")
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.hero-section, .about-section, .features-section, .team-section');

  let lastScrollTop = 0; // Variable para almacenar la última posición del scroll

  function checkVisibility() {
    sections.forEach(function(section) {
      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      const isAboveView = rect.bottom < 0;
      const isBelowView = rect.top > window.innerHeight;

      // Si la sección está dentro de la vista, hazla visible
      if (isInView) {
        section.classList.add('visible');
        section.classList.remove('hidden');
      }

      // Si la sección está fuera de la vista (cuando subes o bajas), hazla invisible
      if (isAboveView || isBelowView) {
        section.classList.add('hidden');
      }
    });
  }

  // Detecta el desplazamiento del scroll
  window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Verifica la visibilidad de las secciones
    checkVisibility();

    // Actualiza la posición del scroll
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Llama a la función al cargar la página
  checkVisibility();
});

console.log("Scroll Cargado")


console.log("clima cargando");
window.addEventListener('load', ()=> {
  let lon
  let lat

  let temperaturaValor = document.getElementById('temperatura-valor')  
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion')  
  
  let ubicacion = document.getElementById('ubicacion')  
  let iconoAnimado = document.getElementById('icono-animado') 

  let vientoVelocidad = document.getElementById('viento-velocidad') 


  if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition( posicion => {
         //console.log(posicion.coords.latitude)
         lon = posicion.coords.longitude
         lat = posicion.coords.latitude
          //ubicación actual    
         //const url = `https://api.openweathermap.org/data/3.0/weather?lat=${lat}&lon=${lon}&appid=10b09c14bc0b62c8b063d4bd63a88997`

         //ubicación por ciudad
         const url = `https://api.openweathermap.org/data/2.5/weather?&lang=es&lat=${lat}&lon=${lon}&units=metric&appid=06b0aa497f5d58b03a71b43a81254e44`

         //const url = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&lang=es&units=metric&appid=10b09c14bc0b62c8b063d4bd63a88997`
         fetch(url)
          .then( response => { return response.json()})
          .then( data => {
              console.log(data)
              console.log(url)
              let temp = Math.round(data.main.temp)
              //console.log(temp)
              temperaturaValor.textContent = `${temp} ° C`

              //console.log(data.weather[0].description)
              let desc = data.weather[0].description
              temperaturaDescripcion.textContent = desc.toUpperCase()
              ubicacion.textContent = data.name
              
              
              //para iconos estáticos
              //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
              //icono.src = urlIcon
              //console.log(data.weather[0].icon)

              //para iconos dinámicos
              console.log(data.weather[0].main)
              switch (data.weather[0].main) {
                  case 'Thunderstorm':
                    iconoAnimado.src='./assets/thunder.svg'
                    console.log('TORMENTA');
                    break;
                  case 'Drizzle':
                    iconoAnimado.src='./assets/rainy-2.svg'
                    console.log('LLOVIZNA');
                    break;
                  case 'Rain':
                    iconoAnimado.src='./assets/rainy-7.svg'
                    console.log('LLUVIA');
                    break;
                  case 'Snow':
                    iconoAnimado.src='./assets/snowy-6.svg'
                      console.log('NIEVE');
                    break;                        
                  case 'Clear':
                      iconoAnimado.src='./assets/day.svg'
                      console.log('LIMPIO');
                    break;
                  case 'Atmosphere':
                    iconoAnimado.src='./assets/weather.svg'
                      console.log('ATMOSFERA');
                      break;  
                  case 'Clouds':
                      iconoAnimado.src='./assets/cloudy-day-1.svg'
                      console.log('NUBES');
                      break;  
                  default:
                    iconoAnimado.src='./assets/cloudy-day-1.svg'
                    console.log('por defecto');
                }

          })
          .catch( error => {
              console.log(error)
          })
     })
        
  }
})

console.log("clima cargado")
console.log("hola")
function miFuncion() {
  alert('Función desde mi-script.js');
}

let prevScroll = window.pageYOffset;
window.onscroll = () => {
  let curScroll = window.pageYOffset;
  const headerElement = document.getElementsByClassName("header")[0];
  if (prevScroll > curScroll) {
    headerElement.style.top = "0";
  } else {
    headerElement.style.top = "-25vh";
  }
  prevScroll = curScroll;
};
// script.encabezado.js
// script.encabezado.js

document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.querySelector(".link-col-mobile");
  const closeButton = document.querySelector(".close-button p");
  const mobileOverlay = document.querySelector(".mobile-overlay");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuButton.addEventListener("click", function() {
    mobileOverlay.classList.add("show");
    mobileMenu.classList.add("show");
  });

  closeButton.addEventListener("click", function() {
    mobileOverlay.classList.remove("show");
    mobileMenu.classList.remove("show");
  });

  // Close the menu when clicking outside the menu (on the overlay)
  mobileOverlay.addEventListener("click", function(event) {
    if (event.target === mobileOverlay) {
      mobileOverlay.classList.remove("show");
      mobileMenu.classList.remove("show");
    }
  });
});


