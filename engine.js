// engine.js

/**
 * Representa um Batch Job.
 */
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
