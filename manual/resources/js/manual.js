// aqui hacemo lo e togles
function toggleDiv(id) {
    // Ocultar todos los divs primero
    var secciones = document.querySelectorAll('.manual_guia');
    secciones.forEach(function(seccion) {
        seccion.classList.remove('visible');
        seccion.classList.add('oculto');
    });

    // Mostrar el div correspondiente
    var div = document.getElementById(id);
    div.classList.toggle('visible');
    div.classList.toggle('oculto');
}


document.addEventListener('DOMContentLoaded', function () {
    var enlaces = document.querySelectorAll('.navegacion a');

    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('click', function (e) {
            // Comprobar si el enlace apunta a una sección en la misma página
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                var destino = this.getAttribute('href');
                document.querySelector(destino).scrollIntoView({
                    behavior: 'smooth'
                });
            } 
        });
    }
});