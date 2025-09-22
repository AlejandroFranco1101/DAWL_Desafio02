const moverIzquierdaBtn = document.getElementById('moverIzquierda');
const moverDerechaBtn = document.getElementById('moverDerecha');
const cuadro = document.getElementById('cuadro');

moverIzquierdaBtn.addEventListener('click', () => {
    let posicion = parseInt(window.getComputedStyle(cuadro).left);
    cuadro.style.left = (posicion - 10) + 'px';
});

moverDerechaBtn.addEventListener('click', () => {
    let posicion = parseInt(window.getComputedStyle(cuadro).left);
    cuadro.style.left = (posicion + 10) + 'px';
});