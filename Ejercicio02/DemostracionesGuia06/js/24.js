function moverCajaAbsolute() {
    const cajaAbsolute = document.getElementById('caja-absolute');
    
    // Posiciona la caja en la esquina inferior derecha del contenedor padre
    cajaAbsolute.style.bottom = '10px';
    cajaAbsolute.style.right = '10px';
    
    console.log('Caja absoluta movida a la esquina inferior derecha del padre.');
}