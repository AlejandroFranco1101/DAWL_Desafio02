
/**
 * Variables para simular las métricas
 */
let uso_memoria_equipo_simulado = 0;
let uso_cpu_simulado = 0;
let velocidad_descarga_simulada_Mbps = 0;
let uso_disco_simulado = 0;

/**
 * Función para simular el uso de CPU, Memoria, Velocidad de Descarga y Disco
 */
function actualizarSimulacion() {
    // Simula el uso de memoria entre 20% y 80%
    uso_memoria_equipo_simulado = Math.round(20 + Math.random() * 60);
    // Simula el uso de CPU entre 20% y 80%
    uso_cpu_simulado = Math.round(20 + Math.random() * 60);
    // Simula la velocidad de descarga en Mbps (ej. entre 5 y 100 Mbps)
    velocidad_descarga_simulada_Mbps = (5 + Math.random() * 95).toFixed(2);
    // Simula el uso de disco entre 15% y 95%
    uso_disco_simulado = Math.round(15 + Math.random() * 80);
}

/**
 * Función para actualizar los elementos del DOM
 */
function actualizarDOM() {
    const memoriaElement = document.getElementById('memoria');
    const cpuElement = document.getElementById('cpu');
    const descargaElement = document.getElementById('descarga');
    const discoElement = document.getElementById('disco');

    if (memoriaElement) {
        memoriaElement.innerHTML = `${uso_memoria_equipo_simulado}<span class="unit">%</span>`;
    }
    if (cpuElement) {
        cpuElement.innerHTML = `${uso_cpu_simulado}<span class="unit">%</span>`;
    }
    if (descargaElement) {
        descargaElement.innerHTML = `${velocidad_descarga_simulada_Mbps}<span class="unit"> Mbps</span>`;
    }
    if (discoElement) {
        discoElement.innerHTML = `${uso_disco_simulado}<span class="unit">%</span>`;
    }
}

// Inicializa y actualiza los datos cada 2 segundos (2000 ms)
document.addEventListener('DOMContentLoaded', () => {
    actualizarSimulacion();
    actualizarDOM();

    setInterval(() => {
        actualizarSimulacion();
        actualizarDOM();
    }, 2000);
});