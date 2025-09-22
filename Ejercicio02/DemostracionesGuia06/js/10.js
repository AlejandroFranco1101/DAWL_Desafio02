const filtroInput = document.getElementById('filtroInput');
const lista = document.getElementById('lista');

filtroInput.addEventListener('input', () => {
    const filtro = filtroInput.value.toLowerCase();
    const items = lista.querySelectorAll('li');

    items.forEach(item => {
        const texto = item.textContent.toLowerCase();
        if (texto.includes(filtro)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});