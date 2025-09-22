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

function updateChart(chart, value) {
    chart.data.datasets[0].data.push(value);
    chart.data.datasets[0].data.shift();
    chart.update();
}

function getRandom(min, max) {
    return +(Math.random() * (max - min) + min).toFixed(2);
}

function actualizarSimulacion() {
    const usoCPU = Math.round(getRandom(20, 90));
    const usoMemoria = Math.round(getRandom(30, 95));
    const usoDisco = Math.round(getRandom(10, 80));
    const velocidadRed = getRandom(1, 100);

    document.getElementById('cpu-value').textContent = `${usoCPU}%`;
    document.getElementById('memoria-value').textContent = `${usoMemoria}%`;
    document.getElementById('disco-value').textContent = `${usoDisco}%`;
    document.getElementById('descarga-value').textContent = `${velocidadRed} Mbps`;

    updateChart(cpuChart, usoCPU);
    updateChart(memChart, usoMemoria);
    updateChart(diskChart, usoDisco);
    updateChart(netChart, velocidadRed);
}

// Tabs
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

// Tema
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light');
});

// Simulación continua
setInterval(actualizarSimulacion, 2000);