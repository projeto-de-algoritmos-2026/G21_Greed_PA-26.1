// ui.js

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
        serverLabel.textContent = `Server ${i + 1}`;

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
