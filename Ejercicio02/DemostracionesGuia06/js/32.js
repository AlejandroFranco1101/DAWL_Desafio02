function manipularRegla() {
    const hojaDeEstilo = document.getElementById('estilos-dinamicos').sheet;

    // Accedemos a la primera regla de la hoja de estilo
    const regla = hojaDeEstilo.cssRules[0];
    
    if (regla) {
        // Accedemos a la propiedad style de la regla y la modificamos
        regla.style.color = 'red';
        regla.style.fontSize = '24px';
        regla.style.fontWeight = 'bold';
        
        console.log('Regla modificada:', regla.cssText);
    }
}