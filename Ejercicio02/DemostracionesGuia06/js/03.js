const alternarClaseBtn = document.getElementById('alternarClaseBtn');
const cuadro = document.getElementById('cuadro');

alternarClaseBtn.addEventListener('click', () => {
    cuadro.classList.toggle('resaltado');
});