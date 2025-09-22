const iniciarBtn = document.getElementById('iniciarBtn');
const barraProgreso = document.getElementById('barra-progreso');

iniciarBtn.addEventListener('click', () => {
    let ancho = 0;
    const intervalo = setInterval(() => {
        if (ancho >= 100) {
            clearInterval(intervalo);
        } else {
            ancho += 10;
            barraProgreso.style.width = ancho + '%';
        }
    }, 200);
});