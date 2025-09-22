function eliminarRegla() {
    const hojaDeEstilo = document.getElementById('estilos-dinamicos').sheet;
    
    // Eliminamos la primera regla
    if (hojaDeEstilo.cssRules.length > 0) {
        hojaDeEstilo.deleteRule(0);
        console.log('Regla eliminada. Número de reglas:', hojaDeEstilo.cssRules.length);
    }
}