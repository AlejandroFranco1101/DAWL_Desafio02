function agregarClase() {
    const caja = document.getElementById('caja');
    
    // Se agrega ' resaltado' al final de las clases existentes
    caja.className += ' resaltado';
    
    console.log('El nuevo className es:', caja.className);
}