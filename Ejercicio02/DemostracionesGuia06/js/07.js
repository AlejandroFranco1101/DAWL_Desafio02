
// Obtenemos el botón del HTML por su ID
const cambiarColorBtn = document.getElementById('cambiarColorBtn');

// Escuchamos el evento de 'click' en el botón
cambiarColorBtn.addEventListener('click', () => {
    // Obtenemos el cuerpo del documento
    const cuerpo = document.body;

    // Creamos un color aleatorio
    const colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Cambiamos el color de fondo del cuerpo de la página
    cuerpo.style.backgroundColor = colorAleatorio;
});