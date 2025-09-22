const toggleOpacidadBtn = document.getElementById('toggleOpacidadBtn');
const cuadro = document.getElementById('cuadro');
let opacidadCompleta = true;

toggleOpacidadBtn.addEventListener('click', () => {
    if (opacidadCompleta) {
        cuadro.style.opacity = 0.3;
    } else {
        cuadro.style.opacity = 1;
    }
    opacidadCompleta = !opacidadCompleta;
});