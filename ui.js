let currentJobs = [];

function renderServerLines(totalServers) {
    const ganttChart = document.getElementById('ganttChart');
    if (!ganttChart) return;

    ganttChart.innerHTML = '';

    for (let i = 0; i < totalServers; i++) {
        const serverRow = document.createElement('div');
        serverRow.classList.add('server-row');
        serverRow.id = `server-${i}`;

        const serverLabel = document.createElement('div');
        serverLabel.classList.add('server-label');
        serverLabel.textContent = `Servidor ${i + 1}`;

        const serverTimeline = document.createElement('div');
        serverTimeline.classList.add('server-timeline');
        serverTimeline.id = `timeline-${i}`;

        serverRow.appendChild(serverLabel);
        serverRow.appendChild(serverTimeline);
        ganttChart.appendChild(serverRow);
    }
}

function renderJobs(jobs) {
    const MIN_TIME = 480;
    const TOTAL_TIME = 600;

    jobs.forEach(job => {
        if (job.resourceId === null) return;

        const timeline = document.getElementById(`timeline-${job.resourceId}`);
        if (!timeline) return;

        const jobBlock = document.createElement('div');
        jobBlock.classList.add('job-block');
        
        const duration = job.endTime - job.startTime;
        const leftPercent = ((job.startTime - MIN_TIME) / TOTAL_TIME) * 100;
        const widthPercent = (duration / TOTAL_TIME) * 100;

        jobBlock.style.left = `${leftPercent}%`;
        jobBlock.style.width = `${widthPercent}%`;
        jobBlock.textContent = job.id;
        jobBlock.setAttribute('data-details', `Início: ${formatTime(job.startTime)} | Fim: ${formatTime(job.endTime)}`);

        timeline.appendChild(jobBlock);
    });
}

function updateMetrics(totalJobs, serversUsed) {
    const metricsContainer = document.getElementById('metricsContainer');
    const serverMetric = metricsContainer.querySelector('.metric:nth-child(1) .metric-value');
    const jobMetric = metricsContainer.querySelector('.metric:nth-child(2) .metric-value');
    serverMetric.textContent = serversUsed;
    jobMetric.textContent = totalJobs;
}

function updateChart() {
    const assignedJobs = intervalPartitioning(currentJobs);
    const totalServers = Math.max(...assignedJobs.map(j => j.resourceId)) + 1;
    renderServerLines(totalServers);
    renderJobs(assignedJobs);
    updateMetrics(assignedJobs.length, totalServers);
}

function init() {
    currentJobs = generateRandomJobs(10);
    updateChart();
}

document.getElementById('jobForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('jobName').value;
    const startStr = document.getElementById('startTime').value;
    const endStr = document.getElementById('endTime').value;
    
    const start = parseTimeToMinutes(startStr);
    const end = parseTimeToMinutes(endStr);
    
    if (end <= start) {
        alert('O tempo de fim deve ser após o tempo de início');
        return;
    }
    const newJob = new Job(name, start, end);
    currentJobs.push(newJob);
    updateChart();
    this.reset();
});

document.getElementById('randomizeBtn').addEventListener('click', function() {
    currentJobs = generateRandomJobs(20);
    updateChart();
});

window.addEventListener('load', init);
