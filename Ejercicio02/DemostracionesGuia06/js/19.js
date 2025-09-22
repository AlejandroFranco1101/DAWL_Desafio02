const nuevoItemInput = document.getElementById('nuevoItemInput');
const agregarBtn = document.getElementById('agregarBtn');
const listaCompras = document.getElementById('listaCompras');

// Función para crear un nuevo item de la lista
function crearNuevoItem() {
    const texto = nuevoItemInput.value.trim();

    if (texto !== '') {
        // Crear el nuevo elemento <li>
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = texto;

        // Crear el botón de eliminar
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'X';
        eliminarBtn.classList.add('eliminar-btn');

        // Agregar el botón al nuevo <li>
        nuevoLi.appendChild(eliminarBtn);

        // Agregar el <li> a la lista
        listaCompras.appendChild(nuevoLi);

        // Limpiar el input
        nuevoItemInput.value = '';
    }
}

// Escuchar el clic en el botón de agregar
agregarBtn.addEventListener('click', crearNuevoItem);

// Escuchar la tecla 'Enter' en el campo de input
nuevoItemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        crearNuevoItem();
    }
});

// Escuchar el clic en el botón de eliminar de toda la lista
listaCompras.addEventListener('click', (e) => {
    // Si el elemento clicado tiene la clase 'eliminar-btn'
    if (e.target.classList.contains('eliminar-btn')) {
        // Eliminamos su elemento padre (el <li>)
        e.target.parentElement.remove();
    }
});