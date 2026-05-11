class Job {
    constructor(id, startTime, endTime) {
        this.id = id;
        this.startTime = startTime;
        this.endTime = endTime;
        this.resourceId = null;
    }
}

function sortJobsByStartTime(jobs) {
    return jobs.sort((a, b) => a.startTime - b.startTime);
}

function intervalPartitioning(jobs) {
    if (!jobs || jobs.length === 0) return [];

    const sortedJobs = sortJobsByStartTime([...jobs]);

    const serversEndTimes = [];

    sortedJobs.forEach(job => {
        let assigned = false;

        for (let i = 0; i < serversEndTimes.length; i++) {
            if (serversEndTimes[i] <= job.startTime) {
                job.resourceId = i;
                serversEndTimes[i] = job.endTime;
                assigned = true;
                break;
            }
        }

        if (!assigned) {
            job.resourceId = serversEndTimes.length;
            serversEndTimes.push(job.endTime);
        }
    });

    return sortedJobs;
}

function calculateEfficiency(totalJobs, serversUsed) {
    if (totalJobs === 0) return "0.00";

    // Economia: ((totalJobs - serversUsed) / totalJobs) * 100
    const economy = ((totalJobs - serversUsed) / totalJobs) * 100;

    return economy.toFixed(2);
}

function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

function parseTimeToMinutes(timeStr) {
    if (typeof timeStr === 'number') {
        return timeStr * 60;
    }
    const parts = timeStr.split(':');
    const hours = parseInt(parts[0]) || 0;
    const mins = parseInt(parts[1]) || 0;
    return hours * 60 + mins;
}
