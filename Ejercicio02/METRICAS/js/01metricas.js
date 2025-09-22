const chartOptions = {
    type: 'line',
    options: {
        responsive: true,
        animation: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
};

function createChart(ctx) {
    return new Chart(ctx, {
        ...chartOptions,
        data: {
            labels: Array(20).fill(""),
            datasets: [{
                data: Array(20).fill(0),
                borderColor: getComputedStyle(document.body).getPropertyValue('--accent').trim(),
                borderWidth: 2,
                fill: false
            }]
        }
    });
}

const cpuChart = createChart(document.getElementById('cpuChart').getContext('2d'));
const memChart = createChart(document.getElementById('memChart').getContext('2d'));
const diskChart = createChart(document.getElementById('diskChart').getContext('2d'));
const netChart = createChart(document.getElementById('netChart').getContext('2d'));
const storageChart = new Chart(document.getElementById('storageChart').getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['Usado', 'Libre'],
        datasets: [{
            data: [0, 100],
            backgroundColor: [
                getComputedStyle(document.body).getPropertyValue('--secondary').trim(),
                getComputedStyle(document.body).getPropertyValue('--accent').trim()
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: { position: 'bottom' }
        }
    }
});

function updateChart(chart, value) {
    chart.data.datasets[0].data.push(value);
    chart.data.datasets[0].data.shift();
    chart.update();
}

function getRandom(min, max) {
    return +(Math.random() * (max - min) + min).toFixed(2);
}

const procesosSimulados = [
    'chrome.exe', 'explorer.exe', 'svchost.exe', 'notepad.exe',
    'node.exe', 'code.exe', 'powershell.exe', 'teams.exe',
    'discord.exe', 'python.exe'
];

let ultimaMetrica = {};

function actualizarSimulacion() {
    const usoCPU = Math.round(getRandom(20, 90));
    const usoMemoria = Math.round(getRandom(30, 95));
    const usoDisco = Math.round(getRandom(10, 80));
    const velocidadRed = getRandom(1, 100);
    const temperaturaCPU = Math.round(getRandom(45, 85));
    const almacenamientoUsado = Math.round(getRandom(50, 480));
    const almacenamientoLibre = 500 - almacenamientoUsado;

    document.getElementById('cpu-value').textContent = `${usoCPU}%`;
    document.getElementById('memoria-value').textContent = `${usoMemoria}%`;
    document.getElementById('disco-value').textContent = `${usoDisco}%`;
    document.getElementById('descarga-value').textContent = `${velocidadRed} Mbps`;
    document.getElementById('temperatura-value').textContent = `${temperaturaCPU} °C`;
    document.getElementById('almacenamiento-value').textContent = `${almacenamientoUsado} GB usados`;

    updateChart(cpuChart, usoCPU);
    updateChart(memChart, usoMemoria);
    updateChart(diskChart, usoDisco);
    updateChart(netChart, velocidadRed);

    storageChart.data.datasets[0].data = [almacenamientoUsado, almacenamientoLibre];
    storageChart.update();

    const listaProcesos = document.getElementById('procesos-lista');
    listaProcesos.innerHTML = '';
    const procesosEnEjecucion = procesosSimulados
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.floor(getRandom(4, 8)));

    procesosEnEjecucion.forEach(proc => {
        const li = document.createElement('li');
        li.textContent = `${proc}  PID: ${Math.floor(getRandom(1000, 9999))}`;
        listaProcesos.appendChild(li);
    });

    ultimaMetrica = {
        cpu: usoCPU,
        memoria: usoMemoria,
        disco: usoDisco,
        red: velocidadRed,
        temperatura: temperaturaCPU,
        almacenamientoUsado,
        almacenamientoLibre
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
        ['Red', `${ultimaMetrica.red} Mbps`],
        ['Temperatura', `${ultimaMetrica.temperatura} °C`],
        ['Almacenamiento Usado', `${ultimaMetrica.almacenamientoUsado} GB`],
        ['Almacenamiento Libre', `${ultimaMetrica.almacenamientoLibre} GB`],
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

setInterval(actualizarSimulacion, 2000);