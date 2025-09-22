const imagenes = document.querySelectorAll('.imagen-carrusel');
const anteriorBtn = document.getElementById('anteriorBtn');
const siguienteBtn = document.getElementById('siguienteBtn');
let indiceActual = 0;

siguienteBtn.addEventListener('click', () => {
    imagenes[indiceActual].classList.remove('activo');
    indiceActual = (indiceActual + 1) % imagenes.length;
    imagenes[indiceActual].classList.add('activo');
});

anteriorBtn.addEventListener('click', () => {
    imagenes[indiceActual].classList.remove('activo');
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    imagenes[indiceActual].classList.add('activo');
});