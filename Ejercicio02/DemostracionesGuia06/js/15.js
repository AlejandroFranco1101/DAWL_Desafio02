const crearElementoBtn = document.getElementById('crearElementoBtn');
const contenedor = document.getElementById('contenedor');

crearElementoBtn.addEventListener('click', () => {
    const nuevoCuadro = document.createElement('div');
    nuevoCuadro.textContent = 'Nuevo';
    nuevoCuadro.style.width = '80px';
    nuevoCuadro.style.height = '80px';
    nuevoCuadro.style.backgroundColor = 'lightcoral';
    nuevoCuadro.style.display = 'flex';
    nuevoCuadro.style.justifyContent = 'center';
    nuevoCuadro.style.alignItems = 'center';
    contenedor.appendChild(nuevoCuadro);
});