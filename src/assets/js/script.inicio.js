console.log("iniciocargado");

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
  
  