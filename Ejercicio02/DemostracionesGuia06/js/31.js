function accederAtributos() {
    const hojasDeEstilo = document.styleSheets;
    const hojaInterna = hojasDeEstilo[1]; // Accede a la hoja <style> interna

    console.log('\n--- Reglas de Estilo ---');
    console.log('Número de reglas iniciales:', hojaInterna.cssRules.length);

    // Sintaxis de insertRule(regla, indice)
    // El índice 0 inserta la regla al principio de la hoja de estilo
    hojaInterna.insertRule('.nueva-caja { background-color: darkgreen; color: white; padding: 10px; }', 0);
    
    console.log('Número de reglas después de insertar:', hojaInterna.cssRules.length);
    console.log('Regla insertada:', hojaInterna.cssRules[0].cssText);
}