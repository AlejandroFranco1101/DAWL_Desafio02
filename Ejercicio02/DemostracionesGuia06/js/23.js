function moverCajaRelative() {
    const cajaRelative = document.getElementById('caja-relative');

    cajaRelative.style.top = '30px'; // Mueve 30px hacia abajo desde su posición original
    cajaRelative.style.left = '50px'; // Mueve 50px hacia la derecha desde su posición original

    console.log('Caja relativa movida 30px hacia abajo y 50px hacia la derecha.');
}