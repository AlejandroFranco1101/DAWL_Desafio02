const cambiarColorBtn = document.getElementById('cambiarColorBtn');
const cuadro = document.getElementById('cuadro');

cambiarColorBtn.addEventListener('click', () => {
    const colores = ['red', 'green', 'blue', 'yellow', 'purple'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    cuadro.style.backgroundColor = colorAleatorio;
});