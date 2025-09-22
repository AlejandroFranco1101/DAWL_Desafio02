const procesosSimulados = [
    "chrome.exe", "explorer.exe", "System", "svchost.exe",
    "notepad.exe", "cmd.exe", "taskmgr.exe", "python.exe",
    "node.exe", "obs64.exe", "code.exe", "spotify.exe"
];

let cpuChart, memChart, diskChart, netChart, storageChart;
let ultimaMetrica = {};
let uptimeStart = Date.now();

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function updateChart(chart, value) {
    chart.data.labels.push('');
    chart.data.datasets[0].data.push(value);

    if (chart.data.labels.length > 20) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }

    chart.update();
}

function formatoTiempo(ms) {
    const total = Math.floor(ms / 1000);
    const h = Math.floor(total / 3600).toString().padStart(2, '0');
    const m = Math.floor((total % 3600) / 60).toString().padStart(2, '0');
    const s = (total % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function crearGrafico(id, label, color) {
    return new Chart(document.getElementById(id), {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label,
                data: [],
                borderColor: color,
                borderWidth: 2,
                fill: false,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    min: 0,
                    max: 100
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function crearGraficoTorta(id, usados, libres) {
    return new Chart(document.getElementById(id), {
        type: 'doughnut',
        data: {
            labels: ['Usado', 'Libre'],
            datasets: [{
                data: [usados, libres],
                backgroundColor: ['#00ffff', '#8a2be2'],
                borderColor: ['#ffffff', '#ffffff'],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: getComputedStyle(document.body).getPropertyValue('--text-color')
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cpuChart = crearGrafico("cpuChart", "CPU", "#00ffff");
    memChart = crearGrafico("memChart", "Memoria", "#8a2be2");
    diskChart = crearGrafico("diskChart", "Disco", "#1400f0ff");
    netChart = crearGrafico("netChart", "Red", "#aa2828ff");
    storageChart = crearGraficoTorta("storageChart", 200, 300);
    actualizarSimulacion();
    setInterval(actualizarSimulacion, 2000);
});

function actualizarSimulacion() {
    const usoCPU = Math.round(getRandom(15, 95));
    const usoMemoria = Math.round(getRandom(30, 95));
    const usoDisco = Math.round(getRandom(10, 80));
    const velocidadRed = getRandom(1, 100).toFixed(2);
    const subidaRed = getRandom(0.5, 50).toFixed(2);
    const temperaturaCPU = Math.round(getRandom(45, 85));
    const almacenamientoUsado = Math.round(getRandom(100, 480));
    const almacenamientoLibre = 500 - almacenamientoUsado;
    const memTotal = 8;
    const memUsado = parseFloat((usoMemoria / 100 * memTotal).toFixed(1));
    const memDisponible = parseFloat((memTotal - memUsado).toFixed(1));
    const lectura = getRandom(10, 150).toFixed(1);
    const escritura = getRandom(5, 100).toFixed(1);
    const gpuUso = Math.round(getRandom(10, 90));

    document.getElementById('cpu-value').textContent = `${usoCPU}%`;
    document.getElementById('cpu-uso').textContent = `${usoCPU}%`;
    document.getElementById('cpu-cores').textContent = Math.floor(getRandom(2, 8));
    document.getElementById('cpu-speed').textContent = `${getRandom(2.5, 4.5).toFixed(2)} GHz`;
    document.getElementById('cpu-processes').textContent = Math.floor(getRandom(5, 25));
    document.getElementById('cpu-uptime').textContent = formatoTiempo(Date.now() - uptimeStart);
    document.getElementById('cpu-info').textContent = "Intel Core i7";

    document.getElementById('memoria-value').textContent = `${usoMemoria}%`;
    document.getElementById('mem-uso').textContent = `${usoMemoria}%`;
    document.getElementById('mem-speed').textContent = `${getRandom(1600, 2400).toFixed(0)} MHz`;
    document.getElementById('mem-total').textContent = `${memTotal} GB`;
    document.getElementById('mem-usado').textContent = `${memUsado} GB`;
    document.getElementById('mem-disponible').textContent = `${memDisponible} GB`;
    document.getElementById('mem-info').textContent = "8 GB DDR4";

    document.getElementById('disco-value').textContent = `${usoDisco}%`;
    document.getElementById('disco-uso').textContent = `${usoDisco}%`;
    document.getElementById('disco-lectura').textContent = `${lectura} MB/s`;
    document.getElementById('disco-escritura').textContent = `${escritura} MB/s`;
    document.getElementById('disco-uptime').textContent = formatoTiempo(Date.now() - uptimeStart);
    document.getElementById('disco-respuesta').textContent = `${getRandom(5, 50).toFixed(2)} ms`;
    document.getElementById('disco-info').textContent = "SSD 500 GB";

    document.getElementById('ethernet-value').textContent = `${velocidadRed} Mbps`;
    document.getElementById('ethernet-uso').textContent = `${velocidadRed} Mbps`;
    document.getElementById('ethernet-subida').textContent = `${subidaRed} Mbps`;
    document.getElementById('ethernet-bajada').textContent = `${velocidadRed} Mbps`;
    document.getElementById('ethernet-info').textContent = "Ethernet 1 Gbps";
    document.getElementById('ipv4').textContent = "192.168.1.1";
    document.getElementById('ipv6').textContent = "fe80::d4a8:6435:2d20:ff2f";

    document.getElementById('almacenamiento-value').textContent = `${almacenamientoUsado} GB usados`;
    document.getElementById('temperatura-value').textContent = `${temperaturaCPU} °C`;
    document.getElementById('uptime-value').textContent = formatoTiempo(Date.now() - uptimeStart);
    document.getElementById('gpu-value').textContent = `${gpuUso}%`;

    updateChart(cpuChart, usoCPU);
    updateChart(memChart, usoMemoria);
    updateChart(diskChart, usoDisco);
    updateChart(netChart, velocidadRed);

    storageChart.data.datasets[0].data = [almacenamientoUsado, almacenamientoLibre];
    storageChart.update();

    const listaProcesos = document.getElementById('procesos-lista');
    listaProcesos.innerHTML = '';
    const procesos = procesosSimulados.sort(() => Math.random() - 0.5).slice(0, 6);

    procesos.forEach(proc => {
        const li = document.createElement('li');
        li.textContent = `${proc} - PID: ${Math.floor(getRandom(1000, 9999))}`;
        listaProcesos.appendChild(li);
    });

    ultimaMetrica = {
        cpu: usoCPU,
        memoria: usoMemoria,
        disco: usoDisco,
        red: velocidadRed,
        subida: subidaRed,
        temperatura: temperaturaCPU,
        almacenamientoUsado,
        almacenamientoLibre,
        gpu: gpuUso
    };
}

document.querySelectorAll('.tab-button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const tab = btn.dataset.tab;
        document.querySelectorAll('.tab-content').forEach(section => {
            section.classList.toggle('active', section.id === tab);
        });
    });
});

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light');
});

document.getElementById('exportarDatos').addEventListener('click', () => {
    const csv = [
        ['Métrica', 'Valor'],
        ['CPU', `${ultimaMetrica.cpu}%`],
        ['Memoria', `${ultimaMetrica.memoria}%`],
        ['Disco', `${ultimaMetrica.disco}%`],
        ['Red Descarga', `${ultimaMetrica.red} Mbps`],
        ['Red Subida', `${ultimaMetrica.subida} Mbps`],
        ['Temperatura', `${ultimaMetrica.temperatura} °C`],
        ['Almacenamiento Usado', `${ultimaMetrica.almacenamientoUsado} GB`],
        ['Almacenamiento Libre', `${ultimaMetrica.almacenamientoLibre} GB`],
        ['GPU', `${ultimaMetrica.gpu}%`],
    ];

    const contenido = csv.map(fila => fila.join(',')).join('\n');
    const blob = new Blob([contenido], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'metricas_sistema.csv';
    a.click();
    URL.revokeObjectURL(url);
});