const cambiarColoresBtn = document.getElementById('cambiarColoresBtn');
const parrafos = document.querySelectorAll('p');

cambiarColoresBtn.addEventListener('click', () => {
    parrafos.forEach(p => {
        p.style.color = 'blue';
    });
});