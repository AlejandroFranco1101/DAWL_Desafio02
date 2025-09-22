const cambiarTemaBtn = document.getElementById('cambiarTemaBtn');
const body = document.body;

cambiarTemaBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        cambiarTemaBtn.textContent = 'Cambiar a Claro';
    } else {
        cambiarTemaBtn.textContent = 'Cambiar a Oscuro';
    }
});