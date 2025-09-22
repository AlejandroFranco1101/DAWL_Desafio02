const miCuadrado = document.getElementById('miCuadrado');
let esGrande = false;

function cambiarTamanio() {
    if (esGrande) {
        miCuadrado.style.width = '100px';
        miCuadrado.style.height = '100px';
    } else {
        miCuadrado.style.width = '200px';
        miCuadrado.style.height = '200px';
    }
    esGrande = !esGrande; // Invierte el estado
}

function alternarVisibilidad() {
    // Usamos el método `classList` que es la mejor práctica
    miCuadrado.classList.toggle('oculto');
}