const togglePanelBtn = document.getElementById('togglePanelBtn');
const panelLateral = document.getElementById('panelLateral');

togglePanelBtn.addEventListener('click', () => {
    panelLateral.classList.toggle('abierto');
});