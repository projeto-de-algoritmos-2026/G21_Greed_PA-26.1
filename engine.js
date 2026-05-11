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

/**
 * Calcula métricas de eficiência da alocação de servidores.
 * Num cenário ingénuo, usaríamos 1 servidor por Job.
 * Com a otimização, usamos o número retornado pelo Interval Partitioning.
 * @param {number} totalJobs - Número total de jobs.
 * @param {number} serversUsed - Número de servidores alocados.
 * @returns {string} - Percentagem de economia de recursos (ex: "75.00").
 */
function calculateEfficiency(totalJobs, serversUsed) {
    if (totalJobs === 0) return "0.00";
    
    // Economia: ((totalJobs - serversUsed) / totalJobs) * 100
    const economy = ((totalJobs - serversUsed) / totalJobs) * 100;
    
    return economy.toFixed(2);
}
