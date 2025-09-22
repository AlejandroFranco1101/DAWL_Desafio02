const listaItems = document.getElementById('listaItems');

listaItems.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const items = listaItems.querySelectorAll('li');
        items.forEach(item => {
            item.classList.remove('resaltado');
        });
        e.target.classList.add('resaltado');
    }
});