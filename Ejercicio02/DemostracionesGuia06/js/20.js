function cambiarPosicion() {
    const miCaja = document.getElementById('miCaja');

    // Cambia la posición a 'absolute' (ya lo es, pero se muestra el ejemplo)
    miCaja.style.position = 'absolute';

    // Mueve la caja a una nueva posición
    miCaja.style.top = '100px';
    miCaja.style.left = '150px';

    // Aumenta el z-index para que esté por encima de otros elementos
    miCaja.style.zIndex = '10';

    // Muestra la nueva configuración en la consola
    console.log('Posición de la caja:', miCaja.style.position);
    console.log('Top:', miCaja.style.top);
    console.log('Left:', miCaja.style.left);
    console.log('Z-index:', miCaja.style.zIndex);
}