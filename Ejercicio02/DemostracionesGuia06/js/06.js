const textoArea = document.getElementById('textoArea');
const contador = document.getElementById('contador');

textoArea.addEventListener('input', () => {
    contador.textContent = textoArea.value.length;
});