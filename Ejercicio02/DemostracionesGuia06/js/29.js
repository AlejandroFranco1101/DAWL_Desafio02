function toggleClase() {
    const tarjeta = document.getElementById('tarjeta');
    
    // El método toggle() agrega la clase si no existe, y la quita si ya existe.
    tarjeta.classList.toggle('resaltado');
    
    // También se podría hacer así con add() y remove():
    // if (tarjeta.classList.contains('resaltado')) {
    //     tarjeta.classList.remove('resaltado');
    // } else {
    //     tarjeta.classList.add('resaltado');
    // }

    console.log('El estado de la clase "resaltado" ha sido alternado.');
}