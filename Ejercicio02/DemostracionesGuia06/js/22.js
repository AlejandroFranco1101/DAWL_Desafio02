const miFondo = document.getElementById('miFondo');
let esOscuro = false;
let opacidadBaja = false;

function cambiarFondo() {
    if (esOscuro) {
        miFondo.style.backgroundColor = 'tomato';
        miFondo.style.backgroundImage = 'none'; // Elimina la imagen de fondo
    } else {
        miFondo.style.backgroundColor = 'rebeccapurple';
        miFondo.style.backgroundImage = 'linear-gradient(45deg, #FF6B6B, #FFC94B)';
    }
    esOscuro = !esOscuro;
}

function alternarOpacidad() {
    if (opacidadBaja) {
        miFondo.style.opacity = '1';
    } else {
        miFondo.style.opacity = '0.4';
    }
    opacidadBaja = !opacidadBaja;
}