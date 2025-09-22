function accederAtributos() {
    // La colección styleSheets es un array de hojas de estilo
    const hojasDeEstilo = document.styleSheets;
    
    // Acceder a la primera hoja (en este caso, 'styles.css')
    const hojaExterna = hojasDeEstilo[0];
    
    // Acceder a sus atributos
    console.log('Atributo href:', hojaExterna.href);
    console.log('Atributo media:', hojaExterna.media.mediaText);
    console.log('Atributo type:', hojaExterna.type);
    console.log('¿Está deshabilitada?:', hojaExterna.disabled);
    
    // Puedes habilitar o deshabilitar una hoja de estilo
    hojaExterna.disabled = true; // Deshabilita 'styles.css'
    console.log('Nueva propiedad disabled:', hojaExterna.disabled);
}