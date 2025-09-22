function cambiarClase() {
    const titulo = document.getElementById('titulo');
    
    // La clase 'texto-principal' se eliminará y se reemplazará por 'texto-alternativo'
    titulo.className = 'texto-alternativo';
    
    console.log('El nuevo className es:', titulo.className);
}