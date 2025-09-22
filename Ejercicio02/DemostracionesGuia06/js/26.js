function intentarMoverCajaStatic() {
    const cajaStatic = document.getElementById('caja-static');
    
    // Intenta cambiar la posición, pero no tendrá efecto visual
    cajaStatic.style.position = 'static';
    cajaStatic.style.top = '50px';
    cajaStatic.style.left = '50px';

    console.log('Se intentó mover la caja estática, pero su posición no cambió. ' +
                'Los valores top, left, right y bottom no se aplican a los elementos estáticos.');
    
    alert('La caja no se moverá porque su posición es "static".');
}