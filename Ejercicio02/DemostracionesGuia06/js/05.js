const formulario = document.getElementById('formulario');
const campoTexto = document.getElementById('campoTexto');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campoTexto.value.trim() === '') {
        campoTexto.classList.add('invalido');
        campoTexto.classList.remove('valido');
    } else {
        campoTexto.classList.add('valido');
        campoTexto.classList.remove('invalido');
    }
});