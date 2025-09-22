const cuadro = document.getElementById('cuadro');
const colorOriginal = cuadro.style.backgroundColor;

cuadro.addEventListener('mouseover', () => {
    cuadro.style.backgroundColor = 'salmon';
});

cuadro.addEventListener('mouseout', () => {
    cuadro.style.backgroundColor = colorOriginal;
});