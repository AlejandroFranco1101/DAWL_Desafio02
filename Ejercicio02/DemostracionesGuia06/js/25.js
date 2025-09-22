function posicionarCajaFixed() {
    const cajaFixed = document.getElementById('caja-fixed');
    
    // Cambia la posición fija a la esquina superior izquierda
    cajaFixed.style.top = '10px';
    cajaFixed.style.left = '10px';
    cajaFixed.style.bottom = 'auto'; // Elimina la posición inferior
    cajaFixed.style.right = 'auto'; // Elimina la posición derecha

    console.log('Caja fija movida a la esquina superior izquierda.');
}