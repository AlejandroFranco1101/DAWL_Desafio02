const aumentarBtn = document.getElementById('aumentarBtn');
const disminuirBtn = document.getElementById('disminuirBtn');
const texto = document.getElementById('texto');

aumentarBtn.addEventListener('click', () => {
    let tamanoActual = parseInt(window.getComputedStyle(texto).fontSize);
    texto.style.fontSize = (tamanoActual + 2) + 'px';
});

disminuirBtn.addEventListener('click', () => {
    let tamanoActual = parseInt(window.getComputedStyle(texto).fontSize);
    texto.style.fontSize = (tamanoActual - 2) + 'px';
});