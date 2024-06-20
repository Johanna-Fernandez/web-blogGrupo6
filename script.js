
// FECHA Y HORA EN VIVO 
function updateClock() {
    const now = new Date();
    
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const dayName = days[now.getDay()];
    const day = String(now.getDate()).padStart(2, '0');
    const month = months[now.getMonth()];
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const date = `${dayName} ${day} de ${month}`;
    const time = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('date').innerText = date;
    document.getElementById('time').innerText = time;
}


setInterval(updateClock, 1000);
updateClock();





// CAMBIO DE IMAGEN
function cambiarImagen(nuevaImagen) {
    document.getElementById('imagen').src = nuevaImagen;
}


// EFECTO DE CAMBIO DE FOTO LENTO.
function cambiarImagen(nuevaImagen) {
    var imagen = document.getElementById('imagen');
    imagen.style.opacity = '0';
    
    setTimeout(function() {
        imagen.src = nuevaImagen;
        imagen.style.opacity = '1';
    }, 200);
}



