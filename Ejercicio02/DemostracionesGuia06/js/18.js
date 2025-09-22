const menuContenedor = document.querySelector('.menu-contenedor');
const menuDesplegable = document.getElementById('menu-desplegable');

// Al pasar el mouse por el contenedor, mostramos el menú
menuContenedor.addEventListener('mouseenter', () => {
    menuDesplegable.style.maxHeight = '200px'; // Un valor grande para que se muestre todo el contenido
});

// Al quitar el mouse, ocultamos el menú
menuContenedor.addEventListener('mouseleave', () => {
    menuDesplegable.style.maxHeight = '0';
});