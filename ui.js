// ui.js

/**
 * Renderiza as linhas dos servidores no gráfico de Gantt.
 * Limpa o contentor e cria uma linha (row) para cada servidor alocado.
 * @param {number} totalServers - O número de servidores alocados.
 */
function renderServerLines(totalServers) {
    const ganttChart = document.getElementById('ganttChart');
    if (!ganttChart) return;

    // Limpa o estado vazio
    ganttChart.innerHTML = '';

    for (let i = 0; i < totalServers; i++) {
        const serverRow = document.createElement('div');
        serverRow.classList.add('server-row');
        serverRow.id = `server-${i}`;

        const serverLabel = document.createElement('div');
        serverLabel.classList.add('server-label');
        serverLabel.textContent = `Server ${i + 1}`;

        const serverTimeline = document.createElement('div');
        serverTimeline.classList.add('server-timeline');
        serverTimeline.id = `timeline-${i}`;

        serverRow.appendChild(serverLabel);
        serverRow.appendChild(serverTimeline);
        ganttChart.appendChild(serverRow);
    }
}
