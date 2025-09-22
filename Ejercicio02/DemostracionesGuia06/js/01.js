const alternarVisibilidadBtn = document.getElementById('alternarVisibilidadBtn');
const parrafo = document.getElementById('parrafo');

alternarVisibilidadBtn.addEventListener('click', () => {
    if (parrafo.style.display === 'none') {
        parrafo.style.display = 'block';
    } else {
        parrafo.style.display = 'none';
    }
});